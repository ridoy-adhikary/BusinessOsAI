import { Bot, Send, Sparkles, TrendingUp, AlertTriangle, PackageSearch } from "lucide-react";
import { PageHeader, Card, CardHeader } from "@/components/ui";
import { aiInsights } from "../data/mock";

const insightIcons = [TrendingUp, PackageSearch, AlertTriangle, TrendingUp];

export function AiAssistantPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="AI Assistant"
        description="Insight that's built on your own business data."
        icon={Bot}
      />

      <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
        <Card>
          <CardHeader title="AI insights" subtitle="Forecasts, risk scores and recommendations from your live data" />
          <div className="space-y-3">
            {aiInsights.map((insight, i) => {
              const Icon = insightIcons[i % insightIcons.length];
              return (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-brand-100 bg-brand-50/40 px-4 py-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow purple-glow">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="text-sm leading-relaxed text-slate-700">{insight}</p>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="flex flex-col">
          <CardHeader title="Ask BusinessOS AI" subtitle="Routine actions can be taken for you" />
          <div className="mb-3 flex items-center justify-between rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 px-4 py-3 text-sm text-white">
            <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-accent-300" /> Suggestions</span>
            <span className="text-xs text-slate-300">COD risk · Reorder · Forecast</span>
          </div>
          <div className="mt-auto flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask about your business..."
              className="h-10 flex-1 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition-all focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            />
            <button type="button" className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-md purple-glow transition-transform hover:scale-105" aria-label="Send">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
