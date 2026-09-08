import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Boxes,
  CreditCard,
  Network,
  PackageCheck,
  QrCode,
} from "lucide-react";
import { Reveal } from "@/components/common/reveal";

interface ModuleSolution {
  icon: LucideIcon;
  title: string;
  description: string;
}

const modules: ModuleSolution[] = [
  {
    icon: Network,
    title: "Omnichannel Sales Engine",
    description:
      "Facebook, WhatsApp, website, phone and POS orders standardized into one pipeline — no separate systems per channel.",
  },
  {
    icon: Boxes,
    title: "Smart Inventory",
    description:
      "Available, reserved, damaged and in-transit states recalculated live with every sale, return and transfer.",
  },
  {
    icon: QrCode,
    title: "QR Packaging & Verification",
    description:
      "Unique package QR checked against product barcodes before courier handoff. Wrong parcels never leave.",
  },
  {
    icon: PackageCheck,
    title: "Courier Automation",
    description:
      "Compare providers on price, speed and success rate; book shipments and track deliveries in one place.",
  },
  {
    icon: CreditCard,
    title: "Payments & COD Settlement",
    description:
      "Online payments verified instantly; COD cash reconciled back through courier settlements automatically.",
  },
  {
    icon: BarChart3,
    title: "Finance & Analytics",
    description:
      "Revenue, fees, expenses and estimated profit rolled into exportable reports you can actually act on.",
  },
];

export function ModuleGrid() {
  return (
    <section className="mt-24 sm:mt-28">
      <Reveal>
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            Modular building blocks
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Every solution, <span className="gradient-text">one shared core</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-slate-600">
            Modules aren&apos;t bolt-ons — they share a single data spine, so a sale anywhere
            updates inventory, finance and analytics everywhere.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((module, i) => (
          <Reveal key={module.title} delay={i * 100}>
            <article className="feature-card group h-full rounded-3xl border border-white/60 bg-white/80 p-6 backdrop-blur-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-accent-50 text-brand-600 ring-1 ring-brand-100 transition-all duration-300 group-hover:from-brand-500 group-hover:to-accent-500 group-hover:text-white group-hover:purple-glow">
                <module.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{module.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{module.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}