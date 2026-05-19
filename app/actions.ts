"use server";

import { createClient } from "@/lib/supabase/server";

export async function joinWaitlist(email: string): Promise<{ success: boolean; error?: string }> {
  const supabase = await createClient();
  
  const { error } = await supabase
    .from("waitlist")
    .insert({ email: email.toLowerCase().trim() });

  if (error) {
    if (error.code === "23505") {
      return { success: false, error: "This email is already on the waitlist." };
    }
    return { success: false, error: "Something went wrong. Please try again." };
  }

  return { success: true };
}

export async function getWaitlistCount(): Promise<number> {
  const supabase = await createClient();
  
  const { count, error } = await supabase
    .from("waitlist")
    .select("*", { count: "exact", head: true });

  if (error) {
    return 0;
  }

  return count ?? 0;
}
