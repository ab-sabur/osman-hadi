import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Script from "next/script";
import ScrollToTop from "@/components/common/ToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "শহীদ ওসমান হাদি আর্কাইভ | Shaheed Osman Hadi Archive",
  description:
    "Memorial Archive of Sharif Osman Hadi | ইনকিলাব মঞ্চের মুখপাত্র শরীফ ওসমান হাদির আর্কাইভ, জীবনী, ছবি ও ভিডিওর ডিজিটাল সংগ্রহশালা",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sharifosmanhadi.info/" />
        <meta
          property="og:image"
          content="https://sharifosmanhadi.info/static/osman.webp"
        />
        <link
          rel="alternate"
          hrefLang="bn"
          href="https://sharifosmanhadi.info/"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://sharifosmanhadi.info/en/"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://sharifosmanhadi.info/"
        />
        <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sharifosmanhadi.info/" />
        <meta
          property="twitter:title"
          content="Shaheed Sharif Osman Hadi Official Archive"
        />
        <meta
          property="twitter:description"
          content="Memorial Archive of Sharif Osman Hadi | ইনকিলাব মঞ্চের মুখপাত্র শরীফ ওসমান হাদির আর্কাইভ, জীবনী, ছবি ও ভিডিওর ডিজিটাল সংগ্রহশালা"
        />
        <meta
          property="twitter:image"
          content="https://sharifosmanhadi.info/static/osman.webp"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="শহীদ ওসমান হাদি আর্কাইভ | Shaheed Osman Hadi Archive"
        />
        <meta
          property="og:description"
          content="Memorial Archive of Sharif Osman Hadi | ইনকিলাব মঞ্চের মুখপাত্র শরীফ ওসমান হাদির আর্কাইভ, জীবনী, ছবি ও ভিডিওর ডিজিটাল সংগ্রহশালা।"
        />
        <meta property="og:site_name" content="Shaheed Sharif Osman Hadi" />
        <meta
          name="keywords"
          content="Sharif Osman Hadi, ওসমান হাদি, Osman Hadi Archive, ইনকিলাব মঞ্চ, Inqilab Moncho, জুলাই বিপ্লব, July Revolution, সার্বভৌমত্বের শহীদ, Martyr of Sovereignty, ইনসাফ, Insaaf, Biography, Memorial Archive"
        />
        <meta name="author" content="Md Abdus Sabur" />
        <meta
          name="google-site-verification"
          content="OXdTLL2O2NCE16NaL1Cc3Z8fVYY8XAS0hEMLB-C9fyY"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z92K7M592D"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Z92K7M592D');
        `}
        </Script>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Sharif Osman Bin Hadi",
            alternateName: [
              "Osman Goni",
              "শহীদ ওসমান হাদি",
              "শরীফ ওসমান বিন হাদি",
            ],
            birthDate: "1993-06-30",
            deathDate: "2025-12-18",
            jobTitle: "Spokesperson",
            affiliation: {
              "@type": "Organization",
              name: "Inqilab Moncho",
            },
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "University of Dhaka",
            },
            image: "https://sharifosmanhadi.info/static/osman.webp",
            description:
              "Memorial Archive of Shaheed Osman Hadi | ইনকিলাব মঞ্চের মুখপাত্র শহীদ ওসমান হাদির আর্কাইভ, জীবনী, ছবি ও ভিডিওর ডিজিটাল সংগ্রহশালা।",
            honorificPrefix: "Shaheed",
          })}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
