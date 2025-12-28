"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Trash2,
  CheckCircle,
  Edit3,
  RefreshCw,
  Heart,
  ShieldCheck,
  User,
  Clock,
  MessageSquareQuote,
  Tag,
  Briefcase,
  LocationEdit,
} from "lucide-react";
import { revalidate } from "./action";

const TributesAdmin = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchItems = async () => {
    setLoading(true);
    try {
      // Fetching from your tribute API
      const res = await fetch("/api/tributes?admin=true");
      if (!res.ok) throw new Error("Failed to fetch tributes");
      const data = await res.json();
      setItems(data.tributes || []);
    } catch (err) {
      toast.error(err.message || "Error fetching tributes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this tribute?")) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/tributes/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      await revalidate();
      toast.success("Tribute deleted permanently");
      fetchItems();
    } catch (err) {
      toast.error("Delete failed");
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id) => {
    try {
      const res = await fetch(`/api/tributes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_approved: true }),
      });
      if (!res.ok) throw new Error("Update failed");
      await revalidate();
      toast.success("Tribute approved for public view");
      fetchItems();
    } catch (err) {
      toast.error("Approval failed");
    }
  };

  return (
    <div className="mt-32 text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic flex items-center gap-4">
              <Heart className="text-red-700" size={40} />
              Tributes <span className="text-zinc-800 not-italic">Archive</span>
            </h1>
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mt-2 italic">
              Public Memorial Moderation
            </p>
          </div>

          <button
            onClick={fetchItems}
            disabled={loading}
            className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-700 transition-all disabled:opacity-50"
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />{" "}
            Refresh List
          </button>
        </div>

        {/* Tributes Feed */}
        <div className="space-y-6">
          {items.length === 0 && !loading && (
            <div className="text-center py-32 border border-dashed border-white/10 rounded-[3rem] text-zinc-600 font-bold uppercase tracking-widest text-xs italic">
              No tributes submitted yet.
            </div>
          )}

          {items.map((it) => (
            <div
              key={it?._id}
              className={`group bg-zinc-950 border transition-all duration-500 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden ${
                it?.is_approved
                  ? "border-white/10 opacity-70"
                  : "border-red-900/30 shadow-[0_0_40px_-15px_rgba(220,38,38,0.25)]"
              }`}
            >
              {/* Approval Status Overlay for Unapproved */}
              {!it?.is_approved && (
                <div className="absolute top-0 left-0 w-1.5 h-full bg-red-700" />
              )}

              <div className="flex flex-col lg:flex-row justify-between gap-8 relative z-10">
                <div className="flex-1 space-y-6">
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                    <div className="flex items-center gap-2 text-white font-black uppercase text-xs tracking-tight">
                      <User size={14} className="text-red-700" /> {it?.name}
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500 font-bold text-xs uppercase tracking-widest">
                      <ShieldCheck size={14} /> {it?.relation}
                    </div>
                    <div className="flex items-center gap-2 text-zinc-600 font-bold text-[10px] uppercase tracking-widest">
                      <Clock size={12} /> {it?.createDate?.date} •{" "}
                      {it?.createDate?.formatedTime}
                    </div>
                  </div>

                  {/* Message Body */}
                  <div className="relative">
                    <MessageSquareQuote
                      className="absolute -left-2 -top-2 text-zinc-900 -z-10"
                      size={48}
                    />
                    <p className="text-zinc-300 text-lg md:text-xl leading-relaxed italic font-serif px-4 border-l border-zinc-800">
                      &quot;{it?.message}&quot;
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 items-center">
                    {/* Status Badge */}
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[9px] font-black uppercase tracking-[0.2em] shadow-sm ${
                        it?.is_approved
                          ? "border-green-500/20 bg-green-500/10 text-green-500"
                          : "border-amber-500/20 bg-amber-500/10 text-amber-500"
                      }`}
                    >
                      <div
                        className={`w-1 h-1 rounded-full animate-pulse ${
                          it?.is_approved ? "bg-green-500" : "bg-amber-500"
                        }`}
                      />
                      {it?.is_approved
                        ? "Verified & Published"
                        : "Pending Verification"}
                    </div>

                    {/* Tribute Type Badge */}
                    {it?.tributeType && (
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-zinc-900/50 text-zinc-400 text-[9px] font-black uppercase tracking-[0.2em]">
                        <Tag size={10} className="text-red-700" />
                        {it?.tributeType}
                      </div>
                    )}

                    {/* Position / Occupation Badge */}
                    {it?.position && (
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-zinc-900/50 text-zinc-400 text-[9px] font-black uppercase tracking-[0.2em]">
                        <LocationEdit size={10} className="text-red-700" />
                        {it?.position}
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex lg:flex-col items-center justify-end gap-3 shrink-0">
                  <button
                    onClick={() => handleApprove(it?._id)}
                    disabled={it?.is_approved}
                    title="Approve Tribute"
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-xl ${
                      it?.is_approved
                        ? "bg-zinc-900 text-zinc-700 cursor-default opacity-30"
                        : "bg-zinc-900 text-green-500 hover:bg-green-600 hover:text-white"
                    }`}
                  >
                    <CheckCircle size={22} />
                  </button>

                  <button
                    onClick={() => handleDelete(it?._id)}
                    title="Delete Tribute"
                    className="w-14 h-14 rounded-2xl bg-zinc-900 text-zinc-600 flex items-center justify-center hover:bg-red-700 hover:text-white transition-all shadow-xl"
                  >
                    <Trash2 size={22} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TributesAdmin;
