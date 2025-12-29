import { getYouTubeID } from "./ytId";

export const getThumbnailSrc = (video) => {
  // 1. Check for YouTube Sources
  const ytUrl = video.yt_source_url || video.yt_personal_url;

  if (video?.fetched_metadata?.thumbnail_url) {
    return video.fetched_metadata.thumbnail_url;
  }

  if (ytUrl) {
    const ytId = getYouTubeID(ytUrl);
    return `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`;
  }

  // 2. Check for Google Drive Source
  if (video.drive_url) {
    // This assumes drive_url is just the ID.
    // If it's a full link, you'll need to extract the ID first.
    const driveId = video.drive_url.includes("id=")
      ? new URLSearchParams(new URL(video.drive_url).search).get("id")
      : video.drive_url.split("/d/")[1]?.split("/")[0] || video.drive_url;

    return `https://drive.google.com/thumbnail?id=${driveId}&sz=w1280`;
  }

  // 3. Fallback image if nothing is found
  return "/static/osman.webp";
};
