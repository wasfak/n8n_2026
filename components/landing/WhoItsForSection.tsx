import {
  Rocket,
  TrendingUp,
  Users,
  Briefcase,
  Wrench,
  Send,
} from "lucide-react";

const personas = [
  {
    icon: Rocket,
    title: "Founders",
    desc: "Run discovery calls without a sales team. Sound prepared and professional from day one.",
  },
  {
    icon: TrendingUp,
    title: "Sales Reps",
    desc: "Cut prep time in half. Walk into every call with sharp, relevant talking points.",
  },
  {
    icon: Users,
    title: "Agencies",
    desc: "Prep for client pitches faster. Show prospects you understand their business before the first meeting.",
  },
  {
    icon: Briefcase,
    title: "Consultants",
    desc: "Deliver polished discovery sessions. Build trust by demonstrating deep business context.",
  },
  {
    icon: Wrench,
    title: "Solutions Engineers",
    desc: "Tailor demos to real pain points. Know what matters before you share your screen.",
  },
  {
    icon: Send,
    title: "Freelancers",
    desc: "Send better outreach. Personalize every touchpoint with company-specific context.",
  },
];

export function WhoItsForSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Who is it for
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Built for people who sell, pitch, and consult
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <p.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
