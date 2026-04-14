import { FileText, BarChart3, AlertTriangle, Lightbulb, Megaphone, Presentation, MessageSquare, Database, Mail } from "lucide-react";

const features = [
  { icon: FileText, title: "Company Summary", desc: "Clear overview of the business, industry, size, and market position." },
  { icon: BarChart3, title: "Sales Situation Snapshot", desc: "Key context about their current stage, challenges, and growth trajectory." },
  { icon: AlertTriangle, title: "Likely Pain Points", desc: "AI-identified problems they're probably dealing with right now." },
  { icon: Lightbulb, title: "Opportunity Areas", desc: "Where your product or service could deliver real value." },
  { icon: Megaphone, title: "Recommended Pitch Angle", desc: "The most relevant framing for your conversation." },
  { icon: Presentation, title: "Demo Talking Points", desc: "Key points to highlight during your product walkthrough." },
  { icon: MessageSquare, title: "Discovery Questions", desc: "Smart questions that show you've done your homework." },
  { icon: Database, title: "CRM Notes Summary", desc: "Pre-written notes ready to paste into your CRM." },
  { icon: Mail, title: "Follow-Up Email Draft", desc: "A professional follow-up email ready to customize and send." },
];

export function WhatYouGetSection() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">What you get</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Everything you need for a great first call
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Each brief is packed with actionable intel — structured, scannable, and ready to use.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border/50 bg-card p-5 transition-all hover:border-primary/20 hover:shadow-md hover:shadow-primary/5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-sm font-bold text-foreground">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
