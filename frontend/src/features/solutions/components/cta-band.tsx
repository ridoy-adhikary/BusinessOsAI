import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/common/reveal";
import { paths } from "@/routes/paths";

export function CtaBand() {
  return (
    <section className="mt-24 sm:mt-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-brand-500 to-accent-500 px-8 py-14 text-center shadow-2xl purple-glow sm:px-16">
          <div
            className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            aria-hidden="true"
          />
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to run your business on one core?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-brand-50 sm:text-base">
            Set up your workspace in minutes. Start free, add your team, connect your channels —
            and watch every order flow through a single engine.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to={paths.register}
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-brand-700 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to={paths.login}
              className="inline-flex items-center rounded-xl border border-white/40 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Log in
            </Link>
          </div>
          <p className="mt-6 text-xs font-medium text-brand-100/90">
            Free forever plan · No credit card required · Cancel anytime
          </p>
        </div>
      </Reveal>
    </section>
  );
}