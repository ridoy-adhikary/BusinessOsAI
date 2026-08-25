import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Building2, Globe, Store } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/stores/auth-store";
import { paths } from "@/routes/paths";
import type { BusinessType } from "@/types";

const businessTypes: { value: BusinessType; label: string; icon: typeof Globe; hint: string }[] = [
  { value: "online", label: "Online", icon: Globe, hint: "Sell through website & social" },
  { value: "offline", label: "Offline", icon: Store, hint: "Physical shop / POS" },
  { value: "hybrid", label: "Online + Offline", icon: Building2, hint: "Omnichannel business" },
];

export function RegisterPage() {
  const setSession = useAuthStore((s) => s.setSession);
  const navigate = useNavigate();
  const [businessType, setBusinessType] = useState<BusinessType>("hybrid");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");

    setSession({
      token: "demo-session-token",
      user: { id: "usr_demo", name, email, role: "owner" },
      businessId: "biz_demo",
      businessType,
    });
    navigate(paths.subscribe, { replace: true });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-10">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
        <Link to={paths.home} className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-sm font-bold text-white">
            B
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Business<span className="text-brand-600">OS</span>
          </span>
        </Link>

        <h1 className="mt-8 text-2xl font-bold text-slate-900">Create your workspace</h1>
        <p className="mt-1.5 text-sm text-slate-500">
          Set up your isolated tenant workspace in minutes.
        </p>

        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
              Your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Rahim Uddin"
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm outline-none focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
            />
          </div>
          <div>
            <label htmlFor="business" className="mb-1.5 block text-sm font-medium text-slate-700">
              Business name
            </label>
            <input
              id="business"
              name="business"
              type="text"
              required
              placeholder="Dhaka Fashion House"
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm outline-none focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
            />
          </div>
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
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm outline-none focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
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
              minLength={8}
              placeholder="Minimum 8 characters"
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm outline-none focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
            />
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-slate-700">Business type</p>
            <div className="grid grid-cols-3 gap-2">
              {businessTypes.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => setBusinessType(type.value)}
                  title={type.hint}
                  className={cn(
                    "flex flex-col items-center gap-1.5 rounded-xl border px-2 py-3 text-xs font-semibold transition-all",
                    businessType === type.value
                      ? "border-brand-400 bg-brand-50 text-brand-700 ring-2 ring-brand-100"
                      : "border-slate-200 bg-white text-slate-500 hover:border-brand-200",
                  )}
                >
                  <type.icon className="h-4 w-4" />
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="h-11 w-full rounded-xl bg-brand-500 text-sm font-bold text-white shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5 hover:bg-brand-600"
          >
            Continue to plans
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link to={paths.login} className="font-semibold text-brand-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
