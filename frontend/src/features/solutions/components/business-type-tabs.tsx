import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Banknote,
  Boxes,
  Building2,
  Globe,
  Network,
  PackageCheck,
  ScanBarcode,
  Share2,
  ShieldCheck,
  Store,
  Truck,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/common/reveal";

interface Capability {
  icon: LucideIcon;
  title: string;
  text: string;
}

interface SolutionDetail {
  id: string;
  label: string;
  icon: LucideIcon;
  headline: string;
  description: string;
  workflow: string[];
  capabilities: Capability[];
  stats: { value: string; label: string }[];
}

const solutions: SolutionDetail[] = [
  {
    id: "online",
    label: "Online Business",
    icon: Globe,
    headline: "Sell everywhere your customers already are",
    description:
      "Facebook pages, live sales, website and WhatsApp orders land in one central engine. Every order is validated, stock is reserved in real time, and the best courier is booked automatically — while COD cash reconciles itself back to your accounts.",
    workflow: [
      "Order arrives from Facebook, website or WhatsApp",
      "Customer profile & history created automatically",
      "Stock reserved instantly across warehouses",
      "Best courier booked by price, speed & success rate",
      "COD collected at delivery and settled to you",
    ],
    capabilities: [
      {
        icon: Network,
        title: "Central Order Engine",
        text: "One standardized order record for every channel.",
      },
      {
        icon: Users,
        title: "Customer Intelligence",
        text: "Auto segmentation into VIP, new, returning & high-risk COD.",
      },
      {
        icon: Truck,
        title: "Courier Recommendation",
        text: "Compare RedX, Pathao & more before every booking.",
      },
      {
        icon: Banknote,
        title: "COD Control",
        text: "Risk scoring and settlement tracking built in.",
      },
    ],
    stats: [
      { value: "8+", label: "Sales channels unified" },
      { value: "0", label: "Double entries" },
      { value: "24/7", label: "Live stock truth" },
    ],
  },
  {
    id: "retail",
    label: "Retail & POS",
    icon: Store,
    headline: "Counter-speed checkout, enterprise-grade control",
    description:
      "Physical shops get a barcode-fast POS that runs on the exact same core as everything else — no separate shop database. Scan, discount, take payment and print an invoice while inventory, customer history and finance update themselves instantly.",
    workflow: [
      "Cashier scans product barcode",
      "Cart built with quantity & discounts",
      "Payment taken — cash, card or MFS",
      "Invoice printed in one click",
      "Stock, finance & analytics updated live",
    ],
    capabilities: [
      {
        icon: ScanBarcode,
        title: "Lightning POS",
        text: "Barcode-first checkout designed for busy counters.",
      },
      {
        icon: Boxes,
        title: "Shared Stock Ledger",
        text: "Shop sales draw from the same pool as online orders.",
      },
      {
        icon: ShieldCheck,
        title: "Cashier Roles",
        text: "Permission-gated actions with full audit trail.",
      },
      {
        icon: Banknote,
        title: "Instant Invoicing",
        text: "Print-ready invoices with your return policy attached.",
      },
    ],
    stats: [
      { value: "<1s", label: "Checkout per scan" },
      { value: "1", label: "Stock source of truth" },
      { value: "100%", label: "Actions audit-logged" },
    ],
  },
  {
    id: "hybrid",
    label: "Omnichannel / Hybrid",
    icon: Building2,
    headline: "One catalog. Every channel. Total visibility.",
    description:
      "Run online and offline as a single operation. Products are created once and shared live across web, social and shop floors; orders route to the right warehouse; branch transfers move with approvals — and analytics consolidate everything into one picture.",
    workflow: [
      "Create products once — shared everywhere",
      "Channels sell from the same live stock",
      "Orders route to the nearest warehouse",
      "Branch transfers require approval flows",
      "Consolidated reports across all locations",
    ],
    capabilities: [
      {
        icon: Share2,
        title: "Unified Catalog",
        text: "Price, SKU, barcode & variants stay in sync.",
      },
      {
        icon: Boxes,
        title: "Multi-Warehouse",
        text: "Per-location ledgers with approval-gated transfers.",
      },
      {
        icon: PackageCheck,
        title: "QR Verification",
        text: "Packages verified against barcodes pre-dispatch.",
      },
      {
        icon: Network,
        title: "Channel Analytics",
        text: "See exactly which channel earns what.",
      },
    ],
    stats: [
      { value: "∞", label: "Warehouses & branches" },
      { value: "1", label: "Product catalog" },
      { value: "360°", label: "Business view" },
    ],
  },
];

export function BusinessTypeTabs() {
  const [activeId, setActiveId] = useState(solutions[0].id);
  const active = solutions.find((solution) => solution.id === activeId) ?? solutions[0];

  return (
    <section className="mt-16 sm:mt-20">
      <Reveal>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 rounded-3xl border border-white/60 bg-white/80 p-2 shadow-lg shadow-brand-500/10 backdrop-blur-md sm:flex-row">
          {solutions.map((solution) => (
            <button
              key={solution.id}
              type="button"
              onClick={() => setActiveId(solution.id)}
              aria-pressed={activeId === solution.id}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300",
                activeId === solution.id
                  ? "bg-gradient-to-r from-brand-500 to-accent-500 text-white shadow-md purple-glow"
                  : "text-slate-600 hover:bg-brand-50 hover:text-brand-700",
              )}
            >
              <solution.icon className="h-4 w-4" />
              {solution.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div
        key={active.id}
        className="animate-fade-up mx-auto mt-6 max-w-7xl rounded-3xl border border-white/60 bg-white/90 p-6 shadow-xl shadow-brand-500/10 backdrop-blur-md sm:p-10"
      >
        <div className="relative">
          <div className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="flex items-start gap-4">
            <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-400 p-3 text-white shadow-lg purple-glow">
              <active.icon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                {active.headline}
              </h3>
              <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
                {active.description}
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-600">
              How it works
            </p>
            <ol className="relative mt-4 space-y-4 border-l-2 border-dashed border-brand-200 pl-6">
              {active.workflow.map((step, index) => (
                <li key={step} className="relative">
                  <span className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-[11px] font-bold text-white ring-4 ring-white">
                    {index + 1}
                  </span>
                  <p className="pt-0.5 text-sm font-medium text-slate-700">{step}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8 grid grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-100 bg-slate-50/60 py-4">
              {active.stats.map((stat) => (
                <div key={stat.label} className="px-3 text-center">
                  <p className="text-2xl font-extrabold tracking-tight gradient-text">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[11px] font-medium leading-snug text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid content-start gap-4 sm:grid-cols-2">
            {active.capabilities.map((capability) => (
              <div
                key={capability.title}
                className="feature-card rounded-2xl border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:border-brand-300 hover:bg-brand-50/40"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                  <capability.icon className="h-4.5 w-4.5" />
                </span>
                <h4 className="mt-3.5 text-sm font-bold text-slate-900">{capability.title}</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{capability.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}