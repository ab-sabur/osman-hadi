import Link from "next/link";
import React from "react";
import SocialFooter from "./SocilaFooter";

const Footer = () => {
  return (
    <footer className="bg-black py-24 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-10">
            <Link
              href="/"
              className="group flex items-center gap-3 relative z-[250]"
            >
              <img
                width={45}
                height={45}
                className="object-cover rounded-sm"
                src="/static/hadi.jpg"
                alt="Osman Hadi"
              />
              <div>
                <h3 className="text-lg text-white font-black tracking-tighter leading-none">
                  Osman Hadi
                </h3>
                <p className="text-[10px] text-red-500 font-bold uppercase tracking-[0.2em]">
                  Archive
                </p>
              </div>
            </Link>
            <p className="text-zinc-500 max-w-md leading-relaxed text-lg">
              এই ওয়েবসাইটটি শহীদ শরীফ ওসমান বিন হাদির স্মৃতি এবং তার আদর্শকে
              ধারণ করে তৈরি একটি ডিজিটাল সংগ্রহশালা। তার দর্শন ছড়িয়ে পড়ুক
              প্রতিটি প্রান্তে।
            </p>
          </div>

          <div className="space-y-8">
            <h6 className="font-black text-red-600 uppercase tracking-[0.4em] text-xs">
              Navigation
            </h6>
            <ul className="space-y-5 text-zinc-400 font-bold uppercase tracking-widest text-xs">
              <li>
                <Link href="/" className="hover:text-red-500 transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link
                  href="/bio"
                  className="hover:text-red-500 transition-colors"
                >
                  Biography
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className="hover:text-red-500 transition-colors"
                >
                  Video Vault
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-red-500 transition-colors"
                >
                  Images
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h6 className="font-black text-red-600 uppercase tracking-[0.4em] text-xs">
              CONTRIBUTE
            </h6>
            <ul className="space-y-5 text-zinc-400 font-bold uppercase tracking-widest text-xs">
              <li>
                <Link
                  target="_blank"
                  href="/tributes"
                  className="hover:text-red-500 transition-colors"
                >
                  Tribute
                </Link>
              </li>
              <li>
                <Link
                  href="/add-content"
                  className="hover:text-red-500 transition-colors"
                >
                  Add New
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="/suggestion"
                  className="hover:text-red-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <SocialFooter />

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-700 text-xs font-black uppercase tracking-widest">
          <p>© ২০২৫ ওসমান হাদি মেমোরিয়াল আর্কাইভ। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex gap-10">
            <Link
              target="_blank"
              href="https://absabur.vercel.app/"
              className="hover:text-white transition-colors"
            >
              Developer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
