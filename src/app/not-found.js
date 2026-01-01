"use client";
import Link from "next/link";
import { Home, ArrowLeft, Ghost, CloudRain, Flower2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="my-20 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        {/* Visual Element */}
        <div className="relative inline-block mb-8">
          <h1
            className="text-[8rem] md:text-[18rem] font-black leading-none tracking-tighter text-transparent stroke-zinc-800 select-none opacity-20"
            style={{ WebkitTextStroke: "2px #ff0000ff" }}
          >
            404
          </h1>
        </div>

        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 uppercase">
          পৃষ্ঠাটি <span className="text-red-700">পাওয়া যায়নি</span>
        </h2>

        <p className="text-zinc-400 text-lg mb-12 max-w-md mx-auto leading-relaxed">
          দুঃখিত, আপনি যে পাতাটি খুঁজছেন তা সরিয়ে ফেলা হয়েছে অথবা বর্তমানে
          উপলব্ধ নেই।
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-red-700 hover:text-white transition-all duration-500"
          >
            <Home size={14} /> মূল পাতা
          </Link>
          <Link
            href="/tributes"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-zinc-900 border border-white/10 text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-zinc-800 transition-all duration-500"
          >
            <ArrowLeft size={14} /> শ্রদ্ধাঞ্জলি দেখুন
          </Link>
        </div>
      </div>
    </div>
  );
}
