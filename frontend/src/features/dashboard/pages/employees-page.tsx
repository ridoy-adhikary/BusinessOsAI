import { UsersRound, ShieldCheck, UserCheck } from "lucide-react";
import { PageHeader, StatCard, Card, CardHeader, DataTable, Badge, ToolbarButton } from "@/components/ui";
import { employees, type Employee } from "../data/mock";

export function EmployeesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Employees & Roles"
        description="Control who can access what across your business."
        icon={UsersRound}
        actions={<ToolbarButton>+ Invite Employee</ToolbarButton>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Team members" value={employees.length} icon={UsersRound} hint="all roles" trend="neutral" />
        <StatCard label="Active" value={employees.filter((e) => e.status === "Active").length} icon={UserCheck} hint="with access" trend="up" />
        <StatCard label="Administrators" value={employees.filter((e) => e.role === "Administrator").length} icon={ShieldCheck} hint="full access" trend="neutral" />
      </div>

      <Card>
        <CardHeader title="Team" subtitle="Role-based permissions, invitations and suspensions" />
        <DataTable<Employee>
          columns={[
            { key: "name", header: "Name", render: (e) => <span className="font-semibold text-slate-900">{e.name}</span> },
            { key: "role", header: "Role", render: (e) => <Badge tone="brand">{e.role}</Badge> },
            { key: "email", header: "Email", render: (e) => <span className="text-slate-600">{e.email}</span> },
            { key: "status", header: "Status", render: (e) => <Badge tone={e.status === "Active" ? "green" : "slate"}>{e.status}</Badge> },
          ]}
          rows={employees}
        />
      </Card>
    </div>
  );
}
