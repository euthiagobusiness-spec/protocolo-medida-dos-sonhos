import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BonusesSection } from "@/components/sections/BonusesSection";
import { CaptureSection } from "@/components/sections/CaptureSection";
import { DeliverablesSection } from "@/components/sections/DeliverablesSection";
import { ExpertSection } from "@/components/sections/ExpertSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { InformationSection } from "@/components/sections/InformationSection";
import { SupportSection } from "@/components/sections/SupportSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TransformationSection } from "@/components/sections/TransformationSection";

export function LandingPage() {
  return (
    <>
      <Header />
      <main id="topo">
        <HeroSection />
        <TransformationSection />
        <DeliverablesSection />
        <HowItWorksSection />
        <InformationSection />
        <TestimonialsSection />
        <ExpertSection />
        <BonusesSection />
        <GuaranteeSection />
        <CaptureSection />
        <FaqSection />
        <SupportSection />
      </main>
      <Footer />
    </>
  );
}
