import type { LucideIcon } from "lucide-react";
import { BrainCircuit, MapPin, Network, Warehouse } from "lucide-react";
import { Reveal } from "@/components/common/reveal";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
}

const features: Feature[] = [
  {
    icon: Network,
    title: "Omnichannel Mastery",
    description:
      "Facebook, Messenger, WhatsApp, website, phone and POS orders flow into one central engine. No duplicated systems — one standardized order every time.",
    points: ["Unified order engine", "Channel analytics", "Zero double entry"],
  },
  {
    icon: BrainCircuit,
    title: "AI-Driven Insights",
    description:
      "Demand forecasting, COD risk prediction and restocking recommendations generated from your live business data.",
    points: ["Demand forecasting", "COD risk scoring", "Smart restocking"],
  },
  {
    icon: Warehouse,
    title: "Enterprise Inventory",
    description:
      "Real-time stock ledger across warehouses and branches with reservations, transfers, returns and low-stock automation.",
    points: ["Multi-warehouse", "Live availability", "Transfer approvals"],
  },
  {
    icon: MapPin,
    title: "Built for Bangladesh",
    description:
      "Local payment gateways, MFS settlements, national courier integrations and workflows designed for how business actually runs here.",
    points: ["bKash / Nagad ready", "RedX / Pathao couriers", "COD lifecycle built-in"],
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="scroll-mt-24">
      <Reveal>
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Platform</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            One Platform. Total Control.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-slate-600">
            Modular building blocks that share a single core — turn modules on as you grow.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => (
          <Reveal key={feature.title} delay={i * 120}>
            <article className="feature-card group h-full rounded-3xl border border-slate-200/80 bg-white/85 p-6 backdrop-blur-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                <feature.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{feature.description}</p>
              <ul className="mt-5 space-y-1.5 border-t border-dashed border-slate-200 pt-4">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <span className="h-1 w-1 rounded-full bg-brand-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
