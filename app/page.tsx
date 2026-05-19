import { getWaitlistCount } from "./actions";
import { WaitlistForm } from "@/components/waitlist-form";
import { VideoPlayer } from "@/components/video-player";

const MAX_SPOTS = 500;

export default async function WaitlistPage() {
  const count = await getWaitlistCount();
  const spotsRemaining = Math.max(0, MAX_SPOTS - count);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center">
        {/* Logo / Brand */}
        <div className="mb-8">
          <span className="text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase">
            Early Access
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center mb-4 text-balance">
          NEURAL
        </h1>
        <p className="text-muted-foreground text-center text-lg md:text-xl mb-12 max-w-md text-balance">
          AI that understands context, intent, and nuance.
        </p>

        {/* Video Player Placeholder */}
        <VideoPlayer />

        {/* Email Form */}
        <WaitlistForm spotsRemaining={spotsRemaining} maxSpots={MAX_SPOTS} />

        {/* Social proof / urgency */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="w-2 h-2 rounded-full bg-muted-foreground/30"
                style={{ opacity: 1 - i * 0.15 }}
              />
            ))}
          </div>
          <p className="text-xs text-muted-foreground tracking-wide">
            {count} of {MAX_SPOTS} spots claimed
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 py-6 text-center">
        <p className="text-xs text-muted-foreground/50 tracking-wide">
          © 2026 Neural Labs. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
