import type { FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/stores/auth-store";
import { paths } from "@/routes/paths";

export function LoginPage() {
  const setSession = useAuthStore((s) => s.setSession);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "");
    const name = email.split("@")[0] || "Business Owner";

    setSession({
      token: "demo-session-token",
      user: { id: "usr_demo", name, email, role: "owner" },
      businessId: "biz_demo",
    });
    const from = (location.state as { from?: string } | null)?.from;
    const subscription = useAuthStore.getState().subscription;
    navigate(from ?? (subscription ? paths.dashboard : paths.subscribe), { replace: true });
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden mixed-bg-deep px-6">
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-accent-400/25 blur-3xl" />

      <div className="relative w-full max-w-md rounded-3xl border border-white/60 bg-white/80 p-8 shadow-2xl shadow-brand-500/10 backdrop-blur-xl">
        <Link to={paths.home} className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-400 text-sm font-bold text-white shadow-lg purple-glow">
            B
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Business<span className="gradient-text">OS</span>
          </span>
        </Link>

        <h1 className="mt-8 text-2xl font-bold text-slate-900">Welcome back</h1>
        <p className="mt-1.5 text-sm text-slate-500">Log in to your business workspace.</p>

        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@business.com"
              className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-900 outline-none transition-all focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-900 outline-none transition-all focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            />
          </div>
          <button
            type="submit"
            className="h-11 w-full rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-sm font-bold text-white shadow-lg purple-glow transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Log in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Don&apos;t have an account?{" "}
          <Link to={paths.register} className="font-semibold text-brand-600 hover:underline">
            Start free trial
          </Link>
        </p>
        <p className="mt-4 rounded-xl bg-amber-50 px-3 py-2 text-center text-xs font-medium text-amber-600 ring-1 ring-amber-100">
          Demo mode — backend authentication will be wired later.
        </p>
      </div>
    </div>
  );
}