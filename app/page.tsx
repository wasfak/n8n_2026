import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ProductPreviewSection } from "@/components/landing/ProductPreviewSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { WhatYouGetSection } from "@/components/landing/WhatYouGetSection";
import { WhoItsForSection } from "@/components/landing/WhoItsForSection";
import { WhyDifferentSection } from "@/components/landing/WhyDifferentSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <WhatYouGetSection />
      <WhoItsForSection />
      <ProductPreviewSection />
      <PricingSection />
      <WhyDifferentSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
