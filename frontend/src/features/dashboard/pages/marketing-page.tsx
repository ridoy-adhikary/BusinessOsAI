import { MessageSquare, Megaphone, MousePointerClick } from "lucide-react";
import { PageHeader, StatCard, Card, CardHeader, DataTable, Badge, ToolbarButton } from "@/components/ui";
import { marketingCampaigns } from "../data/mock";

export function MarketingPage() {
  const totalBudget = marketingCampaigns.reduce((s, c) => s + c.budget, 0);
  const totalConversions = marketingCampaigns.reduce((s, c) => s + c.conversions, 0);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Marketing"
        description="Campaigns and outreach across your sales channels."
        icon={MessageSquare}
        actions={<ToolbarButton>+ New Campaign</ToolbarButton>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Active campaigns" value={marketingCampaigns.filter((c) => c.status === "Active").length} icon={Megaphone} hint="running now" trend="up" />
        <StatCard label="Total budget" value={`৳${totalBudget.toLocaleString()}`} icon={MessageSquare} hint="all campaigns" trend="neutral" />
        <StatCard label="Conversions" value={totalConversions} icon={MousePointerClick} hint="across channels" trend="up" />
      </div>

      <Card>
        <CardHeader title="Campaigns" subtitle="Segmented audiences, tagged and targeted for retention" />
        <DataTable
          columns={[
            { key: "name", header: "Campaign", render: (c) => <span className="font-semibold text-slate-900">{c.name}</span> },
            { key: "channel", header: "Channel", render: (c) => <span className="text-slate-600">{c.channel}</span> },
            { key: "budget", header: "Budget", render: (c) => <span className="text-slate-700">৳{c.budget.toLocaleString()}</span> },
            { key: "reach", header: "Reach", render: (c) => <span className="text-slate-600">{c.reach.toLocaleString()}</span> },
            { key: "conversions", header: "Conversions", render: (c) => <span className="font-semibold text-slate-900">{c.conversions}</span> },
            { key: "status", header: "Status", render: (c) => <Badge tone={c.status === "Active" ? "green" : "amber"}>{c.status}</Badge> },
          ]}
          rows={marketingCampaigns}
        />
      </Card>
    </div>
  );
}
