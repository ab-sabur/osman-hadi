"use client";
import React from "react";
import {
  Play,
  ArrowUpRight,
  Search,
  Download,
  Volume2,
  Clock,
  Maximize2,
  Heart,
  Share2,
  ShieldCheck,
  Award,
  BookOpen,
  History,
  Flame,
  Shield,
  Scale,
  ArrowRight,
  Mic2,
  Quote,
  Youtube,
  Zap,
  X,
} from "lucide-react";

import Link from "next/link";
import { getYouTubeID } from "@/utils/ytId";
import DiscussionVideo from "./DiscussionVideo";
import SpeechesVideo from "./SpeechesVideo";
import PoetryVideo from "./PoetryVideo";
import { osmanarchiveImages } from "../../../public/images/images";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#050000] text-white selection:bg-red-600/40 selection:text-red-100 font-sans">
      {/* 2. HERO SECTION */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050000] via-transparent to-black/80 z-10" />
          <img
            src="/static/osman.webp"
            className="w-full h-full object-cover opacity-25 grayscale"
            alt="Revolution Background"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 blur-[150px] rounded-full" />
        </div>

        {/* Content Layer */}
        <div className="relative z-20 text-center px-6 w-full max-w-5xl flex flex-col items-center">
          {/* 1. Top Badge - Made smaller and cleaner */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] md:text-xs font-bold backdrop-blur-md tracking-[0.2em] uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            ১৯৯৩ — ২০২৫
          </div>

          {/* 2. Main Name - Significant Scale Up */}
          <div className="relative">
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
              শহীদ শরীফ ওসমান <br />
              <span className="text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                বিন হাদী
              </span>
            </h1>
          </div>

          {/* 3. Subtitle / Designation */}
          <p className="text-zinc-400 font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
            ইনকিলাব মঞ্চের মুখপাত্র
          </p>

          {/* 4. Quote - Placed in a stylized container */}
          <div className="max-w-2xl my-4">
            <h2 className="text-xl md:text-3xl font-medium italic text-zinc-200 leading-relaxed">
              <span className="text-red-600 text-4xl mr-2 font-serif">“</span>
              মৃত্যুর ফায়সালা জমীনে না, আসমানে হয়
              <span className="text-red-600 text-4xl ml-2 font-serif">”</span>
            </h2>
          </div>

          {/* 5. Action Buttons - More compact on mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href="/videos"
              className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-red-700 px-8 py-4 rounded-xl font-black text-white hover:bg-red-600 transition-all shadow-xl shadow-red-900/20 active:scale-95"
            >
              ভিডিওগুলো দেখুন
              <Play
                size={20}
                fill="currentColor"
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link
              href="/bio"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-8 py-4 rounded-xl font-black text-white hover:bg-white/10 transition-all active:scale-95"
            >
              জীবনী পড়ুন <BookOpen size={20} />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-red-600 to-transparent animate-pulse" />
        </div>
      </header>

      {/* 3. BENTO IDENTITY MATRIX */}
      <section id="biography" className="py-32 px-6 max-w-[1400px] mx-auto">
        <div className="mb-20">
          <h3 className="text-red-600 font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
            <Zap size={18} /> Identity Matrix
          </h3>
          <h2 className="text-4xl md:text-6xl font-black">
            বিবিধ পরিচয়ে ওসমান হাদী
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full">
          {/* Identity: The Activist */}
          <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-red-900/20 to-zinc-950 border border-white/5 rounded-[2.5rem] p-12 flex flex-col justify-between group hover:border-red-600/40 transition-all">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-red-700 rounded-2xl flex items-center justify-center shadow-lg shadow-red-700/20">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-4xl font-black">বিপ্লবী ও সমন্বয়ক</h4>
              <p className="text-zinc-400 text-lg leading-relaxed">
                ২০২৪ সালের জুলাই বিপ্লব চলাকালে ওসমান হাদী ঢাকার রামপুরা এলাকায়
                সমন্বয়কের দায়িত্ব পালন করেন। তিনি মাঠপর্যায়ের সংগঠন ও আন্দোলনে
                সরাসরি যুক্ত ছিলেন। এই সময়েই তিনি জাতীয়ভাবে পরিচিত মুখ হয়ে ওঠেন।
              </p>
            </div>
            <div className="relative mt-8 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all">
              <img
                src="/static/osman-hadi.jpg"
                alt="Activity"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
          </div>

          {/* Identity: The Poet */}
          <div className="md:col-span-2 bg-zinc-900/50 border border-white/5 rounded-[2.5rem] p-10 flex gap-8 items-center hover:bg-zinc-800 transition-all">
            <div className="shrink-0 w-24 h-24 bg-rose-700/10 border border-rose-700/20 rounded-full flex items-center justify-center text-rose-500">
              <Heart size={40} />
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">কবি ও সাহিত্যিক</h4>
              <p className="text-zinc-400">
                তার কবিতাগুলো ছিল প্রতিবাদের ভাষা। শব্দের বুননে তিনি ফুটিয়ে
                তুলতেন পরাধীনতার শৃঙ্খল ভাঙার গান।
              </p>
            </div>
          </div>

          {/* Identity: The Scholar */}
          <div className="md:col-span-1 bg-zinc-900/50 border border-white/5 rounded-[2.5rem] p-8 hover:bg-zinc-800 transition-all text-center md:text-left">
            <Award className="text-red-600 mb-6 mx-auto md:mx-0" size={40} />
            <h4 className="text-xl font-bold mb-2">শিক্ষকতা পেশা</h4>
            <p className="text-zinc-400 text-sm">
              পড়াশোনা শেষে ওসমান হাদী ঢাকার বেসরকারি বিশ্ববিদ্যালয় University of
              Scholars-এর ইংরেজি বিভাগে প্রভাষক হিসেবে কর্মরত ছিলেন। শিক্ষকতার
              পাশাপাশি তিনি চিন্তাশীল লেখক ও রাজনৈতিক বিশ্লেষক হিসেবে পরিচিতি
              লাভ করেন।
            </p>
          </div>

          {/* Identity: The Legacy */}
          <div className="md:col-span-1 bg-red-700 rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center space-y-4 shadow-2xl shadow-red-700/20">
            <span className="text-5xl font-black tracking-tighter">২০২৫</span>
            <p className="font-black uppercase tracking-widest text-sm">
              The Martyrdom
            </p>
            <div className="w-full h-px bg-white/10" />
            <p className="text-xs font-medium">ইতিহাস তাকে মনে রাখবে চিরকাল</p>
          </div>
        </div>
      </section>

      {/* 4. PILLARS OF PHILOSOPHY */}
      <section id="vision" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 rounded-3xl overflow-hidden border border-white/5">
            <PillarCard
              icon={<Scale size={32} />}
              title="Justice (ইনসাফ)"
              desc="আমি যখন ইনসাফের লড়াইটা করি তখন তো সেখান পরাজয়ের কিছু নেই। আমি বেঁচে থাকলে গাজী হয়ে লড়ব, মরে গেলে শহীদ হয়ে আল্লাহর কাছে চলে যাব।"
              color="border-red-900/20"
            />
            <PillarCard
              icon={<Shield size={32} />}
              title="Integrity (সততা)"
              desc="রাজনৈতিক ক্যারিয়ারে এক মুহূর্তের জন্য লোভ বা মোহের কাছে মাথা নত করেননি।"
              color="border-red-900/20"
            />
            <PillarCard
              icon={<History size={32} />}
              title="Sovereignty"
              desc="দাসত্বই যে জমিনের নিশ্চল নিয়তি, লড়াই-ই সেখানে সর্বোত্তম এবাদত"
              color="border-red-900/20"
            />
            <PillarCard
              icon={<Flame size={32} />}
              title="Sacrifice"
              desc="শেষ রক্তবিন্দু পর্যন্ত বিপ্লবের পথে অটল থেকে শাহাদাত বরণ।"
              color="border-0"
            />
          </div>
        </div>
      </section>

      {/* 6. LITERARY SECTION (POETRY) */}
      {/* 6. VISUAL ARCHIVE / GALLERY (Redesigned from Poetry) */}
      <section
        id="gallery"
        className="py-32 relative overflow-hidden bg-[#050000]"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-900/5 blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-zinc-900/20 blur-[100px] -z-10" />

        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20">
            <div className="space-y-6">
              <h3 className="text-red-600 font-black uppercase tracking-[0.4em] flex items-center gap-2">
                <Maximize2 size={16} /> Visual Legacy
              </h3>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
                স্মৃতির কোলাজ <br />
                <span
                  className="text-zinc-800"
                  style={{ WebkitTextStroke: "1px #3f3f46" }}
                >
                  Photo Archive
                </span>
              </h2>
            </div>
            <div className="max-w-md text-right">
              <p className="text-zinc-500 text-lg leading-relaxed italic mb-6">
                "ছবি কথা বলে, ইতিহাসকে জীবন্ত রাখে। প্রতিটি ফ্রেমে মিশে আছে
                বিপ্লব ও ভালোবাসার গল্প।"
              </p>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-700 hover:border-red-700 transition-all group"
              >
                গ্যালারি দেখুন{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </Link>
            </div>
          </div>

          {/* UNIQUE MASONRY GRID */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[200px] md:auto-rows-[150px]">
            {/* Main Featured Image */}
            <div className="md:col-span-6 md:row-span-4 relative group rounded-[2.5rem] overflow-hidden border border-white/5">
              <img
                src={osmanarchiveImages[0].url}
                className="w-full h-full object-cover group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                alt="Main Archive"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-10 left-10 p-2">
                <span className="bg-red-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Featured
                </span>
                <h4 className="text-3xl font-black mt-4">
                  বিপ্লবের প্রথম প্রহর
                </h4>
              </div>
            </div>

            {/* Top Right Vertical */}
            <div className="md:col-span-3 md:row-span-3 relative group rounded-[2.5rem] overflow-hidden border border-white/5">
              <img
                src={osmanarchiveImages[1].url}
                className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700"
                alt="Portrait"
              />
              <div className="absolute inset-0 bg-red-700/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Middle Square */}
            <Link href={`/gallery`} className="md:col-span-3 md:row-span-2 relative group rounded-[2.5rem] overflow-hidden border border-white/5 bg-zinc-950 flex flex-col items-center justify-center p-8 text-center border-dashed border-zinc-800">
              <History
                size={48}
                className="text-zinc-800 mb-4 group-hover:text-red-600 transition-colors"
              />
              <p className="text-zinc-600 font-bold uppercase tracking-widest text-[10px]">
                Total Collection
              </p>
              <h3 className="text-5xl font-black text-white mt-2">
                {osmanarchiveImages.length}+
              </h3>
            </Link>

            {/* Bottom Wide */}
            <div className="md:col-span-6 md:row-span-2 relative group rounded-[2.5rem] overflow-hidden border border-white/5">
              <img
                src={osmanarchiveImages[2].url}
                className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all"
                alt="Wide Archive"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all">
                <div className="bg-white text-black p-4 rounded-full shadow-2xl">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>

            {/* Smallest Detail */}
            <div className="md:col-span-3 md:row-span-1 relative group rounded-[2.5rem] overflow-hidden border border-white/5">
              <div className="absolute inset-0 bg-red-700 mix-blend-multiply opacity-20" />
              <img
                src={osmanarchiveImages[3].url}
                className="w-full h-full object-cover"
                alt="Detail"
              />
            </div>
            {/* Smallest Detail */}
            <div className="md:col-span-3 md:row-span-1 relative group rounded-[2.5rem] overflow-hidden border border-white/5">
              <div className="absolute inset-0 bg-red-700 mix-blend-multiply opacity-20" />
              <img
                src={osmanarchiveImages[4].url}
                className="w-full h-full object-cover"
                alt="Detail"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION 01: FRONTLINE BATTLES */}
      <DiscussionVideo />

      {/* 8. PHILOSOPHY INTERSTITIAL */}
      <section className="py-40 bg-red-950/40 relative overflow-hidden border-y border-red-900/20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-5" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <Quote className="text-red-700 mx-auto mb-10 opacity-40" size={80} />
          <h2 className="text-2xl md:text-3xl font-serif italic leading-tight text-zinc-100">
            "সবাই যখন মৃত্যুটাকে ভীষণ ভয় পায়, আমি তখন হাসতে হাসতে আল্লাহর কাছে
            ভীষণ সন্তুষ্টি নিয়ে পৌছাতে চাই। যে আমি নুন্যতম একটা জীবন লিড করতে
            পারলাম। আমি একটা ইনসাফের হাসি নিয়ে আমি আমার আল্লাহর কাছে পাঁছাত
            পেরেছি"
          </h2>
          <div className="mt-12 flex items-center justify-center gap-6">
            <div className="h-px w-16 bg-red-700/50" />
            <p className="font-black text-red-600 tracking-[0.5em] uppercase text-sm">
              শহীদ ওসমান হাদী
            </p>
            <div className="h-px w-16 bg-red-700/50" />
          </div>
        </div>
      </section>

      {/* SECTION 02: INTELLECTUAL WARFARE (With Navigation Controls) */}
      <SpeechesVideo />

      {/* 11. SECTION 03: POETIC RESISTANCE (Video Edition) */}
      <PoetryVideo />

      {/* 13. TRIBUTE GUESTBOOK */}
      <section className="py-32 text-center max-w-4xl mx-auto px-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-900/10 blur-[100px] -z-10" />
        <Heart className="mx-auto text-red-600 mb-10 animate-pulse" size={80} />
        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
          আপনার শ্রদ্ধা জানান
        </h2>
        <p className="text-zinc-500 text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
          শহীদ ওসমান হাদীর স্মরণে আপনার ব্যক্তিগত অনুভূতি বা শ্রদ্ধা বার্তা
          আমাদের ডিজিটাল গেস্টবুক-এ লিখে পাঠান।
        </p>
        <div className="relative group">
          <textarea
            placeholder="আপনার বার্তা এখানে লিখুন..."
            className="w-full h-56 bg-zinc-950 border border-white/10 rounded-[2.5rem] p-10 text-white focus:outline-none focus:border-red-700 transition-all placeholder:text-zinc-700 text-lg shadow-2xl"
          />
          <button className="absolute bottom-8 right-8 bg-red-700 text-white px-12 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-red-600 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-red-700/20">
            পাঠিয়ে দিন
          </button>
        </div>
      </section>

      {/* 14. FOOTER */}
      <footer className="bg-black py-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
            <div className="col-span-1 md:col-span-2 space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-red-700 rounded-2xl flex items-center justify-center font-black text-3xl rotate-3">
                  হ
                </div>
                <h1 className="text-3xl font-black tracking-tighter">
                  OSMAN HADI LEGACY
                </h1>
              </div>
              <p className="text-zinc-500 max-w-md leading-relaxed text-lg">
                এই ওয়েবসাইটটি শহীদ শরীফ ওসমান বিন হাদীর স্মৃতি এবং তার আদর্শকে
                ধারণ করে তৈরি একটি ডিজিটাল সংগ্রহশালা। তার দর্শন ছড়িয়ে পড়ুক
                প্রতিটি প্রান্তে।
              </p>
              <div className="flex gap-4">
                {[Youtube, Share2, Search].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-red-700 hover:border-red-700 transition-all cursor-pointer bg-zinc-950 shadow-xl group"
                  >
                    <Icon
                      size={24}
                      className="text-zinc-500 group-hover:text-white transition-colors"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h6 className="font-black text-red-600 uppercase tracking-[0.4em] text-xs">
                Navigation
              </h6>
              <ul className="space-y-5 text-zinc-400 font-bold uppercase tracking-widest text-xs">
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Home Page
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Biography
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Video Vault
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Poetry
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <h6 className="font-black text-red-600 uppercase tracking-[0.4em] text-xs">
                Resources
              </h6>
              <ul className="space-y-5 text-zinc-400 font-bold uppercase tracking-widest text-xs">
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Inqilab Moncho
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Press Material
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-700 text-xs font-black uppercase tracking-widest">
            <p>© ২০২৫ ওসমান হাদী মেমোরিয়াল আর্কাইভ। সর্বস্বত্ব সংরক্ষিত।</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Archive
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const PillarCard = ({ icon, title, desc, color }) => (
  <div
    className={`p-12 bg-zinc-950 border-b lg:border-b-0 lg:border-r ${color} last:border-0 hover:bg-zinc-900 transition-all cursor-default group`}
  >
    <div className="text-red-600 mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">
      {title}
    </h3>
    <p className="text-zinc-500 text-sm leading-relaxed font-medium">{desc}</p>
  </div>
);

export const SectionHeader = ({ number, title, sub }) => (
  <div className="flex items-center gap-8">
    <span
      className="text-6xl md:text-9xl font-black text-transparent opacity-30 select-none"
      style={{ WebkitTextStroke: "2px #991b1b" }}
    >
      {number}
    </span>
    <div>
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
        {title}
      </h2>
      <p className="text-red-600 text-[10px] font-black uppercase tracking-[0.5em] mt-3">
        {sub}
      </p>
    </div>
  </div>
);

export const FeaturedVideo = ({ title, url }) => (
  <Link
    href={`/videos/${encodeURIComponent(title)}`}
    className="relative group cursor-pointer overflow-hidden rounded-[3.5rem] bg-zinc-950 border border-white/5 hover:border-red-600 transition-all shadow-2xl"
  >
    <div className="aspect-video relative overflow-hidden">
      <img
        src={`https://i.ytimg.com/vi/${getYouTubeID(url)}/hqdefault.jpg`}
        className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
        alt={title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-red-700 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(185,28,28,0.5)] scale-90 group-hover:scale-100 transition-all duration-500">
        <Play fill="white" size={32} />
      </div>
    </div>
    <div className="p-12">
      <h3 className="text-2xl font-black mb-6 leading-tight group-hover:text-red-500 transition-colors">
        {title}
      </h3>
    </div>
  </Link>
);

export const CompactVideo = ({ title, url }) => (
  <Link
    href={`/videos/${encodeURIComponent(title)}`}
    className="flex gap-6 items-center p-6 bg-zinc-950 border border-white/5 rounded-3xl hover:bg-red-950/20 hover:border-red-900/50 transition-all duration-300 group cursor-pointer shadow-xl"
  >
    <div className="w-32 h-20 bg-black rounded-2xl overflow-hidden shrink-0 border border-white/5">
      <img
        src={`https://i.ytimg.com/vi/${getYouTubeID(url)}/hqdefault.jpg`}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-30 group-hover:opacity-60 transition-opacity"
        alt="thumbnail"
      />
    </div>
    <div className="flex-1">
      <h5 className="font-black text-lg leading-tight line-clamp-2 group-hover:text-white transition-colors">
        {title}
      </h5>
    </div>
    <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-700 group-hover:bg-red-700 group-hover:text-white transition-all">
      <Play size={16} fill="currentColor" />
    </div>
  </Link>
);

export default Home;
