import { CreditCard, Wallet, RefreshCcw, TrendingUp } from "lucide-react";
import { PageHeader, StatCard, Card, CardHeader, DataTable, Badge, ToolbarButton } from "@/components/ui";
import { transactions, type Transaction } from "../data/mock";

const statusTone: Record<Transaction["status"], "brand" | "green" | "red" | "amber" | "slate"> = {
  Completed: "green",
  Pending: "amber",
  Processed: "brand",
  Failed: "red",
};

export function PaymentsPage() {
  const received = transactions.filter((t) => t.type === "Payment received").reduce((s, t) => s + t.amount, 0);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Payments"
        description="Collect and reconcile money without the guesswork."
        icon={CreditCard}
        actions={<ToolbarButton>+ Capture Payment</ToolbarButton>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Received today" value={`৳${received.toLocaleString()}`} icon={Wallet} hint="cards & MFS" trend="up" />
        <StatCard label="COD pending" value="৳4,050" icon={RefreshCcw} hint="to settle" trend="neutral" />
        <StatCard label="Gateway success" value="98.4%" icon={TrendingUp} hint="last 30 days" trend="up" />
      </div>

      <Card>
        <CardHeader title="Transactions" subtitle="Verified via gateways and MFS, settled and reconciled to your books" />
        <DataTable<Transaction>
          columns={[
            { key: "id", header: "Transaction", render: (t) => <span className="font-semibold text-slate-900">{t.id}</span> },
            { key: "type", header: "Type", render: (t) => <span className="text-slate-600">{t.type}</span> },
            { key: "ref", header: "Reference", render: (t) => <span className="text-slate-500">{t.ref}</span> },
            { key: "method", header: "Method", render: (t) => <span className="text-slate-600">{t.method}</span> },
            { key: "amount", header: "Amount", render: (t) => <span className="font-semibold text-slate-900">৳{t.amount.toLocaleString()}</span> },
            { key: "status", header: "Status", render: (t) => <Badge tone={statusTone[t.status]}>{t.status}</Badge> },
            { key: "date", header: "Date", render: (t) => <span className="text-slate-500">{t.date}</span> },
          ]}
          rows={transactions}
        />
      </Card>
    </div>
  );
}
