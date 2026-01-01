import React from "react";
import {
  Youtube,
  Facebook,
  HardDrive,
  Shield,
  ExternalLink,
  Download,
  Home,
  FacebookIcon,
} from "lucide-react";
import { getYouTubeID } from "@/utils/ytId";
import Link from "next/link";
import { videoCategories } from "@/data/videos";
import BackSection from "../common/BackSection";
import { formatDuration, formatUploadDate } from "../VideosPage";
import ShareSection from "../common/ShareSection";
import { getThumbnailSrc } from "@/utils/getThumbnail";

const VideoPlayerPage = async ({ params, searchParams }) => {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const videoTitle = decodeURIComponent(resolvedParams?.video);

  const allVideos =
    videoCategories.find((item) => item.id == "All")?.videos || [];
  const video = allVideos.find((item) => item.source_title === videoTitle);

  if (!video) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white p-6 text-center">
        <h1 className="text-xl font-black uppercase tracking-widest">
          Video not found
        </h1>
      </div>
    );
  }

  const sources = [
    {
      id: "youtube_original",
      label: "YouTube (Source)",
      icon: <Youtube size={14} />,
      url: video.yt_source_url,
    },
    {
      id: "youtube_personal",
      label: "Youtube (Backup)",
      icon: <Shield size={14} />,
      url: video.yt_personal_url,
    },
    {
      id: "drive",
      label: "GDrive (Backup)",
      icon: <HardDrive size={14} />,
      url: video.drive_url,
    },
    {
      id: "facebook_orginal",
      label: "Facebook (Source)",
      icon: <Facebook size={14} />,
      url: video.fb_url,
    },
  ];

  const activeSource =
    resolvedSearchParams?.source || sources.find((item) => item.url)?.id;

  const getEmbedUrl = (sourceId) => {
    switch (sourceId) {
      case "youtube_original":
        return `https://www.youtube.com/embed/${getYouTubeID(
          video?.yt_source_url
        )}?rel=0&autoplay=1`;
      case "youtube_personal":
        return `https://www.youtube.com/embed/${getYouTubeID(
          video?.yt_personal_url
        )}?rel=0&autoplay=1`;
      case "facebook_orginal":
        return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
          video?.fb_url
        )}&show_text=0&autoplay=true`;
      case "drive":
        if (!video?.drive_url) return "";
        const driveId = video.drive_url.match(/[-\w]{25,}/);
        return driveId
          ? `https://drive.google.com/file/d/${driveId[0]}/preview`
          : video.drive_url;
      default:
        return "";
    }
  };

  const isFacebook = activeSource === "facebook_orginal";
  const isDrive = activeSource === "drive";

  const meta = video?.fetched_metadata;
  const aspect = meta?.width / meta?.height;

  return (
    <div className="min-h-screen bg-[#050000] text-white font-sans">
      <main className="pt-24 md:pt-28 pb-20 px-6 max-w-[1400px] mx-auto">
        <BackSection
          links={[
            { path: "/", text: "", icon: <Home size={15} /> },
            { path: "/videos", text: "Videos" },
          ]}
          current={videoTitle}
        />

        <div className="flex flex-col gap-6 md:gap-8">
          {/* SOURCE SWITCHER */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
            {sources.map((src) => {
              if (!src.url) return null;
              const isActive = activeSource === src.id;
              return (
                <Link
                  key={src.id}
                  scroll={false}
                  href={`?source=${src.id}`}
                  className={`flex items-center justify-center gap-2 p-4 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${
                    isActive
                      ? "bg-red-700 border-red-600 text-white"
                      : "bg-zinc-950 border-white/10 text-zinc-400 hover:text-white"
                  }`}
                >
                  {src.icon}
                  {src.label}
                </Link>
              );
            })}
          </div>

          {/* VIDEO PLAYER */}
          <div className="relative w-full bg-black rounded-xl border border-white/10 overflow-hidden">
            {isDrive && (
              <GetDriveDownloadLink driveUrl={getEmbedUrl(activeSource)} />
            )}

            {isFacebook ? (
              <>
                {/* 🔥 PERFECT FACEBOOK PLAYER */}
                <div className="relative flex justify-center items-center w-full max-h-[85vh] overflow-hidden">
                  <div
                    className="relative"
                    style={{
                      height: "85vh",
                      width: `calc(85vh * ${aspect})`,
                      maxWidth: "100%",
                    }}
                  >
                    <iframe
                      src={getEmbedUrl(activeSource)}
                      className="absolute inset-0 w-full h-full border-0"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>

                <Link
                  target="_blank"
                  href={video.fb_url}
                  className="absolute right-4 top-4 z-10"
                >
                  <div className="flex items-center gap-2 bg-red-900/30 px-3 py-1 rounded-full">
                    <span className="text-xs font-black uppercase text-red-400">
                      Open in FB
                    </span>
                    <FacebookIcon size={10} />
                  </div>
                </Link>
              </>
            ) : (
              /* OTHER PLAYERS UNCHANGED */
              <div className="relative aspect-video">
                <iframe
                  src={getEmbedUrl(activeSource)}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            )}
          </div>
          {/* ASYMMETRICAL GRID: Info takes more space, Share takes less */}
          <div className="flex flex-col lg:flex-row gap-6 mt-12 items-stretch">
            {/* COLUMN 1: VIDEO INFO (The dominant side) */}
            <div className="lg:w-[65%] bg-zinc-950/50 border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-xl relative overflow-hidden group">
              {/* Subtle Red Glow behind the title */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-red-900/5 blur-[100px] pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-red-700 rounded-full animate-pulse" />
                    <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.3em]">
                      {video.category}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="block text-white text-[10px] font-black tracking-widest uppercase opacity-80">
                      {formatDuration(video?.fetched_metadata?.duration)}
                    </span>
                    <span className="block text-xs text-zinc-400 font-bold uppercase mt-1">
                      {formatUploadDate(video?.fetched_metadata?.upload_date)}
                    </span>
                  </div>
                </div>

                <h2 className="text-2xl md:text-4xl font-black leading-tight tracking-tighter text-zinc-100 group-hover:text-white transition-colors">
                  {video.source_title}
                </h2>

                <div className="h-px w-32 bg-red-900/50" />

                <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed max-w-2xl">
                  শহীদ শরীফ ওসমান বিন হাদি আর্কাইভ। এই ভিডিওটি ইনসাফ কায়েমের
                  লড়াইয়ের একটি অমর দলিল। হাদী ভাইয়ের প্রতিটি কথা আমাদের
                  পথপ্রদর্শক।
                </p>
              </div>
            </div>

            {/* COLUMN 2: SHARE CARD (The compact side) */}
            <div className="lg:w-[35%] bg-zinc-900/20 h-fit border border-white/10 rounded-[2rem] p-8 flex flex-col justify-start">
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-300">
                    Spread the Legacy
                  </p>
                  <p className="text-zinc-400 text-xs leading-relaxed mt-2">
                    হাদী ভাইয়ের এই স্মৃতিটি পৌঁছে দিন সবার মাঝে। নিচের যেকোনো
                    মাধ্যমে শেয়ার করুন।
                  </p>
                </div>
              </div>

              {/* ShareSection Component */}
              <ShareSection
                title={video.source_title}
                url={`https://sharifosmanhadi.info/videos/${encodeURIComponent(
                  videoTitle
                )}`}
                thumbnail={getThumbnailSrc(video)}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoPlayerPage;

/* -------------------- DRIVE DOWNLOAD -------------------- */

const GetDriveDownloadLink = ({ driveUrl }) => {
  const regex = /\/d\/([^/]+)/;
  const match = driveUrl.match(regex);
  const fileId = match?.[1];
  const downloadUrl = fileId
    ? `https://drive.google.com/uc?export=download&id=${fileId}`
    : driveUrl;

  return (
    <Link
      href={downloadUrl}
      target="_blank"
      className="absolute right-4 top-4 z-40 p-3 bg-black/60 rounded-full"
    >
      <Download size={18} />
    </Link>
  );
};
