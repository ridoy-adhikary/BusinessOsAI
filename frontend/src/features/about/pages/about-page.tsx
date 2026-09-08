import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { LandingNavbar } from "@/features/landing/components/landing-navbar";
import { LandingFooter } from "@/features/landing/components/landing-footer";
import { ArchitectureDiagram } from "@/features/landing/components/architecture-diagram";
import { paths } from "@/routes/paths";
import { sections } from "../data/sections";
import { SectionArch } from "../components/section-arch";

const dividerClass = "mx-[calc(-50vw+50%)] w-screen border-t border-slate-200";

const filterTags = [
  "All",
  "Agency websites",
  "Architecture",
  "Branding",
  "Creative Portfolios",
  "Data Visualization",
  "E-commerce",
  "Filter by Tag",
  "Filter by Technology",
  "Educational",
  "Entertainment",
  "Experiments",
  "Games",
  "Generative Art",
  "Landing Pages",
  "Product Configurators",
  "Real Estate",
  "SaaS",
];

export function AboutPage() {  return (
    <div className="relative min-h-screen mixed-bg-deep overflow-hidden">
      <LandingNavbar />

      <main className="relative z-10">
        {/* Hero */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur">
              About BusinessOS
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              An operating system for how business actually runs
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600">
              Explore the modules business built on BusinessOS. Products, inventory, orders,
              customers, payments, couriers and finance share one automated data spine — and AI
              surfaces the decisions that matter.
            </p>
            <div className="mt-10">
              <Link
                to={paths.register}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-slate-900 shadow-lg ring-1 ring-slate-200 transition-transform hover:-translate-y-0.5"
              >
                Submit website
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <div aria-hidden className={dividerClass} />

        {/* Filter Tags Bar */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-wrap items-center gap-2.5 justify-center sm:justify-start">
              {filterTags.map((tag) => {
                const isActive = tag === "All";
                const isDropdown = tag === "Filter by Tag" || tag === "Filter by Technology";
                return (
                  <span
                    key={tag}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                      isActive
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-white/80 text-slate-600 hover:border-slate-400 hover:text-slate-900"
                    }`}
                  >
                    {tag}
                    {isDropdown && <ChevronDown className="h-3 w-3" />}
                  </span>
                );
              })}
            </div>
          </div>
        </section>

        <div aria-hidden className={dividerClass} />

        {/* Showcase content */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                Focus
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Every section, explained
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                A closer look at each module: what it does, how it flows, and what it delivers for
                your business.
              </p>
            </div>

            <div className="mt-14">
              <ArchitectureDiagram />
            </div>

            <div className="mt-14 space-y-6">
              {sections.map((section) => (
                <SectionArch key={section.title} section={section} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-slate-900 p-10 text-center sm:p-16">
              <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent-400/10 blur-3xl" />
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                See the operating system in action
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/70">
                Explore the solutions built on this architecture, or start free and watch every
                section work as one connected core.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to={paths.register}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent-400 px-8 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-500"
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to={paths.solutions}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:border-white/60"
                >
                  See solutions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}
