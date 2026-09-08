import { useRef } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  Boxes,
  Users,
  CreditCard,
  Truck,
  Wallet,
  Bot,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { Card, CardHeader, Badge } from "@/components/ui";
import { paths } from "@/routes/paths";

const overviewCards = [
  {
    to: paths.orders,
    title: "Orders",
    value: "7 pending",
    icon: ShoppingCart,
    tone: "text-brand-600 bg-brand-50",
    note: "Unified inbox across all channels",
  },
  {
    to: paths.inventory,
    title: "Inventory",
    value: "22,600 items",
    icon: Boxes,
    tone: "text-accent-600 bg-accent-50",
    note: "Live stock ledger, 3 warehouses",
  },
  {
    to: paths.customers,
    title: "Customers",
    value: "1,260",
    icon: Users,
    tone: "text-brand-600 bg-brand-50",
    note: "360° profiles, 5 high risk",
  },
  {
    to: paths.payments,
    title: "Payments",
    value: "৳24,800",
    icon: CreditCard,
    tone: "text-accent-600 bg-accent-50",
    note: "Settled & reconciled to books",
  },
  {
    to: paths.courier,
    title: "Courier",
    value: "8 in transit",
    icon: Truck,
    tone: "text-brand-600 bg-brand-50",
    note: "Pathao & RedX live tracking",
  },
  {
    to: paths.finance,
    title: "Finance",
    value: "৳41,600 profit",
    icon: Wallet,
    tone: "text-accent-600 bg-accent-50",
    note: "Auto-journaled every sale",
  },
];

const spineFlow = [
  "Sales channels",
  "One core",
  "Inventory",
  "Orders",
  "Customers",
  "Payments",
  "Courier",
  "Finance",
  "Analytics",
  "AI",
];

export function DashboardPage() {
  const ref = useRef<HTMLDivElement | null>(null);
  useGsapReveal(ref, { y: 24, stagger: 0.06 });

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-md purple-glow">
          <LayoutDashboard className="h-5 w-5" />
        </span>
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
          <p className="text-sm text-slate-500">One engine connecting every channel to a single core.</p>
        </div>
      </div>

      {/* Live data spine strip */}
      <Card>
        <CardHeader
          title="BusinessOS data spine"
          subtitle="One engine · every channel — updated in real time"
          action={<Badge tone="green">● Live</Badge>}
        />
        <div className="flex items-center gap-1 overflow-x-auto pb-1">
          {spineFlow.map((step, i) => (
            <div key={step} className="flex shrink-0 items-center gap-1">
              <span className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                {step}
              </span>
              {i < spineFlow.length - 1 && <ArrowRight className="h-3.5 w-3.5 shrink-0 text-brand-400" />}
            </div>
          ))}
        </div>
      </Card>

      {/* Module overview grid */}
      <div ref={ref} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {overviewCards.map((card) => (
          <Link
            key={card.title}
            to={card.to}
            data-gsap
            className="group rounded-xl border border-white/60 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10"
          >
            <div className="flex items-start justify-between">
              <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${card.tone}`}>
                <card.icon className="h-5 w-5" />
              </span>
              <ArrowRight className="h-4 w-4 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-brand-500" />
            </div>
            <p className="mt-4 text-sm font-medium text-slate-500">{card.title}</p>
            <p className="mt-1 text-xl font-semibold gradient-text">{card.value}</p>
            <p className="mt-1 text-xs text-slate-400">{card.note}</p>
          </Link>
        ))}
      </div>

      {/* AI spotlight */}
      <Card className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-400/15 blur-3xl" />
        <CardHeader
          title="AI spotlight"
          subtitle="Forecast, risk and reorder recommendations from your own data"
          action={
            <Link to={paths.aiAssistant} className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700">
              Ask AI <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />
        <ul className="space-y-2.5">
          <li className="rounded-xl border border-brand-100 bg-brand-50/40 px-4 py-3 text-sm text-slate-700">
            <span className="mr-2 inline-flex items-center"><Bot className="mr-1 h-4 w-4 text-brand-500" />Forecast</span>
            Demand for classic kurti is set to rise 22% next week — restock from Dhaka Central.
          </li>
          <li className="rounded-xl border border-amber-100 bg-amber-50/40 px-4 py-3 text-sm text-slate-700">
            <span className="mr-2 inline-flex items-center"><Bot className="mr-1 h-4 w-4 text-amber-500" />Risk</span>
            BO-1005 (COD ৳2,200) flagged high-risk — review before dispatch.
          </li>
          <li className="rounded-xl border border-brand-100 bg-brand-50/40 px-4 py-3 text-sm text-slate-700">
            <span className="mr-2 inline-flex items-center"><Bot className="mr-1 h-4 w-4 text-brand-500" />Reorder</span>
            Restock 40 units of the polo when stock drops below 8.
          </li>
        </ul>
      </Card>
    </div>
  );
}
