import { Users, UserPlus, Star, AlertTriangle } from "lucide-react";
import { PageHeader, StatCard, Card, CardHeader, DataTable, Badge, ToolbarButton } from "@/components/ui";
import { customers, type Customer } from "../data/mock";

export function CustomersPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Customers"
        description="A single 360° profile for every customer and every conversation."
        icon={Users}
        actions={<ToolbarButton>+ Add Customer</ToolbarButton>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total customers" value={customers.length} icon={Users} hint="all channels" trend="up" />
        <StatCard label="New" value={customers.filter((c) => c.status === "New").length} icon={UserPlus} hint="this month" trend="up" />
        <StatCard label="VIP" value={customers.filter((c) => c.status === "VIP").length} icon={Star} hint="top spenders" trend="neutral" />
        <StatCard label="High risk" value={customers.filter((c) => c.risk === "High").length} icon={AlertTriangle} hint="COD risk" trend="down" />
      </div>

      <Card>
        <CardHeader title="Customer list" subtitle="Full order, payment and message history tied to one profile" />
        <DataTable<Customer>
          columns={[
            { key: "name", header: "Customer", render: (c) => <span className="font-semibold text-slate-900">{c.name}</span> },
            { key: "phone", header: "Phone", render: (c) => <span className="text-slate-600">{c.phone}</span> },
            { key: "orders", header: "Orders", render: (c) => <span className="text-slate-700">{c.orders}</span> },
            { key: "totalSpent", header: "Total spent", render: (c) => <span className="font-semibold text-slate-900">৳{c.totalSpent.toLocaleString()}</span> },
            { key: "lastOrder", header: "Last order", render: (c) => <span className="text-slate-500">{c.lastOrder}</span> },
            { key: "status", header: "Status", render: (c) => <Badge tone={c.status === "VIP" ? "brand" : c.status === "New" ? "green" : "slate"}>{c.status}</Badge> },
            { key: "risk", header: "COD risk", render: (c) => <Badge tone={c.risk === "High" ? "red" : c.risk === "Medium" ? "amber" : "green"}>{c.risk}</Badge> },
          ]}
          rows={customers}
        />
      </Card>
    </div>
  );
}
