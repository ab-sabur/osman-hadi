import React from "react";
import {
  Quote,
  Flame,
  MessageCircle,
  ArrowUpRight,
  Shield,
  Heart,
  Scale,
} from "lucide-react";

/**
 * SHAHEED OSMAN HADI - COMPLETE QUOTES ARCHIVE
 * Pure Server Component | No Hooks | All provided quotes included
 */

const QuotesPage = () => {
  const quotes = [
    {
      text: "মৃত্যুর ফায়সালা জমীনে না, আসমানে হয়",
      color: "from-red-900/20",
      category: "Faith",
    },
    {
      text: "জন্মভূমিকে আমরা আর জাহান্নাম হইতে দিবো না। যদি দখল আসে, যুদ্ধ হবে আবার!",
      color: "from-blue-900/20",
      category: "Resistance",
    },
    {
      text: "ঘাস খেয়ে হলেও অস্ত্র বানাও বাংলাদেশ",
      color: "from-purple-900/20",
      category: "Sovereignty",
    },
    {
      text: "গাজায় যুদ্ধ বিরতি সত্যিকারের বিরতি হোক। স্বাধীন হোক সিজদার আকসা!",
      color: "from-orange-900/20",
      category: "Ummah",
    },
    {
      text: "জুলাই সনদ চূড়ান্ত করার পূর্বে শহীদ পরিবার ও চিরতরে অন্ধ, পঙ্গু হয়ে যাওয়া ভাই-বোনদের মতামত গ্রহণ অত্যন্ত জরুরি। জুলাইয়ের সবথেকে বড় শরিক হলেন শহীদ ও আহতরা।",
      color: "from-teal-900/20",
      category: "Justice",
    },
    {
      text: "লুটতন্ত্র রুখে দিন প্রতীক নয়, প্রার্থী দেখে ভোট দিন",
      color: "from-pink-900/20",
      category: "Politics",
    },
    {
      text: "নতুন বাংলাদেশের প্রথম ভোট ইনসাফ ও সততার পক্ষে হোক",
      color: "from-red-900/20",
      category: "Reform",
    },
    {
      text: "নতুন পানিতে সফর এবার হে মাঝি সিন্দাবাদ",
      color: "from-blue-900/20",
      category: "Vision",
    },
    {
      text: "আমি খুবই অনার্ড, একজন রিকশাচালকের সঙ্গে কমপিট করতে পারছি",
      color: "from-purple-900/20",
      category: "Humility",
    },
    {
      text: "ছাপ্পান্ন হাজার বর্গমাইল জুড়ে একদিন করবো আমরা ইনসাফের চাষাবাদ। ইনশাআল্লাহ...",
      color: "from-orange-900/20",
      date: "04 ডিসেম্বর 2025",
      category: "Justice",
    },
    {
      text: "আমি মানুষের কাছ থেকেই শক্তি নিই।",
      context:
        "তিনি ক্ষমতা বা প্রতিষ্ঠানের ওপর নির্ভরশীল নন। জনগণের সমর্থনই তার মূল ভিত্তি।",
      color: "from-teal-900/20",
      date: "25 ডিসেম্বর 2024",
      category: "Power",
    },
    {
      text: "মৃত্যুর ভয় দেখিয়ে লাভ নেই, লড়াই চলবে।",
      context:
        "প্রকৃত পরিবর্তন এবং প্রতিরোধকে ভয় দিয়ে থামানো যায় না। লড়াই অব্যাহত থাকবে।",
      color: "from-pink-900/20",
      date: "04 সেপ্টেম্বর 2025",
      featured: true,
      category: "Courage",
    },
    {
      text: "সবাই যখন মৃত্যুটাকে ভীষণ ভয় পায়, আমি তখন হাসতে হাসতে আল্লাহর কাছে ভীষণ সন্তুষ্টি নিয়ে পৌছাতে চাই। আমি একটা ইনসাফের হাসি নিয়ে আমার আল্লাহর কাছে পৌঁছাতে পেরেছি",
      color: "from-red-900/20",
      featured: true,
      category: "Martyrdom",
    },
    {
      text: "দাসত্বই যে জমিনের নিশ্চল নিয়তি, লড়াই-ই সেখানে সর্বোত্তম এবাদত",
      color: "from-blue-900/20",
      category: "Philosophy",
    },
    {
      text: "বিপ্লবীর মৃত্যু ঘরের মধ্যে হতে পারে না, তার মৃত্যু হবে রাজপথে গ্লোরির মৃত্যু।",
      color: "from-purple-900/20",
      featured: true,
      category: "Glory",
    },
    {
      text: "আমি তো ছোটোবেলা থেকে স্বপ্ন দেখি-একটা তুমুল মিছিল হচ্ছে অন্যায়ের বিরুদ্ধে, সেই মিছিলের সামনে আমি আছি, কোনো একটা বুলেট এসে হয়তো আমার বুকটা বিদ্ধ করে দিয়েছে! এবং সেই মিছিলে হাসতে হাসতে আমি শহীদ হয়ে গেছি",
      color: "from-orange-900/20",
      category: "Vision",
    },
    {
      text: "জান দেব, জুলাই দেব না।",
      color: "from-teal-900/20",
      category: "Promise",
    },
    {
      text: "শাহবাগ যারে কোলে তোলে, কয়দিন পর তার পাইলস হয়!",
      color: "from-pink-900/20",
      category: "Wit",
    },
    {
      text: "যে দিন পুরো শাহবাগ ক্ষমা চেয়ে শাপলা গণহত্যার বিচার চাইবে সেদিন ইনসাফের প্রারম্ভ হবে",
      color: "from-red-900/20",
      category: "Justice",
    },
    {
      text: "দোহাই! শুধু মস্তিষ্কটা খেয়ো না আমার, তাহলে শীগ্রই দাস হয়ে যাবে তোমরাও।",
      color: "from-blue-900/20",
      category: "Warning",
    },
    {
      text: "আমি আমার সন্তানকে রেখে যেতে চাই, আমার মৃত্যুর পরে যেন এই লড়াই বন্ধ না হয়। এই লড়াই যেন বাংলাদেশে কেয়ামত পর্যন্ত থাকে",
      color: "from-purple-900/20",
      featured: true,
      category: "Legacy",
    },
    {
      text: "আমি মরে গেলে আমার বাচ্চাটারে দেইখা রাইখেন। আমাকে মেরে ফেললেও সমস্যা নেই, শুধু হত্যাকারীর বিচারটা আপনারা কইরেন",
      color: "from-orange-900/20",
      category: "Family",
    },
    {
      text: "আমি যখন ইনসাফের লড়াইটা করি তখন তো সেখান পরাজয়ের কিছু নেই। আমি বেঁচে থাকলে গাজী হয়ে লড়ব, মরে গেলে শহীদ হয়ে আল্লাহর কাছে চলে যাব।",
      color: "from-teal-900/20",
      category: "Win-Win",
    },
    {
      text: "আমি শত্রুর সাথেও ইনসাফ করতে চাই",
      color: "from-pink-900/20",
      category: "Character",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050000] text-white selection:bg-red-600/40 font-sans pb-32">
      {/* HEADER SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050000] via-transparent to-transparent z-10" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-900/10 blur-[150px] rounded-full opacity-50" />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <div className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 flex items-center justify-center gap-3">
            <Flame size={18} /> শব্দ যখন আগ্নেয়াস্ত্র
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.85] mb-8">
            অমর{" "}
            <span className="text-red-700 underline decoration-red-900/30 underline-offset-8">
              বাণী
            </span>
          </h1>
          <p className="text-zinc-500 text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            শহীদ শরীফ ওসমান বিন হাদীর বিপ্লবী চিন্তা ও দর্শনের পূর্ণাঙ্গ
            আর্কাইভ। তাঁর প্রতিটি শব্দ ইনসাফ কায়েমের লড়াইয়ের দলিল।
          </p>
        </div>
      </section>

      {/* QUOTES GRID */}
      <main className="max-w-[1400px] mx-auto px-6 mt-16 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {quotes.map((quote, index) => (
            <article
              key={index}
              className={`group relative flex flex-col h-full rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 bg-gradient-to-br ${quote.color} to-zinc-950 border border-white/5 hover:border-red-600/40 transition-all duration-700 shadow-2xl overflow-hidden`}
            >
              {/* Featured Badge */}
              {quote.featured && (
                <div className="absolute top-8 right-8 flex items-center gap-2 px-3 py-1 rounded-full bg-red-700 text-white text-[8px] font-black uppercase tracking-widest shadow-lg z-10">
                  <Flame size={10} /> Featured
                </div>
              )}

              <Quote
                className="text-red-700/20 mb-8 group-hover:text-red-700 transition-colors duration-500"
                size={32}
              />

              <div className="flex-1">
                <p className="text-xl md:text-2xl font-black tracking-tight leading-[1.2] text-zinc-100 mb-6 group-hover:text-white transition-colors">
                  “{quote.text}”
                </p>

                {quote.context && (
                  <p className="text-zinc-500 text-xs md:text-sm italic leading-relaxed mb-8 border-l-2 border-red-900/50 pl-4">
                    {quote.context}
                  </p>
                )}
              </div>

              <div className="mt-auto pt-8 border-t border-white/5 flex items-end justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600 block">
                    {quote.category}
                  </span>
                  {quote.date && (
                    <span className="text-[10px] text-zinc-600 font-bold block">
                      {quote.date}
                    </span>
                  )}
                </div>

                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-zinc-900 flex items-center justify-center text-zinc-600 group-hover:bg-red-700 group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* FOOTER CTA */}
      <section className="max-w-[1400px] mx-auto px-6 mt-32">
        <div className=" bg-zinc-950 border border-white/5 p-12 md:p-24 rounded-[3.5rem] text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-red-900/[0.02] pointer-events-none" />
          <MessageCircle
            className="mx-auto text-red-700 opacity-20 mb-8"
            size={60}
          />
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">
            লড়াই চলবে <br />{" "}
            <span className="text-red-700">কেয়ামত পর্যন্ত</span>
          </h2>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-12 rounded-full" />
          <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            শহীদ শরীফ ওসমান বিন হাদীর এই প্রতিটি বাক্য আগামীর ইনসাফ কায়েমের পথে
            আমাদের শক্তি জোগাবে।
          </p>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-zinc-400 font-black uppercase text-xs tracking-widest cursor-default">
            End of Archive
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuotesPage;
