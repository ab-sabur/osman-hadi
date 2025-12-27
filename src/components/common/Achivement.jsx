import React from "react";
import { Trophy, Mic2, Users, BookOpen, Stars } from "lucide-react";

/**
 * ACHIEVEMENTS SECTION - SHAHEED OSMAN HADI MEMORIAL
 * Designed to fit the high-contrast dark cinematic theme.
 */

const AchievementSection = ({ from = "" }) => {
  const achievements = [
    {
      year: "2007",
      title: "স্বর্ণপদক - তাৎক্ষণিক বক্তৃতা",
      desc: "ইসলামিক ফাউন্ডেশন বাংলাদেশ আয়োজিত তাৎক্ষণিক বক্তৃতা প্রতিযোগিতায় জাতীয় চ্যাম্পিয়ন।",
      icon: <Trophy className="text-red-500" />,
      color: "from-red-900/20",
    },
    {
      year: "2008",
      title: "চ্যাম্পিয়ন - কবিতা আবৃত্তি",
      desc: "শিক্ষা মন্ত্রণালয় আয়োজিত জাতীয় কবিতা আবৃত্তি প্রতিযোগিতায় প্রথম স্থান অর্জন।",
      icon: <Mic2 className="text-red-500" />,
      color: "from-zinc-900",
    },
    {
      year: "2009",
      title: "সেরা বক্তা - জাতীয় বিতর্ক",
      desc: "শিক্ষা মন্ত্রণালয় আয়োজিত জাতীয় বিতর্ক প্রতিযোগিতায় শ্রেষ্ঠ বক্তার সম্মাননা।",
      icon: <Stars className="text-red-500" />,
      color: "from-zinc-900",
    },
    {
      year: "2024",
      title: "ইনকিলাব মঞ্চ প্রতিষ্ঠা",
      desc: "বিপ্লবী প্ল্যাটফর্ম প্রতিষ্ঠা এবং রাষ্ট্র পুনর্গঠন ও রাজনৈতিক সচেতনতার জন্য ১০০+ কর্মসূচি সফলভাবে পরিচালনা।",
      icon: <Users className="text-red-500" />,
      color: "from-red-900/20",
    },
  ];

  return (
    <section
      className={`py-0 bg-[#050000] ${
        from == "home" ? "max-w-[1400px] px-6 mx-auto" : ""
      }`}
    >
      {/* Section Header */}
      <div className={`mb-16 md:mb-24`}>
        <h3 className="text-red-600 font-black uppercase tracking-[0.4em] text-xs mb-4 flex items-center gap-2">
          <div className="w-8 h-px bg-red-600" /> Honors & Impact
        </h3>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">
          অবদান ও <span className="text-red-700">অর্জিত সম্মান</span>
        </h2>
        <p className="text-zinc-500 mt-6 max-w-xl text-lg">
          শৈশব থেকেই তিনি তাঁর মেধা ও বাগ্মিতার স্বাক্ষর রেখেছেন জাতীয় পর্যায়ে,
          যা পরবর্তীতে তাকে ইনকিলাব মঞ্চের নেতৃত্বে সহায়তা করে।
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {achievements.map((item, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden bg-gradient-to-br ${item.color} to-zinc-950 border border-white/5 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] hover:border-red-600/30 transition-all duration-500`}
          >
            {/* Decorative Background Icon */}
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500">
              {React.cloneElement(item.icon, { size: 200 })}
            </div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0 w-16 h-16 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-red-700 group-hover:scale-110 transition-all duration-500 shadow-2xl">
                {React.cloneElement(item.icon, {
                  size: 32,
                  className: "text-white",
                })}
              </div>

              <div className="space-y-4">
                <span className="text-red-600 font-black tracking-[0.3em] text-xs">
                  {item.year}
                </span>
                <h4 className="text-2xl md:text-3xl font-black text-zinc-100 group-hover:text-white">
                  {item.title}
                </h4>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed group-hover:text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Hover Line Effect */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-700 group-hover:w-full transition-all duration-700" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementSection;
