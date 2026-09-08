import type { LucideIcon } from "lucide-react";
import { BrainCircuit, MapPin, Network, Warehouse } from "lucide-react";
import { useRef } from "react";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";

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
  const gridRef = useRef<HTMLDivElement | null>(null);
  useGsapReveal(gridRef, { y: 50, stagger: 0.15 });

  return (
    <section id="features" className="scroll-mt-24">
      <div ref={gridRef}>
        <div data-gsap className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Platform</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            One Platform. <span className="gradient-text">Total Control.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-slate-600">
            Modular building blocks that share a single core — turn modules on as you grow.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              data-gsap
              className="feature-card group relative h-full overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2"
            >
              <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-brand-500/10 blur-2xl transition-opacity duration-500 group-hover:bg-accent-400/20" />

              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-accent-50 text-brand-600 ring-1 ring-brand-100 transition-all duration-300 group-hover:from-brand-500 group-hover:to-accent-500 group-hover:text-white group-hover:shadow-lg group-hover:purple-glow">
                <feature.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{feature.description}</p>
              <ul className="mt-5 space-y-1.5 border-t border-dashed border-slate-200 pt-4">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <span className="h-1 w-1 rounded-full bg-accent-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}