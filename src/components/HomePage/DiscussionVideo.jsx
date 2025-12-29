import React from "react";
import { SectionHeader } from "./Home";
import Link from "next/link";
import discussion from "../../../public/videos/discussion.json";
import { getYouTubeID } from "@/utils/ytId";
import { Play } from "lucide-react";

const DiscussionVideo = () => {
  return (
    <section className="max-w-[1400px] mx-auto py-12 md:py-20 px-6 bg-black">
      <div className="mx-auto">
        <SectionHeader
          number="01"
          title="রণাঙ্গনের কন্ঠস্বর"
          sub="Frontline Battles"
        />

        {/* Grid: Stacks on mobile, 2 columns on Large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mt-10 md:mt-16">
          {/* Main Featured Video */}
          
          <FeaturedVideo
            title={discussion?.length && discussion[0].source_title}
            url={discussion?.length && discussion[0].yt_source_url}
          />

          {/* Sidebar Videos */}
          <div className="flex flex-col gap-4 md:gap-6">
            <CompactVideo
              title={discussion?.length && discussion[1].source_title}
              url={discussion?.length && discussion[1].yt_source_url}
            />
            <CompactVideo
              title={discussion?.length && discussion[2].source_title}
              url={discussion?.length && discussion[2].yt_source_url}
            />
            <CompactVideo
              title={discussion?.length && discussion[3].source_title}
              url={discussion?.length && discussion[3].yt_source_url}
            />

            {/* View All Button */}
            <Link
              href={`/videos?category=Discussion`}
              className="w-full mt-2 p-5 border border-red-900/50 text-red-600 font-black hover:bg-red-700 hover:text-white transition-all uppercase tracking-[0.3em] text-[10px] md:text-xs rounded-2xl active:scale-95 flex items-center justify-center text-center"
            >
              View Battlefield Archive
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscussionVideo;

export const FeaturedVideo = ({ title, url }) => (
  <Link
    href={`/videos/${encodeURIComponent(title)}`}
    className="relative group cursor-pointer overflow-hidden rounded-[2rem] md:rounded-[3.5rem] bg-zinc-950 border border-white/10 hover:border-red-600 transition-all shadow-2xl flex flex-col"
  >
    <div className="aspect-video relative overflow-hidden">
      <img
        src={`https://i.ytimg.com/vi/${getYouTubeID(url)}/hqdefault.jpg`}
        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
        alt={title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />

      {/* Responsive Play Button Size */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 bg-red-700 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(185,28,28,0.5)] scale-90 group-hover:scale-100 transition-all duration-500">
        <Play fill="white" className="w-6 h-6 md:w-8 md:h-8" />
      </div>
    </div>

    <div className="p-8 md:p-12">
      <h3 className="text-xl md:text-3xl font-black mb-4 leading-tight group-hover:text-red-500 transition-colors line-clamp-2 md:line-clamp-none">
        {title}
      </h3>
    </div>
  </Link>
);

export const CompactVideo = ({ title, url }) => (
  <Link
    href={`/videos/${encodeURIComponent(title)}`}
    className="flex gap-4 md:gap-6 items-center p-4 md:p-6 bg-zinc-950 border border-white/10 rounded-2xl md:rounded-3xl hover:bg-red-950/20 hover:border-red-900/50 transition-all duration-300 group cursor-pointer shadow-xl"
  >
    {/* Thumbnail: Scales down on mobile */}
    <div className="w-24 h-16 md:w-32 md:h-20 bg-black rounded-lg md:rounded-2xl overflow-hidden shrink-0 border border-white/10">
      <img
        src={`https://i.ytimg.com/vi/${getYouTubeID(url)}/hqdefault.jpg`}
        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
        alt="thumbnail"
      />
    </div>

    <div className="flex-1 min-w-0">
      {" "}
      {/* min-w-0 is vital for line-clamp to work in flex */}
      <h5 className="font-black text-sm md:text-lg leading-tight line-clamp-2 group-hover:text-white transition-colors">
        {title}
      </h5>
    </div>

    {/* Play Icon: Hides on very small screens to save space, or remains small */}
    <div className="w-8 h-8 md:w-10 md:h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-700 group-hover:bg-red-700 group-hover:text-white transition-all shrink-0">
      <Play size={14} fill="currentColor" />
    </div>
  </Link>
);
