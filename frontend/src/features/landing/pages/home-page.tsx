import { ShaderBackground } from "@/components/webgl/shader-background";
import { LandingNavbar } from "../components/landing-navbar";
import { HeroSection } from "../components/hero-section";
import { LogoCloud } from "../components/logo-cloud";
import { FeatureGrid } from "../components/feature-grid";
import { PricingSection } from "../components/pricing-section";
import { LandingFooter } from "../components/landing-footer";

export function HomePage() {
  return (
    <div className="relative min-h-screen">
      <ShaderBackground />
      <LandingNavbar />
      <main className="relative z-10 pb-24">
        <HeroSection />
        <LogoCloud />
        <div className="mx-auto mt-24 max-w-7xl space-y-28 px-6 sm:mt-32">
          <FeatureGrid />
          <PricingSection />
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
