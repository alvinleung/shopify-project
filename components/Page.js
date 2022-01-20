import React from "react";

export default function Page({ src, children }) {
  return (
    <div className="w-full min-h-screen relative bg-dark z-10">
      <div className="relative w-full">
        <img src={src} alt="" className="w-full block" />
        {children}
      </div>
    </div>
  );
}
