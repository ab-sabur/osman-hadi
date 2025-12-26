import yt_dlp
import json

# আপনার দেওয়া ইন্টারভিউ ডেটা
interviews = [

  {
    "category": "Interview",
    "yt_personal_url": "",
    "fb_url": "https://www.facebook.com/reel/2400017240436767",
    "drive_url":
      "https://drive.google.com/file/d/1Mz0aryzTXpzolSfcVEON5Rwfisv5LZFA/view?usp=drive_link",
    "source_title": "The Journey Towards Our Dream❤️",
    "yt_source_url": "",
  },
  {
    "category": "Interview",
    "yt_personal_url": "",
    "fb_url": "",
    "drive_url": "",
    "source_title":
      "জুলাইয়ের স্মৃতিচারণ করতে গিয়ে কাঁদলেন ইনকিলাব মঞ্চের ওসমান হাদি",
    "yt_source_url": "https://www.youtube.com/watch?v=OHrnAAgIw6g",
  },
]

def get_video_metadata(url):
    if not url:
        return None
    
    ydl_opts = {
        'quiet': True,
        'skip_download': True,
    }
    
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(url, download=False)
            return {
                "title": info.get('title'),
                "duration": info.get('duration_string'),
                "upload_date": info.get('upload_date'),
                "view_count": info.get('view_count'),
                "channel": info.get('uploader')
            }
    except Exception as e:
        return {"error": str(e)}

# নতুন ডেটা লিস্ট যেখানে মেটাডেটা থাকবে
updated_interviews = []

print("ডেটা সংগ্রহের কাজ শুরু হচ্ছে...")

for item in interviews:
    url = item.get('yt_source_url')
    
    metadata = get_video_metadata(url)
    
    # মূল ডেটার সাথে ইউটিউব থেকে পাওয়া মেটাডেটা মার্জ করা হচ্ছে
    new_item = {**item}
    if metadata:
        new_item['yt_metadata'] = metadata
        
    updated_interviews.append(new_item)

# ফলাফলটি একটি JSON ফাইলে সেভ করা বা প্রিন্ট করা
print("\nসব ডেটা সংগ্রহ সম্পন্ন হয়েছে!")
print(json.dumps(updated_interviews, indent=2, ensure_ascii=False))