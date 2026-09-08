import { AnimatedBackground } from "@/components/backgrounds/animated-background";
import { LandingNavbar } from "@/features/landing/components/landing-navbar";
import { LandingFooter } from "@/features/landing/components/landing-footer";
import { Reveal } from "@/components/common/reveal";
import { BusinessTypeTabs } from "../components/business-type-tabs";
import { ModuleGrid } from "../components/module-grid";
import { CtaBand } from "../components/cta-band";

export function SolutionsPage() {
  return (
    <div className="relative min-h-screen mixed-bg-deep overflow-hidden">
      <AnimatedBackground />
      <LandingNavbar />
      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-16 sm:pt-20">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur">
              Solutions
            </span>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Built for every way{" "}
              <span className="gradient-text">Bangladesh does business</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              Whether you sell through Facebook, run a busy counter, or manage both — BusinessOS
              adapts to your operation with one unified core for orders, stock, delivery and money.
            </p>
          </div>
        </Reveal>

        <BusinessTypeTabs />
        <ModuleGrid />
        <CtaBand />
      </main>
      <LandingFooter />
    </div>
  );
}