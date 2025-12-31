import yt_dlp
import os
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
import pickle
import time
import uuid

# --- GOOGLE DRIVE AUTH SETUP ---
SCOPES = ["https://www.googleapis.com/auth/drive.file"]


def get_gdrive_service():
    creds = None
    if os.path.exists("token.pickle"):
        with open("token.pickle", "rb") as token:
            creds = pickle.load(token)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file("credentials.json", SCOPES)
            creds = flow.run_local_server(port=0)
        with open("token.pickle", "wb") as token:
            pickle.dump(creds, token)
    return build("drive", "v3", credentials=creds)


# --- THE MAIN DOWNLOAD & UPLOAD FUNCTION ---
def process_video_to_drive(url, folder_id=None):
    unique_id = uuid.uuid4().hex
    temp_download_name = f"video_{unique_id}"

    ydl_opts = {
        # 'best' format ensures a single file if ffmpeg is missing,
        # but merge_output ensures mp4 if ffmpeg exists.
        "format": "bestvideo[height<=1080]+bestaudio/best/best",
        "merge_output_format": "mp4",
        "outtmpl": f"{temp_download_name}.%(ext)s",
        "quiet": False,
        # Adding User-Agent to prevent 403 errors
        "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        # "cookiefile": "cookies.txt", # Uncomment this if you still get 403 error
    }

    try:
        # 1. DOWNLOAD
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            print(f"মেটাডেটা সংগ্রহ ও ডাউনলোড শুরু হচ্ছে: {url}")
            info = ydl.extract_info(url, download=True)

            # Get the exact filename yt-dlp created
            downloaded_file = ydl.prepare_filename(info)

            # In case of merging, the extension might change to .mp4
            # even if prepare_filename says .mkv or .webm
            base, _ = os.path.splitext(downloaded_file)
            final_filename = f"{base}.mp4"

            # Check if the .mp4 version exists, otherwise use the direct filename
            if not os.path.exists(final_filename):
                if os.path.exists(downloaded_file):
                    final_filename = downloaded_file
                else:
                    # Search for any file starting with our unique_id in case of mismatch
                    files = [
                        f for f in os.listdir(".") if f.startswith(temp_download_name)
                    ]
                    if files:
                        final_filename = files[0]
                    else:
                        return {"error": "ডাউনলোড ফাইলটি খুঁজে পাওয়া যায়নি।"}

        # 2. WAIT FOR FILE RELEASE
        print(f"ফাইল নিশ্চিত করা হয়েছে: {final_filename}")
        time.sleep(2)

        # 3. UPLOAD
        service = get_gdrive_service()
        video_title = info.get("title", "Uploaded_Video")

        file_metadata = {
            "name": f"{video_title}.mp4",
            "parents": [folder_id] if folder_id else [],
        }

        print("গুগল ড্রাইভে আপলোড শুরু হচ্ছে...")
        media = MediaFileUpload(final_filename, mimetype="video/mp4", resumable=True)
        file = (
            service.files()
            .create(body=file_metadata, media_body=media, fields="id, webViewLink")
            .execute()
        )

        # 4. CLEANUP (Optional: delete local file after upload)
        if os.path.exists(final_filename):
            os.remove(final_filename)
            print("লোকাল ফাইল মুছে ফেলা হয়েছে।")

        print("সাফল্যের সাথে সম্পন্ন হয়েছে!")
        return file.get("webViewLink")

    except Exception as e:
        print(f"Error occurred: {str(e)}")
        return {"error": str(e)}
