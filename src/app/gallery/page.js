import React from "react";
import Link from "next/link";
import {
  Camera,
  Maximize2,
  Image as ImageIcon,
} from "lucide-react";

// ... Paste your osmanarchiveImages array here or import it
import { osmanarchiveImages } from "../../../public/images/images";
import Pagination from "@/components/common/Pagination";

const ITEMS_PER_PAGE = 24;

export default async function GalleryPage({ searchParams }) {
  const resolvedParams = await searchParams;
  const currentPage = Number(resolvedParams.page) || 1;

  const totalPages = Math.ceil(osmanarchiveImages.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentImages = osmanarchiveImages.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-[#050000] text-white pt-32 pb-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-white/5 pb-12">
          <div className="space-y-4">
            <h3 className="text-red-600 font-black uppercase tracking-[0.3em] flex items-center gap-2">
              <Camera size={18} /> Visual Archive
            </h3>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
              স্মৃতির{" "}
              <span
                className="text-zinc-800"
                style={{ WebkitTextStroke: "1px #3f3f46" }}
              >
                অ্যালবাম
              </span>
            </h1>
            <p className="text-zinc-500 max-w-xl text-lg italic">
              "প্রতিটি ফ্রেম একটি নীরব বিপ্লব, প্রতিটি ছবি একটি জীবন্ত ইতিহাস।"
            </p>
          </div>

          <div className="bg-zinc-950 border border-white/5 p-4 rounded-2xl flex items-center gap-6 shadow-2xl">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">
                Total Assets
              </span>
              <span className="text-2xl font-black text-red-600 tabular-nums">
                {osmanarchiveImages.length}
              </span>
            </div>
            <div className="w-px h-10 bg-white/5" />
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">
                Page
              </span>
              <span className="text-2xl font-black text-white tabular-nums">
                {currentPage} / {totalPages}
              </span>
            </div>
          </div>
        </div>

        {/* IMAGE GRID - 4 Cols Desktop, 3 Tablet, 2 Mobile, 1 Small */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {currentImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative aspect-[4/5] bg-zinc-900 rounded-[2rem] overflow-hidden border border-white/5 hover:border-red-600/50 transition-all duration-500 shadow-xl"
            >
              {/* Viewfinder Corners (Stylized) */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/20 group-hover:border-red-600 transition-colors z-20" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20 group-hover:border-red-600 transition-colors z-20" />

              <img
                src={img.url}
                alt="Gallery Image"
                loading="lazy"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

              <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-1">
                  Archive Item #{startIndex + idx + 1}
                </p>
                <h4 className="text-sm font-bold truncate text-white/80 group-hover:text-white">
                  {img.title || "Untitled Fragment"}
                </h4>
              </div>

              {/* Interaction Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                <Maximize2 size={20} />
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION SECTION */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          baseUrl="/gallery"
        />
      </div>
    </div>
  );
}
