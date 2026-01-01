"use client";
import React, { Suspense } from "react";
import VideosPage from "@/components/VideosPage";
import { useSearchParams } from "next/navigation";

const VideosContent = () => {
  const searchParams = useSearchParams();
  return (
    <VideosPage
      key={JSON.stringify(searchParams)}
      resolvedParams={searchParams}
    />
  );
};

// 2. The main exported component wraps the content in Suspense
const Videos = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center text-zinc-400 uppercase tracking-widest text-xs">
          Loading Archive...
        </div>
      }
    >
      <VideosContent />
    </Suspense>
  );
};

export default Videos;
