"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Trash2,
  CheckCircle,
  XCircle,
  Edit3,
  ExternalLink,
  RefreshCw,
  FileVideo,
  FileImage,
  FileText,
  User,
  Mail,
  Link as LinkIcon,
  FolderOpen,
} from "lucide-react";
import { revalidate } from "./action";

const FileRequestsAdmin = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/file-requests");
      if (!res.ok) throw new Error("Failed to fetch requests");
      const data = await res.json();
      setItems(data.requests || []);
    } catch (err) {
      toast.error(err.message || "Error fetching requests");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this request?")) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/file-requests/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      await revalidate();
      toast.success("Request deleted");
      fetchItems();
    } catch (err) {
      toast.error("Delete failed");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (id, status) => {
    try {
      const res = await fetch(`/api/file-requests/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error("Update failed");
      await revalidate();
      toast.success(`Request ${status}`);
      fetchItems();
    } catch (err) {
      toast.error("Update failed");
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "video":
        return <FileVideo className="text-red-600" size={18} />;
      case "photo":
        return <FileImage className="text-blue-500" size={18} />;
      default:
        return <FileText className="text-zinc-400" size={18} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "border-green-500/30 bg-green-500/5 text-green-500";
      case "rejected":
        return "border-red-500/30 bg-red-500/5 text-red-500";
      default:
        return "border-zinc-800 bg-zinc-900/30 text-zinc-400";
    }
  };

  return (
    <div className="mt-32 text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic flex items-center gap-4">
              <FolderOpen className="text-red-700" size={40} />
              Media <span className="text-zinc-800 not-italic">Requests</span>
            </h1>
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mt-2 italic">
              Contribution moderation queue
            </p>
          </div>

          <button
            onClick={fetchItems}
            className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-700 transition-all"
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />{" "}
            Refresh
          </button>
        </div>

        {/* Requests List */}
        <div className="space-y-6">
          {items.length === 0 && !loading && (
            <div className="text-center py-32 border border-dashed border-white/5 rounded-[3rem] text-zinc-600 font-bold uppercase tracking-widest text-xs">
              No content requests found.
            </div>
          )}

          {items.map((it) => (
            <div
              key={it._id}
              className={`bg-zinc-950 border rounded-[2rem] overflow-hidden transition-all duration-500 p-8 md:p-10 ${getStatusColor(
                it.status
              )}`}
            >
              <div className="flex flex-col lg:flex-row justify-between gap-10">
                <div className="flex-1 space-y-6">
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                    <div className="flex items-center gap-2 text-white font-black uppercase text-xs">
                      <User size={14} className="opacity-50" />{" "}
                      {it.contributor_name}
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500 font-bold text-xs">
                      <Mail size={14} /> {it.contributor_email}
                    </div>
                    <div
                      className={`px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ${getStatusColor(
                        it.status
                      )}`}
                    >
                      {getTypeIcon(it.content_type)} {it.content_type}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h2 className="text-2xl font-black tracking-tight text-white mb-2 uppercase italic">
                      {it.title}
                    </h2>
                    <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl italic">
                      "{it.description}"
                    </p>
                  </div>

                  {/* Source Link */}
                  <a
                    href={it.source_url}
                    target="_blank"
                    className="inline-flex items-center gap-3 bg-zinc-900 px-6 py-3 rounded-xl border border-white/5 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                  >
                    <LinkIcon size={14} /> View Source Link{" "}
                    <ExternalLink size={12} />
                  </a>
                </div>

                {/* Admin Actions */}
                <div className="flex lg:flex-col items-center justify-end gap-3 shrink-0">
                  <button
                    onClick={() => handleUpdateStatus(it._id, "approved")}
                    disabled={it.status === "approved"}
                    className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center text-green-500 hover:bg-green-600 hover:text-white transition-all disabled:opacity-20 shadow-xl"
                  >
                    <CheckCircle size={22} />
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(it._id, "rejected")}
                    disabled={it.status === "rejected"}
                    className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center text-red-500 hover:bg-red-600 hover:text-white transition-all disabled:opacity-20 shadow-xl"
                  >
                    <XCircle size={22} />
                  </button>
                  <button
                    onClick={() => handleDelete(it._id)}
                    className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center text-zinc-500 hover:bg-red-900 hover:text-white transition-all shadow-xl"
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

export default FileRequestsAdmin;
