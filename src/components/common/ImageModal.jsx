"use client";
import React, { useEffect, useState, useCallback } from "react";
import { X, Download, ChevronLeft, ChevronRight, Hand } from "lucide-react";

const ImageGalleryModal = ({ isOpen, onClose, images, initialIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  const [swipped, setSwipped] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [images.length, isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [images.length, isAnimating]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // --- RE-ADDED SWIPE LOGIC ---
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    // Swipe sensitivity (70px)
    if (distance > 70) handleNext(); // Swiped Left -> Show Next
    if (distance < -70) handlePrev(); // Swiped Right -> Show Previous

    setTouchStart(null);
    setSwipped(true);
  };

  const handleDownload = async (url, filename) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  if (!isOpen || !images || images.length === 0) return null;

  const activeImg = images[currentIndex];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-3xl transition-opacity duration-300">
      {/* Background Overlay */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {!swipped && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1000 flex flex-col items-center gap-4">
          {/* The Hand Icon */}
          <div className="text-white/60 animate-[handSwipe_3s_infinite_ease-in-out]">
            <Hand size={40} />
          </div>
        </div>
      )}

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-[120] text-white/50 hover:text-red-600 transition-colors p-2"
      >
        <X size={32} />
      </button>

      {/* Nav Buttons (Hidden on Mobile) */}
      <button
        onClick={handlePrev}
        className="absolute left-4 z-[110] text-white/20 hover:text-white p-4 hidden sm:block"
      >
        <ChevronLeft size={48} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 z-[110] text-white/20 hover:text-white p-4 hidden sm:block"
      >
        <ChevronRight size={48} />
      </button>

      <div
        className="relative z-[105] w-full h-full flex items-center justify-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative group flex items-center justify-center w-full h-full">
          {/* THE IMAGE WITH SLIDE ANIMATION */}
          <img
            key={currentIndex}
            src={activeImg?.url}
            alt={`${activeImg?.title}-image`}
            style={{
              animation:
                direction === "right"
                  ? "slideInRight 0.5s ease-out forwards"
                  : direction === "left"
                  ? "slideInLeft 0.5s ease-out forwards"
                  : "fadeIn 0.5s ease-out forwards",
            }}
            className="max-h-[90vh] w-auto object-contain shadow-2xl pointer-events-none select-none"
          />

          {/* OVERLAYS (Title & Download) */}
          <button
            onClick={() =>
              handleDownload(activeImg.url, `archive-${currentIndex}.jpg`)
            }
            className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-3 bg-white text-black hover:bg-red-700 hover:text-white px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all"
          >
            Download <Download size={14} />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes indicatorFade {
          0% {
            opacity: 0;
            visibility: visible;
          }
          10%,
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            visibility: hidden;
          }
        }

        /* Hand Movement: Press, Slide, Lift, Return */
        @keyframes handSwipe {
          0% {
            transform: translateX(100px) translateY(20px) rotate(0deg)
              scale(1.1);
            opacity: 0;
          }
          15% {
            transform: translateX(100px) translateY(0px) rotate(-10deg)
              scale(0.9);
            opacity: 1;
          } /* Touch Down */
          50% {
            transform: translateX(-100px) translateY(0px) rotate(-10deg)
              scale(0.9);
            opacity: 1;
          } /* Drag to Left */
          65%,
          100% {
            transform: translateX(-100px) translateY(20px) rotate(0deg)
              scale(1.1);
            opacity: 0;
          } /* Lift Up & Disappear */
        }
      `}</style>
    </div>
  );
};

export default ImageGalleryModal;
