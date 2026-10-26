import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { paths } from "@/routes/paths";

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
      className="nav-link flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
    >
      {link.label}
    </Link>
  );
}

export function LandingNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div
        className={cn(
          "glass-nav mx-auto flex h-14 max-w-7xl items-center justify-between rounded-2xl pl-4 pr-2.5 sm:pl-5 sm:pr-3",
          scrolled && "glass-nav-scrolled",
        )}
      >
        <Link to={paths.home} className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-400 text-sm font-bold text-white shadow-lg purple-glow">
            B
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Business<span className="gradient-text">OS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} link={link} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
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
          className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-700 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "glass-panel mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl transition-all duration-300 md:hidden",
          open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 border-transparent opacity-0",
        )}
      >
        <nav className="space-y-1 p-3">
          {navLinks.map((link) => (
            <NavLink key={link.label} link={link} onNavigate={() => setOpen(false)} />
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-white/60 pt-3">
            <div className="flex items-center justify-between px-4 py-1.5">
              <span className="text-sm font-medium text-slate-600">Appearance</span>
              <ThemeToggle />
            </div>
            <Link
              to={paths.login}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-2 text-center text-sm font-semibold text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              Log in
            </Link>
            <Link
              to={paths.register}
              onClick={() => setOpen(false)}
              className="rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 px-4 py-2 text-center text-sm font-semibold text-white shadow-lg purple-glow"
            >
              Start Free Trial
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
