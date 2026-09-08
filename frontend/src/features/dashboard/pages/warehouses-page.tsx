import { Store, MapPin, Layers } from "lucide-react";
import { PageHeader, StatCard, Card, CardHeader, DataTable, ToolbarButton } from "@/components/ui";
import { warehouses, type Warehouse } from "../data/mock";

export function WarehousesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Warehouses"
        description="Multi-location stock visibility with live availability."
        icon={Store}
        actions={<ToolbarButton>+ Add Warehouse</ToolbarButton>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Warehouses" value={warehouses.length} icon={Store} hint="active locations" trend="neutral" />
        <StatCard label="Total items" value={warehouses.reduce((s, w) => s + w.items, 0).toLocaleString()} icon={Layers} hint="across sites" trend="up" />
      </div>

      <Card>
        <CardHeader title="Locations" subtitle="Transfers and adjustments run against one accurate count" />
        <DataTable<Warehouse>
          columns={[
            { key: "name", header: "Warehouse", render: (w) => <span className="font-semibold text-slate-900">{w.name}</span> },
            { key: "location", header: "Location", render: (w) => <span className="flex items-center gap-1.5 text-slate-600"><MapPin className="h-3.5 w-3.5 text-slate-400" />{w.location}</span> },
            { key: "skus", header: "SKUs", render: (w) => <span className="text-slate-700">{w.skus}</span> },
            { key: "items", header: "Items", render: (w) => <span className="font-semibold text-slate-900">{w.items.toLocaleString()}</span> },
            { key: "manager", header: "Manager", render: (w) => <span className="text-slate-600">{w.manager}</span> },
          ]}
          rows={warehouses}
        />
      </Card>
    </div>
  );
}
