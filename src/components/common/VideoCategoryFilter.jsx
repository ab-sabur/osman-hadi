"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";

const VideoCategoryFilter = ({ videoCategories, activeTab }) => {
  const router = useRouter();

  // Handler for mobile select change
  const handleSelectChange = (e) => {
    const categoryId = e.target.value;
    router.push(`?category=${categoryId}`, { scroll: false });
  };

  return (
    <div className="w-full">
      {/* 1. MOBILE SELECT DROPDOWN (Hidden on LG) */}
      <div className="lg:hidden relative">
        <select
          value={activeTab}
          onChange={handleSelectChange}
          className="w-full appearance-none bg-zinc-950 text-white border border-white/10 px-6 py-4 rounded-2xl text-xs font-black uppercase tracking-widest focus:outline-none focus:border-red-700 transition-all cursor-pointer"
        >
          {videoCategories.map((cat) => (
            <option key={cat.id} value={cat.id} className="bg-zinc-950 text-white">
              {cat.label}
            </option>
          ))}
        </select>
        {/* Custom Arrow Icon for the Select */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-red-600">
          <ChevronDown size={18} />
        </div>
      </div>

      {/* 2. DESKTOP NAVIGATION BAR (Hidden on Mobile/Tablet) */}
      <div className="hidden lg:flex flex-wrap gap-2 bg-zinc-950 p-2 rounded-2xl border border-white/10">
        {videoCategories.map((cat) => (
          <Link
            key={cat.id}
            scroll={false}
            href={`?category=${cat.id}`}
            className={`px-6 flex-auto text-center border border-white/10 hover:border-red-700/20 py-3 rounded-xl text-xs font-black transition-all uppercase tracking-widest ${
              activeTab === cat.id
                ? "bg-red-700 text-white shadow-lg"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {cat.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoCategoryFilter;