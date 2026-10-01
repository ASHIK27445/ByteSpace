import React from "react";

interface GridBandProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Blue "grid paper" background used behind the hero, course-detail header,
 * creator-profile header, 404 page, and auth pages.
 */
export default function GridBand({ children, className = "" }: GridBandProps) {
  return (
    <div
      className={`relative overflow-hidden bg-brand-blue text-white ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.13) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.13) 1px, transparent 1px)",
        backgroundSize: "108px 108px",
      }}
    >
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}