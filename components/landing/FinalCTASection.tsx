import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/3 to-primary/5 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, var(--color-primary) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
          <Sparkles className="h-7 w-7 text-primary" />
        </div>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Stop guessing. Start closing.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Generate your first AI-powered discovery brief in minutes. Walk into every sales call prepared, relevant, and confident.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button variant="hero" size="xl">Start Free</Button>
          <Button variant="heroOutline" size="xl">Get Your First Brief</Button>
        </div>

        <div className="mt-5 flex flex-col items-center gap-1 text-sm text-muted-foreground">
          <span>Use the AI once for free after sign up.</span>
          <span>Continue for $10/month.</span>
        </div>
      </div>
    </section>
  );
}
