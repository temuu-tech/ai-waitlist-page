"use client";

export function VideoPlayer() {
  return (
    <div className="w-full max-w-sm mx-auto aspect-[9/16] bg-black border border-border rounded-lg mb-12 relative overflow-hidden shadow-2xl shadow-red-900/20">
      <video
        src="/demo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}