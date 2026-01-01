"use client";
import { useEffect } from "react";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#050000] text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        {/* Hazard Icon */}
        <div className="w-24 h-24 bg-red-600/10 border border-red-600/20 rounded-[2rem] flex items-center justify-center mx-auto mb-10 rotate-12">
          <AlertTriangle size={40} className="text-red-600 -rotate-12" />
        </div>

        <h3 className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4">
          System Interruption
        </h3>

        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">
          কিছু একটা <br /> <span className="text-red-700">ভুল হয়েছে</span>
        </h2>

        <p className="text-zinc-400 text-sm mb-12 bg-zinc-950 p-4 rounded-xl border border-white/5 font-mono">
          Error Log: {error?.message || "Internal Server Configuration Issue"}
        </p>

        <div className="flex flex-col gap-4 max-w-xs mx-auto">
          <button
            onClick={() => reset()}
            className="flex items-center justify-center gap-3 bg-white text-black px-8 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-red-700 hover:text-white transition-all duration-500"
          >
            <RefreshCcw size={14} /> পুনরায় চেষ্টা করুন
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="flex items-center justify-center gap-3 text-zinc-400 hover:text-white font-black uppercase text-[9px] tracking-[0.3em] transition-colors"
          >
            <Home size={12} /> ফিরে যান
          </button>
        </div>
      </div>
    </div>
  );
}
