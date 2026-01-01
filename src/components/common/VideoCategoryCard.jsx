"use client";
import React from "react";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";
import { videoCategories } from "@/data/videos";

const VideoCategoryCards = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 py-12 md:py-20">
      {/* HEADER FOR HOMEPAGE SECTION */}
      <div className="flex justify-between flex-wrap items-start gap-4 mb-6">
        <div>
          <h2 className="text-2xl md:text-4xl font-black tracking-নরমাল  italic text-white">
            <span className="text-red-500 text-[10px] tracking-normal md:text-xs relative bottom-1">
              Osman Hadi Video Archive
            </span>
            <br />
            ওসমান হাদির ভিডিও আর্কাইভ
          </h2>
        </div>
        <div className="max-w-md ml-auto text-center md:text-right">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-700 hover:border-red-700 transition-all group"
          >
            সকল ভিডিও দেখুন{" "}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-2 transition-transform"
            />
          </Link>
        </div>
      </div>

      {/* UNIQUE CARD GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {videoCategories
          .filter((cat) => cat.id !== "All")
          .map((cat) => (
            <Link
              key={cat.id}
              href={`/videos?category=${cat.id}`}
              rel="nofollow"
              className="group relative h-48 bg-zinc-950 rounded-3xl overflow-hidden border border-white/10 hover:border-red-600/50 transition-all duration-700 shadow-2xl"
            >
              {/* Background Decorative Element */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent opacity-50" />

              {/* Hover Background Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-600/10 blur-[50px] group-hover:bg-red-600/20 transition-all duration-700" />

              <div className="relative h-full p-8 flex flex-col justify-between z-10">
                {/* Top Row: Icon and Count */}
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:bg-red-700 group-hover:border-red-600 transition-all duration-500">
                    <Play size={16} className="text-white fill-current" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-lg font-black text-white tabular-nums">
                      {cat.videos?.length || 0}
                    </span>
                  </div>
                </div>

                {/* Bottom Row: Label */}
                <div className="space-y-1">
                  <p className="text-xl font-black text-zinc-400 group-hover:text-white transition-colors duration-500 tracking-tighter leading-none">
                    {cat.label.split("(")[0]} {/* Bengali Part */}
                  </p>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
                    {cat.label.split("(")[1]?.split(")")[0] || cat.id}{" "}
                    Collection
                  </p>
                </div>
              </div>

              {/* Cinematic Slide Overlay */}
              <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-red-700 transition-transform duration-500 ease-out z-0 flex items-center justify-center">
                <span className="text-white font-black uppercase text-xs tracking-widest">
                  ভিডিও গুলো দেখুন
                </span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default VideoCategoryCards;
