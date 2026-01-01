import React from "react";
import { GraduationCap, Flame, Award, Globe, Quote } from "lucide-react";

const OsmanAboutSection = () => {
  const highlights = [
    {
      title: "একাডেমিক শ্রেষ্ঠত্ব",
      desc: "ঢাকা বিশ্ববিদ্যালয় থেকে রাজনীতি বিজ্ঞানে বিএসএস ও এমএসএস এবং শাসন ও সন্ত্রাসবাদ নিয়ে গভীর গবেষণা।",
      icon: <GraduationCap size={24} />,
      label: "Academic",
    },
    {
      title: "বিপ্লবী নেতৃত্ব",
      desc: "ইনকিলাব মঞ্চের মুখপাত্র হিসেবে রাজনৈতিক সচেতনতা ও রাষ্ট্র পুনর্গঠনে ১০০+ কর্মসূচির সফল রূপকার।",
      icon: <Flame size={24} />,
      label: "Leadership",
    },
    {
      title: "জাতীয় স্বীকৃতি",
      desc: "তাৎক্ষণিক বক্তৃতায় স্বর্ণপদক, আবৃত্তিতে চ্যাম্পিয়ন এবং জাতীয় বিতর্কে শ্রেষ্ঠ বক্তার সম্মাননা।",
      icon: <Award size={24} />,
      label: "Recognition",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-[#050000] text-white overflow-hidden selection:bg-red-600/30">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADER AREA: Asymmetric Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 md:mb-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter leading-none italic">
              <span className="text-red-500 text-[10px] tracking-normal md:text-xs relative bottom-2">
                Shaheed Osman Hadi Memorial Archive
              </span>
              <br />
              শহীদ ওসমান হাদি <br />{" "}
              <span className="text-zinc-400 not-italic">স্মৃতি আর্কাইভ</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-lg md:text-xl font-medium max-w-sm border-l-2 border-red-900/30 pl-6">
            জুলাই বিপ্লবের বীর সেনানী, ইনকিলাব মঞ্চের মুখপাত্র এবং সার্বভৌমত্বের
            এক অকুতোভয় লড়াকুর সচিত্র জীবনগাথা।
          </p>
        </div>

        {/* TOP CARDS: Borderless Glass Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-1 shadow-2xl">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="group relative bg-zinc-950 p-10 md:p-14 border border-white/10 hover:bg-zinc-900 transition-all duration-500"
            >
              <div className="text-red-600 mb-8 group-hover:scale-110 transition-transform origin-left">
                {item.icon}
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2 block">
                {item.label}
              </div>
              <p className="text-xl md:text-2xl font-black mb-4 group-hover:text-red-500 transition-colors">
                {item.title}
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.desc}
              </p>
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-transparent group-hover:border-t-red-700/20 group-hover:border-r-red-700/20 transition-all" />
            </div>
          ))}
        </div>

        {/* BOTTOM NARRATIVE: Massive Typography Background */}
        <div className="relative mt-12 bg-zinc-950 border border-white/10 rounded-[2rem] md:rounded-[4rem] p-8 md:p-20 overflow-hidden group">
          {/* Subtle Background Text */}
          <div className="absolute top-0 right-0 text-[12rem] font-black text-white/[0.02] leading-none pointer-events-none select-none translate-x-20 -translate-y-10 group-hover:text-red-600/5 transition-colors duration-1000">
            HADI
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div className="shrink-0 w-20 h-20 bg-red-700 rounded-full flex items-center justify-center shadow-3xl shadow-red-700/20">
              <Quote className="text-white" size={32} />
            </div>

            <div className="space-y-8">
              <p className="text-lg md:text-2xl font-medium text-zinc-300 leading-relaxed font-serif italic">
                ওসমান হাদী বাংলাদেশের একজন তরুণ রাজনৈতিক নেতা যিনি জুলাই
                গণঅভ্যুত্থানের পর সারাদেশে শিক্ষার্থীদের সাথে{" "}
                <span className="text-white font-bold not-italic">
                  ইনকিলাব মঞ্চ
                </span>{" "}
                গঠন করেন। তাঁর লক্ষ্য কেবল ক্ষমতা নয়, বরং রাষ্ট্র পুনর্গঠন এবং
                একটি সত্যিকারের সার্বভৌম বাংলাদেশ প্রতিষ্ঠা করা।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OsmanAboutSection;
