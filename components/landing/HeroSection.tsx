import { Button } from "@/components/ui/button";
import { Sparkles, FileText, MessageSquare, Target, Mail } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-hero-gradient-from to-hero-gradient-to pt-20 pb-24 md:pt-28 md:pb-32">
      {/* Subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Copy */}
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-brand-muted px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              AI-Powered Sales Intelligence
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
              Turn company info into{" "}
              <span className="bg-linear-to-br from-primary to-accent bg-clip-text text-transparent">
                sales-ready briefs
              </span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Generate structured discovery briefs in minutes — not hours. Walk
              into every call prepared, relevant, and ready to close.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/AiPage">
                <Button>Start Free</Button>
              </Link>
            </div>

            <div className="mt-4 flex flex-col gap-1 text-sm text-muted-foreground">
              <span>✦ 1 free AI-generated brief after sign up</span>
              <span>✦ Then $10/month — cancel anytime</span>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground/70">Built for</span>
              <span className="rounded-full bg-surface px-3 py-1">
                Founders
              </span>
              <span className="rounded-full bg-surface px-3 py-1">
                Agencies
              </span>
              <span className="rounded-full bg-surface px-3 py-1">
                Consultants
              </span>
              <span className="rounded-full bg-surface px-3 py-1">
                Sales Teams
              </span>
            </div>
          </div>

          {/* Right - Product Preview Card */}
          <div className="relative">
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-2xl shadow-primary/5">
              <div className="space-y-3">
                <MockBriefItem
                  icon={<FileText className="h-3.5 w-3.5" />}
                  label="Company Summary"
                  text="Cloud-based project management platform targeting mid-market teams struggling with cross-functional visibility..."
                />
                <MockBriefItem
                  icon={<Target className="h-3.5 w-3.5" />}
                  label="Likely Pain Points"
                  text="Manual reporting across tools · Limited executive dashboards · Scaling onboarding for new hires"
                />
                <MockBriefItem
                  icon={<Sparkles className="h-3.5 w-3.5" />}
                  label="Opportunity Areas"
                  text="Unified analytics layer · Automated status updates · Integration with existing CRM stack"
                />
                <MockBriefItem
                  icon={<MessageSquare className="h-3.5 w-3.5" />}
                  label="Discovery Questions"
                  text="How are you currently tracking cross-team dependencies? What does reporting look like today?"
                />
                <MockBriefItem
                  icon={<Mail className="h-3.5 w-3.5" />}
                  label="Follow-Up Email"
                  text="Hi Sarah, thanks for the call today. Based on our conversation about scaling project visibility..."
                />
              </div>
            </div>
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-linear-to-r from-primary/10 via-accent/5 to-transparent blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MockBriefItem({
  icon,
  label,
  text,
}: {
  icon: React.ReactNode;
  label: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-border/50 bg-surface/60 p-3">
      <div className="mb-1 flex items-center gap-2 text-xs font-semibold text-primary">
        {icon}
        {label}
      </div>
      <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
        {text}
      </p>
    </div>
  );
}
