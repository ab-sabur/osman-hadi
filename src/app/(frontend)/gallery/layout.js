// src/app/gallery/layout.js

export const metadata = {
  title: "ওসমান হাদীর ছবি সমূহ | Osman Hadi Photo Archive",
  description:
    "ওসমান হাদীর জীবনের বিভিন্ন মুহূর্তের ছবি সমূহ। প্রতিটি ফ্রেম একটি নীরব বিপ্লব, প্রতিটি ছবি একটি জীবন্ত ইতিহাস।",
  alternates: {
    canonical: "https://sharifosmanhadi.info/gallery",
  },
};

export default function GalleryLayout({ children }) {
  return <>{children}</>;
}
