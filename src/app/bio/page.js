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

/**
 * ENHANCED BIODATA - SHAHEED OSMAN HADI MEMORIAL
 * Updated with full biographical data and integrated theme.
 */

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#050000] text-white selection:bg-red-600/40 font-sans pb-32">
      {/* 1. CINEMATIC HERO HEADER */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050000] via-black/40 to-transparent z-10" />
          <img
            src="/static/osman.webp"
            className="w-full h-full object-cover opacity-30 grayscale saturate-50"
            alt="Shaheed Osman Hadi"
          />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-red-900/10 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-red-700/5 blur-[120px] rounded-full delay-700 animate-pulse" />
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <div className="text-lg inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 font-black uppercase tracking-[0.3em] mb-8 animate-bounce">
            <Flame size={14} /> শহীদ শরীফ ওসমান বিন হাদি
          </div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.85] mb-6">
            THE VOICE OF <br />
            <span className="text-red-700 drop-shadow-[0_0_50px_rgba(185,28,28,0.5)]">
              INQUILAB
            </span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-8">
            বিপ্লবী জুলাই যোদ্ধা ও ইনকিলাব মঞ্চের মুখপাত্র
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-zinc-500 font-black text-[10px] md:text-xs uppercase tracking-widest">
            {["Teacher", "Activist", "Strategist", "Martyr"].map((tag) => (
              <span
                key={tag}
                className="px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md hover:bg-red-700/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-[1400px] mx-auto px-6 -mt-32 relative z-30 space-y-32">
        {/* 2. CORE IDENTITY BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <DetailCard
            icon={<Calendar />}
            label="জন্ম (Birth)"
            value="৩০ জুন, ১৯৯৩"
            sub="৩০ জুন ১৯৯৩"
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

        {/* 3. BIOGRAPHICAL SUMMARY */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-red-600 font-black uppercase tracking-widest text-sm">
              Brief Biography
            </h2>
            <h3 className="text-4xl md:text-5xl font-black leading-tight">
              জীবনবৃত্তান্ত ও কর্ম
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              শরীফ ওসমান বিন হাদি, যিনি ওসমান গণি নামেও পরিচিত, ছিলেন একজন
              বাংলাদেশি রাজনীতিবিদ, শিক্ষক ও সমাজকর্মী। তিনি ইনকিলাব মঞ্চের
              মুখপাত্র এবং ২০২৪ সালের জুলাই গণঅভ্যুত্থানের অন্যতম সংগঠক হিসেবে
              পরিচিত ছিলেন। তিনি ঢাকা বিশ্ববিদ্যালয়ের রাষ্ট্রবিজ্ঞান বিভাগ থেকে
              স্নাতক ও স্নাতকোত্তর ডিগ্রি লাভ করেন।
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-zinc-900/50 rounded-2xl border border-white/5">
                <GraduationCap className="text-red-700 mb-2" />
                <h4 className="font-bold">শিক্ষা</h4>
                <p className="text-xs text-zinc-500">
                  রাষ্ট্রবিজ্ঞান বিভাগ, ঢাকা বিশ্ববিদ্যালয়
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
          <div className="relative">
            <div className="absolute inset-0 bg-red-700/20 blur-[100px] rounded-full" />
            <div className="relative bg-zinc-900 border border-white/10 p-8 rounded-[3rem] space-y-6">
              <Quote className="text-red-700 opacity-50" size={40} />
              <p className="text-2xl font-serif italic text-zinc-200 leading-snug">
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
        <section className="grid md:grid-cols-2 gap-20 items-start">
          <div className="sticky top-32 space-y-8">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none">
              বিপ্লবীর <br /> <span className="text-red-600">টাইমলাইন</span>
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-md">
              নলছিটির নিভৃত গ্রাম থেকে শুরু হয়ে ঢাকা বিশ্ববিদ্যালয়ের রাজপথ,
              অতঃপর ইনকিলাব মঞ্চের কণ্ঠস্বর।
            </p>
          </div>
          <div className="space-y-12 border-l border-red-900/30 pl-8 md:pl-16">
            <TimelineItem
              year="১৯৯৩"
              title="শৈশব ও প্রারম্ভিক জীবন"
              desc="ঝালকাঠি জেলার নলছিটি উপজেলার এক মাদ্রাসা শিক্ষক ও স্থানীয় ইমামের পরিবারে জন্ম। ছয় ভাইবোনের মধ্যে তিনি ছিলেন সর্বকনিষ্ঠ।"
            />
            <TimelineItem
              year="২০১১ - ২০১৫"
              title="শিক্ষা ও ঢাবি জীবন"
              desc="ঝালকাঠি এন এস কামিল মাদ্রাসা থেকে আলিম পাসের পর ঢাকা বিশ্ববিদ্যালয়ের রাষ্ট্রবিজ্ঞান বিভাগে ভর্তি ও সক্রিয় ছাত্র রাজনীতিতে অংশগ্রহণ।"
            />
            <TimelineItem
              year="২০২২"
              title="পেশাগত জীবন"
              desc="ইউনিভার্সিটি অফ স্কলারসে বিজনেস স্টাডিজ বিভাগে প্রভাষক হিসেবে যোগদান। শিক্ষকতার পাশাপাশি সামাজিক আন্দোলনে সক্রিয়তা।"
            />
            <TimelineItem
              year="২০২৪"
              title="জুলাই গণঅভ্যুত্থান"
              desc="রামপুরা এলাকার সমন্বয়কারী হিসেবে বিপ্লবে নেতৃত্ব। পরবর্তীতে 'ইনকিলাব মঞ্চ'-এর মুখপাত্র হিসেবে দায়িত্ব গ্রহণ।"
            />
            <TimelineItem
              year="২০২৫ (ডিসেম্বর ১২)"
              title="হামলা ও ষড়যন্ত্র"
              desc="পল্টন এলাকায় মসজিদ থেকে বের হওয়ার পর মুখোশধারী আততায়ীদের গুলিতে মাথায় আঘাতপ্রাপ্ত হন।"
            />
            <TimelineItem
              year="২০২৫ (ডিসেম্বর ১৮)"
              title="শাহাদাত বরণ"
              desc="সিঙ্গাপুর জেনারেল হাসপাতালে চিকিৎসাধীন অবস্থায় ৩২ বছর বয়সে শাহাদাত বরণ করেন। ইন্না লিল্লাহি ওয়া ইন্না ইলাইহি রাজিউন।"
            />
          </div>
        </section>

        {/* 5. PHILOSOPHICAL PILLARS */}
        <section className="py-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-red-600 font-black uppercase tracking-[0.5em] text-xs">
              Aims & Values
            </h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter">
              আদর্শিক ভিত্তি
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <PillarCard
              icon={<Scale />}
              title="Justice"
              desc="আওয়ামী লীগকে সাংবিধানিকভাবে রাজনীতি থেকে নিষিদ্ধ করার দাবিতে তিনি ছিলেন আপোষহীন।"
            />
            <PillarCard
              icon={<Shield />}
              title="Resistance"
              desc="২০২৪-এর বিপ্লব পরবর্তী বাংলাদেশে ভারতীয় আধিপত্যবাদের বিরুদ্ধে তিনি ছিলেন বলিষ্ঠ কণ্ঠস্বর।"
            />
            <PillarCard
              icon={<Crosshair />}
              title="Representation"
              desc="২০২৬ সালের নির্বাচনে ঢাকা-৮ আসন থেকে স্বতন্ত্র প্রার্থী হিসেবে ইনসাফ কায়েমের লক্ষ্য নিয়েছিলেন।"
            />
          </div>
        </section>

        {/* 6. FINAL RESTING PLACE */}
        <section className="text-center space-y-12 bg-zinc-900/30 py-20 rounded-[4rem] border border-white/5">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900 border border-white/10 text-zinc-500 font-black text-[10px] uppercase tracking-widest">
            <MapPin size={14} className="text-red-600" /> The Eternal Abode
          </div>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter">
            নজরুলের পাশে <br />{" "}
            <span className="text-red-700">অনন্ত শয়ানে</span>
          </h2>
          <p className="text-zinc-500 text-xl max-w-3xl mx-auto leading-relaxed px-6">
            ২০শে ডিসেম্বর ২০২৫ তারিখে লক্ষ মানুষের উপস্থিতিতে জানাযা শেষে তাঁকে
            জাতীয় কবি কাজী নজরুল ইসলামের সমাধিস্থলের পাশে ঢাকা বিশ্ববিদ্যালয়
            কেন্দ্রীয় মসজিদ প্রাঙ্গণে সমাহিত করা হয়।
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-10">
            <button className="group flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-700 hover:text-white transition-all shadow-3xl active:scale-95">
              সম্পূর্ণ টাইমলাইন
              <ArrowRight
                size={16}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
            <button className="group flex items-center gap-3 bg-transparent border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all active:scale-95">
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
  <div className="bg-zinc-950 border border-white/10 p-8 md:p-10 rounded-[2.5rem] hover:border-red-700/50 transition-all duration-500 group relative overflow-hidden">
    <div className="absolute top-0 right-0 w-24 h-24 bg-red-900/5 blur-3xl" />
    <div className="text-red-600 mb-8 group-hover:scale-110 transition-transform duration-500">
      {React.cloneElement(icon, { size: 32 })}
    </div>
    <div className="space-y-2">
      <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">
        {label}
      </p>
      <p className="text-lg md:text-xl font-black text-zinc-100 leading-tight">
        {value}
      </p>
      <p className="text-[10px] text-red-700 font-bold uppercase tracking-wider opacity-60">
        {sub}
      </p>
    </div>
  </div>
);

const TimelineItem = ({ year, title, desc }) => (
  <div className="relative group pb-12">
    <div className="absolute -left-[41px] md:-left-[73px] top-2 w-4 h-4 bg-red-700 rounded-full border-4 border-[#050000] z-10 group-hover:scale-150 transition-transform" />
    <span className="text-red-600 font-black text-2xl tracking-tighter block mb-2">
      {year}
    </span>
    <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
    <p className="text-zinc-500 leading-relaxed text-sm md:text-base">{desc}</p>
  </div>
);

const PillarCard = ({ icon, title, desc }) => (
  <div className="bg-zinc-950 p-12 border border-white/5 hover:bg-zinc-900 transition-colors text-center group">
    <div className="text-red-600 mb-6 flex justify-center group-hover:scale-110 transition-transform">
      {React.cloneElement(icon, { size: 40 })}
    </div>
    <h3 className="text-xl font-black uppercase mb-4 tracking-widest">
      {title}
    </h3>
    <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default AboutPage;
