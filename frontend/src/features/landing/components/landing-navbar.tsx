import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { paths } from "@/routes/paths";

const dividerClass =
  "mx-[calc(-50vw+50%)] w-screen border-t border-slate-200";

interface NavLinkItem {
  label: string;
  to?: string;
  hash?: string;
  href?: string;
}

const navLinks: NavLinkItem[] = [
  { label: "Features", to: paths.home, hash: "#features" },
  { label: "Solutions", to: paths.solutions },
  { label: "Pricing", to: paths.home, hash: "#pricing" },
  { label: "About", to: paths.about },
];

function NavLink({ link, onNavigate }: { link: NavLinkItem; onNavigate?: () => void }) {
  const href = link.to ? (link.hash ? `${link.to}${link.hash}` : link.to) : link.href ?? "#";
  return (
    <Link
      to={href}
      onClick={onNavigate}
      className="nav-link flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
    >
      {link.label}
    </Link>
  );
}

export function LandingNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to={paths.home} className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-400 text-sm font-bold text-white shadow-lg purple-glow">
            B
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Business<span className="gradient-text">OS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} link={link} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to={paths.login}
            className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
          >
            Log in
          </Link>
          <Link
            to={paths.register}
            className="rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 px-4 py-2 text-sm font-semibold text-white shadow-lg purple-glow transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Start Free Trial
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={cn("border-t border-slate-200 bg-white/90 backdrop-blur-xl md:hidden", open ? "block" : "hidden")}>
        <nav className="space-y-1 px-6 py-4">
          {navLinks.map((link) => (
            <NavLink key={link.label} link={link} onNavigate={() => setOpen(false)} />
          ))}
        </nav>
      </div>

      <div aria-hidden className={dividerClass} />
    </header>
  );
}
