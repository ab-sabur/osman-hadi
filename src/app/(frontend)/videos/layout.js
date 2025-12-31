// src/app/gallery/layout.js

export const metadata = {
  title: "ওসমান হাদীর ভিডিও সমূহ | Osman Hadi Video Archive",
  description:
    "ওসমান হাদীর জীবনের বিভিন্ন মুহূর্তের ভিডিও সমূহ। প্রতিটি ফ্রেম একটি নীরব বিপ্লব, প্রতিটি ভিডিও একটি জীবন্ত ইতিহাস।",
  alternates: {
    canonical: "https://sharifosmanhadi.info/videos",
  },
};

export default function VideosLayout({ children }) {
  return <>{children}</>;
}
