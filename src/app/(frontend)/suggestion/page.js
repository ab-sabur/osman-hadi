"use client";
import { useState } from "react";
import {
  Send,
  User,
  Mail,
  PenTool,
  MessageSquare,
  CheckCircle2,
  Home,
  Headset,
  ArrowRight,
} from "lucide-react";
import BackSection from "@/components/common/BackSection";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await response.json();
        setError(data.error || "বার্তা পাঠানো সম্ভব হয়নি।");
      }
    } catch (err) {
      setError("সার্ভারের সাথে সংযোগ বিচ্ছিন্ন হয়েছে।");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#050000] text-white flex items-center justify-center p-6">
        <div className="text-center py-20 px-10 max-w-xl bg-zinc-950 rounded-[3rem] border border-white/10 shadow-2xl animate-in fade-in zoom-in duration-700">
          <div className="w-24 h-24 bg-red-600/10 border border-red-600/20 rounded-full flex items-center justify-center mx-auto text-red-600 mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-4xl font-black mb-4 tracking-tighter uppercase italic">
            সফল হয়েছে
          </h2>
          <p className="text-zinc-400 text-lg mb-10 leading-relaxed font-medium">
            আপনার বার্তাটি সফলভাবে আমাদের আর্কাইভে জমা হয়েছে। আমাদের প্রতিনিধি
            শীঘ্রই আপনার সাথে যোগাযোগ করবেন।
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-white text-black px-12 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] hover:bg-red-700 hover:text-white transition-all shadow-xl active:scale-95"
          >
            নতুন বার্তা পাঠান
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#050000] text-white pb-32 pt-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative">
        {/* Navigation */}
        <BackSection
          links={[{ path: "/", text: "", icon: <Home size={15} /> }]}
          current={`Contact`}
        />

        <div className="grid lg:grid-cols-12 gap-16 mt-4 items-start">
          {/* Left Column: Visual/Heading */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.9] italic uppercase">
                পরামর্শ দিন /<br /> <span className="text-red-700">যোগাযোগ করুন</span>
              </h2>
              <p className="text-zinc-400 mt-8 max-w-sm text-lg leading-relaxed font-medium italic">
                আর্কাইভ সংক্রান্ত কোনো প্রশ্ন বা তথ্য শেয়ার করতে আমাদের সরাসরি
                বার্তা পাঠান।
              </p>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-950 p-8 md:p-12 rounded-[3.5rem] border border-white/10 shadow-3xl relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">
                      আপনার নাম
                    </label>
                    <div className="relative">
                      <User
                        className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-700"
                        size={16}
                      />
                      <input
                        required
                        type="text"
                        className="w-full bg-zinc-900/50 border border-white/10 rounded-3xl pl-16 pr-6 py-5 text-sm focus:border-red-600 outline-none transition-all text-white placeholder:text-zinc-700"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">
                      ইমেইল
                    </label>
                    <div className="relative">
                      <Mail
                        className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-700"
                        size={16}
                      />
                      <input
                        required
                        type="email"
                        className="w-full bg-zinc-900/50 border border-white/10 rounded-3xl pl-16 pr-6 py-5 text-sm focus:border-red-600 outline-none transition-all text-white placeholder:text-zinc-700"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">
                    বিষয় (Subject)
                  </label>
                  <div className="relative">
                    <PenTool
                      className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-700"
                      size={16}
                    />
                    <input
                      type="text"
                      className="w-full bg-zinc-900/50 border border-white/10 rounded-3xl pl-16 pr-6 py-5 text-sm focus:border-red-600 outline-none transition-all text-white placeholder:text-zinc-700"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">
                    আপনার বার্তা
                  </label>
                  <div className="relative">
                    <MessageSquare
                      className="absolute left-6 top-7 text-zinc-700"
                      size={16}
                    />
                    <textarea
                      required
                      rows={6}
                      className="w-full bg-zinc-900/50 border border-white/10 rounded-[2.5rem] pl-16 pr-8 py-6 text-sm focus:border-red-600 outline-none transition-all resize-none text-white placeholder:text-zinc-700"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-red-500 text-[10px] font-black uppercase tracking-widest text-center">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white text-black py-6 rounded-3xl font-black uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-red-700 hover:text-white transition-all disabled:opacity-50 active:scale-[0.98] shadow-2xl group"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      বার্তা পাঠান{" "}
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
