import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shorif Osman Hadi | শরীফ ওসমান হাদি",
  description:
    "শরীফ ওসমান বিন হাদি বা ওসমান হাদি (৩০ জুন ১৯৯৩ – ১৮ ডিসেম্বর ২০২৫) ছিলেন একজন বাংলাদেশি রাজনীতিবিদ, সাংস্কৃতিক কর্মী, লেখক ও শিক্ষক, যিনি জুলাই গণঅভ্যুত্থান-পরবর্তী সময়ে গঠিত রাজনৈতিক-সাংস্কৃতিক সংগঠন ইনকিলাব মঞ্চের মুখপাত্র হিসেবে পরিচিত। তিনি ত্রয়োদশ জাতীয় সংসদ নির্বাচনে ঢাকা-৮ আসন থেকে সংসদ সদস্য পদপ্রার্থী হিসেবে নির্বাচন করার ঘোষণা দিয়েছিলেন। হাদি জুলাই শহিদদের অধিকার রক্ষা ও আওয়ামী লীগ নিষেধাজ্ঞা আন্দোলন এবং ভারতীয় আধিপত্যবাদবিরোধী সক্রিয় রাজনীতির জন্য আলোচনায় আসেন। ২০২৫ সালের ১২ ডিসেম্বর তিনি জুমার নামাজের পর ঢাকার বিজয়নগরের বক্স কালভার্ট এলাকায় গুলিবিদ্ধ হন এবং ১৮ ডিসেম্বর রাত ০৯:৩০ টায় সিঙ্গাপুরে চিকিৎসাধীন অবস্থায় মৃত্যুবরণ করেন।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Shorif Osman Hadi | শরীফ ওসমান হাদি"
        />
        <meta
          property="og:description"
          content="শরীফ ওসমান বিন হাদি বা ওসমান হাদি (৩০ জুন ১৯৯৩ – ১৮ ডিসেম্বর ২০২৫) ছিলেন একজন বাংলাদেশি রাজনীতিবিদ, সাংস্কৃতিক কর্মী, লেখক ও শিক্ষক, যিনি জুলাই গণঅভ্যুত্থান-পরবর্তী সময়ে গঠিত রাজনৈতিক-সাংস্কৃতিক সংগঠন ইনকিলাব মঞ্চের মুখপাত্র হিসেবে পরিচিত। তিনি ত্রয়োদশ জাতীয় সংসদ নির্বাচনে ঢাকা-৮ আসন থেকে সংসদ সদস্য পদপ্রার্থী হিসেবে নির্বাচন করার ঘোষণা দিয়েছিলেন। হাদি জুলাই শহিদদের অধিকার রক্ষা ও আওয়ামী লীগ নিষেধাজ্ঞা আন্দোলন এবং ভারতীয় আধিপত্যবাদবিরোধী সক্রিয় রাজনীতির জন্য আলোচনায় আসেন। ২০২৫ সালের ১২ ডিসেম্বর তিনি জুমার নামাজের পর ঢাকার বিজয়নগরের বক্স কালভার্ট এলাকায় গুলিবিদ্ধ হন এবং ১৮ ডিসেম্বর রাত ০৯:৩০ টায় সিঙ্গাপুরে চিকিৎসাধীন অবস্থায় মৃত্যুবরণ করেন।"
        />
        <meta property="og:url" content="https://osman-hadi.vercel.app/" />
        <meta property="og:site_name" content="Shorif Osman Hadi" />
        <meta name="author" content="Md Abdus Sabur" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
