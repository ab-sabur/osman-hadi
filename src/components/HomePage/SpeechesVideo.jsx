import React from "react";
import { SectionHeader } from "./Home";
import { Play, ArrowRight, MonitorPlay } from "lucide-react";
import speeches from "../../../public/videos/speeches.json";
import Link from "next/link";
import { getThumbnailSrc } from "@/utils/getThumbnail";

const SpeechesVideo = () => {
  return (
    <section className="max-w-[1400px] mx-auto py-12 md:py-20 bg-[#050000] border-b border-white/10 relative">
      <div className="px-6 mb-8 max-w-4xl flex flex-col md:flex-row justify-between items-end gap-8">
        <SectionHeader
          number="02"
          title="চিন্তা ও দর্শন"
          sub="Intellectual Warfare"
        />
      </div>

      <div
        id="intellectual-scroll"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-10"
      >
        {speeches?.length &&
          speeches.slice(0, 6).map((item, index) => (
            <Link
              href={`/videos/${encodeURIComponent(item.source_title)}`}
              key={index}
              className="group cursor-pointer"
            >
              <div className="aspect-video bg-zinc-950 overflow-hidden relative border border-white/10 group-hover:border-red-700 transition-all rounded-[2rem]">
                <img
                  src={getThumbnailSrc(item)}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
                  alt={`Speech ${item.source_title}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                <div className="absolute bottom-3 left-3">
                  <h4 className="text-lg font-black leading-tight line-clamp-1 md:line-clamp-2">
                    {item.source_title}
                  </h4>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-700 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 shadow-2xl">
                  <Play fill="white" size={24} />
                </div>
              </div>
            </Link>
          ))}
      </div>

      {/* --- WATCH MORE BUTTON SECTION --- */}
      <div className="flex justify-center px-6">
        <Link
          href="/videos?category=Speeches"
          className="relative group w-full max-w-2xl"
        >
          <div
            className="
      relative flex flex-col sm:flex-row items-start sm:items-center justify-between 
      p-5 md:p-6 bg-zinc-950 border border-white/10 rounded-[1.5rem] md:rounded-[2rem] 
      group-hover:border-red-600/50 transition-all duration-500 overflow-hidden
    "
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {/* Left Content: Icon + Text */}
            <div className="flex items-center gap-4 md:gap-6 relative z-10 w-full sm:w-auto">
              <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-zinc-900 rounded-xl md:rounded-2xl flex items-center justify-center text-zinc-500 group-hover:bg-red-700 group-hover:text-white transition-all duration-500">
                <MonitorPlay size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <h5 className="text-white font-black text-xs md:text-sm uppercase tracking-widest leading-tight">
                  বক্তৃতাগুলো একসাথে দেখুন
                </h5>
                <p className="text-zinc-600 text-[8px] md:text-[10px] font-bold uppercase tracking-widest mt-1">
                  Access the Full Intellectual Archive
                </p>
              </div>
            </div>

            {/* Right Content: Explore Link */}
            <div
              className="
        relative z-10 flex items-center gap-2 text-red-600 font-black text-[10px] uppercase tracking-widest
        mt-4 sm:mt-0 ml-14 sm:ml-0 transition-all duration-500
      "
            >
              <span className="group-hover:mr-1 transition-all">Explore</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-2 transition-transform duration-500"
              />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SpeechesVideo;
