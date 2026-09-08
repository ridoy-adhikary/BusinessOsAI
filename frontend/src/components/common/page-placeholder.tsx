import { Link } from "react-router-dom";
import { Construction } from "lucide-react";

interface PagePlaceholderProps {
  title: string;
}

export function PagePlaceholder({ title }: PagePlaceholderProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-brand-200 bg-white/50 p-10 text-center">
      <Construction className="h-8 w-8 text-brand-300" />
      <h1 className="text-lg font-semibold text-slate-800">{title}</h1>
      <p className="max-w-sm text-sm text-slate-500">
        This module is scaffolded and waiting for its design. Routes, folder structure and API layer are ready.
      </p>
      <Link to="/dashboard" className="text-sm font-medium text-brand-600 hover:underline">
        Back to dashboard
      </Link>
    </div>
  );
}