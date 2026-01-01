"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ currentPage, totalPages }) => {
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return `?${params.toString()}`;
  };

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i);
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push("...");
      }
    }
    return [...new Set(pages)];
  };

  return (
    <div className="mt-12 md:mt-20 flex flex-col items-center gap-6 md:gap-8 px-4">
      {/* Cinematic Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="flex items-center gap-2 md:gap-4">
        {/* Prev Button */}
        <Link
          href={createPageURL(Math.max(1, currentPage - 1))}
          scroll={false}
          className={`w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl border transition-all ${
            currentPage === 1
              ? "opacity-10 pointer-events-none border-white/10"
              : "bg-zinc-950 border-white/10 hover:border-red-600 hover:text-red-600 text-white"
          }`}
        >
          <ChevronLeft size={18} className="md:w-5 md:h-5" />
        </Link>

        {/* Page Numbers */}
        <div className="flex gap-1 md:gap-2">
          {getPageNumbers().map((page, idx) => {
            if (page === "...") {
              return (
                <span
                  key={`dots-${idx}`}
                  className="flex items-center px-1 md:px-2 text-zinc-700 text-xs md:text-sm"
                >
                  ...
                </span>
              );
            }

            const isActive = currentPage === page;
            return (
              <Link
                key={page}
                href={createPageURL(page)}
                scroll={false}
                className={`w-8 h-8 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center font-black text-xs md:text-sm transition-all border ${
                  isActive
                    ? "bg-red-700 border-red-600 text-white shadow-lg shadow-red-700/20"
                    : "bg-zinc-950 border-white/10 text-zinc-400 hover:border-white/20"
                }`}
              >
                {/* On mobile, we might skip the leading zero to save space if needed */}
                {page.toString().padStart(2, "0")}
              </Link>
            );
          })}
        </div>

        {/* Next Button */}
        <Link
          href={createPageURL(Math.min(totalPages, currentPage + 1))}
          scroll={false}
          className={`w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl border transition-all ${
            currentPage === totalPages
              ? "opacity-10 pointer-events-none border-white/10"
              : "bg-zinc-950 border-white/10 hover:border-red-600 hover:text-red-600 text-white"
          }`}
        >
          <ChevronRight size={18} className="md:w-5 md:h-5" />
        </Link>
      </div>

      <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-zinc-700 text-center">
        Page {currentPage} of {totalPages}
      </p>
    </div>
  );
};

export default Pagination;
