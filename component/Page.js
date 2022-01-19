import React from "react";

export default function Page({ src, light }) {
  return (
    <div className="w-full h-screen bg-dark">
      <img
        src={src}
        alt=""
        className="w-full h-screen inline-block align-middle"
      />
    </div>
  );
}
