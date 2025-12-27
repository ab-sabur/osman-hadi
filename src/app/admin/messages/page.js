"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { revalidate } from "./action";
import "./css/message.css";

// Note: Ensure the CSS above is imported or available globally.
// e.g., import './messages-list.css';

const MessagesList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchItems = async () => {
    try {
      const res = await fetch("/api/contact-messages");
      if (!res.ok) throw new Error("Failed to fetch messages");
      const data = await res.json();
      setItems(data.messages || []);
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Error fetching messages");
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
      await revalidate(); // Use Next.js revalidate action
      toast.success("Message successfully deleted.");
      fetchItems(); // Re-fetch the list
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Delete failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    // Apply the main container class
    <div className="messages-list-container">
      {/* Apply the header class */}
      <div className="messages-list-header">
        <h1>Contact Messages</h1>
        {/* Optional: Add a refresh button here if desired */}
        <button onClick={fetchItems} className="action-btn view-btn">
          Refresh
        </button>
      </div>

      <ul>
        {items.length === 0 && (
          <li className="message-item">No messages found.</li>
        )}
        {items.map((it) => (
          // Apply the message item class
          <li key={it._id} className="message-item">
            <div className="message-content">
              <div className="message-info">
                {/* Name and Email */}
                <div>
                  <strong>{it.name}</strong>
                  <span className="email"> • {it.email}</span>
                </div>

                {/* Subject */}
                {it.subject && (
                  <div className="message-subject">Subject: {it.subject}</div>
                )}

                {/* Date */}
                <div className="message-date">
                  Date: {it?.createDate?.date} - Time:{" "}
                  {it?.createDate?.formatedTime}
                </div>

                {/* Message Text */}
                <p className="message-text">{it.message}</p>
              </div>

              {/* Actions */}
              {/* <div className="message-actions">
                <button
                  onClick={() => handleDelete(it._id)}
                  disabled={loading}
                  className="action-btn delete-btn"
                >
                  {loading ? "Deleting..." : "Delete"}
                </button>
              </div> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessagesList;
