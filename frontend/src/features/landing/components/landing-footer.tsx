import { Link } from "react-router-dom";
import { paths } from "@/routes/paths";

const columns = [
  {
    title: "Product",
    links: ["Features", "Solutions", "Pricing", "AI Engine"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Partners"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Help Center", "API Reference", "Status"],
  },
];

export function LandingFooter() {
  return (
    <footer id="about" className="scroll-mt-24 border-t border-slate-200/70 bg-white/60 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link to={paths.home} className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-sm font-bold text-white">
                B
              </span>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Business<span className="text-brand-600">OS</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              The all-in-one operating system connecting products, inventory, orders, POS, payments,
              couriers and AI into a single business core — built for Bangladesh.
            </p>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="text-sm font-bold text-slate-900">{column.title}</p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="text-sm text-slate-500 transition-colors hover:text-brand-600"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200/70 pt-6 sm:flex-row">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} BusinessOS. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">Made for businesses in Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
