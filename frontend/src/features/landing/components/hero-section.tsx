import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Reveal } from "@/components/common/reveal";
import { ArchitectureDiagram } from "./architecture-diagram";
import { paths } from "@/routes/paths";

export function HeroSection() {
  return (
    <section className="relative pt-16 sm:pt-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500" />
            Omnichannel · POS · Multi-tenant SaaS · AI-driven
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            The Complete Business Operating System for{" "}
            <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
              Bangladesh
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            Products, inventory, orders, customers, POS, payments, couriers and finance — unified
            into one automated core. Sell everywhere, deliver anywhere, and let AI surface the
            insights that grow your business.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to={paths.register}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-500/40 sm:w-auto"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#solutions"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-7 py-3.5 text-sm font-bold text-slate-800 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 sm:w-auto"
            >
              <PlayCircle className="h-5 w-5 text-brand-500" />
              Watch Demo
            </a>
          </div>
        </Reveal>

        <div className="mt-14">
          <Reveal delay={400}>
            <ArchitectureDiagram />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
