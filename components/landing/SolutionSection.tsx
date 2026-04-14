import { Zap, Target, Presentation, MessageCircle, SearchCheck } from "lucide-react";

const outcomes = [
  { icon: Zap, text: "Faster prep" },
  { icon: Target, text: "Sharper discovery calls" },
  { icon: Presentation, text: "More relevant demos" },
  { icon: MessageCircle, text: "Better sales conversations" },
  { icon: SearchCheck, text: "Less manual research" },
];

export function SolutionSection() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">The solution</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            From scattered details to a clear brief — in minutes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Lead Brief Generator transforms basic company info into a structured, actionable pre-sales discovery brief powered by AI.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          {outcomes.map((o) => (
            <div key={o.text} className="flex items-center gap-3 rounded-2xl border border-primary/10 bg-card px-6 py-4 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <o.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="font-semibold text-foreground">{o.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
