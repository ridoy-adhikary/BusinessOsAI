const summaryCards = [
  { title: "Sales & Orders", value: "0", hint: "today · pending · delivered · cancelled" },
  { title: "Product & Stock", value: "0", hint: "low / out of stock · best sellers" },
  { title: "Customers", value: "0", hint: "new · returning · VIP · high-risk COD" },
  { title: "Courier & Shipping", value: "0", hint: "pickups · in-transit · delivered" },
  { title: "Finance", value: "৳0", hint: "expenses · fees · estimated profit" },
  { title: "Alerts & AI", value: "—", hint: "recommendations will appear here" },
];

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-500">Central control center for your business.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {summaryCards.map((card) => (
          <div key={card.title} className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-medium text-slate-500">{card.title}</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">{card.value}</p>
            <p className="mt-1 text-xs text-slate-400">{card.hint}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
