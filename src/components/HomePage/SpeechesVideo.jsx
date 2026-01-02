import React from "react";
import { SectionHeader } from "./Home";
import { Play, ArrowRight, MonitorPlay } from "lucide-react";
import speeches from "../../../public/videos/speeches.json";
import Link from "next/link";
import { getThumbnailSrc } from "@/utils/getThumbnail";
import Image from "next/image";

const SpeechesVideo = () => {
  return (
    <section className="max-w-[1400px] mx-auto py-12 md:py-20 bg-[#050000] border-b border-white/10 relative">
      <div className="px-6 mb-8 max-w-4xl flex flex-col md:flex-row justify-between items-end gap-8">
        <SectionHeader
          number="02"
          title="ওসমান হাদির চিন্তা ও দর্শন"
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
                <Image
                  src={getThumbnailSrc(item)}
                  alt={`Speech ${item.source_title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
                  // Keep high-priority images fast if this is at the top of the page
                  // priority={index < 4}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 pointer-events-none" />

                {/* Text Content */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-lg font-black leading-tight line-clamp-1 md:line-clamp-2">
                    {item.source_title}
                  </p>
                </div>

                {/* Play Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-700 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 shadow-2xl pointer-events-none">
                  <Play fill="white" size={24} className="ml-1" />
                </div>
              </div>
            </Link>
          ))}
      </div>

      {/* --- WATCH MORE BUTTON SECTION --- */}
      <div className="flex justify-center px-6">
        <Link
          href="/videos?category=Speeches"
          rel="nofollow"
          className="w-fit space-x-3 mt-2 p-5 border border-red-900/50 text-red-600 font-black hover:bg-red-700 hover:text-white transition-all uppercase tracking-[0.3em] text-xs rounded-2xl active:scale-95 flex items-center justify-center text-center"
        >
          <span className="group-hover:mr-1 transition-all">
            হাদির সকল বক্তৃতা{" "}
          </span>
          <ArrowRight
            size={16}
            className="group-hover:translate-x-2 transition-transform duration-500"
          />
        </Link>
      </div>
    </section>
  );
};

export default SpeechesVideo;
