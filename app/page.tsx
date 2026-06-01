import { getWaitlistCount } from "./actions";
import { WaitlistForm } from "@/components/waitlist-form";
import { VideoPlayer } from "@/components/video-player";

const MAX_SPOTS = 500;

export default async function WaitlistPage() {
  const count = await getWaitlistCount();
  const spotsRemaining = Math.max(0, MAX_SPOTS - count);

  return (
    <main className="relative min-h-screen flex flex-col items-center px-4 py-16 md:py-24">
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
        {/* Brand */}
        <div className="mb-10 flex items-center gap-2">
          <span className="text-base font-semibold tracking-tight text-foreground">
            Oggy
          </span>
          <span className="text-[10px] font-medium tracking-[0.25em] text-muted-foreground uppercase border border-border rounded px-1.5 py-0.5">
            Beta
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-5 text-balance leading-[1.1]">
          You know what to say.
          <br />
          You just can&apos;t say it when it counts.
        </h1>

        {/* Subheadline */}
        <p className="text-muted-foreground text-center text-base md:text-lg mb-4 max-w-xl text-pretty leading-relaxed">
          Oggy is a stress inoculation system for non-native English speakers.
          Real-time AI scenarios that train your reflexes — not just your
          vocabulary. Built for professionals who freeze in meetings, calls, and
          negotiations.
        </p>

        {/* Social proof */}
        <p className="text-sm text-muted-foreground/70 text-center mb-12 max-w-lg text-pretty leading-relaxed">
          Built for the 220M+ professionals who passed every English test — and
          still go blank at the wrong moment.
        </p>

        {/* Video / Ghost Replay */}
        <VideoPlayer />

        {/* Email Form */}
        <WaitlistForm spotsRemaining={spotsRemaining} maxSpots={MAX_SPOTS} />

        {/* Real counter */}
        <div className="mt-6 flex flex-col items-center gap-1.5">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground/40" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground/60" />
            </span>
            <p className="text-xs text-muted-foreground tracking-wide tabular-nums">
              {count === 0
                ? "Be the first to join"
                : `${count.toLocaleString()} ${count === 1 ? "person has" : "people have"} joined`}
              {count > 0 && ` · ${spotsRemaining} founding ${spotsRemaining === 1 ? "spot" : "spots"} left`}
            </p>
          </div>
          <p className="text-xs text-muted-foreground/60 tracking-wide">
            Built for professionals in Tokyo, Singapore, Seoul, and beyond.
          </p>
        </div>
      </div>

      {/* False Fluency — named concept */}
      <section className="relative z-10 w-full max-w-2xl mx-auto mt-24 border-t border-border pt-16">
        <span className="text-[10px] font-medium tracking-[0.25em] text-muted-foreground uppercase">
          The real problem
        </span>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mt-4 mb-8 text-balance leading-[1.15]">
          You already know enough English.
          <br />
          <span className="text-muted-foreground">That&apos;s the problem.</span>
        </h2>
        <div className="flex flex-col gap-3 text-lg md:text-xl text-pretty leading-relaxed">
          <p className="text-foreground">You understand the meeting.</p>
          <p className="text-foreground">You understand the question.</p>
          <p className="text-foreground">You even know what you want to say.</p>
          <p className="text-muted-foreground pt-2">Then pressure arrives.</p>
          <p className="text-muted-foreground">And your brain stalls.</p>
          <p className="text-xl md:text-2xl font-semibold text-foreground pt-4">
            That&apos;s False Fluency.
          </p>
          <p className="text-base md:text-lg text-muted-foreground pt-4 leading-relaxed">
            Not because you don&apos;t know English. Because pressure changes
            performance. Oggy measures what happens in that exact moment — and
            trains it until it stops happening.
          </p>
        </div>
      </section>

      {/* Before / After transformation */}
      <section className="relative z-10 w-full max-w-2xl mx-auto mt-16 border-t border-border pt-16">
        <span className="text-[10px] font-medium tracking-[0.25em] text-muted-foreground uppercase">
          The transformation
        </span>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Before */}
          <div className="border border-border rounded-lg p-6 bg-card">
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground/60">
              Before Oggy
            </span>
            <ul className="mt-4 flex flex-col gap-2.5">
              {[
                "Meeting starts",
                "Question asked",
                "Pause",
                "Silent translation",
                "Panic",
                "Conversation moves on without you",
              ].map((step, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground leading-relaxed"
                >
                  {step}
                </li>
              ))}
            </ul>
          </div>
          {/* After */}
          <div className="border border-foreground/20 rounded-lg p-6 bg-card">
            <span className="text-xs font-medium tracking-widest uppercase text-foreground/80">
              After Oggy
            </span>
            <ul className="mt-4 flex flex-col gap-2.5">
              {[
                "Question asked",
                "Response starts immediately",
                "No silent translation",
                "Conversation continues",
                "You stay in the room",
                "Confidence stays intact",
              ].map((step, i) => (
                <li
                  key={i}
                  className="text-sm text-foreground leading-relaxed"
                >
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-sm text-muted-foreground/70 mt-6 text-pretty leading-relaxed">
          People don&apos;t buy architectures. They buy transformations. This is
          the one Oggy is built to deliver.
        </p>
      </section>

      {/* Ghost Replay hook */}
      <section className="relative z-10 w-full max-w-2xl mx-auto mt-16 border-t border-border pt-16">
        <span className="text-[10px] font-medium tracking-[0.25em] text-muted-foreground uppercase">
          The Ghost Replay
        </span>
        <p className="text-foreground text-base md:text-lg mt-4 text-pretty leading-relaxed">
          After every session, Oggy shows you the exact moment you froze —
          timestamped to the millisecond. Not to shame you. To show you what a
          specific, solvable problem looks like.
        </p>
        <p className="text-muted-foreground text-base md:text-lg mt-4 text-pretty leading-relaxed">
          That&apos;s the Ghost Replay. It&apos;s the feature nobody else has
          built. Because nobody else is building this.
        </p>
      </section>

      {/* ICP — self identify */}
      <section className="relative z-10 w-full max-w-2xl mx-auto mt-16 border-t border-border pt-16">
        <span className="text-[10px] font-medium tracking-[0.25em] text-muted-foreground uppercase">
          Built for you if you
        </span>
        <ul className="mt-6 flex flex-col gap-4">
          {[
            "Passed TOEIC, IELTS, or TOEFL with strong scores",
            "Work in English every single day",
            "Understand everything — until it's your turn to speak",
            "Still freeze, stall, or translate silently under pressure",
          ].map((line, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 h-px w-4 bg-muted-foreground/50 shrink-0" />
              <span className="text-foreground text-base md:text-lg text-pretty leading-relaxed">
                {line}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Why I built this — founder story */}
      <section className="relative z-10 w-full max-w-2xl mx-auto mt-16 border-t border-border pt-16">
        <span className="text-[10px] font-medium tracking-[0.25em] text-muted-foreground uppercase">
          Why I built Oggy
        </span>
        <div className="flex flex-col gap-4 mt-6 text-base md:text-lg text-pretty leading-relaxed">
          <p className="text-muted-foreground">
            I moved to a country where I had to work in English. I&apos;d passed
            the exams. I&apos;d studied the vocabulary. I knew the grammar.
          </p>
          <p className="text-muted-foreground">
            And I still froze in real conversations. The problem was never
            knowledge. It was pressure — the gap between what I knew and what I
            could deliver in the moment.
          </p>
          <p className="text-foreground">
            I couldn&apos;t find a product that trained for that reality. So I
            started building one. Oggy is the tool I needed and couldn&apos;t
            buy.
          </p>
        </div>
      </section>

      {/* What makes it different */}
      <section className="relative z-10 w-full max-w-2xl mx-auto mt-16 border-t border-border pt-16">
        <span className="text-[10px] font-medium tracking-[0.25em] text-muted-foreground uppercase">
          What makes it different
        </span>
        <ul className="mt-6 flex flex-col gap-4">
          {[
            "Not a language app. A performance training system.",
            "Not flashcards and streaks. Real pressure. Real scenarios. Real data.",
            "Not “you'll feel more confident.” A Reflex Score that proves you improved.",
          ].map((line, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 h-px w-4 bg-muted-foreground/50 shrink-0" />
              <span className="text-foreground text-base md:text-lg text-pretty leading-relaxed">
                {line}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Closing CTA */}
      <section className="relative z-10 w-full max-w-2xl mx-auto mt-16 border-t border-border pt-16 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-3 text-balance leading-tight">
          Train the gap. Before it costs you the room.
        </h2>
        <p className="text-muted-foreground text-center text-sm md:text-base mb-8 max-w-md text-pretty leading-relaxed">
          The first 500 get early access and founding price. Beta opens when
          Sprint 1 passes its quality gate.
        </p>
        <WaitlistForm spotsRemaining={spotsRemaining} maxSpots={MAX_SPOTS} />
      </section>

      {/* Urgency */}
      <section className="relative z-10 w-full max-w-2xl mx-auto mt-16 border-t border-border pt-16">
        <p className="text-muted-foreground text-sm md:text-base text-pretty leading-relaxed">
          Beta opens when Sprint 1 passes its quality gate: 20 real users, 3
          sessions each, zero false penalties. We&apos;re building it right
          before we open it wide.
        </p>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-2xl mx-auto mt-16 border-t border-border pt-8 pb-4 text-center">
        <p className="text-xs text-muted-foreground/60 tracking-wide leading-relaxed">
          Built by a solo founder. No VC hype. No launch before it&apos;s ready.
        </p>
      </footer>
    </main>
  );
}
