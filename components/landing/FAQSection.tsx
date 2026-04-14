import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What does Lead Brief Generator do?", a: "It takes basic company info and generates a structured pre-sales discovery brief — including a company summary, likely pain points, opportunity areas, discovery questions, and a follow-up email draft." },
  { q: "Is there a free trial?", a: "Yes. After signing up, you can generate one full AI-powered brief completely free — no credit card required." },
  { q: "What happens after the free use?", a: "After your free brief, you can upgrade to the Pro plan at $10/month for unlimited briefs. Cancel anytime." },
  { q: "Who is this for?", a: "Anyone who prepares for sales calls, demos, or outreach — founders, sales reps, agencies, consultants, solutions engineers, and freelancers." },
  { q: "Do I need technical skills?", a: "Not at all. Just enter a company name or website and the AI does the rest. No prompts, no setup, no learning curve." },
  { q: "Can I use it before sales calls and demos?", a: "Absolutely — that's exactly what it's built for. Generate a brief before any call, demo, or outreach to walk in fully prepared." },
];

export function FAQSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Common questions
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-2xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-2xl border border-border/50 bg-card px-6 shadow-sm data-[state=open]:shadow-md data-[state=open]:border-primary/20">
                <AccordionTrigger className="py-5 text-base font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
