import { Wallet, TrendingUp, Landmark, Receipt, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { PageHeader, StatCard, Card, CardHeader } from "@/components/ui";

const incomeItems = [
  { label: "Online sales", amount: 124000 },
  { label: "POS sales", amount: 31000 },
  { label: "COD settled", amount: 18500 },
];

const expenseItems = [
  { label: "COGS", amount: 82000 },
  { label: "Courier fees", amount: 9400 },
  { label: "Payment gateway fees", amount: 3200 },
];

export function FinancePage() {
  const totalIncome = incomeItems.reduce((s, i) => s + i.amount, 0);
  const totalExpense = expenseItems.reduce((s, e) => s + e.amount, 0);
  const profit = totalIncome - totalExpense;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Finance"
        description="Books that keep themselves, from every transaction."
        icon={Wallet}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Revenue" value={`৳${totalIncome.toLocaleString()}`} icon={TrendingUp} hint="this month" trend="up" />
        <StatCard label="Expenses" value={`৳${totalExpense.toLocaleString()}`} icon={Receipt} hint="fees & COGS" trend="neutral" />
        <StatCard label="Estimated profit" value={`৳${profit.toLocaleString()}`} icon={Landmark} hint="gross margin" trend="up" />
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Card>
          <CardHeader title="Income" subtitle="Auto-ledgered from every sale" />
          <div className="space-y-3">
            {incomeItems.map((i) => (
              <div key={i.label} className="flex items-center justify-between rounded-xl border border-slate-100 bg-white px-4 py-3">
                <span className="flex items-center gap-2 text-sm text-slate-700">
                  <ArrowUpRight className="h-4 w-4 text-green-500" />
                  {i.label}
                </span>
                <span className="text-sm font-semibold text-green-600">৳{i.amount.toLocaleString()}</span>
              </div>
            ))}
            <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-sm font-bold text-slate-900">
              <span>Total income</span>
              <span>৳{totalIncome.toLocaleString()}</span>
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader title="Expenses" subtitle="Auto-journaled fees and costs" />
          <div className="space-y-3">
            {expenseItems.map((e) => (
              <div key={e.label} className="flex items-center justify-between rounded-xl border border-slate-100 bg-white px-4 py-3">
                <span className="flex items-center gap-2 text-sm text-slate-700">
                  <ArrowDownRight className="h-4 w-4 text-red-400" />
                  {e.label}
                </span>
                <span className="text-sm font-semibold text-red-500">-৳{e.amount.toLocaleString()}</span>
              </div>
            ))}
            <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-sm font-bold text-slate-900">
              <span>Total expenses</span>
              <span>-৳{totalExpense.toLocaleString()}</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
