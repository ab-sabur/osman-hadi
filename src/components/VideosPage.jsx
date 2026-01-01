import React from "react";
import {
  AlertTriangle,
  Home,
  MonitorPlay,
  Play,
  RefreshCcw,
  SearchX,
} from "lucide-react";
import Link from "next/link";
import SearchField from "@/components/common/SearchVideo";

import Pagination from "@/components/common/Pagination";
import VideoCategoryFilter from "@/components/common/VideoCategoryFilter";
import BackSection from "./common/BackSection";
import { getThumbnailSrc } from "@/utils/getThumbnail";
import { videoCategories } from "@/data/videos";
import { durationToSeconds } from "@/utils/durationConvert";

const VideosPage = ({ resolvedParams }) => {
  const activeTab = resolvedParams.get("category") || "All";
  const searchQuery = resolvedParams.get("search") || "";
  const sortBy = resolvedParams.get("sort") || "";

  const currentCategory =
    videoCategories.find((v) => v.id === activeTab) || videoCategories[0];

  const filteredVideos = currentCategory.videos
    .filter((video) =>
      video.source_title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const metaA = a?.fetched_metadata;
      const metaB = b?.fetched_metadata;

      switch (sortBy) {
        case "views":
          return (metaB?.view_count || 0) - (metaA?.view_count || 0);

        case "duration":
          return (
            durationToSeconds(metaB?.duration) -
            durationToSeconds(metaA?.duration)
          );

        case "oldest":
          return (metaA?.upload_date || "") > (metaB?.upload_date || "")
            ? 1
            : -1;

        case "newest":
          return (metaA?.upload_date || "") > (metaB?.upload_date || "")
            ? -1
            : 1;
        default:
          return (metaB?.view_count || 0) - (metaA?.view_count || 0);
      }
    });

  const ITEMS_PER_PAGE = 12;
  const currentPage = Number(resolvedParams.get("page")) || 1;

  const totalPages = Math.ceil(filteredVideos.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const filteredVideosWithPagination = filteredVideos.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section id="vault" className="py-32 text-white bg-[#050000]">
      <div className="max-w-[1400px] mx-auto px-6">
        <BackSection
          links={[{ path: "/", text: "", icon: <Home size={15} /> }]}
          current={`Videos`}
        />
        <div className="flex flex-col justify-between items-end gap-0">
          <div className="space-y-4 w-full">
            <h1 className="text-xl md:text-3xl font-black tracking-tighter">
              শহীদ ওসমান হাদি: ভিডিও মেমোরিয়াল আর্কাইভ <br />
              <span
                className="text-zinc-800"
                style={{ WebkitTextStroke: "1px #3f3f46" }}
              >
                Video Memorial Archive
              </span>
            </h1>
            <p className="hidden md:block text-zinc-500 max-w-xl text-lg mb-3">
              জুলাই বিপ্লবের বীর সেনানী ও ইনকিলাব মঞ্চের মুখপাত্র শহীদ ওসমান
              হাদির আন্দোলন, ঐতিহাসিক বক্তব্য এবং স্মৃতিবিজড়িত জীবনের দুর্লভ
              ভিডিও সংগ্রহশালা।
            </p>
          </div>
          <VideoCategoryFilter
            activeTab={activeTab}
            videoCategories={videoCategories}
          />
        </div>

        <div className="my-2 mb-6 lg:my-8 flex flex-col md:flex-row gap-2 w-full items-stretch">
          {/* Left: Total Vault Badge */}
          <SearchField />

          {/* Right: Search Field */}
          <div className="group flex flex-1 md:flex-initial md:w-1/3 items-center gap-4 bg-zinc-950 border border-white/10 px-6 py-2 rounded-2xl hover:border-red-600/30 transition-all shadow-xl">
            <div className="p-2 bg-zinc-900 rounded-xl group-hover:bg-red-700 transition-colors">
              <MonitorPlay
                size={16}
                className="text-zinc-500 group-hover:text-white"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-xs font-black uppercase tracking-widest text-zinc-400">
                Total Video:{" "}
                <span className="text-white ml-1 tabular-nums">
                  {filteredVideos.length}
                </span>
              </p>
            </div>
          </div>
        </div>

        {filteredVideosWithPagination.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideosWithPagination.map((video) => (
              <Link
                key={video.source_title}
                href={`/videos/${encodeURIComponent(video?.source_title)}`}
                className="group relative bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden hover:border-red-600/50 transition-all shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  <div className="relative w-full h-full overflow-hidden bg-black group">
                    {/* The Background (Always Cover, blurs on hover) */}
                    <img
                      src={getThumbnailSrc(video)}
                      referrerPolicy="no-referrer"
                      alt={video.source_title}
                      className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-40 blur-sm group-hover:blur-md transition-all duration-500"
                    />

                    {/* The Foreground (Hidden Cover, becomes Contain on hover) */}
                    <img
                      src={getThumbnailSrc(video)}
                      referrerPolicy="no-referrer"
                      alt={video.source_title}
                      className="relative w-full h-full object-contain transition-all duration-300 scale-0 scale-100"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-all">
                      <Play fill="white" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase">
                    {formatDuration(video?.fetched_metadata?.duration)}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase text-red-600 tracking-widest">
                      {video.category}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase">
                      {formatUploadDate(video?.fetched_metadata?.upload_date)}
                    </span>
                  </div>
                  <p className="text-xl font-bold leading-tight line-clamp-2 group-hover:text-red-500 transition-colors">
                    {video.source_title}
                  </p>
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

            <p className="text-2xl font-black uppercase tracking-tighter mb-2">
              No Matches Found
            </p>
            <p className="text-zinc-500 max-w-sm mx-auto text-sm leading-relaxed mb-10">
              The archive could not locate any files matching{" "}
              <span className="text-red-600 font-bold">
                &quot;{searchQuery}&quot;
              </span>{" "}
              in the{" "}
              <span className="text-white font-bold">
                {currentCategory.label}
              </span>{" "}
              index.
            </p>

            <Link
              href="?"
              className="flex items-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-red-700 text-xs font-black uppercase tracking-widest rounded-2xl transition-all border border-white/10"
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

export default VideosPage;

export function formatDuration(duration) {
  if (!duration) return "0 sec";

  const parts = duration.split(":");

  // ১. যদি শুধু সেকেন্ড থাকে (যেমন: "45")
  if (parts.length === 1) {
    return `${parts[0]} sec`;
  }

  // ২. যদি মিনিট এবং সেকেন্ড থাকে (যেমন: "4:00")
  else if (parts.length === 2) {
    const mins = parseInt(parts[0], 10);
    const secs = parseInt(parts[1], 10);

    if (mins === 0) return `${secs} sec`; // যদি "0:45" হয়
    return `${mins} min ${secs > 0 ? secs + " sec" : ""}`;
  }

  // ৩. যদি ঘণ্টা, মিনিট এবং সেকেন্ড থাকে (যেমন: "1:20:15")
  else if (parts.length === 3) {
    const hrs = parseInt(parts[0], 10);
    const mins = parseInt(parts[1], 10);
    return `${hrs} hr ${mins > 0 ? mins + " min" : ""}`;
  }

  return duration;
}

export function formatUploadDate(dateStr) {
  if (!dateStr || dateStr.length !== 8) return dateStr;

  const year = dateStr.substring(0, 4);
  const month = dateStr.substring(4, 6);
  const day = dateStr.substring(6, 8);

  // মাসগুলোর নাম সেট করা
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthName = monthNames[parseInt(month, 10) - 1];

  return `${monthName} ${parseInt(day, 10)}, ${year}`;
}
