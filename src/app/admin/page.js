"use client";

import Link from "next/link";
import {
  MessageSquare,
  FileUp,
  Heart,
  ArrowUpRight,
  ShieldCheck,
  LogOut,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="text-white p-6 md:p-12 font-sans overflow-hidden relative mt-32">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-red-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4">
              <ShieldCheck size={14} /> System Secure
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">
              Admin <span className="text-zinc-800 not-italic">Panel</span>
            </h1>
          </div>

          <button className="flex items-center gap-2 px-6 py-3 bg-zinc-900/50 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-700 transition-all group">
            <LogOut
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />{" "}
            Sign Out
          </button>
        </header>

        {/* Stats Grid - Visual Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <DashboardCard
            href="/admin/messages"
            title="Suggestions"
            icon={<MessageSquare size={24} />}
            description="View messages and feedback from visitors."
            count="12 New"
            color="hover:border-blue-500/40"
          />
          <DashboardCard
            href="/admin/file-requests"
            title="File Requests"
            icon={<FileUp size={24} />}
            description="Manage rare photos and video submissions."
            count="05 Pending"
            color="hover:border-red-600/40"
          />
          <DashboardCard
            href="/admin/tributes"
            title="Tributes"
            icon={<Heart size={24} />}
            description="Moderate and approve public tribute posts."
            count="28 Pending"
            color="hover:border-red-600/40"
          />
        </div>
      </div>
    </div>
  );
}

// Sub-component for Dashboard Cards
function DashboardCard({ href, title, icon, description, count, color }) {
  return (
    <Link
      href={href}
      className={`group block p-8 bg-zinc-950 border border-white/10 rounded-[3rem] transition-all duration-500 ${color} hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(220,38,38,0.1)]`}
    >
      <div className="flex justify-between items-start mb-8">
        <div className="w-16 h-16 bg-zinc-900 rounded-[1.5rem] flex items-center justify-center text-zinc-400 group-hover:text-red-600 group-hover:bg-red-600/10 transition-all duration-500">
          {icon}
        </div>
        <div className="text-[10px] font-black uppercase tracking-widest bg-zinc-900 px-4 py-2 rounded-full text-zinc-400 group-hover:text-white transition-colors">
          {count}
        </div>
      </div>

      <h2 className="text-3xl font-black tracking-tighter mb-2 group-hover:italic transition-all uppercase">
        {title}
      </h2>
      <p className="text-zinc-400 text-sm font-medium leading-relaxed">
        {description}
      </p>

      <div className="mt-8 flex items-center gap-2 text-red-500 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
        Open Module <ArrowUpRight size={14} />
      </div>
    </Link>
  );
}
