import { Package, AlertTriangle, PackageX, Layers } from "lucide-react";
import { PageHeader, StatCard, Card, CardHeader, DataTable, Badge, ToolbarButton } from "@/components/ui";
import { products, type Product } from "../data/mock";

export function ProductsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Products"
        description="One canonical catalog feeding every sales channel."
        icon={Package}
        actions={<ToolbarButton>+ Add Product</ToolbarButton>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total products" value={products.length} icon={Package} hint="across catalog" trend="neutral" />
        <StatCard label="Active" value={products.filter((p) => p.status === "Active").length} icon={Layers} hint="published" trend="up" />
        <StatCard label="Low stock" value={products.filter((p) => p.status === "Low stock").length} icon={AlertTriangle} hint="needs reorder" trend="down" />
        <StatCard label="Out of stock" value={products.filter((p) => p.status === "Out of stock").length} icon={PackageX} hint="restock now" trend="down" />
      </div>

      <Card>
        <CardHeader title="Product catalog" subtitle="Each item defined once, published to all channels" />
        <DataTable<Product>
          columns={[
            { key: "name", header: "Product", render: (p) => <span className="font-semibold text-slate-900">{p.name}</span> },
            { key: "sku", header: "SKU", render: (p) => <span className="text-slate-500">{p.sku}</span> },
            { key: "category", header: "Category", render: (p) => <span className="text-slate-600">{p.category}</span> },
            { key: "price", header: "Price", render: (p) => <span className="font-semibold text-slate-900">৳{p.price.toLocaleString()}</span> },
            { key: "stock", header: "Stock", render: (p) => <span className={p.stock === 0 ? "font-semibold text-red-500" : p.stock <= p.lowStock ? "font-semibold text-amber-600" : "text-slate-700"}>{p.stock}</span> },
            { key: "status", header: "Status", render: (p) => (
              <Badge tone={p.status === "Active" ? "green" : p.status === "Low stock" ? "amber" : "red"}>{p.status}</Badge>
            )},
          ]}
          rows={products}
        />
      </Card>
    </div>
  );
}
