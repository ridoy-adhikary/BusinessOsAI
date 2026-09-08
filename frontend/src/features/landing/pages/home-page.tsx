import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatedBackground } from "@/components/backgrounds/animated-background";
import { LandingNavbar } from "../components/landing-navbar";
import { HeroSection } from "../components/hero-section";
import { LogoCloud } from "../components/logo-cloud";
import { FeatureGrid } from "../components/feature-grid";
import { AboutSummary } from "../components/about-summary";
import { PricingSection } from "../components/pricing-section";
import { LandingFooter } from "../components/landing-footer";

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    if (!el) return;
    requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, [location.hash]);

  return (
    <div className="relative min-h-screen mixed-bg overflow-hidden">
      <AnimatedBackground />
      <LandingNavbar />
      <main className="relative z-10 pb-24">
        <HeroSection />
        <div className="mx-auto mt-24 max-w-7xl space-y-28 px-6 sm:mt-32">
          <LogoCloud />
          <FeatureGrid />
          <AboutSummary />
          <PricingSection />
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}