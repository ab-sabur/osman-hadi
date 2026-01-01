"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Trash2,
  CheckCheck,
  Edit3,
  Mail,
  RefreshCw,
  Calendar,
  User,
  Inbox,
  Clock,
} from "lucide-react";
import { revalidate } from "./action";

const MessagesList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact-messages");
      if (!res.ok) throw new Error("Failed to fetch messages");
      const data = await res.json();
      setItems(data.messages || []);
    } catch (err) {
      toast.error(err.message || "Error fetching messages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this message?")) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/contact-messages/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");
      await revalidate();
      toast.success("Message deleted successfully");
      fetchItems();
    } catch (err) {
      toast.error(err.message || "Delete failed");
    } finally {
      setLoading(false);
    }
  };

  const handleMarkRead = async (id) => {
    try {
      const res = await fetch(`/api/contact-messages/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_read: true }),
      });
      if (!res.ok) throw new Error("Update failed");
      await revalidate();
      toast.success("Marked as read");
      fetchItems();
    } catch (err) {
      toast.error("Update failed");
    }
  };

  return (
    <div className="mt-32 text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic flex items-center gap-4">
              <Inbox className="text-red-700" size={40} />
              Messages <span className="text-zinc-800 not-italic">Inbox</span>
            </h1>
            <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em] mt-2">
              Visitor Suggestions & Contact Records
            </p>
          </div>

          <button
            onClick={fetchItems}
            disabled={loading}
            className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-700 transition-all disabled:opacity-50"
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />{" "}
            Refresh Feed
          </button>
        </div>

        {/* Messages List */}
        <div className="space-y-4">
          {items.length === 0 && !loading && (
            <div className="text-center py-32 border border-dashed border-white/10 rounded-[3rem]">
              <Mail className="mx-auto text-zinc-900 mb-4" size={48} />
              <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs italic">
                No new messages in the archive.
              </p>
            </div>
          )}

          {items.map((it) => (
            <div
              key={it._id}
              className={`group relative bg-zinc-950 border transition-all duration-500 rounded-[2rem] overflow-hidden ${
                it.is_read
                  ? "border-white/10 opacity-60"
                  : "border-red-900/30 shadow-[0_0_30px_-15px_rgba(220,38,38,0.2)]"
              }`}
            >
              {/* "Unread" Glow Indicator */}
              {!it.is_read && (
                <div className="absolute top-0 left-0 w-1 h-full bg-red-700 shadow-[2px_0_10px_rgba(220,38,38,0.5)]" />
              )}

              <div className="p-8 md:p-10 flex flex-col lg:flex-row justify-between gap-8">
                <div className="flex-1 space-y-6">
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                    <div className="flex items-center gap-2 text-white font-black uppercase text-xs tracking-tight">
                      <User size={14} className="text-red-700" /> {it.name}
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400 font-bold text-xs">
                      <Mail size={14} /> {it.email}
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400 font-bold text-[10px] uppercase tracking-widest">
                      <Clock size={12} /> {it?.createDate?.date} •{" "}
                      {it?.createDate?.formatedTime}
                    </div>
                  </div>

                  {/* Message Content */}
                  <div>
                    {it.subject && (
                      <h3 className="text-zinc-400 font-black uppercase text-[10px] tracking-[0.2em] mb-2">
                        Subject: {it.subject}
                      </h3>
                    )}
                    <p className="text-zinc-300 text-lg leading-relaxed italic font-serif bg-zinc-900/30 p-6 rounded-2xl border border-white/[0.02]">
                      &quot;{it.message}&quot;
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex lg:flex-col items-center justify-end gap-3 shrink-0">
                  <button
                    onClick={() => handleMarkRead(it._id)}
                    disabled={it.is_read}
                    title="Mark as Read"
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                      it.is_read
                        ? "bg-zinc-900 text-zinc-700 cursor-default"
                        : "bg-green-600/10 text-green-500 hover:bg-green-600 hover:text-white"
                    }`}
                  >
                    <CheckCheck size={20} />
                  </button>

                  <button
                    onClick={() => handleDelete(it._id)}
                    title="Delete Message"
                    className="w-12 h-12 rounded-2xl bg-zinc-900 text-zinc-400 flex items-center justify-center hover:bg-red-700 hover:text-white transition-all"
                  >
                    <Trash2 size={20} />
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

export default MessagesList;
