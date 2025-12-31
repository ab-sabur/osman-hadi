import os
import pickle
import time
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


def process_video_to_drive(url, title, folder_id=None):
    """
    ম্যানুয়ালি ডাউনলোড করা ফাইল টাইটেল দিয়ে খুঁজে বের করে ড্রাইভে আপলোড করবে।
    """
    try:
        # ১. টাইটেলের প্রথম ৩টি শব্দ নেওয়া
        words = title.split()
        search_query = " ".join(words[:4]).lower()
        print(f"সার্চ করা হচ্ছে: '{search_query}' সংবলিত ফাইল...")

        final_filename = None

        # ২. বর্তমান ডিরেক্টরিতে ফাইল খোঁজা
        for file in os.listdir("."):
            # শুধুমাত্র ভিডিও ফাইল চেক করা (mp4, mkv, webm) এবং নাম মেলানো
            if file.lower().endswith((".mp4", ".mkv", ".webm")):
                if search_query in file.lower():
                    final_filename = file
                    break

        if not final_filename:
            return ""

        print(f"ফাইল খুঁজে পাওয়া গেছে: {final_filename}")

        # ৩. গুগল ড্রাইভ আপলোড
        service = get_gdrive_service()

        file_metadata = {
            "name": final_filename,  # লোকাল ফাইলের নামেই ড্রাইভে সেভ হবে
            "parents": [folder_id] if folder_id else [],
        }

        print(f"গুগল ড্রাইভে আপলোড শুরু হচ্ছে...")
        media = MediaFileUpload(final_filename, resumable=True)
        file = (
            service.files()
            .create(body=file_metadata, media_body=media, fields="id, webViewLink")
            .execute()
        )

        drive_url = file.get("webViewLink")
        print(f"সফলভাবে আপলোড হয়েছে! লিঙ্ক: {drive_url}")

        return drive_url

    except Exception as e:
        print(f"Error: {str(e)}")
        return {"error": str(e)}
