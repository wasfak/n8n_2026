import { Search, Globe, HelpCircle, Clock } from "lucide-react";

const problems = [
  { icon: Search, title: "Digging through messy notes", desc: "Scrambling across docs, emails, and CRM records to piece together basic company info." },
  { icon: Globe, title: "Checking websites manually", desc: "Spending 20+ minutes browsing company pages just to understand what they actually do." },
  { icon: HelpCircle, title: "Guessing company priorities", desc: "Walking into calls without knowing their real pain points or business context." },
  { icon: Clock, title: "Wasting time before calls", desc: "Burning hours on prep that should take minutes — then still feeling underprepared." },
];

export function ProblemSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">The problem</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Pre-call prep is broken
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every sales call, demo, and outreach starts the same way — manual research that eats your time and still leaves gaps.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-border/50 bg-card p-6 transition-all duration-200 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-destructive/8 text-destructive/80">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
