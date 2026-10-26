import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Boxes, ShieldCheck, TrendingUp, Zap } from "lucide-react";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { paths } from "@/routes/paths";

const highlights = [
  {
    icon: Boxes,
    title: "One inventory truth",
    text: "Stock, orders and finance stay in sync across every sales channel.",
  },
  {
    icon: Zap,
    title: "Built for Bangladesh",
    text: "COD, courier partners and mobile payments wired in from day one.",
  },
  {
    icon: TrendingUp,
    title: "AI-powered decisions",
    text: "Demand forecasts and COD risk insights on top of your live data.",
  },
];

const stats = [
  { value: "12k+", label: "Businesses" },
  { value: "৳4.8Cr", label: "Monthly volume" },
  { value: "99.9%", label: "Uptime" },
];

export function AuthLogo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link to={paths.home} className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-400 text-sm font-bold text-white shadow-lg purple-glow">
        B
      </span>
      <span
        className={
          variant === "light"
            ? "text-lg font-bold tracking-tight text-white"
            : "text-lg font-bold tracking-tight text-slate-900"
        }
      >
        Business<span className="gradient-text">OS</span>
      </span>
    </Link>
  );
}

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-white lg:grid lg:grid-cols-[1.05fr_1fr]">
      <div className="absolute right-5 top-5 z-20">
        <ThemeToggle />
      </div>
      <aside className="relative hidden flex-col justify-between overflow-hidden p-12 text-white lg:flex">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1226] via-[#122a5c] to-[#1d3d7d]" />
        <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-400/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-16 h-[30rem] w-[30rem] rounded-full bg-accent-400/25 blur-3xl" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(75% 65% at 40% 35%, black, transparent)",
          }}
        />

        <div className="relative z-10">
          <AuthLogo variant="light" />
        </div>

        <div className="relative z-10 max-w-md">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5 text-accent-300" />
            Multi-tenant SaaS · Isolated workspaces
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-[1.15] tracking-tight">
            Run your whole business from one platform.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Orders, inventory, POS, payments, courier and AI — unified into a single
            business core.
          </p>

          <ul className="mt-9 space-y-5">
            {highlights.map((item) => (
              <li key={item.title} className="flex items-start gap-3.5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-accent-300">
                  <item.icon className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-xs leading-relaxed text-white/60">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 flex items-center gap-8 border-t border-white/10 pt-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-white/55">{stat.label}</p>
            </div>
          ))}
        </div>
      </aside>

      <main className="relative flex min-h-screen items-center justify-center overflow-hidden mixed-bg-deep px-6 py-10">
        <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-accent-400/25 blur-3xl" />

        <div className="relative w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <AuthLogo />
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}

export const authLabelClass = "mb-1.5 block text-sm font-medium text-slate-700";

export const authInputClass =
  "h-11 w-full rounded-xl border border-slate-200 bg-white/80 px-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100/70";
