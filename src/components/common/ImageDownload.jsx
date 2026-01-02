"use client";
import { handleDownload } from "@/utils/imageDownload";
import { Download } from "lucide-react";
import React from "react";

const ImageDownload = ({ img }) => {
  return (
    <button
      onClick={() => handleDownload(img.url, `osman-hadi-${img.title}.jpg`)}
      className="cursor-pointer p-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-red-700 hover:border-red-500"
      title="Download Image"
    >
      <Download size={20} />
    </button>
  );
};

export default ImageDownload;

