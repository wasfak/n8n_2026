import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "Built for sales discovery", us: true, them: false },
  { feature: "Structured brief output", us: true, them: false },
  { feature: "Pain points & opportunity areas", us: true, them: false },
  { feature: "Discovery questions included", us: true, them: false },
  { feature: "Follow-up email drafts", us: true, them: false },
  { feature: "Ready before real calls", us: true, them: false },
  { feature: "No prompt engineering needed", us: true, them: false },
];

export function WhyDifferentSection() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Why it's different</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Not another generic AI tool
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Lead Brief Generator is purpose-built for business discovery — not generic writing or chat.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-2xl overflow-hidden rounded-2xl border border-border/50 bg-card shadow-lg shadow-primary/5">
          <div className="grid grid-cols-3 border-b border-border/50 bg-surface/50 px-6 py-4 text-sm font-bold">
            <span className="text-muted-foreground">Feature</span>
            <span className="text-center text-primary">Lead Brief Generator</span>
            <span className="text-center text-muted-foreground">Generic AI Tools</span>
          </div>
          {comparisons.map((c, i) => (
            <div key={c.feature} className={`grid grid-cols-3 px-6 py-3.5 text-sm ${i < comparisons.length - 1 ? "border-b border-border/30" : ""}`}>
              <span className="font-medium text-foreground">{c.feature}</span>
              <span className="flex justify-center">
                <Check className="h-5 w-5 text-primary" />
              </span>
              <span className="flex justify-center">
                <X className="h-5 w-5 text-muted-foreground/40" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
