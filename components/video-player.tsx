"use client";

import { Play } from "lucide-react";

export function VideoPlayer() {
  return (
    <div className="w-full aspect-video bg-card border border-border rounded-lg mb-12 relative overflow-hidden group cursor-pointer transition-all duration-300 hover:border-muted-foreground/50">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
      
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-primary/10 border border-border flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105">
          <Play className="w-8 h-8 text-foreground ml-1" />
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-3 h-3 border-l border-t border-muted-foreground/30" />
      <div className="absolute top-4 right-4 w-3 h-3 border-r border-t border-muted-foreground/30" />
      <div className="absolute bottom-4 left-4 w-3 h-3 border-l border-b border-muted-foreground/30" />
      <div className="absolute bottom-4 right-4 w-3 h-3 border-r border-b border-muted-foreground/30" />
      
      {/* Video label */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">
          Watch Demo
        </span>
      </div>
    </div>
  );
}
