import { Link, NavLink } from "react-router-dom";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/stores/ui-store";
import { paths } from "@/routes/paths";
import { navGroups } from "./navigation";

export function Sidebar() {
  const collapsed = useUiStore((s) => s.sidebarCollapsed);
  const toggle = useUiStore((s) => s.toggleSidebar);

  return (
    <aside
      className={cn(
        "flex h-screen shrink-0 flex-col border-r border-white/60 bg-white/70 backdrop-blur-xl transition-[width] duration-200",
        collapsed ? "w-16" : "w-60",
      )}
    >
      <Link to={paths.dashboard} className="flex h-14 items-center gap-2 border-b border-white/60 px-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-400 text-sm font-bold text-white shadow-lg purple-glow">
          B
        </div>
        {!collapsed && (
          <span className="truncate text-base font-bold tracking-tight text-slate-900">
            Business<span className="gradient-text">OS</span>
          </span>
        )}
      </Link>

      <nav className="flex-1 overflow-y-auto px-2 py-3">
        {navGroups.map((group) => (
          <div key={group.title} className="mb-4">
            {!collapsed && (
              <p className="px-2 pb-1 text-[11px] font-medium uppercase tracking-wider text-slate-400">
                {group.title}
              </p>
            )}
            <ul className="space-y-0.5">
              {group.items.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    title={collapsed ? item.label : undefined}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-700",
                        isActive &&
                          "bg-gradient-to-r from-brand-500 to-accent-500 font-medium text-white shadow-md purple-glow",
                        collapsed && "justify-center",
                      )
                    }
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    {!collapsed && <span className="truncate">{item.label}</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <button
        type="button"
        onClick={toggle}
        className="flex h-10 items-center justify-center border-t border-white/60 text-slate-400 hover:text-brand-600"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
      </button>
    </aside>
  );
}