import {
  ArrowRight,
  Bot,
  Boxes,
  ChevronRight,
  CreditCard,
  Globe,
  MessageCircle,
  MessageSquare,
  PackageCheck,
  ScanBarcode,
  Share2,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/common/reveal";

const channels = [
  { label: "Facebook", icon: Share2 },
  { label: "Messenger", icon: MessageSquare },
  { label: "WhatsApp", icon: MessageCircle },
  { label: "Website", icon: Globe },
  { label: "Phone Orders", icon: Smartphone },
  { label: "POS", icon: ScanBarcode },
];

const outputs = [
  { label: "Payment Gateways", icon: CreditCard },
  { label: "bKash / Nagad MFS", icon: Smartphone },
  { label: "Courier Networks", icon: PackageCheck },
  { label: "SMS / Email", icon: MessageSquare },
];

const spine = [
  "Product",
  "Inventory",
  "Orders",
  "Customers",
  "Payments",
  "Packaging & QR",
  "Courier",
  "Finance",
  "Analytics",
];

export function ArchitectureDiagram() {
  return (
    <section id="solutions" className="scroll-mt-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-6 shadow-2xl shadow-brand-500/10 backdrop-blur-md sm:p-10">
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl" />

          <div className="relative mb-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                System architecture
              </p>
              <h3 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                BusinessOS Core Workflow
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-200">
              <Sparkles className="h-3.5 w-3.5 text-accent-500" />
              One engine &middot; Every channel
            </span>
          </div>

          <div className="relative grid items-center gap-6 lg:grid-cols-[1fr_auto_1.25fr_auto_1fr]">
            <div className="space-y-2.5">
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                Sales channels
              </p>
              {channels.map((ch) => (
                <div
                  key={ch.label}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-brand-300 hover:bg-brand-50/50 hover:text-brand-700"
                >
                  <ch.icon className="h-4 w-4 shrink-0 text-accent-500" />
                  {ch.label}
                </div>
              ))}
            </div>

            <ArrowRight className="mx-auto hidden h-5 w-5 text-brand-400 lg:block" />

            <div className="relative">
              <div className="absolute inset-0 animate-pulse-ring rounded-3xl bg-brand-400/25" />
              <div className="relative rounded-3xl border-2 border-brand-400 bg-gradient-to-b from-white to-brand-50 p-6 shadow-xl shadow-brand-500/20">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-400 shadow-lg purple-glow">
                    <Boxes className="h-5 w-5 text-white" />
                  </span>
                  <div>
                    <p className="text-base font-bold text-slate-900">BusinessOS Core</p>
                    <p className="text-xs font-medium text-brand-600">Central Order Engine</p>
                  </div>
                </div>
                <div className="mt-5 space-y-2 border-t border-brand-100 pt-4 text-sm text-slate-600">
                  <p className="flex items-center gap-2">
                    <ChevronRight className="h-3.5 w-3.5 text-accent-500" />
                    Order validation &amp; inventory reservation
                  </p>
                  <p className="flex items-center gap-2">
                    <ChevronRight className="h-3.5 w-3.5 text-accent-500" />
                    Payment verification &middot; COD settlement
                  </p>
                  <p className="flex items-center gap-2">
                    <ChevronRight className="h-3.5 w-3.5 text-accent-500" />
                    QR packaging &amp; courier dispatch
                  </p>
                  <p className="flex items-center gap-2">
                    <ChevronRight className="h-3.5 w-3.5 text-accent-500" />
                    Single source of truth for your business
                  </p>
                </div>
              </div>
            </div>

            <ArrowRight className="mx-auto hidden h-5 w-5 text-brand-400 lg:block" />

            <div className="space-y-2.5">
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                Connected outputs
              </p>
              {outputs.map((out) => (
                <div
                  key={out.label}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-brand-300 hover:bg-brand-50/50 hover:text-brand-700"
                >
                  <out.icon className="h-4 w-4 shrink-0 text-accent-500" />
                  {out.label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-8 border-t border-dashed border-slate-200 pt-6">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">
              Live data spine — updated in real time
            </p>
            <div className="flex items-center gap-1 overflow-x-auto pb-1">
              {spine.map((step, i) => (
                <div key={step} className="flex shrink-0 items-center gap-1">
                  <span className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                    {step}
                  </span>
                  {i < spine.length - 1 && (
                    <ChevronRight className="h-3.5 w-3.5 shrink-0 text-brand-400" />
                  )}
                </div>
              ))}
              <div className="flex shrink-0 items-center gap-1">
                <ChevronRight className="h-3.5 w-3.5 shrink-0 text-accent-500" />
                <span className="flex items-center gap-1.5 rounded-lg border border-accent-300 bg-accent-50 px-3 py-1.5 text-xs font-semibold text-accent-600">
                  <Bot className="h-3.5 w-3.5" />
                  AI Insights
                </span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}