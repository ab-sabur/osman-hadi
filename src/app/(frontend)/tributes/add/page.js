"use client";
import { useState } from "react";
import {
  Send,
  User,
  MessageSquare,
  CheckCircle2,
  Home,
  Heart,
  Briefcase,
  Mail,
  Tag,
  MapPin, // Updated from LocationEdit for standard Lucide set
} from "lucide-react";
import BackSection from "@/components/common/BackSection";

export default function TributeForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    relation: "সাধারণ নাগরিক",
    position: "",
    tributeType: "স্মৃতিচারণ",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/tributes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          relation: "সাধারণ নাগরিক",
          position: "",
          tributeType: "স্মৃতিচারণ",
          message: "",
        });
      } else {
        const data = await response.json();
        setError(data.error || "কিছু একটা ভুল হয়েছে। আবার চেষ্টা করুন।");
      }
    } catch (err) {
      setError("সার্ভারের সাথে সংযোগ বিচ্ছিন্ন হয়েছে।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-20">
      <BackSection
        links={[
          { path: "/", text: "", icon: <Home size={15} /> },
          { path: "/tributes", text: "শ্রদ্ধাঞ্জলি" },
        ]}
        current={`শ্রদ্ধাঞ্জলি জানান`}
      />

      {/* Main Grid Layout: 2 Columns on large screens */}
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mt-8 items-start">
        {/* Left Column: Branding (Sticky on Desktop) */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <div className="text-left">
            <h3 className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 flex items-center justify-start gap-2">
              <Heart size={12} fill="currentColor" /> হৃদয়ে ওসমান হাদী
            </h3>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-[0.9]">
              স্মৃতি ও <br />
              <span className="text-red-700 italic">শ্রদ্ধাঞ্জলি</span>
            </h2>
            <p className="text-zinc-400 mt-8 max-w-md text-lg leading-relaxed lg:mx-0">
              আপনার প্রতিটি শব্দ আমাদের ইতিহাসের অংশ হয়ে থাকবে। শহীদের স্মরণে
              আপনার পবিত্র অনুভূতিগুলো এখানে ব্যক্ত করুন।
            </p>
          </div>
        </div>

        {/* Right Column: The Form */}
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="text-center py-20 px-10 bg-zinc-950 rounded-[3rem] border border-white/10 animate-in fade-in zoom-in duration-500">
              <div className="w-24 h-24 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto text-green-500 mb-8">
                <CheckCircle2 size={48} />
              </div>
              <p className="text-3xl font-black mb-4 text-white uppercase tracking-tighter">
                ধন্যবাদ!
              </p>
              <p className="text-zinc-400 text-base mb-10 max-w-sm mx-auto">
                আপনার শ্রদ্ধাঞ্জলিটি সফলভাবে জমা হয়েছে। যাচাই শেষে এটি আর্কাইভে
                প্রকাশিত হবে।
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-red-500 text-[10px] font-black uppercase tracking-[0.4em] hover:text-white transition-colors border border-red-600/20 px-8 py-3 rounded-full hover:bg-red-600/10"
              >
                আরেকটি লিখুন
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-8 p-8 md:p-12 border border-white/10 rounded-[3rem] bg-zinc-950/40 backdrop-blur-md shadow-2xl"
            >
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-2xl text-red-500 text-xs font-bold animate-pulse">
                  {error}
                </div>
              )}

              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 ml-4">
                    আপনার নাম
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-700"
                      size={18}
                    />
                    <input
                      required
                      type="text"
                      className="w-full bg-zinc-900/40 border border-white/5 rounded-[1.5rem] pl-16 pr-6 py-5 text-sm focus:border-red-600 outline-none transition-all text-white placeholder:text-zinc-800"
                      placeholder="সম্পূর্ণ নাম লিখুন"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 ml-4">
                    ইমেইল (ঐচ্ছিক)
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-700"
                      size={18}
                    />
                    <input
                      type="email"
                      className="w-full bg-zinc-900/40 border border-white/5 rounded-[1.5rem] pl-16 pr-6 py-5 text-sm focus:border-red-600 outline-none transition-all text-white placeholder:text-zinc-800"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Relation */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 ml-4">
                    পরিচয় / সম্পর্ক
                  </label>
                  <div className="relative">
                    <Briefcase
                      className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-700 pointer-events-none"
                      size={18}
                    />
                    <select
                      className="w-full bg-zinc-900/40 border border-white/5 rounded-[1.5rem] pl-16 pr-10 py-5 text-sm focus:border-red-600 outline-none text-white appearance-none cursor-pointer"
                      value={formData.relation}
                      onChange={(e) =>
                        setFormData({ ...formData, relation: e.target.value })
                      }
                    >
                      <option value="সাধারণ নাগরিক">সাধারণ নাগরিক</option>
                      <option value="ছাত্র / সহপাঠী">ছাত্র / সহপাঠী</option>
                      <option value="সহযোদ্ধা">সহযোদ্ধা</option>
                      <option value="পরিবার">পরিবার</option>
                    </select>
                  </div>
                </div>

                {/* Position */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 ml-4">
                    অবস্থান / পদবী
                  </label>
                  <div className="relative">
                    <MapPin
                      className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-700"
                      size={18}
                    />
                    <input
                      type="text"
                      className="w-full bg-zinc-900/40 border border-white/5 rounded-[1.5rem] pl-16 pr-6 py-5 text-sm focus:border-red-600 outline-none text-white placeholder:text-zinc-800"
                      placeholder="শহর বা পেশা..."
                      value={formData.position}
                      onChange={(e) =>
                        setFormData({ ...formData, position: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Tribute Type */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 ml-4">
                  বার্তার ধরন
                </label>
                <div className="relative">
                  <Tag
                    className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-700 pointer-events-none"
                    size={18}
                  />
                  <select
                    className="w-full bg-zinc-900/40 border border-white/5 rounded-[1.5rem] pl-16 pr-10 py-5 text-sm focus:border-red-600 outline-none text-white appearance-none cursor-pointer"
                    value={formData.tributeType}
                    onChange={(e) =>
                      setFormData({ ...formData, tributeType: e.target.value })
                    }
                  >
                    <option value="স্মৃতিচারণ">স্মৃতিচারণ (Remembrance)</option>
                    <option value="কবিতা">কবিতা (Poem)</option>
                    <option value="বার্তা">বার্তা (Message)</option>
                    <option value="অন্যান্য">অন্যান্য (Other)</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 ml-4">
                  আপনার বার্তা
                </label>
                <div className="relative">
                  <MessageSquare
                    className="absolute left-6 top-7 text-zinc-700"
                    size={18}
                  />
                  <textarea
                    required
                    rows={6}
                    className="w-full bg-zinc-900/40 border border-white/5 rounded-[1.5rem] pl-16 pr-6 py-6 text-sm focus:border-red-600 outline-none transition-all resize-none text-white placeholder:text-zinc-800"
                    placeholder="শহীদের স্মরণে আপনার গভীর অনুভূতি ব্যক্ত করুন..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black py-6 rounded-[1.5rem] font-black uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-red-700 hover:text-white transition-all disabled:opacity-50 active:scale-[0.98] shadow-2xl"
              >
                {loading ? (
                  "পাঠানো হচ্ছে..."
                ) : (
                  <>
                    <Send size={16} /> বার্তা পাঠান
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
