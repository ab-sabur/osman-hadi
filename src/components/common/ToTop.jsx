"use client";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-2 right-2 z-50">
      <button
        onClick={scrollToTop}
        aria-label="Scroll to Top Menu"
        className={`group flex flex-col items-center gap-2 transition-all duration-300 ease-in-out ${
          isVisible ? "scale-100" : "scale-0"
        }`}
      >
        {/* The Visual Button */}
        <div className="bg-zinc-900 border border-zinc-800 p-2 hover:border-red-600 transition-colors shadow-2xl">
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-none stroke-red-600 stroke-[3px]"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default ScrollToTop;
