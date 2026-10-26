import { useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useAuthStore } from "@/stores/auth-store";
import { paths } from "@/routes/paths";
import { AuthLayout, authInputClass, authLabelClass } from "../components/auth-layout";

export function LoginPage() {
  const setSession = useAuthStore((s) => s.setSession);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

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
    <AuthLayout>
      <div className="rounded-3xl border border-white/70 bg-white/80 p-7 shadow-2xl shadow-brand-500/10 backdrop-blur-xl sm:p-9">
        <div className="mb-7">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Welcome back</h1>
          <p className="mt-1.5 text-sm text-slate-500">
            Log in to your business workspace to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
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
            <div className="mb-1.5 flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                Password
              </label>
              <Link
                to={paths.login}
                className="text-xs font-semibold text-brand-600 transition-colors hover:text-brand-700 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                autoComplete="current-password"
                placeholder="••••••••"
                className={`${authInputClass} pl-10 pr-11`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <label className="flex cursor-pointer select-none items-center gap-2.5 text-sm text-slate-600">
            <input
              type="checkbox"
              name="remember"
              defaultChecked
              className="h-4 w-4 rounded border-slate-300 text-brand-600 accent-brand-500 focus:ring-brand-200"
            />
            Keep me signed in on this device
          </label>

          <button
            type="submit"
            className="group flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-sm font-bold text-white shadow-lg purple-glow transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Log in
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </form>

        <div className="mt-7 flex items-center gap-3">
          <span className="h-px flex-1 bg-slate-200" />
          <span className="text-xs font-medium uppercase tracking-wider text-slate-400">or</span>
          <span className="h-px flex-1 bg-slate-200" />
        </div>

        <p className="mt-5 text-center text-sm text-slate-500">
          Don&apos;t have an account?{" "}
          <Link
            to={paths.register}
            className="font-semibold text-brand-600 transition-colors hover:text-brand-700 hover:underline"
          >
            Start free trial
          </Link>
        </p>

        <p className="mt-6 rounded-xl bg-amber-50 px-3.5 py-2.5 text-center text-xs font-medium text-amber-600 ring-1 ring-amber-100">
          Demo mode — backend authentication will be wired later.
        </p>
      </div>

      <p className="mt-6 text-center text-xs text-slate-400">
        By continuing you agree to our Terms of Service and Privacy Policy.
      </p>
    </AuthLayout>
  );
}
