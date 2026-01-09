"use client";
import React, { useState, useEffect, useRef } from "react";
import { Download, Scale, Languages, Clock } from "lucide-react";
import { domToPng } from "modern-screenshot";
import style from "./css/custom.module.css";

const JusticeTimer = () => {
  const [lang, setLang] = useState("bn");
  const [currentBDTime, setCurrentBDTime] = useState("");
  const downloadRef = useRef(null);

  const incidentTimestamp = new Date("2025-12-12T14:25:00+06:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const enClock = now.toLocaleString("en-GB", {
        timeZone: "Asia/Dhaka",
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      // Get Bangla version (includes Bangla month names and digits)
      const bnClock = now.toLocaleString("bn-BD", {
        timeZone: "Asia/Dhaka",
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      setCurrentBDTime(lang === "bn" ? bnClock : enClock);

      const difference = now.getTime() - incidentTimestamp;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [incidentTimestamp, lang]);

  const handleDownload = async () => {
    if (downloadRef.current) {
      // Capture the HIDDEN fixed-size template instead of the visible screen
      const dataUrl = await domToPng(downloadRef.current, {
        scale: 2,
        backgroundColor: "#080808",
      });

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `osman-hadi-justice-${lang}.png`;
      link.click();
    }
  };

  const formatNum = (num) => {
    const padded = num.toString().padStart(2, "0");
    return lang === "en"
      ? padded
      : padded.replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);
  };

  return (
    <>
      {/* --- SITE VERSION: FULLY RESPONSIVE --- */}
      <section className="w-full max-w-[1400px] mx-auto p-6">
        <div className="w-full bg-zinc-950 rounded-[2.5rem] border border-white/10 p-6 gap-4 flex flex-col items-center">
          <div className="w-full flex justify-between items-center flex-col">
            <button
              onClick={() => setLang(lang === "bn" ? "en" : "bn")}
              className="ml-auto mb-4 text-zinc-500 text-xs uppercase font-bold px-3 py-1 border border-white/10 rounded-full"
            >
              {lang === "bn" ? "English" : "বাংলা"}
            </button>
            <h2 className="text-xl md:text-3xl font-black text-center text-white">
              {lang === "bn"
                ? "শহীদ ওসমান হাদি হত্যার\nবিচারহীনতার সময়কাল"
                : "Period of Impunity for the\nMurder of Martyr Osman Hadi"}
            </h2>
          </div>

          <div className="text-2xl mx-auto">
            {lang === "bn" ? (
              <>
                ১২ ডিসেম্বর, ২০২৫ এ ০২:২৫ PM{" "}
                <span className="text-red-600">-</span> {currentBDTime}
              </>
            ) : (
              <>
                12 December 2025 at 02:25 pm{" "}
                <span className="text-red-600">-</span> {currentBDTime}
              </>
            )}
          </div>

          {/* This grid wraps on small screens for the website */}
          <div className="flex flex-wrap justify-center items-center py-10 gap-4 md:gap-6">
            <TimeUnit
              value={formatNum(timeLeft.days)}
              label={lang === "bn" ? "দিন" : "Days"}
              responsive
            />
            <TimeUnit
              value={formatNum(timeLeft.hours)}
              label={lang === "bn" ? "ঘণ্টা" : "Hours"}
              responsive
            />
            <TimeUnit
              value={formatNum(timeLeft.minutes)}
              label={lang === "bn" ? "মিনিট" : "Mins"}
              responsive
            />
            <TimeUnit
              value={formatNum(timeLeft.seconds)}
              label={lang === "bn" ? "সেকেন্ড" : "Secs"}
              isLast
              responsive
            />
          </div>

          <div className="p-4 rounded-lg bg-red-600 text-white mx-auto text-2xl">
            {lang === "bn"
              ? "ইনসাফ প্রতিষ্ঠা না হওয়া পর্যন্ত আমাদের সংগ্রাম চলবে"
              : "Our struggle will continue until justice is established."}
          </div>

          <p className="text-zinc-400">
            {lang === "bn"
              ? "ডাউনলোড করে সোশাল মিডিয়া তে শেয়ার করুন"
              : "Download and share to social media"}
          </p>

          <button
            onClick={handleDownload}
            className="mt-10 bg-red-700 px-8 py-4 rounded-xl font-black text-white flex items-center gap-2 uppercase text-xs tracking-widest"
          >
            <Download size={18} /> {lang === "bn" ? "ডাউনলোড" : "Download"}
          </button>
        </div>
      </section>

      {/* --- DOWNLOAD TEMPLATE: HIDDEN & FIXED SIZE (1200x630) --- */}
      <div
        style={{
          position: "fixed",
          left: "-9999px",
          top: "0",
        }}
      >
        <div
          ref={downloadRef}
          style={{ width: "1300px", height: "750px", zIndex: "10" }}
          className={`${style.designBg} p-6 flex flex-col justify-between items-center text-center border-[12px] border-red-900/20`}
        >
          <div className="space-y-4">
            <div className="flex justify-center items-center mb-6 gap-3 text-red-500 font-black uppercase tracking-[0.4em] text-sm">
              <Scale size={32} />{" "}
              {lang === "bn" ? "বিচারের দাবি" : "DEMAND FOR JUSTICE"}
            </div>
            <div className="text-6xl font-black text-white leading-tight">
              {lang === "bn"
                ? "শহীদ ওসমান হাদি হত্যার\nবিচারহীনতার সময়কাল"
                : "Period of Impunity for the\nMurder of Martyr Osman Hadi"}
            </div>
          </div>
          <div className="text-2xl w-full">
            {lang === "bn" ? (
              <>
                ১২ ডিসেম্বর, ২০২৫ এ ০২:২৫ PM{" "}
                <span className="text-red-600">-</span> {currentBDTime}
              </>
            ) : (
              <>
                12 December 2025 at 02:25 pm{" "}
                <span className="text-red-600">-</span> {currentBDTime}
              </>
            )}
          </div>

          {/* Always a straight line in download, never wraps */}
          <div className="flex justify-center items-center gap-8">
            <TimeUnitHidden
              value={formatNum(timeLeft.days)}
              label={lang === "bn" ? "দিন" : "Days"}
            />
            <div className="text-white/20 text-6xl font-thin mb-10">:</div>
            <TimeUnitHidden
              value={formatNum(timeLeft.hours)}
              label={lang === "bn" ? "ঘণ্টা" : "Hours"}
            />
            <div className="text-white/20 text-6xl font-thin mb-10">:</div>
            <TimeUnitHidden
              value={formatNum(timeLeft.minutes)}
              label={lang === "bn" ? "মিনিট" : "Minutes"}
            />
            <div className="text-white/20 text-6xl font-thin mb-10">:</div>
            <TimeUnitHidden
              value={formatNum(timeLeft.seconds)}
              label={lang === "bn" ? "সেকেন্ড" : "Seconds"}
              isLast
            />
          </div>

          <div className="p-4 rounded-lg bg-red-600 text-white mx-auto text-2xl">
            {lang === "bn"
              ? "ইনসাফ প্রতিষ্ঠা না হওয়া পর্যন্ত আমাদের সংগ্রাম চলবে"
              : "Our struggle will continue until justice is established."}
          </div>
          <div className="w-full flex justify-between items-end flex-wrap border-t border-white/10 pt-8">
            <div className="text-left">
              <p className="text-zinc-400 text-xl">#JusticeForHadi</p>
            </div>
            <div className="text-right text-zinc-400">
              <p className="text-xl">sharifosmanhadi.info</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TimeUnitHidden = ({ value, label, isLast, responsive }) => (
  <div className="flex flex-col items-center gap-3">
    <div
      className={`rounded-3xl border-2 flex items-center justify-center p-12 text-5xl md:text-7xl 
      ${
        isLast
          ? "bg-red-600/10 border-red-600/40 text-red-500"
          : "bg-white/5 border-white/10 text-white"
      }
    `}
    >
      <span
        className={`${
          responsive ? "text-3xl md:text-7xl" : "text-8xl"
        } font-black tabular-nums`}
      >
        {value}
      </span>
    </div>
    <span
      className={`text-md font-black uppercase tracking-widest text-zinc-500`}
    >
      {label}
    </span>
  </div>
);

const TimeUnit = ({ value, label, isLast, responsive }) => (
  <div className="flex flex-col items-center gap-3">
    <div
      className={`
      ${responsive ? "w-16 h-20 md:w-32 md:h-40" : "w-36 h-44"} 
      rounded-3xl border-2 flex items-center justify-center 
      ${
        isLast
          ? "bg-red-600/10 border-red-600/40 text-red-500"
          : "bg-white/5 border-white/10 text-white"
      }
    `}
    >
      <span
        className={`${
          responsive ? "text-3xl md:text-7xl" : "text-8xl"
        } font-black tabular-nums`}
      >
        {value}
      </span>
    </div>
    <span
      className={`${
        responsive ? "text-[10px] md:text-xs" : "text-sm"
      } font-black uppercase tracking-widest text-zinc-500`}
    >
      {label}
    </span>
  </div>
);

export default JusticeTimer;
