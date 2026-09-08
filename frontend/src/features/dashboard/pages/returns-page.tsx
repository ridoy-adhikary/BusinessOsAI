import { RotateCcw, RefreshCcw, Undo2 } from "lucide-react";
import { PageHeader, StatCard, Card, CardHeader, DataTable, Badge, ToolbarButton } from "@/components/ui";
import { returns, type ReturnItem } from "../data/mock";

export function ReturnsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Returns"
        description="Turn returns from a headache into a controlled process."
        icon={RotateCcw}
        actions={<ToolbarButton>+ New RMA</ToolbarButton>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Open returns" value={returns.length} icon={Undo2} hint="awaiting action" trend="neutral" />
        <StatCard label="Restocked" value={returns.filter((r) => r.action === "Restock").length} icon={RefreshCcw} hint="back on shelf" trend="up" />
      </div>

      <Card>
        <CardHeader title="Return requests" subtitle="Validated, turned into an RMA, picked up and restocked or refunded" />
        <DataTable<ReturnItem>
          columns={[
            { key: "id", header: "RMA", render: (r) => <span className="font-semibold text-slate-900">{r.id}</span> },
            { key: "order", header: "Order", render: (r) => <span className="text-slate-600">{r.order}</span> },
            { key: "customer", header: "Customer", render: (r) => <span className="text-slate-700">{r.customer}</span> },
            { key: "reason", header: "Reason", render: (r) => <span className="text-slate-600">{r.reason}</span> },
            { key: "status", header: "Status", render: (r) => <Badge tone={r.status === "Approved" ? "green" : r.status === "Requested" ? "amber" : "brand"}>{r.status}</Badge> },
            { key: "action", header: "Action", render: (r) => <Badge tone={r.action === "Refund" ? "brand" : r.action === "Restock" ? "green" : "slate"}>{r.action}</Badge> },
          ]}
          rows={returns}
        />
      </Card>
    </div>
  );
}
