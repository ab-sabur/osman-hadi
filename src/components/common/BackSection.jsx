import Link from "next/link";
import React from "react";

const BackSection = ({ links, current }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6">
      {/* 1. Removed line-clamp from the parent flex 
          2. Added min-w-0 to allow the flex child to shrink
      */}
      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 min-w-0 flex-1">
        {links.map((link, i) => (
          <React.Fragment key={i}>
            {i !== 0 && <span className="shrink-0">/</span>}
            <Link
              href={link.path}
              className="hover:text-red-500 transition-colors flex items-center gap-1 shrink-0"
            >
              {link.icon} {link.text}
            </Link>
          </React.Fragment>
        ))}

        <span className="shrink-0">/</span>

        {/* 3. Applied truncate to the current item. 
            'truncate' is more efficient than 'line-clamp-1' for single lines.
        */}
        <span className="text-zinc-300 truncate">{current}</span>
      </div>
    </div>
  );
};

export default BackSection;
