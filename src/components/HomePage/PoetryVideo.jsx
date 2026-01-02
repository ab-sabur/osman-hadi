import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import React from "react";
import { SectionHeader } from "./Home";
import kobita from "../../../public/videos/poetry.json";
import { getThumbnailSrc } from "@/utils/getThumbnail";
import Image from "next/image";

const PoetryVideo = () => {
  return (
    <section className="py-12 md:py-20 bg-[#050000] px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-72 md:w-96 h-72 md:h-96 bg-red-900/10 blur-[100px] md:blur-[120px] -z-10" />

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit text-center lg:text-left">
          <SectionHeader
            number="03"
            title="হাদির কবিতা সমূহ"
            sub="Hadi's Poetry"
          />
          <p className="mt-6 md:mt-8 text-zinc-400 leading-relaxed text-base md:text-lg max-w-xl mx-auto lg:mx-0">
            তার প্রতিটি আবৃত্তি ছিল এক একটি আগ্নেয়াস্ত্র। ভিজ্যুয়াল এবং শব্দের
            মাধ্যমে তিনি ফুটিয়ে তুলতেন এক শোষিত জাতির দীর্ঘশ্বাস।
          </p>
        </div>

        {/* Right Side: Creative Video List */}
        <div className="w-full lg:w-2/3 space-y-4 md:space-y-6">
          {kobita?.length &&
            kobita.slice(0, 3).map((video, i) => {
              return (
                <Link
                  key={i}
                  href={`/videos/${encodeURIComponent(video.source_title)}`}
                  className="group relative flex items-center justify-between gap-4 p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] bg-zinc-950/50 border border-white/10 hover:border-red-700/50 transition-all duration-500 cursor-pointer overflow-hidden"
                >
                  {/* Hover Image Reveal Logic */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 overflow-hidden">
                    <Image
                      src={getThumbnailSrc(video)}
                      alt="Ambient background"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw" // Adjust based on how much of the screen this card takes
                      className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                      // Since this is a low-opacity background, we can lower the quality to save data
                      quality={40}
                    />
                  </div>

                  <div className="flex items-center gap-4 md:gap-8 z-10 min-w-0">
                    {/* The Index Number - Smaller on mobile */}
                    <span className="text-zinc-500 font-black text-3xl md:text-5xl group-hover:text-red-500 transition-colors shrink-0">
                      0{i + 1}
                    </span>

                    <div className="min-w-0">
                      <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-red-600 mb-1 md:mb-2 block opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                        {video.category || "Poetry"}
                      </span>
                      <p className="text-base md:text-lg font-black tracking-tighter group-hover:translate-x-2 transition-transform duration-500 truncate md:whitespace-normal">
                        {video.source_title}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Thumbnail & Play */}
                  <div className="flex items-center gap-3 md:gap-6 z-10 shrink-0">
                    {/* Hide thumbnail on small mobile, show on tablet+ */}
                    <div className="hidden sm:block relative w-24 md:w-32 aspect-video rounded-lg md:rounded-xl overflow-hidden border border-white/10 transition-all duration-500 shadow-2xl">
                      <Image
                        src={getThumbnailSrc(video)}
                        alt={video.source_title || "Video thumbnail"}
                        fill
                        sizes="(max-width: 768px) 96px, 128px"
                        className="object-cover"
                        // For small thumbnails, lower quality (60-75) is usually invisible to the eye
                        // but saves significant bandwidth.
                        quality={75}
                      />
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-[8px] md:text-[10px] text-zinc-400 font-black mb-1 md:mb-2">
                        {video.length || "0:00"}
                      </span>
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:bg-red-700 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700 shadow-xl">
                        <Play size={16} fill="currentColor" />
                      </div>
                    </div>
                  </div>

                  {/* Background overlay */}
                  <div
                    className={`absolute inset-0 bg-red-950 translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-20 opacity-30`}
                  />
                </Link>
              );
            })}
          <Link
            href={`/videos?category=Poetry`}
            rel="nofollow"
            className="w-full sm:w-fit mx-auto lg:mx-0 mt-8 flex items-center justify-center gap-3 p-4 md:p-5 border border-red-900/50 text-red-600 font-black hover:bg-red-700 hover:text-white transition-all uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs rounded-2xl active:scale-95 group"
          >
            কবিতার ভিডিও গুলো দেখুন
            <ArrowRight
              size={18}
              className="group-hover:translate-x-2 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PoetryVideo;
