"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, ArrowRight, ShieldCheck, Flame } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        router.push("/admin");
      } else {
        setError(data.error || "Access Denied: Invalid Credentials");
      }
    } catch (err) {
      setError(err.message || "Connection failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen py-32 bg-[#050000] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Cinematic Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-900/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-red-700/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header Logo/Identity */}
      <div className="mb-12 text-center relative z-10">
        <div className="w-16 h-16 bg-red-700 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-red-700/30 mb-6 rotate-3">
          <ShieldCheck size={32} strokeWidth={2.5} />
        </div>
        <h1 className="text-3xl font-black tracking-tighter uppercase mb-2">
          Admin <span className="text-red-700">Access</span>
        </h1>
        <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em]">
          Official Legacy Archive
        </p>
      </div>

      {/* Login Card */}
      <main className="w-full max-w-md relative z-10">
        <div className="bg-zinc-950 border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-3xl backdrop-blur-sm relative overflow-hidden group">
          {/* Subtle accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-700/50 to-transparent" />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4 flex items-center gap-2">
                  <Mail size={12} /> Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-red-600 transition-all placeholder:text-zinc-700"
                  placeholder="admin@osmanhadi.com"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4 flex items-center gap-2">
                  <Lock size={12} /> Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-red-600 transition-all placeholder:text-zinc-700"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-950/30 border border-red-900/50 p-4 rounded-xl flex items-center gap-3 text-red-500 text-xs font-bold animate-in fade-in slide-in-from-top-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-red-700 hover:text-white transition-all disabled:opacity-50 active:scale-95 shadow-xl group"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin group-hover:border-white group-hover:border-t-transparent" />
              ) : (
                <>
                  Authenticate <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer Link */}
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 hover:text-red-500 transition-colors flex items-center justify-center gap-2 group"
          >
            <div className="w-6 h-px bg-zinc-800 group-hover:bg-red-900 transition-colors" />
            Back to site
            <div className="w-6 h-px bg-zinc-800 group-hover:bg-red-900 transition-colors" />
          </Link>
        </div>
      </main>

      {/* Background ID Text */}
      <div className="fixed bottom-[-5%] left-[-5%] text-[15rem] font-black text-white/[0.02] leading-none pointer-events-none select-none z-0">
        ADMIN
      </div>
    </div>
  );
}
