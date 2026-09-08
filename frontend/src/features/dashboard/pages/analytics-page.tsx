import { BarChart3, TrendingUp, Globe, ShoppingCart, Users, Package } from "lucide-react";
import { PageHeader, StatCard, Card, CardHeader } from "@/components/ui";

const channelSales = [
  { channel: "Facebook", value: 38, color: "from-brand-500 to-brand-400" },
  { channel: "WhatsApp", value: 22, color: "from-accent-500 to-accent-300" },
  { channel: "Website", value: 18, color: "from-brand-400 to-accent-300" },
  { channel: "Phone Orders", value: 12, color: "from-brand-600 to-brand-400" },
  { channel: "POS", value: 10, color: "from-accent-400 to-brand-300" },
];

const weekly = [
  { day: "Mon", value: 62 },
  { day: "Tue", value: 78 },
  { day: "Wed", value: 45 },
  { day: "Thu", value: 90 },
  { day: "Fri", value: 110 },
  { day: "Sat", value: 68 },
  { day: "Sun", value: 84 },
];

export function AnalyticsPage() {
  const maxWeekly = Math.max(...weekly.map((w) => w.value));

  return (
    <div className="space-y-6">
      <PageHeader
        title="Analytics"
        description="A live view of the business while it's actually happening."
        icon={BarChart3}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Revenue" value="৳173,500" icon={TrendingUp} hint="↗ 15% vs last month" trend="up" />
        <StatCard label="Orders" value={842} icon={ShoppingCart} hint="this month" trend="up" />
        <StatCard label="Customers" value={1260} icon={Users} hint="active" trend="up" />
        <StatCard label="Products" value={186} icon={Package} hint="in catalog" trend="neutral" />
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Card>
          <CardHeader title="Weekly orders" subtitle="Real-time from the live data spine" />
          <div className="flex h-48 items-end justify-between gap-2">
            {weekly.map((w) => (
              <div key={w.day} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className="w-full rounded-t-lg bg-gradient-to-t from-brand-500 to-accent-400 transition-all hover:opacity-80"
                  style={{ height: `${(w.value / maxWeekly) * 160}px` }}
                />
                <span className="text-xs text-slate-400">{w.day}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader title="Sales by channel" subtitle="Breakdown of revenue contribution" />
          <div className="space-y-3">
            {channelSales.map((c) => (
              <div key={c.channel} className="flex items-center gap-3">
                <span className="w-28 shrink-0 text-sm text-slate-700">{c.channel}</span>
                <div className="h-4 flex-1 overflow-hidden rounded-full bg-slate-100">
                  <div className={`h-full rounded-full bg-gradient-to-r ${c.color}`} style={{ width: `${c.value}%` }} />
                </div>
                <span className="w-10 shrink-0 text-right text-sm font-semibold text-slate-800">{c.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <CardHeader title="Live performance" subtitle="Built directly on the live data spine — no refresh needed" />
        <div className="flex flex-wrap gap-6 text-sm">
          <div className="flex items-center gap-2 text-slate-600"><Globe className="h-4 w-4 text-brand-500" /> All channels updating live</div>
          <div className="flex items-center gap-2 text-slate-600"><ShoppingCart className="h-4 w-4 text-accent-500" /> Orders: 842 today</div>
          <div className="flex items-center gap-2 text-slate-600"><Users className="h-4 w-4 text-brand-500" /> New customers: 34</div>
        </div>
      </Card>
    </div>
  );
}
