import { Link } from "react-router-dom";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/common/reveal";
import type { PlanTier } from "@/types";
import { paths } from "@/routes/paths";

interface Tier {
  name: string;
  tier: PlanTier;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
}

const tiers: Tier[] = [
  {
    name: "Starter",
    tier: "basic",
    price: "Free",
    period: "forever",
    tagline: "For new businesses getting started.",
    features: [
      "Up to 50 products",
      "1 warehouse / branch",
      "POS + online orders",
      "Basic reports",
      "Community support",
    ],
  },
  {
    name: "Professional",
    tier: "professional",
    price: "Custom",
    period: "monthly billing",
    tagline: "For growing teams that need automation.",
    highlighted: true,
    features: [
      "Unlimited products & orders",
      "Multi-warehouse & transfers",
      "AI insights & forecasting",
      "Courier integrations",
      "Employees & roles",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    tier: "enterprise",
    price: "Scale",
    period: "tailored contract",
    tagline: "For large operations with custom needs.",
    features: [
      "Dedicated infrastructure",
      "API access & integrations",
      "Advanced AI engine",
      "Custom SLA & onboarding",
      "Dedicated account manager",
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-24">
      <Reveal>
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Pricing</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Simple, Scalable Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-slate-600">
            Start free. Upgrade when your business does. Every plan runs on the same unified core.
          </p>
        </div>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-3">
        {tiers.map((tier, i) => (
          <Reveal key={tier.name} delay={i * 120} className="h-full">
            <article
              className={cn(
                "relative flex h-full flex-col rounded-3xl border bg-white/90 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-500/10",
                tier.highlighted
                  ? "border-brand-400 shadow-lg shadow-brand-500/15 ring-2 ring-brand-200"
                  : "border-slate-200/80",
              )}
            >
              {tier.highlighted && (
                <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-brand-500 px-3.5 py-1 text-xs font-bold text-white shadow-md shadow-brand-500/30">
                  <Sparkles className="h-3 w-3" />
                  Most Popular
                </span>
              )}
              <h3 className="text-base font-bold text-slate-900">{tier.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{tier.tagline}</p>
              <p className="mt-5">
                <span className="text-4xl font-extrabold tracking-tight text-slate-900">
                  {tier.price}
                </span>
                <span className="ml-2 text-sm font-medium text-slate-400">{tier.period}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-2.5 border-t border-dashed border-slate-200 pt-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={paths.register}
                state={{ tier: tier.tier }}
                className={cn(
                  "mt-8 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold transition-all hover:-translate-y-0.5",
                  tier.highlighted
                    ? "bg-brand-500 text-white shadow-lg shadow-brand-500/30 hover:bg-brand-600"
                    : "border border-slate-200 bg-white text-slate-800 hover:border-brand-300 hover:text-brand-700",
                )}
              >
                {tier.tier === "enterprise" ? "Talk to Us" : "Start Free Trial"}
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
