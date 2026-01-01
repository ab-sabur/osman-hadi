import React from "react";
import {
  Play,
  Heart,
  ShieldCheck,
  Award,
  BookOpen,
  History,
  Flame,
  Shield,
  Scale,
  ArrowRight,
  Quote,
} from "lucide-react";

import Link from "next/link";
import DiscussionVideo from "./DiscussionVideo";
import SpeechesVideo from "./SpeechesVideo";
import PoetryVideo from "./PoetryVideo";
import { osmanarchiveImages } from "../../../public/images/images";
import AchievementSection from "../common/Achivement";
import OsmanAboutSection from "../common/OsmanAbout";
import VideoCategoryCards from "../common/VideoCategoryCard";

const Home = () => {
  return (
    <main className="bg-[#050000] text-white selection:bg-red-600/40 selection:text-red-100 font-sans">
      {/* 2. HERO SECTION */}
      <header className="relative flex flex-col items-center justify-center overflow-hidden py-20 md:py-32 pt-32 md:pt-48">
        {/* Background Layer - First Component এর স্টাইল অনুযায়ী */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050000] via-black/60 to-transparent z-10" />
          <img
            src="/static/osman.webp"
            className="w-full h-full object-cover opacity-30 grayscale saturate-50"
            alt="Shaheed Osman Hadi"
          />

          {/* Decorative Orbs - First Component এর পজিশন অনুযায়ী */}
          <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-red-900/10 blur-[80px] md:blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-red-700/5 blur-[70px] md:blur-[120px] rounded-full delay-700 animate-pulse" />
        </div>

        {/* Content Layer - Positioning centered exactly like the first one */}
        <div className="relative z-20 text-center px-6 w-full max-w-5xl flex flex-col items-center">
          {/* 1. Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] md:text-xs font-black md:tracking-[0.1em] uppercase">
            30 June 1993 — 18 August 2025
          </div>

          {/* 2. Main Name */}
          <div className="relative mb-3">
            <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
              <span className="sr-only">Shaheed Osman Hadi </span> শহীদ শরীফ
              ওসমান <br />
              <span className="text-red-700 drop-shadow-[0_0_50px_rgba(185,28,28,0.5)]">
                বিন হাদি
              </span>
            </h1>
          </div>

          {/* 3. Subtitle / Designation */}
          <p className="text-zinc-400 font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-0 md:mb-4">
            ইনকিলাব মঞ্চের মুখপাত্র
          </p>

          {/* 4. Quote */}
          <div className="max-w-2xl mb-4">
            <div className="text-sm md:text-3xl font-medium italic text-zinc-200 leading-relaxed">
              <span className="text-red-600 text-4xl mr-2 font-serif relative bottom-[-15px]">
                “
              </span>
              মৃত্যুর ফায়সালা জমীনে না, আসমানে হয়
              <span className="text-red-600 text-4xl ml-2 font-serif relative bottom-[-15px]">
                ”
              </span>
            </div>
          </div>

          {/* 5. Action Buttons */}
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
      </header>

      {/* 3. BENTO IDENTITY MATRIX */}
      <section
        id="biography"
        className="py-12 md:py-20 px-6 max-w-[1400px] mx-auto"
      >
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-black leading-tight">
            <span className="text-red-500 text-[10px] md:text-xs relative -bottom-0">
              Multi-dimensional identity of Osman Hadi
            </span>
            <br />
            শরীফ ওসমান হাদির বহুমাত্রিক পরিচয়
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 lg:gap-6">
          {/* Identity: The Activist (Main Feature Card) */}
          <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-red-900/30 to-zinc-950 border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between group hover:border-red-600/40 transition-all">
            <div className="space-y-3">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-red-700 rounded-2xl flex items-center justify-center shadow-lg shadow-red-700/20">
                <ShieldCheck size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-3xl font-black mb-4">
                  <span className="text-red-500 text-[10px] md:text-xs relative -bottom-0">
                    Revolutionary and Coordinator
                  </span>
                  <br />
                  বিপ্লবী ও সমন্বয়ক
                </h3>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                  শহীদ শরীফ ওসমান বিন হাদি ২০২৪ সালের জুলাই বিপ্লব চলাকালে ওসমান
                  হাদি ঢাকার রামপুরা এলাকায় সমন্বয়কের দায়িত্ব পালন করেন। তিনি
                  মাঠপর্যায়ের সংগঠন ও আন্দোলনে সরাসরি যুক্ত ছিলেন।
                </p>
              </div>
            </div>
            <div className="relative mt-8 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 aspect-video md:aspect-auto">
              <img
                src="/static/osman-hadi.jpg"
                alt="Activity"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            </div>
          </div>

          {/* Identity: The Poet */}
          <div className="md:col-span-2 bg-zinc-900/40 border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center hover:bg-zinc-800/60 transition-all group">
            <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 bg-rose-700/10 border border-rose-700/20 rounded-full flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform">
              <Heart
                size={40}
                fill="currentColor"
                className="opacity-20 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-3xl font-bold mb-2">
                <span className="text-red-500 text-[10px] md:text-xs relative -bottom-0">
                  Poet and cultural activist
                </span>
                <br />
                কবি ও সাংস্কৃতিক কর্মী
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                তার কবিতাগুলো ছিল প্রতিবাদের ভাষা। শব্দের বুননে তিনি ফুটিয়ে
                তুলতেন পরাধীনতার শৃঙ্খল ভাঙার গান।
              </p>
            </div>
          </div>

          {/* Identity: The Scholar */}
          <div className="md:col-span-1 bg-zinc-900/40 border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-8 hover:bg-zinc-800/60 transition-all flex flex-col justify-center">
            <Award className="text-red-600 mb-6" size={40} />
            <h3 className="text-lg md:text-xl font-bold mb-2">
              <span className="text-red-500 text-[10px] md:text-xs relative -bottom-0">
                Teaching profession
              </span>
              <br />
              শিক্ষকতা পেশা
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
              Shaheed Osman Hadi University of Scholars-এর ইংরেজি বিভাগে প্রভাষক
              হিসেবে কর্মরত ছিলেন। চিন্তাশীল লেখক হিসেবে তাঁর পরিচিতি ছিল অনন্য।
            </p>
          </div>

          {/* Identity: The Legacy (Martyrdom Card) */}
          <div className="md:col-span-1 bg-red-700 rounded-[2rem] md:rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center space-y-4 shadow-2xl shadow-red-700/40 hover:scale-[1.02] transition-transform">
            <span className="text-3xl md:text-5xl font-black tracking-tighter text-white">
              ২০২৫
            </span>
            <div className="space-y-1">
              <p className="font-black uppercase tracking-widest text-xs md:text-sm text-white/90">
                The Martyrdom
              </p>
              <div className="w-12 h-1 bg-white/30 mx-auto rounded-full" />
            </div>
            <p className="text-[10px] md:text-xs font-bold text-red-100 uppercase tracking-tighter">
              ইতিহাস তাকে মনে রাখবে চিরকাল
            </p>
          </div>
        </div>
      </section>

      {/* 4. PILLARS OF PHILOSOPHY */}
      <section
        id="vision"
        className="max-w-[1400px] mx-auto py-12 md:py-20 px-6 bg-black"
      >
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 rounded-3xl overflow-hidden border border-white/10">
            <PillarCard
              icon={<Scale size={32} />}
              title="ইনসাফ - Justice"
              desc="আমি যখন ইনসাফের লড়াইটা করি তখন তো সেখান পরাজয়ের কিছু নেই। আমি বেঁচে থাকলে গাজী হয়ে লড়ব, মরে গেলে শহীদ হয়ে আল্লাহর কাছে চলে যাব।"
              color="border-red-900/20"
            />
            <PillarCard
              icon={<Shield size={32} />}
              title="সততা - Honesty"
              desc="রাজনৈতিক ক্যারিয়ারে এক মুহূর্তের জন্য লোভ বা মোহের কাছে মাথা নত করেননি।"
              color="border-red-900/20"
            />
            <PillarCard
              icon={<History size={32} />}
              title="সার্বভৌমত্ব - Sovereignty"
              desc="দাসত্বই যে জমিনের নিশ্চল নিয়তি, লড়াই-ই সেখানে সর্বোত্তম এবাদত"
              color="border-red-900/20"
            />
            <PillarCard
              icon={<Flame size={32} />}
              title="শাহাদাত - Martyrdom"
              desc="হক আদায়ের পথে আপসহীন থেকে নিজের জীবনকে বিলিয়ে দেওয়ার পরম সাহসিকতা।"
              color="border-red-900/20"
            />
          </div>
        </div>
      </section>

      {/* 6. LITERARY SECTION (POETRY) */}
      {/* 6. VISUAL ARCHIVE / GALLERY (Redesigned from Poetry) */}
      <section
        id="gallery"
        className="py-12 md:py-20 relative overflow-hidden bg-[#050000]"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-900/5 blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-zinc-900/20 blur-[100px] -z-10" />

        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-between items-end gap-4 mb-6">
            <div className="space-y-3 self-start">
              <h2 className="text-2xl md:text-4xl font-black tracking-tighter">
                <span className="text-red-500 text-[10px] tracking-normal md:text-xs relative bottom-1">
                  Osman Hadi Photo Archive
                </span>
                <br />
                ছবি আর্কাইভ
              </h2>
            </div>
            <div className="max-w-md ml-auto text-center md:text-right">
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
            <div className="md:col-span-6 md:row-span-4 relative group rounded-[2.5rem] overflow-hidden border border-white/10">
              <img
                src={osmanarchiveImages[0].url}
                className="w-full h-full object-cover group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                alt="Main Archive"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Top Right Vertical */}
            <div className="md:col-span-3 md:row-span-3 relative group rounded-[2.5rem] overflow-hidden border border-white/10">
              <img
                src={osmanarchiveImages[1].url}
                className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700"
                alt="Portrait"
              />
              <div className="absolute inset-0 bg-red-700/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Middle Square */}
            <Link
              href={`/gallery`}
              className="md:col-span-3 md:row-span-1 hover:border-red-500/40 relative group rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-950 flex flex-col items-center justify-center p-8 text-center border-dashed border-zinc-800"
            >
              <History
                size={48}
                className="text-zinc-800 mb-4 group-hover:text-red-600 transition-colors"
              />
              <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">
                মোট ছবি (Total Images)
              </p>
              <div className="text-5xl font-black text-white mt-2">
                {osmanarchiveImages.length}+
              </div>
            </Link>

            <div className="md:col-span-3 md:row-span-2 relative group rounded-[2.5rem] overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-red-700 mix-blend-multiply opacity-20" />
              <img
                src={osmanarchiveImages[59].url}
                className="w-full h-full object-cover object-top"
                alt="Detail"
              />
            </div>

            {/* Bottom Wide */}
            <div className="md:col-span-6 md:row-span-3 relative group rounded-[2.5rem] overflow-hidden border border-white/10">
              <img
                src={osmanarchiveImages[2].url}
                className="w-full h-full object-cover opacity-100 group-hover:opacity-100 transition-all"
                alt="Wide Archive"
              />
            </div>

            {/* Smallest Detail */}
            <div className="md:col-span-3 md:row-span-2 relative group rounded-[2.5rem] overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-red-700 mix-blend-multiply opacity-20" />
              <img
                src={osmanarchiveImages[3].url}
                className="w-full h-full object-cover object-top"
                alt="Detail"
              />
            </div>
            {/* Smallest Detail */}
            <div className="md:col-span-3 md:row-span-2 relative group rounded-[2.5rem] overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-red-700 mix-blend-multiply opacity-20" />
              <img
                src={osmanarchiveImages[4].url}
                className="w-full h-full object-cover object-top"
                alt="Detail"
              />
            </div>
          </div>
        </div>
      </section>

      <VideoCategoryCards />

      <OsmanAboutSection />

      {/* 7. SECTION 01: FRONTLINE BATTLES */}
      <DiscussionVideo />

      {/* 8. PHILOSOPHY INTERSTITIAL */}
      <section className="py-12 md:py-20 my-12 bg-red-950/40 relative overflow-hidden border-y border-red-900/20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-5" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <Quote className="text-red-700 mx-auto mb-10 opacity-40" size={80} />
          <p className="text-2xl md:text-3xl font-serif italic leading-tight text-zinc-100">
            &quot;সবাই যখন মৃত্যুটাকে ভীষণ ভয় পায়, আমি তখন হাসতে হাসতে আল্লাহর
            কাছে ভীষণ সন্তুষ্টি নিয়ে পৌছাতে চাই। যে আমি নুন্যতম একটা জীবন লিড
            করতে পারলাম। আমি একটা ইনসাফের হাসি নিয়ে আমি আমার আল্লাহর কাছে পাঁছাত
            পেরেছি&quot;
          </p>
          <div className="mt-12 flex items-center justify-center gap-6">
            <div className="h-px w-16 bg-red-700/50" />
            <p className="font-black text-red-600 tracking-[0.5em] uppercase text-sm">
              শহীদ ওসমান হাদি
            </p>
            <div className="h-px w-16 bg-red-700/50" />
          </div>
        </div>
      </section>

      {/* SECTION 02: INTELLECTUAL WARFARE (With Navigation Controls) */}
      <SpeechesVideo />

      <AchievementSection from="home" />

      {/* 11. SECTION 03: POETIC RESISTANCE (Video Edition) */}
      <PoetryVideo />
    </main>
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
    <p className="text-2xl font-black mb-4 uppercase tracking-tight">{title}</p>
    <p className="text-zinc-400 text-sm leading-relaxed font-medium">{desc}</p>
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
      <h2 className="text-2xl md:text-4xl font-black tracking-tighter leading-none">
        {title}
      </h2>
      <p className="text-red-500 text-[10px] font-black uppercase tracking-[0.5em] mt-3">
        {sub}
      </p>
    </div>
  </div>
);

export default Home;
