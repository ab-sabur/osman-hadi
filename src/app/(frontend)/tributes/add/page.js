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
  LocationEdit,
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
      setError("সার্ভারের সাথে সংযোগ বিচ্ছিন্ন হয়েছে।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
      <BackSection
        links={[
          { path: "/", text: "", icon: <Home size={15} /> },
          { path: "/tributes", text: "শ্রদ্ধাঞ্জলি" },
        ]}
        current={`শ্রদ্ধাঞ্জলি জানান`}
      />

      <div className="mb-12 text-center lg:text-left">
        <h3 className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 flex items-center justify-center lg:justify-start gap-2">
          <Heart size={12} fill="currentColor" /> হৃদয়ে ওসমান হাদী
        </h3>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
          স্মৃতি ও <span className="text-red-700">শ্রদ্ধাঞ্জলি</span>
        </h2>
      </div>

      {submitted ? (
        <div className="text-center py-12 mb-10 max-w-2xl mx-auto bg-zinc-950 rounded-[2.5rem] border border-white/10 animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto text-green-500 mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h4 className="text-2xl font-black mb-2 text-white uppercase tracking-tighter">
            ধন্যবাদ!
          </h4>
          <p className="text-zinc-500 text-sm mb-8 px-10">
            আপনার বার্তাটি সফলভাবে জমা হয়েছে। যাচাই শেষে এটি প্রকাশিত হবে।
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-red-600 text-[10px] font-black uppercase tracking-[0.3em] hover:text-white transition-colors"
          >
            আরেকটি লিখুন
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-6 mb-12 w-full p-8 border border-white/10 rounded-[2.5rem] bg-zinc-950/50 backdrop-blur-sm"
        >
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-red-500 text-xs font-bold animate-pulse">
              {error}
            </div>
          )}

          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 ml-4">
                আপনার নাম
              </label>
              <div className="relative">
                <User
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-700"
                  size={18}
                />
                <input
                  required
                  type="text"
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-sm focus:border-red-600 focus:bg-zinc-900 outline-none transition-all text-white"
                  placeholder="নাম..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 ml-4">
                ইমেইল (ঐচ্ছিক)
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-700"
                  size={18}
                />
                <input
                  type="email"
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-sm focus:border-red-600 focus:bg-zinc-900 outline-none transition-all text-white"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Row 2: Relation & Position */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 ml-4">
                পরিচয় / সম্পর্ক
              </label>
              <select
                className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-red-600 outline-none text-white appearance-none cursor-pointer"
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

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 ml-4">
                আপনার অবস্থান (ঐচ্ছিক)
              </label>
              <div className="relative">
                <LocationEdit
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-700"
                  size={18}
                />
                <input
                  type="text"
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-sm focus:border-red-600 outline-none text-white"
                  placeholder="শহর / দেশ..."
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Tribute Type */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 ml-4">
              বার্তার ধরন
            </label>
            <div className="relative">
              <Tag
                className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-700"
                size={18}
              />
              <select
                className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-sm focus:border-red-600 outline-none text-white appearance-none cursor-pointer"
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

          {/* Message Area */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 ml-4">
              আপনার বার্তা
            </label>
            <div className="relative">
              <MessageSquare
                className="absolute left-5 top-5 text-zinc-700"
                size={18}
              />
              <textarea
                required
                rows={5}
                className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-sm focus:border-red-600 outline-none transition-all resize-none text-white"
                placeholder="আপনার গভীর অনুভূতি ব্যক্ত করুন..."
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
            className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-red-700 hover:text-white transition-all disabled:opacity-50 active:scale-[0.98]"
          >
            {loading ? (
              "পাঠানো হচ্ছে..."
            ) : (
              <>
                <Send size={14} /> বার্তা পাঠান
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
