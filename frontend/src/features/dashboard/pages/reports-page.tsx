import { FileText, Download, RefreshCw } from "lucide-react";
import { PageHeader, StatCard, Card, CardHeader, DataTable, Badge, ToolbarButton } from "@/components/ui";
import { reports } from "../data/mock";

export function ReportsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Reports"
        description="Statements and reports that read like clean books."
        icon={FileText}
        actions={<ToolbarButton>+ Generate Report</ToolbarButton>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Available reports" value={reports.length} icon={FileText} hint="scheduled + on demand" trend="neutral" />
        <StatCard label="Generated this week" value={3} icon={RefreshCw} hint="auto & manual" trend="up" />
      </div>

      <Card>
        <CardHeader title="Report library" subtitle="Export whenever you need them, including VAT and tax reporting" />
        <DataTable
          columns={[
            { key: "name", header: "Report", render: (r) => <span className="font-semibold text-slate-900">{r.name}</span> },
            { key: "type", header: "Cadence", render: (r) => <Badge tone="slate">{r.type}</Badge> },
            { key: "rows", header: "Rows", render: (r) => <span className="text-slate-700">{r.rows}</span> },
            { key: "lastGen", header: "Last generated", render: (r) => <span className="text-slate-500">{r.lastGen}</span> },
            { key: "download", header: "", render: () => (
              <button type="button" className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700">
                <Download className="h-3.5 w-3.5" /> Export
              </button>
            )},
          ]}
          rows={reports}
        />
      </Card>
    </div>
  );
}
