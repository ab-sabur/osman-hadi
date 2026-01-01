import React, { useState } from "react";
import { Camera, Home } from "lucide-react";

// ... Paste your osmanarchiveImages array here or import it
import { osmanarchiveImages } from "../../public/images/images";
import Pagination from "@/components/common/Pagination";
import ImageDownload from "@/components/common/ImageDownload";
import BackSection from "./common/BackSection";
import ImageGalleryModal from "./common/ImageModal";
const ITEMS_PER_PAGE = 24;

const ImagesPage = ({ resolvedParams }) => {
  const currentPage = Number(resolvedParams.get("page")) || 1;

  const totalPages = Math.ceil(osmanarchiveImages.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentImages = osmanarchiveImages.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="min-h-screen bg-[#050000] text-white pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <BackSection
          links={[{ path: "/", text: "", icon: <Home size={15} /> }]}
          current={`Gallery`}
        />
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 pb-6">
          <div className="space-y-4">
            <h1 className="text-xl md:text-3xl font-black tracking-tighter">
              শহীদ ওসমান হাদি স্মৃতি আর্কাইভ <br />
              <span
                className="text-zinc-800"
                style={{ WebkitTextStroke: "1px #3f3f46" }}
              >
                Photo / Image Archive
              </span>
            </h1>
            <p className="text-zinc-500 max-w-xl text-lg italic">
              &quot;জুলাই বিপ্লবের কণ্ঠস্বর শহীদ ওসমান হাদির বিপ্লবী জীবনের
              প্রতিটি মুহূর্তের চিত্র।&quot;
            </p>
          </div>

          <div className="bg-zinc-950 border border-white/10 p-4 rounded-2xl flex items-center gap-6 shadow-2xl">
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
          {currentImages.map((img, idx) => {
            const globalIndex = startIndex + idx;
            return (
              <div
                key={idx}
                onClick={() => setSelectedIndex(globalIndex)}
                className="group relative aspect-[4/5] bg-zinc-900 rounded-xl overflow-hidden border border-white/10 hover:border-red-600/50 transition-all duration-500 shadow-xl"
              >
                <div className="cursor-pointer relative w-full h-full overflow-hidden bg-zinc-950 flex items-center justify-center group">
                  <div className="relative w-full h-full overflow-hidden bg-black group">
                    {/* The Background (Always Cover, blurs on hover) */}
                    <img
                      src={img.url}
                      className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-40 blur-sm group-hover:blur-md transition-all duration-500"
                      alt={`${img?.title}-${idx}`}
                    />

                    {/* The Foreground (Hidden Cover, becomes Contain on hover) */}
                    <img
                      src={img.url}
                      alt="Gallery Image"
                      className="relative w-full h-full object-contain transition-all duration-300 scale-0 scale-100"
                    />
                  </div>
                </div>

                <div className="absolute top-4 right-4 z-50">
                  <ImageDownload img={img} />
                </div>

                <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-1">
                    Archive Item #{startIndex + idx + 1}
                  </p>
                  <p className="text-sm font-bold truncate text-white/80 group-hover:text-white">
                    {img.title || "Untitled Fragment"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* PAGINATION SECTION */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          baseUrl="/gallery"
        />
      </div>
      {/* The Gallery Modal */}
      <ImageGalleryModal
        isOpen={selectedIndex !== null}
        key={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        images={osmanarchiveImages} // Full Array
        initialIndex={selectedIndex} // Active Image Index
      />
    </div>
  );
};

export default ImagesPage;
