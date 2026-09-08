import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/stores/auth-store";
import { paths } from "@/routes/paths";
import type { PlanTier } from "@/types";

interface PlanOption {
  tier: PlanTier;
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}

const plans: PlanOption[] = [
  {
    tier: "basic",
    name: "Starter",
    price: "Free",
    period: "forever",
    features: ["Up to 50 products", "1 warehouse", "POS + online orders", "Basic reports"],
  },
  {
    tier: "professional",
    name: "Professional",
    price: "Custom",
    period: "monthly billing",
    highlighted: true,
    features: [
      "Unlimited products & orders",
      "Multi-warehouse & transfers",
      "AI insights & forecasting",
      "Courier integrations",
      "Employees & roles",
    ],
  },
  {
    tier: "enterprise",
    name: "Enterprise",
    price: "Scale",
    period: "tailored contract",
    features: [
      "Dedicated infrastructure",
      "API access & integrations",
      "Advanced AI engine",
      "Custom SLA & onboarding",
    ],
  },
];

export function SubscribePage() {
  const user = useAuthStore((s) => s.user);
  const setSubscription = useAuthStore((s) => s.setSubscription);
  const navigate = useNavigate();
  const [selected, setSelected] = useState<PlanTier>("professional");

  const handleSubscribe = () => {
    setSubscription({ tier: selected, status: "active" });
    navigate(paths.dashboard, { replace: true });
  };

  return (
    <div className="relative min-h-screen overflow-hidden mixed-bg-deep px-6 py-12">
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent-400/25 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Choose your plan,{" "}
            <span className="gradient-text">{user?.name?.split(" ")[0] ?? "there"}</span>
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm text-slate-500">
            Your dashboard unlocks immediately after selecting a plan. You can change or cancel
            anytime from Subscription settings.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <button
              key={plan.tier}
              type="button"
              onClick={() => setSelected(plan.tier)}
              aria-pressed={selected === plan.tier}
              className={cn(
                "relative flex h-full flex-col rounded-3xl border bg-white/80 p-7 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/15",
                selected === plan.tier
                  ? "border-brand-400 ring-2 ring-brand-200 shadow-lg shadow-brand-500/15"
                  : "border-slate-200",
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-3.5 py-1 text-xs font-bold text-white shadow-md purple-glow">
                  <Sparkles className="h-3 w-3" />
                  Most Popular
                </span>
              )}
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-slate-900">{plan.name}</h2>
                <span
                  className={cn(
                    "flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors",
                    selected === plan.tier
                      ? "border-brand-500 bg-brand-500"
                      : "border-slate-300 bg-white",
                  )}
                >
                  {selected === plan.tier && <Check className="h-3 w-3 text-white" />}
                </span>
              </div>
              <p className="mt-4">
                <span className="text-3xl font-extrabold tracking-tight gradient-text">
                  {plan.price}
                </span>
                <span className="ml-2 text-xs font-medium text-slate-400">{plan.period}</span>
              </p>
              <ul className="mt-5 flex-1 space-y-2 border-t border-dashed border-slate-200 pt-5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>

        <div className="mt-9 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={handleSubscribe}
            className="rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg purple-glow transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Activate workspace
          </button>
          <p className="text-xs text-slate-400">
            Demo mode — payment gateway integration arrives with the backend.
          </p>
        </div>
      </div>
    </div>
  );
}