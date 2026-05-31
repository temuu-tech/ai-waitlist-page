"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { joinWaitlist } from "@/app/actions";

interface WaitlistFormProps {
  spotsRemaining: number;
  maxSpots: number;
}

export function WaitlistForm({ spotsRemaining, maxSpots }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isFull = spotsRemaining <= 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isFull) return;

    setIsSubmitting(true);
    setError(null);

    const result = await joinWaitlist(email);

    setIsSubmitting(false);

    if (result.success) {
      setIsSubmitted(true);
      setEmail("");
    } else {
      setError(result.error ?? "Something went wrong.");
    }
  };

  if (isFull) {
    return (
      <div className="w-full max-w-md text-center py-5 px-6 border border-border rounded-lg bg-card">
        <p className="text-foreground font-medium">Early access is full</p>
        <p className="text-muted-foreground text-sm mt-1">
          All {maxSpots} founding spots have been claimed. The standard waitlist
          is still open — reach out and we&apos;ll add you.
        </p>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="w-full max-w-md text-center py-5 px-6 border border-border rounded-lg bg-card">
        <p className="text-foreground font-medium">You&apos;re on the list.</p>
        <p className="text-muted-foreground text-sm mt-1">
          One email when beta opens. Nothing before then.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-12 bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-muted-foreground transition-colors"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-auto min-h-12 py-3 px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-all duration-200 whitespace-normal text-center leading-snug text-sm sm:text-base"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Joining...
            </span>
          ) : (
            "Join the waitlist — first 500 get early access + founding price"
          )}
        </Button>
      </form>
      {error ? (
        <p className="text-sm text-destructive mt-3 text-center">{error}</p>
      ) : (
        <p className="text-xs text-muted-foreground mt-3 text-center leading-relaxed">
          No spam. One email when beta opens. You can unsubscribe in one click.
        </p>
      )}
    </div>
  );
}
