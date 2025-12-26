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
import {
  AlertTriangle,
  MonitorPlay,
  Play,
  RefreshCcw,
  SearchX,
} from "lucide-react";
import Link from "next/link";
import SearchField from "@/components/common/SearchVideo";
import { peoplesLove } from "../../../public/videos/peoplesLove";
import { songs } from "../../../public/videos/song";
import { electionCampaign } from "../../../public/videos/electionCampaign";
import Pagination from "@/components/common/Pagination";

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

const VideoVaultPage = async ({ searchParams }) => {
  const resolvedParams = await searchParams;
  const activeTab = resolvedParams.category || "All";
  const searchQuery = resolvedParams.search || "";

  const currentCategory =
    videoCategories.find((v) => v.id === activeTab) || videoCategories[0];

  const filteredVideos = currentCategory.videos
    .sort((a, b) => b?.yt_metadata?.view_count - a?.yt_metadata?.view_count)
    .filter((video) => {
      const matchesSearch = video.source_title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesSearch;
    });

  const ITEMS_PER_PAGE = 12;
  const currentPage = Number(resolvedParams.page) || 1;

  const totalPages = Math.ceil(filteredVideos.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const filteredVideosWithPagination = filteredVideos.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section id="vault" className="py-32 text-white bg-[#050000]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col justify-between items-end gap-10">
          <div className="space-y-4 w-full">
            <h3 className="text-red-600 font-black uppercase flex items-center gap-2">
              <Play size={16} fill="currentColor" /> Cinematic Vault
            </h3>
            <h2 className="text-xl md:text-3xl font-black">
              ভিডিও আর্কাইভ (YouTube Collection)
            </h2>
            <p className="text-zinc-500 max-w-xl text-lg">
              ওসমান হাদীর আন্দোলন, বক্তব্য এবং ব্যক্তিগত জীবনের দুর্লভ ভিডিও
              ক্লিপগুলোর বিশাল সংগ্রহ।
            </p>
          </div>

          {/* Navigation Bar: Buttons replaced with Links */}
          <div className="flex flex-wrap gap-2 bg-zinc-950 p-2 rounded-2xl border border-white/10">
            {videoCategories.map((cat) => (
              <Link
                key={cat.id}
                scroll={false} // Prevents jumping to top when switching tabs
                href={`?category=${cat.id}`}
                className={`px-6 flex-auto text-center border border-white/10 hover:border-red-700/20 py-3 rounded-xl text-xs font-black transition-all uppercase tracking-widest ${
                  activeTab === cat.id
                    ? "bg-red-700 text-white shadow-lg"
                    : "text-zinc-500 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="my-8 flex flex-col md:flex-row gap-4 w-full items-stretch">
          {/* Left: Total Vault Badge */}
          <div className="group flex flex-1 md:flex-initial md:w-1/3 items-center gap-4 bg-zinc-950 border border-white/5 px-6 py-4 rounded-2xl hover:border-red-600/30 transition-all shadow-xl">
            <div className="p-2 bg-zinc-900 rounded-xl group-hover:bg-red-700 transition-colors">
              <MonitorPlay
                size={16}
                className="text-zinc-500 group-hover:text-white"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-0.5">
                Database
              </p>
              <p className="text-xs font-black uppercase tracking-widest text-zinc-400">
                Vault:{" "}
                <span className="text-white ml-1 tabular-nums">
                  {filteredVideos.length}
                </span>
              </p>
            </div>
          </div>

          {/* Right: Search Field */}
          <SearchField />
        </div>

        {filteredVideosWithPagination.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideosWithPagination.map((video) => (
              <Link
                key={video.source_title}
                href={`/videos/${encodeURIComponent(video?.source_title)}`}
                className="group relative bg-zinc-950 border border-white/5 rounded-3xl overflow-hidden hover:border-red-600/50 transition-all shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={getThumbnailSrc(video)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                    alt={video.source_title}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-all">
                      <Play fill="white" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase text-red-600 tracking-widest">
                      {video.category}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase">
                      {video.date}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold leading-tight line-clamp-2 group-hover:text-red-500 transition-colors">
                    {video.source_title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* --- UNIQUE NOT FOUND VIEW --- */
          <div className="relative py-24 px-6 mt-10 rounded-[3rem] border border-dashed border-zinc-800 bg-zinc-950/30 flex flex-col items-center text-center overflow-hidden">
            {/* Viewfinder Corners */}
            <div className="absolute top-10 left-10 w-8 h-8 border-t-2 border-l-2 border-zinc-800" />
            <div className="absolute top-10 right-10 w-8 h-8 border-t-2 border-r-2 border-zinc-800" />
            <div className="absolute bottom-10 left-10 w-8 h-8 border-b-2 border-l-2 border-zinc-800" />
            <div className="absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2 border-zinc-800" />

            <div className="relative">
              <SearchX
                size={80}
                className="text-zinc-800 mb-6"
                strokeWidth={1}
              />
              <div className="absolute -top-2 -right-2">
                <div className="w-4 h-4 bg-red-600 rounded-full animate-pulse flex items-center justify-center">
                  <AlertTriangle size={8} className="text-white" />
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">
              No Matches Found
            </h3>
            <p className="text-zinc-500 max-w-sm mx-auto text-sm leading-relaxed mb-10">
              The archive could not locate any files matching{" "}
              <span className="text-red-600 font-bold">"{searchQuery}"</span> in
              the{" "}
              <span className="text-white font-bold">
                {currentCategory.label}
              </span>{" "}
              index.
            </p>

            <Link
              href="?"
              className="flex items-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-red-700 text-xs font-black uppercase tracking-widest rounded-2xl transition-all border border-white/5"
            >
              <RefreshCcw size={14} /> Reset Filters
            </Link>

            {/* Background scan lines effect */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
          </div>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        baseUrl="/videos"
      />
    </section>
  );
};

export default VideoVaultPage;

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
