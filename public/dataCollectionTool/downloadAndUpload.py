import yt_dlp
import os
import pickle
import time
import uuid
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

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


def process_video_to_drive(url, folder_id=None):
    unique_id = uuid.uuid4().hex
    temp_download_name = f"video_{unique_id}"

    ydl_opts = {
        # 'best' নিশ্চিত করে যে অডিও এবং ভিডিও একসাথে আছে এমন ফাইল নামানো হবে যদি FFmpeg না থাকে
        "format": "bestvideo[ext=mp4][height<=1080]+bestaudio[ext=m4a]/best[ext=mp4]/best",
        "merge_output_format": "mp4",
        "outtmpl": f"{temp_download_name}.%(ext)s",
        "quiet": False,
        "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        # আপনার যদি FFmpeg নির্দিষ্ট কোনো ফোল্ডারে থাকে তবে নিচের লাইনটি আনকমেন্ট করে পাথ দিন
        # "ffmpeg_location": r"C:\ffmpeg\bin",
    }

    final_filename = None

    try:
        # 1. DOWNLOAD
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            print(f"মেটাডেটা সংগ্রহ ও ডাউনলোড শুরু হচ্ছে: {url}")
            info = ydl.extract_info(url, download=True)

            # yt-dlp থেকে আসল আউটপুট ফাইল পাথ নেওয়া
            downloaded_path = ydl.prepare_filename(info)

            # এক্সটেনশন চেক করা (mp4 এ মার্জ হয়েছে কি না)
            base, _ = os.path.splitext(downloaded_path)
            potential_mp4 = f"{base}.mp4"

            if os.path.exists(potential_mp4):
                final_filename = potential_mp4
            else:
                final_filename = downloaded_path

        if not final_filename or not os.path.exists(final_filename):
            return {"error": "ফাইলটি ডাউনলোড হয়নি বা খুঁজে পাওয়া যাচ্ছে না।"}

        print(f"ডাউনলোড সম্পন্ন: {final_filename}")

        # ২. ফাইল রিলিজ হওয়ার জন্য সামান্য বিরতি (WinError 32 এড়াতে)
        time.sleep(3)

        # ৩. UPLOAD
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

        link = file.get("webViewLink")
        print(f"সাফল্যের সাথে সম্পন্ন হয়েছে! লিঙ্ক: {link}")

        # ৪. CLEANUP (WinError 32 হ্যান্ডেল করে)
        try:
            # ডাউনলোড ফোল্ডারে ওই আইডি দিয়ে যত ফাইল আছে সব মুছে ফেলবে
            for f in os.listdir("."):
                if f.startswith(temp_download_name):
                    os.remove(f)
            print("লোকাল ফাইল ক্লিনআপ সম্পন্ন।")
        except Exception as cleanup_error:
            print(f"ক্লিনআপ ওয়ার্নিং: {cleanup_error}")

        return link

    except Exception as e:
        # ক্লিনিং যদি আটকে যায় তবে এরর মেসেজ পাঠানো
        return {"error": f"সমস্যা: {str(e)}"}
