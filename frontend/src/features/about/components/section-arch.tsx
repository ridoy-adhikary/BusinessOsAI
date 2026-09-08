import type { SectionArchData } from "../data/sections";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/common/reveal";

interface SectionArchProps {
  section: SectionArchData;
}

export function SectionArch({ section }: SectionArchProps) {
  return (
    <Reveal>
      <article className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/10 sm:p-9">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-400/8 blur-3xl transition-opacity duration-500 group-hover:bg-accent-400/15" />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:gap-10">
          <div className="flex-1">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-md purple-glow transition-transform duration-300 group-hover:scale-110">
                <section.icon className="h-5 w-5" />
              </span>
              <div>
                <span className="inline-flex items-center rounded-full border border-white/80 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 shadow-sm">
                  {section.category}
                </span>
              </div>
            </div>

            <h3 className="mt-4 text-xl font-extrabold tracking-tight text-slate-900">
              {section.title}
            </h3>
            <p className="mt-3 text-[15px] font-bold text-slate-800">{section.intro}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{section.description}</p>

            <ul className="mt-5 space-y-2">
              {section.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                    <Check className="h-3 w-3" />
                  </span>
                  {outcome}
                </li>
              ))}
            </ul>

            <Link
              to={section.route}
              className="group/btn mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Open {section.title.toLowerCase()} in app
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>

          <div className="flex-1">
            <p className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-500">
              <span className="h-px w-5 bg-slate-300" />
              How it flows
            </p>
            <div className="space-y-2.5">
              {section.steps.map((step, i) => (
                <div
                  key={step}
                  className="flex items-center gap-3.5 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:border-brand-300 hover:shadow-md"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-[11px] font-black text-white shadow purple-glow">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold text-slate-800">{step}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 flex items-center gap-2 rounded-lg bg-accent-50 px-3.5 py-2.5 text-xs leading-relaxed text-slate-600 ring-1 ring-accent-100">
              <Check className="h-3.5 w-3.5 shrink-0 text-accent-500" />
              A standardized pipeline, shared by every channel.
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
