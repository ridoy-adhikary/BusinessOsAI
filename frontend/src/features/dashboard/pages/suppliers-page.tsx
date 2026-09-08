import { Truck, Clock, Wallet } from "lucide-react";
import { PageHeader, StatCard, Card, CardHeader, DataTable, Badge, ToolbarButton } from "@/components/ui";
import { suppliers, type Supplier } from "../data/mock";

export function SuppliersPage() {
  const outstanding = suppliers.reduce((s, x) => s + x.outstanding, 0);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Suppliers & Purchases"
        description="Purchase, receive and track stock from your suppliers."
        icon={Truck}
        actions={<ToolbarButton>+ Add Supplier</ToolbarButton>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Suppliers" value={suppliers.length} icon={Truck} hint="active vendors" trend="neutral" />
        <StatCard label="Outstanding dues" value={`৳${outstanding.toLocaleString()}`} icon={Wallet} hint="to be paid" trend="down" />
        <StatCard label="Avg lead time" value="7.3 days" icon={Clock} hint="across vendors" trend="neutral" />
      </div>

      <Card>
        <CardHeader title="Supplier list" subtitle="Purchases reserve and replenish live inventory automatically" />
        <DataTable<Supplier>
          columns={[
            { key: "name", header: "Supplier", render: (s) => <span className="font-semibold text-slate-900">{s.name}</span> },
            { key: "category", header: "Category", render: (s) => <span className="text-slate-600">{s.category}</span> },
            { key: "contact", header: "Contact", render: (s) => <span className="text-slate-600">{s.contact}</span> },
            { key: "outstanding", header: "Outstanding", render: (s) => <span className={s.outstanding > 0 ? "font-semibold text-amber-600" : "font-semibold text-green-600"}>{s.outstanding > 0 ? `৳${s.outstanding.toLocaleString()}` : "Clear"}</span> },
            { key: "leadTime", header: "Lead time", render: (s) => <Badge tone="slate">{s.leadTime}</Badge> },
          ]}
          rows={suppliers}
        />
      </Card>
    </div>
  );
}
