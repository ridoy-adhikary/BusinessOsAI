import { ShoppingCart, RefreshCcw, PackageCheck, XCircle } from "lucide-react";
import { PageHeader, StatCard, Card, CardHeader, DataTable, Badge, ToolbarButton } from "@/components/ui";
import { orders, type Order } from "../data/mock";

const statusTone: Record<Order["status"], "brand" | "green" | "red" | "amber" | "slate"> = {
  pending: "amber",
  confirmed: "brand",
  packing: "slate",
  "in-transit": "slate",
  delivered: "green",
  cancelled: "red",
};

export function OrdersPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Orders"
        description="Every sale from every channel in one clean inbox."
        icon={ShoppingCart}
        actions={<ToolbarButton>+ New Order</ToolbarButton>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Today's orders" value={orders.length} icon={ShoppingCart} hint="across all channels" trend="up" />
        <StatCard label="Pending" value={orders.filter((o) => o.status === "pending").length} icon={RefreshCcw} hint="awaiting confirmation" trend="neutral" />
        <StatCard label="Delivered" value={orders.filter((o) => o.status === "delivered").length} icon={PackageCheck} hint="this week" trend="up" />
        <StatCard label="Cancelled" value={orders.filter((o) => o.status === "cancelled").length} icon={XCircle} hint="last 7 days" trend="down" />
      </div>

      <Card>
        <CardHeader title="Order inbox" subtitle="Unified across Facebook, Messenger, WhatsApp, website, phone and POS" />
        <DataTable<Order>
          columns={[
            { key: "id", header: "Order", render: (o) => <span className="font-semibold text-slate-900">{o.id}</span> },
            { key: "channel", header: "Channel", render: (o) => <span className="text-slate-600">{o.channel}</span> },
            { key: "customer", header: "Customer", render: (o) => <span className="text-slate-700">{o.customer}</span> },
            { key: "items", header: "Items", render: (o) => <span className="text-slate-600">{o.items}</span> },
            { key: "total", header: "Total", render: (o) => <span className="font-semibold text-slate-900">৳{o.total.toLocaleString()}</span> },
            { key: "payment", header: "Payment", render: (o) => <span className="text-slate-600">{o.payment}</span> },
            { key: "status", header: "Status", render: (o) => <Badge tone={statusTone[o.status]}>{o.status}</Badge> },
            { key: "date", header: "Date", render: (o) => <span className="text-slate-500">{o.date}</span> },
          ]}
          rows={orders}
        />
      </Card>
    </div>
  );
}
