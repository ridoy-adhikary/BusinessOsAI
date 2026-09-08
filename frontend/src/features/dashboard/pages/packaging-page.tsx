import { QrCode, ScanLine, PackageCheck } from "lucide-react";
import { PageHeader, StatCard, Card, CardHeader, DataTable, Badge, ToolbarButton } from "@/components/ui";
import { parcels, type Parcel } from "../data/mock";

export function PackagingPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Packaging & QR"
        description="Every parcel tagged, scanned and traceable end to end."
        icon={QrCode}
        actions={<ToolbarButton>+ Generate Labels</ToolbarButton>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Parcels today" value={parcels.length} icon={PackageCheck} hint="to pack" trend="up" />
        <StatCard label="In transit" value={parcels.filter((p) => p.status === "In transit").length} icon={ScanLine} hint="at courier" trend="neutral" />
      </div>

      <Card>
        <CardHeader title="Parcel queue" subtitle="Unique QR label ties the order to its courier network" />
        <DataTable<Parcel>
          columns={[
            { key: "id", header: "Parcel", render: (p) => <span className="font-semibold text-slate-900">{p.id}</span> },
            { key: "order", header: "Order", render: (p) => <span className="text-slate-600">{p.order}</span> },
            { key: "courier", header: "Courier", render: (p) => <span className="text-slate-600">{p.courier}</span> },
            { key: "weight", header: "Weight", render: (p) => <span className="text-slate-500">{p.weight}</span> },
            { key: "tracking", header: "Tracking", render: (p) => <span className="font-mono text-xs text-brand-600">{p.tracking}</span> },
            { key: "status", header: "Status", render: (p) => <Badge tone={p.status === "In transit" ? "brand" : p.status === "Packed" ? "green" : "amber"}>{p.status}</Badge> },
          ]}
          rows={parcels}
        />
      </Card>
    </div>
  );
}
