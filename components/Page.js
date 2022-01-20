import React from "react";

export default function Page({ src, children }) {
  return (
    <div className="w-full relative bg-dark">
      <div className="relative w-full">
        <img src={src} alt="" className="w-full block" />
        {children}
      </div>
    </div>
  );
}
