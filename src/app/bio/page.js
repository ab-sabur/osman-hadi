"use client";
import React from "react";
import {
  Calendar,
  MapPin,
  Shield,
  Quote,
  Flame,
  ArrowRight,
  History,
  HeartHandshake,
  Scale,
  GraduationCap,
  Briefcase,
  Crosshair,
} from "lucide-react";
import AchievementSection from "@/components/common/Achivement";

/**
 * ENHANCED BIODATA - SHAHEED OSMAN HADI MEMORIAL
 * Updated with dynamic height header and improved responsive spacing.
 */

const AboutPage = () => {
  return (
    <div className="bg-[#050000] min-h-seceen text-white selection:bg-red-600/40 font-sans pb-32">
      {/* 1. CINEMATIC HERO HEADER - Height Free & Responsive */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden border-b border-white/5 pt-32 pb-48 md:pt-48">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050000] via-black/60 to-transparent z-10" />
          <img
            src="/static/osman.webp"
            className="w-full h-full object-cover opacity-30 grayscale saturate-50"
            alt="Shaheed Osman Hadi"
          />
          {/* Decorative Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-red-900/10 blur-[80px] md:blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-red-700/5 blur-[70px] md:blur-[120px] rounded-full delay-700 animate-pulse" />
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <div className="text-[10px] md:text-lg inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-8 animate-bounce">
            <Flame size={14} className="shrink-0" /> শহীদ শরীফ ওসমান বিন হাদি
          </div>
          <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
            THE VOICE OF <br />
            <span className="text-red-700 drop-shadow-[0_0_50px_rgba(185,28,28,0.5)]">
              INQUILAB
            </span>
          </h1>
          <p className="text-zinc-400 text-base md:text-xl font-medium max-w-2xl mx-auto mb-8">
            বিপ্লবী জুলাই যোদ্ধা ও ইনকিলাব মঞ্চের মুখপাত্র
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-zinc-500 font-black text-[9px] md:text-xs uppercase tracking-widest">
            {["Teacher", "Activist", "Strategist", "Martyr"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 md:px-6 md:py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md hover:bg-red-700/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT - Overlap adjusted for responsiveness */}
      <main className="max-w-[1400px] mx-auto px-6 -mt-20 md:-mt-32 relative z-30 space-y-24 md:space-y-40">
        {/* BENTO IDENTITY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <DetailCard
            icon={<Calendar />}
            label="জন্ম (Birth)"
            value="৩০ জুন, ১৯৯৩"
            sub="Nalchity, Jhalakathi"
          />
          <DetailCard
            icon={<History />}
            label="শাহাদাত (Martyrdom)"
            value="১৮ ডিসেম্বর, ২০২৫"
            sub="Singapore General Hospital"
          />
          <DetailCard
            icon={<MapPin />}
            label="জন্মস্থান (Birth Place)"
            value="নলছিটি, ঝালকাঠি"
            sub="Barishal Division"
          />
          <DetailCard
            icon={<Shield />}
            label="সমাধি (Final Rest)"
            value="ঢাবি কেন্দ্রীয় মসজিদ"
            sub="Beside National Poet"
          />
        </div>

        <AchievementSection />

        {/* 3. BIOGRAPHICAL SUMMARY */}
        <section className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-red-600 font-black uppercase tracking-widest text-xs md:text-sm">
              Brief Biography
            </h2>
            <h3 className="text-3xl md:text-5xl font-black leading-tight">
              জীবনবৃত্তান্ত ও কর্ম
            </h3>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              শরীফ ওসমান বিন হাদি, যিনি ওসমান গণি নামেও পরিচিত, ছিলেন একজন
              বাংলাদেশি রাজনীতিবিদ, শিক্ষক ও সমাজকর্মী। তিনি ইনকিলাব মঞ্চের
              মুখপাত্র এবং ২০২৪ সালের জুলাই গণঅভ্যুত্থানের অন্যতম সংগঠক হিসেবে
              পরিচিত ছিলেন। তিনি ঢাকা বিশ্ববিদ্যালয়ের রাষ্ট্রবিজ্ঞান বিভাগ থেকে
              স্নাতক ও স্নাতকোত্তর ডিগ্রি লাভ করেন।
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-zinc-900/50 rounded-2xl border border-white/5">
                <GraduationCap className="text-red-700 mb-2" />
                <h4 className="font-bold">শিক্ষা</h4>
                <p className="text-xs text-zinc-500">
                  রাষ্ট্রবিজ্ঞান বিভাগ, ঢাকা বিশ্ববিদ্যালয়
                </p>
              </div>
              <div className="p-6 bg-zinc-900/50 rounded-2xl border border-white/5">
                <Briefcase className="text-red-700 mb-2" />
                <h4 className="font-bold">পেশা</h4>
                <p className="text-xs text-zinc-500">
                  প্রভাষক, ইউনিভার্সিটি অফ স্কলারস
                </p>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-red-700/20 blur-[60px] md:blur-[100px] rounded-full" />
            <div className="relative bg-zinc-900 border border-white/10 p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] space-y-6">
              <Quote className="text-red-700 opacity-50" />
              <p className="text-xl md:text-2xl font-serif italic text-zinc-200 leading-snug">
                "আমি তো ছোটোবেলা থেকে স্বপ্ন দেখি-একটা তুমুল মিছিল হচ্ছে
                অন্যায়ের বিরুদ্ধে, সেই মিছিলের সামনে আমি আছি, কোনো একটা বুলেট
                এসে হয়তো আমার বুকটা বিদ্ধ করে দিয়েছে!"
              </p>
              <p className="text-red-600 font-black text-xs uppercase tracking-widest">
                — তাঁর শেষ স্বপ্ন
              </p>
            </div>
          </div>
        </section>

        {/* 4. CHRONOLOGY TIMELINE */}
        <section className="grid lg:grid-cols-2 gap-16 md:gap-20 items-start">
          <div className="lg:sticky lg:top-32 space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">
              বিপ্লবীর <br /> <span className="text-red-600">টাইমলাইন</span>
            </h2>
            <p className="text-zinc-500 text-base md:text-lg leading-relaxed max-w-md">
              নলছিটির নিভৃত গ্রাম থেকে শুরু হয়ে ঢাকা বিশ্ববিদ্যালয়ের রাজপথ,
              অদ্যাবধি ইনকিলাব মঞ্চের কণ্ঠস্বর।
            </p>
          </div>
          <div className="space-y-10 md:space-y-12 border-l border-red-900/30 pl-6 md:pl-16 ml-4 md:ml-0">
            <TimelineItem
              year="১৯৯৩"
              title="শৈশব ও প্রারম্ভিক জীবন"
              desc="ঝালকাঠি জেলার নলছিটি উপজেলার এক মাদ্রাসা শিক্ষক ও স্থানীয় ইমামের পরিবারে জন্ম।"
            />
            <TimelineItem
              year="২০১১"
              title="শিক্ষা ও ঢাবি জীবন"
              desc="রাষ্ট্রবিজ্ঞান বিভাগ, ঢাকা বিশ্ববিদ্যালয়। সক্রিয় ছাত্র রাজনীতিতে অংশগ্রহণ।"
            />
            <TimelineItem
              year="২০২২"
              title="পেশাগত জীবন"
              desc="ইউনিভার্সিটি অফ স্কলারসে প্রভাষক হিসেবে যোগদান।"
            />
            <TimelineItem
              year="২০২৪"
              title="জুলাই গণঅভ্যুত্থান"
              desc="রামপুরা এলাকার সমন্বয়কারী হিসেবে বিপ্লবে নেতৃত্ব ও ইনকিলাব মঞ্চের মুখপাত্র।"
            />
            <TimelineItem
              year="২০২৫ (ডিসে ১২)"
              title="হামলা ও ষড়যন্ত্র"
              desc="পল্টন এলাকায় মুখোশধারী আততায়ীদের হামলার শিকার।"
            />
            <TimelineItem
              year="২০২৫ (ডিসে ১৮)"
              title="শাহাদাত বরণ"
              desc="সিঙ্গাপুর জেনারেল হাসপাতালে চিকিৎসাধীন অবস্থায় শাহাদাত বরণ।"
            />
          </div>
        </section>

        {/* 5. PHILOSOPHICAL PILLARS */}
        <section className="py-10">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="text-red-600 font-black uppercase tracking-[0.4em] text-xs">
              Aims & Values
            </h2>
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter">
              আদর্শিক ভিত্তি
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            <PillarCard
              icon={<Scale />}
              title="Justice"
              desc="আল্লাহর জমিনে ইনসাফ কায়েম করার দাবিতে তিনি ছিলেন আপোষহীন।"
            />
            <PillarCard
              icon={<Shield />}
              title="Resistance"
              desc="আধিপত্যবাদের বিরুদ্ধে তিনি ছিলেন বলিষ্ঠ কণ্ঠস্বর।"
            />
            <PillarCard
              icon={<Crosshair />}
              title="Vision"
              desc="একটি বৈষম্যহীন নতুন বাংলাদেশের স্বপ্ন দেখেছিলেন তিনি।"
            />
          </div>
        </section>

        {/* 6. FINAL RESTING PLACE */}
        <section className="text-center space-y-8 md:space-y-12 bg-zinc-900/30 py-16 md:py-20 rounded-[2rem] md:rounded-[4rem] border border-white/5 px-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900 border border-white/10 text-zinc-500 font-black text-[10px] uppercase tracking-widest">
            <MapPin size={14} className="text-red-600" /> The Eternal Abode
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
            নজরুলের পাশে <br className="hidden md:block" />{" "}
            <span className="text-red-700">অনন্ত শয়ানে</span>
          </h2>
          <p className="text-zinc-500 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
            ২০শে ডিসেম্বর ২০২৫ তারিখে ঢাকা বিশ্ববিদ্যালয় কেন্দ্রীয় মসজিদ
            প্রাঙ্গণে জাতীয় কবি কাজী নজরুল ইসলামের সমাধিস্থলের পাশে সমাহিত করা
            হয়।
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 pt-6 md:pt-10">
            <button className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-700 hover:text-white transition-all active:scale-95">
              সম্পূর্ণ টাইমলাইন
              <ArrowRight
                size={16}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
            <button className="group flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white px-8 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all active:scale-95">
              শ্রদ্ধাঞ্জলি দিন
              <HeartHandshake size={16} />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const DetailCard = ({ icon, label, value, sub }) => (
  <div className="bg-zinc-950 border border-white/10 p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] hover:border-red-700/50 transition-all duration-500 group relative overflow-hidden">
    <div className="absolute top-0 right-0 w-24 h-24 bg-red-900/5 blur-3xl" />
    <div className="text-red-600 mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <div className="space-y-1 md:space-y-2">
      <p className="text-[9px] md:text-[10px] text-zinc-600 font-black uppercase tracking-widest">
        {label}
      </p>
      <p className="text-base md:text-xl font-black text-zinc-100 leading-tight">
        {value}
      </p>
      <p className="text-[9px] md:text-[10px] text-red-700 font-bold uppercase tracking-wider opacity-60">
        {sub}
      </p>
    </div>
  </div>
);

const TimelineItem = ({ year, title, desc }) => (
  <div className="relative group pb-10 md:pb-12">
    <div className="absolute -left-[27px] md:-left-[73px] top-1.5 md:top-2 w-3 h-3 md:w-4 md:h-4 bg-red-700 rounded-full border-2 md:border-4 border-[#050000] z-10 group-hover:scale-150 transition-transform" />
    <span className="text-red-600 font-black text-xl md:text-2xl tracking-tighter block mb-1">
      {year}
    </span>
    <h4 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">
      {title}
    </h4>
    <p className="text-zinc-500 leading-relaxed text-xs md:text-base">{desc}</p>
  </div>
);

const PillarCard = ({ icon, title, desc }) => (
  <div className="bg-zinc-950 p-8 md:p-12 border border-white/5 hover:bg-zinc-900 transition-colors text-center group">
    <div className="text-red-600 mb-4 md:mb-6 flex justify-center group-hover:scale-110 transition-transform">
      {React.cloneElement(icon, { size: 32 })}
    </div>
    <h3 className="text-lg md:text-xl font-black uppercase mb-2 md:mb-4 tracking-widest">
      {title}
    </h3>
    <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

export default AboutPage;
