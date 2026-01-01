"use client";
import { useState } from "react";
import {
  Upload,
  User,
  Mail,
  Link as LinkIcon,
  FileText,
  CheckCircle2,
  Home,
  Youtube,
  Image as ImageIcon,
  ShieldAlert,
} from "lucide-react";
import BackSection from "@/components/common/BackSection";

export default function FileRequestPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    contributor_name: "",
    contributor_email: "",
    content_type: "video",
    title: "",
    source_url: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/file", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          contributor_name: "",
          contributor_email: "",
          content_type: "video",
          title: "",
          source_url: "",
          description: "",
        });
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Connection failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="mt-32 mb-12 text-white flex items-center justify-center p-6">
        <div className="text-center py-16 px-10 max-w-2xl bg-zinc-950 rounded-[3rem] border border-white/10 shadow-2xl animate-in fade-in zoom-in duration-500">
          <div className="w-24 h-24 bg-red-600/10 border border-red-600/20 rounded-full flex items-center justify-center mx-auto text-red-600 mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter italic">
            ধন্যবাদ, আপনার অবদান চিরস্মরণীয়
          </h2>
          <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
            আপনার পাঠানো ফাইলটি আমাদের এডমিন প্যানেলে জমা হয়েছে। যাচাই বাছাই
            শেষে এটি আর্কাইভে যুক্ত করা হবে।
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-white text-black px-10 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] hover:bg-red-700 hover:text-white transition-all"
          >
            আরেকটি জমা দিন (Submit Another)
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#050000] text-white pb-32 pt-32 px-6 font-sans">
      <div className="max-w-[1400px] mx-auto">
        <BackSection
          links={[{ path: "/", text: "", icon: <Home size={15} /> }]}
          current={`Contribution`}
        />

        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none italic uppercase">
            আর্কাইভে <span className="text-red-700">যুক্ত করুন</span>
          </h2>
          <p className="text-zinc-400 mt-6 max-w-2xl text-lg leading-relaxed italic">
            ওসমান হাদী সম্পর্কিত বিরল ছবি, ভিডিও বা কোনো স্মৃতি সম্বলিত ভিডিও
            লিংক বা ডকুমেন্ট এখানে জমা দিতে পারেন।
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Left Column: Personal Info */}
          <div className="space-y-6">
            <div className="bg-zinc-950/50 p-8 rounded-[2.5rem] border border-white/10 space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">
                  আপনার নাম
                </label>
                <div className="relative">
                  <User
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-700"
                    size={18}
                  />
                  <input
                    type="text"
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-sm focus:border-red-600 outline-none transition-all text-white"
                    placeholder="Full Name"
                    value={formData.contributor_name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contributor_name: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">
                  ইমেইল
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-700"
                    size={18}
                  />
                  <input
                    type="email"
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-sm focus:border-red-600 outline-none transition-all text-white"
                    placeholder="email@example.com"
                    value={formData.contributor_email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contributor_email: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="bg-red-950/10 border border-red-900/20 p-6 rounded-[2rem] flex items-start gap-4">
              <ShieldAlert className="text-red-600 shrink-0 mt-1" size={20} />
              <p className="text-[11px] text-zinc-400 leading-relaxed font-bold uppercase tracking-wider">
                আর্কাইভের সুরক্ষার্থে আমরা সরাসরি ফাইল আপলোড নিচ্ছি না। অনুগ্রহ
                করে ড্রাইভ, ফেসবুক বা ইউটিউব লিংক শেয়ার করুন।
              </p>
            </div>
          </div>

          {/* Right Column: File Details */}
          <div className="bg-zinc-950 p-8 md:p-10 rounded-[3rem] border border-white/10 shadow-3xl space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">
                  কন্টেন্টের ধরন
                </label>
                <select
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-red-600 outline-none cursor-pointer text-white appearance-none"
                  value={formData.content_type}
                  onChange={(e) =>
                    setFormData({ ...formData, content_type: e.target.value })
                  }
                >
                  <option value="video">ভিডিও (Video)</option>
                  <option value="photo">ছবি (Photo)</option>
                  <option value="document">নথি (Document)</option>
                </select>
              </div>

              <div className="space-y-2 col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">
                  শিরোনাম (Title)
                </label>
                <div className="relative">
                  <FileText
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-700"
                    size={18}
                  />
                  <input
                    required
                    type="text"
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-sm focus:border-red-600 outline-none transition-all text-white"
                    placeholder="ফুটেজ বা ছবির নাম..."
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2 col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">
                  সোর্স লিংক (URL)
                </label>
                <div className="relative">
                  <LinkIcon
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-700"
                    size={18}
                  />
                  <input
                    required
                    type="url"
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-sm focus:border-red-600 outline-none transition-all text-white placeholder:text-zinc-800"
                    placeholder="Drive / YouTube / FB Link"
                    value={formData.source_url}
                    onChange={(e) =>
                      setFormData({ ...formData, source_url: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2 col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">
                  সংক্ষিপ্ত বর্ণনা
                </label>
                <textarea
                  rows={3}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-red-600 outline-none transition-all resize-none text-white"
                  placeholder="এই কন্টেন্টটি সম্পর্কে বিস্তারিত কিছু লিখুন..."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest text-center">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-red-700 hover:text-white transition-all disabled:opacity-50 active:scale-95 shadow-xl"
            >
              {loading ? "জমা হচ্ছে..." : "জমা দিন (Send Request)"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
