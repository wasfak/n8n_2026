import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

export function PricingSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Simple pricing. No surprises.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start with a free brief. Upgrade when you are ready.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
          {/* Free */}
          <div className="rounded-2xl border border-border/50 bg-card p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Free Start
            </p>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-display text-5xl font-extrabold text-foreground">
                $0
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Try it once — no credit card needed
            </p>
            <ul className="mt-6 space-y-3">
              <PricingFeature>1 AI-generated discovery brief</PricingFeature>
              <PricingFeature>Full brief output included</PricingFeature>
              <PricingFeature>No credit card required</PricingFeature>
            </ul>
            <Button variant="outline" size="lg" className="mt-8 w-full">
              Start Free
            </Button>
          </div>

          {/* Pro */}
          <div className="relative rounded-2xl border-2 border-primary/30 bg-card p-8 shadow-xl shadow-primary/5">
            <div className="absolute -top-3 right-6 flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              <Sparkles className="h-3 w-3" />
              Most Popular
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Pro
            </p>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-display text-5xl font-extrabold text-foreground">
                $10
              </span>
              <span className="text-lg text-muted-foreground">/month</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              For solo operators and small teams
            </p>
            <ul className="mt-6 space-y-3">
              <PricingFeature>Unlimited AI-generated briefs</PricingFeature>
              <PricingFeature>All brief sections included</PricingFeature>
              <PricingFeature>Priority AI processing</PricingFeature>
              <PricingFeature>Cancel anytime</PricingFeature>
            </ul>
            <Button variant="hero" size="lg" className="mt-8 w-full">
              Get Started
            </Button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Simple and affordable. Built for individuals and small teams who want
          to sell smarter.
        </p>
      </div>
    </section>
  );
}

function PricingFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2 text-sm text-foreground">
      <Check className="h-4 w-4 text-primary" />
      {children}
    </li>
  );
}
