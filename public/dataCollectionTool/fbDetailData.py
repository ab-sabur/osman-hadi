import yt_dlp
import json
import pyperclip
from downloadAndUpload import process_video_to_drive


def get_video_metadata(url):
    if not url:
        return None

    ydl_opts = {
        "quiet": True,
        "skip_download": True,
        "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    }

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(url, download=False)

            # Get dimensions
            width = info.get("width")
            height = info.get("height")

            # Simple Aspect Ratio Calculation
            aspect_ratio = None
            if width and height:
                aspect_ratio = width / height

            return {
                "title": info.get("title"),
                "duration": info.get("duration_string"),
                "width": width,
                "height": height,
                "aspect_ratio": round(aspect_ratio, 2) if aspect_ratio else None,
                "uploader": info.get("uploader") or info.get("uploader_id"),
                "thumbnail_url": info.get("thumbnail"),
                "upload_date": info.get("upload_date"),
                "view_count": info.get("view_count"),
            }
    except Exception as e:
        return {"error": f"Error fetching {url}: {str(e)}"}


def run_file(file_name):

    with open(file_name, "r", encoding="utf-8") as f:
        interviews = json.load(f)

    updated_interviews = []

    print("ডেটা সংগ্রহের কাজ শুরু হচ্ছে...")

    for item in interviews:
        # যদি ইউটিউব ইউআরএল থাকে তবে সেটি ব্যবহার করবে, নাহলে ফেসবুক ইউআরএল দেখবে
        target_url = item.get("yt_source_url") or item.get("fb_url")
        metadata = item.get("fetched_metadata", {})

        if target_url:
            if not metadata:
                metadata = get_video_metadata(target_url)
            new_item = {**item}
            drive_url = item.get("drive_url")
            if not drive_url:
                drive_url = process_video_to_drive(target_url)
            new_item["fetched_metadata"] = metadata
            new_item["drive_url"] = drive_url
            updated_interviews.append(new_item)
        else:
            updated_interviews.append(item)

    print("\nসব ডেটা সংগ্রহ সম্পন্ন হয়েছে!")
    try:
        with open(file_name, "w", encoding="utf-8") as f:
            json.dump(updated_interviews, f, indent=2, ensure_ascii=False)

        print(f"সব ডেটা সংগ্রহ সম্পন্ন হয়েছে এবং '{file_name}' ফাইলে সেভ করা হয়েছে!")
    except Exception as e:
        print(f"ফাইল সেভ করতে সমস্যা হয়েছে: {e}")


filepaths = [
    "../videos/activities.json",
    # "../videos/biography.json",
    # "../videos/discussion.json",
    # "../videos/electionCampaign.json",
    "../videos/interviews.json",
    # "../videos/justice.json",
    # "../videos/lectures.json",
    # "../videos/peoplesLove.json",
    "../videos/poetry.json",
    "../videos/pressConference.json",
    "../videos/protests.json",
    # "../videos/song.json",
    "../videos/speeches.json",
    "../videos/talkshow.json",
]

for filepath in filepaths:
    run_file(filepath)
    print(f"\n\n {filepath} ফাইলের কাজ শেষ হয়েছে। \n\n")
