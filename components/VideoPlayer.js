import React from "react";

export default function VideoPlayer({
  src,
  x,
  y,
  width,
  height,
  muted,
  behind,
  controls = true,
}) {
  return (
    <video
      src={src}
      style={{
        position: "absolute",
        zIndex: behind ? -1 : 10,
        left: `${(x / 1920) * 100}%`,
        top: `${(y / 1080) * 100}%`,
        width: `${(width / 1920) * 100}%`,
        height: `${(height / 1080) * 100}%`,
      }}
      controls={controls}
      autoPlay
      loop
      muted={muted}
    />
  );
}
