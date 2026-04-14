import { PlusCircle, Brain, FileOutput, PhoneCall } from "lucide-react";

const steps = [
  { icon: PlusCircle, step: "01", title: "Add company details", desc: "Enter a company name, website, or basic info about the lead you're preparing for." },
  { icon: Brain, step: "02", title: "AI analyzes the business", desc: "Our AI researches the company context, industry, and likely business situation." },
  { icon: FileOutput, step: "03", title: "Generate a discovery brief", desc: "Get a structured brief with pain points, opportunities, questions, and talking points." },
  { icon: PhoneCall, step: "04", title: "Use it before your call", desc: "Walk into your next call, demo, or outreach fully prepared and relevant." },
];

export function HowItWorksSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">How it works</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Four steps to a better sales call
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.step} className="relative rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
              <span className="font-display text-4xl font-extrabold text-primary/10">{s.step}</span>
              <div className="mt-3 mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute -right-3 top-1/2 hidden h-0.5 w-6 bg-gradient-to-r from-primary/20 to-transparent lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
