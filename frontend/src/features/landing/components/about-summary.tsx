import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/common/reveal";
import { paths } from "@/routes/paths";

const spine = ["Products", "Inventory", "Orders", "Customers", "Payments", "Packaging", "Courier", "Finance", "AI"];

export function AboutSummary() {
  return (
    <section id="about" className="scroll-mt-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-7 backdrop-blur-md sm:p-10">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-brand-500/10 blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                About BusinessOS
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                One engine. Every channel. Total control.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                BusinessOS is a single operating system for your business — every channel feeds one
                core, and every module shares the same live data spine. Twelve sections, one engine.
              </p>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <Link
                  to={paths.about}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:bg-brand-700"
                >
                  Explore the architecture
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to={paths.solutions}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-700 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
                >
                  See solutions
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {spine.map((item) => (
                <span
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
              <span className="rounded-xl bg-brand-500 px-3.5 py-2 text-xs font-bold text-white shadow-md">
                AI Insights
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}