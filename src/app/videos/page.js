import React from "react";
import { talkshow } from "../../../public/videos/talkshow";
import { interview } from "../../../public/videos/interviews";
import { rajpoth } from "../../../public/videos/protests";
import { lecture } from "../../../public/videos/lectures";
import { kobita } from "../../../public/videos/poetry";
import { discussion } from "../../../public/videos/discussion";
import { biography } from "../../../public/videos/biography";
import { speeches } from "../../../public/videos/speeches";
import { activities } from "../../../public/videos/activities";
import { pressConference } from "../../../public/videos/pressConference";
import { getYouTubeID } from "@/utils/ytId";
import { peoplesLove } from "../../../public/videos/peoplesLove";
import { songs } from "../../../public/videos/song";
import { electionCampaign } from "../../../public/videos/electionCampaign";
import VideosPage from "@/components/VideosPage";

export const dynamic = "force-static";

export async function generateMetadata() {
  const canonicalUrl = `https://osman-hadi.vercel.app/videos/}`;
  return {
    title: "ওসমান হাদীর ভিডিও সমূহ",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// main component
const page = async ({ searchParams }) => {
  const resolvedParams = await searchParams;
  return <VideosPage resolvedParams={resolvedParams} />;
};

export default page;

export const getThumbnailSrc = (video) => {
  // 1. Check for YouTube Sources
  const ytUrl = video.yt_source_url || video.yt_personal_url;

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

export const videoCategories = [
  {
    id: "All",
    label: "সবগুলো (All)",
    videos: [
      ...talkshow,
      ...interview,
      ...rajpoth,
      ...lecture,
      ...kobita,
      ...discussion,
      ...biography,
      ...speeches,
      ...pressConference,
      ...activities,
      ...peoplesLove,
      ...songs,
      ...electionCampaign,
    ],
  },
  { id: "Speeches", label: "ভাষণ (Speeches)", videos: speeches },
  { id: "Protests", label: "রাজপথের আন্দোলন (Protests)", videos: rajpoth },
  { id: "Interviews", label: "সাক্ষাৎকার (Interviews)", videos: interview },
  { id: "Poetry", label: "আবৃত্তি (Recitation)", videos: kobita },
  { id: "TalkShow", label: "টক শো (Talk Show)", videos: talkshow },
  { id: "Biography", label: "জীবনী (Biography)", videos: biography },
  { id: "Lecture", label: "শিক্ষা ও লেকচার (Lecture)", videos: lecture },
  {
    id: "Activities",
    label: "সাংস্কৃতিক কার্যক্রম (Activities)",
    videos: activities,
  },
  { id: "Discussion", label: "মুক্ত আলোচনা (Discussion)", videos: discussion },
  {
    id: "PressConference",
    label: "সংবাদ সম্মেলন (Press Conference)",
    videos: pressConference,
  },
  {
    id: "peoplesLove",
    label: "জনগণের ভালোবাসা (People's Love)",
    videos: peoplesLove,
  },
  {
    id: "song",
    label: "সঙ্গীত (Songs)",
    videos: songs,
  },
  {
    id: "procharona",
    label: "নির্বাচনী প্রচারণা (Campaign)",
    videos: electionCampaign,
  },
];
