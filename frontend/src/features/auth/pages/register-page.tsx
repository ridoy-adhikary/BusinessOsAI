import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Building2, Globe, Lock, Mail, Store, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/stores/auth-store";
import { paths } from "@/routes/paths";
import type { BusinessType } from "@/types";
import { AuthLayout, authInputClass, authLabelClass } from "../components/auth-layout";

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
    <AuthLayout>
      <div className="rounded-3xl border border-white/70 bg-white/80 p-7 shadow-2xl shadow-brand-500/10 backdrop-blur-xl sm:p-9">
        <div className="mb-7">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Create your workspace
          </h1>
          <p className="mt-1.5 text-sm text-slate-500">
            Set up your isolated tenant workspace in minutes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className={authLabelClass}>
              Your name
            </label>
            <div className="relative">
              <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Rahim Uddin"
                className={`${authInputClass} pl-10`}
              />
            </div>
          </div>

          <div>
            <label htmlFor="business" className={authLabelClass}>
              Business name
            </label>
            <div className="relative">
              <Building2 className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                id="business"
                name="business"
                type="text"
                required
                autoComplete="organization"
                placeholder="Dhaka Fashion House"
                className={`${authInputClass} pl-10`}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className={authLabelClass}>
              Email
            </label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@business.com"
                className={`${authInputClass} pl-10`}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className={authLabelClass}>
              Password
            </label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                id="password"
                name="password"
                type="password"
                required
                minLength={8}
                autoComplete="new-password"
                placeholder="Minimum 8 characters"
                className={`${authInputClass} pl-10`}
              />
            </div>
          </div>

          <div>
            <p className={authLabelClass}>Business type</p>
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
                      : "border-slate-200 bg-white/80 text-slate-500 hover:border-brand-200 hover:text-brand-600",
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
            className="h-11 w-full rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-sm font-bold text-white shadow-lg purple-glow transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Continue to plans
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            to={paths.login}
            className="font-semibold text-brand-600 transition-colors hover:text-brand-700 hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
