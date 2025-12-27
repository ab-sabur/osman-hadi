"use client";
import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Send,
  MessageCircle,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const SocialFooter = () => {
  // Added a local state to track which card is being hovered to apply dynamic styles
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const socialLinks = [
    {
      name: "Osman Hadi Official",
      href: "https://www.facebook.com/osmanhadiofficial",
      platform: "facebook",
      color: "#1877F2",
    },
    {
      name: "Community Group",
      href: "https://www.facebook.com/groups/3271126763057005/",
      platform: "facebook",
      color: "#1877F2",
    },
    {
      name: "Dhaka-8 Page",
      href: "https://www.facebook.com/share/1AAhDFqavP/",
      platform: "facebook",
      color: "#1877F2",
    },
    {
      name: "Dhaka-8 Group",
      href: "https://www.facebook.com/groups/3271126763057005",
      platform: "facebook",
      color: "#1877F2",
    },
    {
      name: "SQUAD",
      href: "https://www.facebook.com/profile.php?id=61584128977218",
      platform: "facebook",
      color: "#1877F2",
    },
    {
      name: "@osmanhadi.dhaka8",
      href: "https://tiktok.com/@osmanhadi.dhaka8",
      platform: "tiktok",
      color: "#ff0050",
    }, // Updated to TikTok brand color
    {
      name: "@osmanhadi36",
      href: "https://www.instagram.com/osmanhadi36",
      platform: "instagram",
      color:
        "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    },
    {
      name: "Osman Hadi Official",
      href: "https://youtube.com/@osmanhadiofficial",
      platform: "youtube",
      color: "#FF0000",
    },
    {
      name: "Osman Hadi",
      href: "https://www.linkedin.com/in/osman-hadi-833389399",
      platform: "linkedin",
      color: "#0A66C2",
    },
    {
      name: "@osmanhadidhaka8",
      href: "https://x.com/osmanhadidhaka8",
      platform: "twitter",
      color: "#666666",
    }, // X (Twitter) neutral
    {
      name: "osmanhadidhaka8",
      href: "https://t.me/osmanhadidhaka8",
      platform: "telegram",
      color: "#26A5E4",
    },
    {
      name: "Official Channel",
      href: "https://whatsapp.com/channel/0029Vb78H7e4dTnATVlCIw0i",
      platform: "whatsapp",
      color: "#25D366",
    },
  ];

  return (
    <div className="py-10">
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase">
          আমাদের সাথে <span className="text-red-600">সংযুক্ত হন</span>
        </h2>
        <p className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-[0.2em] mt-2">
          সোশ্যাল মিডিয়ায় ওসমান হাদীকে ফলো করুন
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {socialLinks.map((social, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group flex flex-col items-center gap-3 p-4 bg-zinc-950 border border-white/5 rounded-2xl transition-all duration-300"
              style={{
                borderColor: isHovered
                  ? social.color
                  : "rgba(255,255,255,0.05)",
                backgroundColor: isHovered ? "rgba(255,255,255,0.02)" : "",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-zinc-500 transition-all duration-300 bg-zinc-900"
                style={{
                  background: isHovered ? social.color : "",
                  color: isHovered ? "#fff" : "",
                }}
              >
                {social.platform === "facebook" && <Facebook size={20} />}
                {social.platform === "instagram" && <Instagram size={20} />}
                {social.platform === "youtube" && <Youtube size={20} />}
                {social.platform === "linkedin" && <Linkedin size={20} />}
                {social.platform === "telegram" && <Send size={20} />}
                {social.platform === "whatsapp" && <MessageCircle size={20} />}
                {social.platform === "twitter" && <Twitter size={20} />}
                {social.platform === "tiktok" && (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
                  </svg>
                )}
              </div>
              <span
                className="text-[10px] font-black uppercase tracking-widest text-zinc-500 transition-colors duration-300 text-center leading-tight"
                style={{
                  color: isHovered
                    ? social.platform === "instagram"
                      ? "#dc2743"
                      : social.color
                    : "",
                }}
              >
                {social.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SocialFooter;
