import { Bell, CheckCheck, AlertTriangle, PackageX, Truck } from "lucide-react";
import { PageHeader, StatCard, Card, ToolbarButton } from "@/components/ui";
import { notifications } from "../data/mock";

const iconForTitle = (title: string) => {
  if (title.includes("stock")) return { Icon: PackageX, tone: "text-red-500 bg-red-50" };
  if (title.includes("risk")) return { Icon: AlertTriangle, tone: "text-amber-600 bg-amber-50" };
  return { Icon: Truck, tone: "text-brand-600 bg-brand-50" };
};

export function NotificationsPage() {
  const unread = notifications.filter((n) => !n.read).length;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Notifications"
        description="Alerts from across your business, all in one place."
        icon={Bell}
        actions={<ToolbarButton>Mark all read</ToolbarButton>}
      />

      <StatCard label="Unread" value={unread} icon={Bell} hint="need attention" trend="neutral" />

      <Card>
        <ul className="divide-y divide-slate-100">
          {notifications.map((n) => {
            const { Icon, tone } = iconForTitle(n.title);
            const unreadStyle = n.read ? "opacity-70" : "border-l-4 border-brand-400";
            return (
              <li key={n.id} className={`flex items-start gap-3 px-1 py-4 ${unreadStyle}`}>
                <span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${tone}`}>
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-900">{n.title}</p>
                  <p className="mt-0.5 text-sm text-slate-600">{n.message}</p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-1">
                  <span className="text-xs text-slate-400">{n.time}</span>
                  {!n.read && <span className="flex items-center gap-1 text-[11px] font-semibold text-brand-600"><CheckCheck className="h-3 w-3" /> Unread</span>}
                </div>
              </li>
            );
          })}
        </ul>
      </Card>
    </div>
  );
}
