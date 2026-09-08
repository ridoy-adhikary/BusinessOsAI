import { Boxes, TrendingUp, AlertTriangle, PackageCheck } from "lucide-react";
import { PageHeader, StatCard, Card, CardHeader, DataTable, Badge, ToolbarButton } from "@/components/ui";
import { products, warehouses, type Product } from "../data/mock";

export function InventoryPage() {
  const totalItems = warehouses.reduce((sum, w) => sum + w.items, 0);
  const totalSkus = warehouses.reduce((sum, w) => sum + w.skus, 0);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Inventory"
        description="Live stock that always matches what's really on the shelf."
        icon={Boxes}
        actions={<ToolbarButton>+ Receive Stock</ToolbarButton>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Items in stock" value={totalItems.toLocaleString()} icon={Boxes} hint="all warehouses" trend="up" />
        <StatCard label="SKUs tracked" value={totalSkus} icon={PackageCheck} hint="live ledger" trend="neutral" />
        <StatCard label="Low stock" value={products.filter((p) => p.status === "Low stock").length} icon={AlertTriangle} hint="reorder soon" trend="down" />
        <StatCard label="Stock turns" value="4.2" icon={TrendingUp} hint="this month" trend="up" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {warehouses.map((w) => (
          <Card key={w.id}>
            <p className="text-sm font-semibold text-slate-900">{w.name}</p>
            <p className="text-xs text-slate-400">{w.location}</p>
            <div className="mt-3 flex justify-between text-sm">
              <span className="text-slate-500">SKUs</span>
              <span className="font-semibold text-slate-800">{w.skus}</span>
            </div>
            <div className="mt-1 flex justify-between text-sm">
              <span className="text-slate-500">Items</span>
              <span className="font-semibold text-slate-800">{w.items.toLocaleString()}</span>
            </div>
            <p className="mt-3 text-xs text-slate-400">Manager: {w.manager}</p>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader title="Stock levels" subtitle="Automatic reservation on order, live availability across locations" />
        <DataTable<Product>
          columns={[
            { key: "name", header: "Product", render: (p) => <span className="font-semibold text-slate-900">{p.name}</span> },
            { key: "sku", header: "SKU", render: (p) => <span className="text-slate-500">{p.sku}</span> },
            { key: "stock", header: "On hand", render: (p) => <span className={p.stock === 0 ? "font-semibold text-red-500" : p.stock <= p.lowStock ? "font-semibold text-amber-600" : "text-slate-700"}>{p.stock}</span> },
            { key: "lowStock", header: "Reorder at", render: (p) => <span className="text-slate-500">{p.lowStock}</span> },
            { key: "status", header: "Status", render: (p) => <Badge tone={p.status === "Active" ? "green" : p.status === "Low stock" ? "amber" : "red"}>{p.status}</Badge> },
          ]}
          rows={products}
        />
      </Card>
    </div>
  );
}
