import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MoveDown, PlayCircle } from "lucide-react";
import gsap from "gsap";
import { paths } from "@/routes/paths";

const MARQUEE_ITEMS = [
  "Welcome",
  "Business Operating System",
  "Authentic Digital Product",
  "Self Service Store",
  "Designed for Bangladesh",
];

const BARCODES = [2, 1, 3, 1, 1, 2, 4, 1, 2, 1, 1, 3, 2, 1, 1, 2, 2, 1, 3, 1, 2, 2, 1, 1, 1, 3, 1, 2, 1, 1, 2];

export function HeroSection() {
  const overlineRef = useRef<HTMLParagraphElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const taglineRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const fadeUp = (el: HTMLElement | null, delay: number, y = 24) => {
        if (!el) return;
        gsap.fromTo(el, { opacity: 0, y }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay });
      };
      fadeUp(overlineRef.current, 0.1, 20);
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current.querySelectorAll(".word-anim"),
          { opacity: 0, y: 140, rotateX: -90 },
          { opacity: 1, y: 0, rotateX: 0, duration: 1.2, stagger: 0.09, ease: "power4.out", delay: 0.3 },
        );
      }
      fadeUp(taglineRef.current, 0.75, 18);
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out", delay: 1 },
        );
      }
      fadeUp(detailsRef.current, 1.2, 16);
      if (scrollRef.current) {
        gsap.fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power2.out", delay: 1.5 });
      }
    });

    return () => ctx.revert();
  }, []);

  const now = new Date();
  const dateStamp = `${String(now.getDate()).padStart(2, "0")}/${String(now.getMonth() + 1).padStart(2, "0")}/${String(
    now.getFullYear(),
  ).slice(-2)}`;

  return (
    <section className="relative">
      <div className="overflow-hidden border-b border-white/50 bg-white/40 py-2.5">
        <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, copy) => (
            <div key={copy} className="flex items-center gap-8">
              {MARQUEE_ITEMS.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400"
                >
                  {item}
                  <span className="text-brand-400">*</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[80vh] max-w-screen-2xl flex-col items-center justify-center px-6 py-20 text-center">
        <div className="pointer-events-none absolute inset-0 hidden text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 lg:block">
          <span className="absolute left-6 top-[16%]">Authentic business software</span>
          <span className="absolute right-6 top-[16%]">One ref. product for project</span>
          <span className="absolute left-6 top-[72%]">Products available 365 days</span>
          <span className="absolute right-6 top-[72%]">No long contracts &middot; Cancel anytime</span>
        </div>

        <p
          ref={overlineRef}
          className="text-[11px] font-bold uppercase tracking-[0.35em] text-brand-600 sm:text-xs"
        >
          &reg; BusinessOS &mdash; a complete digital product for Bangladesh
        </p>

        <h1
          ref={titleRef}
          className="mt-6 text-[clamp(3.5rem,13vw,11.5rem)] font-black uppercase leading-[0.9] tracking-tight text-slate-900"
        >
          <span className="word-anim block">Business</span>
          <span className="word-anim block">Operating</span>
          <span className="word-anim block gradient-text">System</span>
        </h1>

        <p
          ref={taglineRef}
          className="mt-7 text-[11px] font-bold uppercase tracking-[0.4em] text-slate-500 sm:text-sm"
        >
          One engine &middot; Every channel &middot; Total control
        </p>

        <div ref={ctaRef} className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
          <Link
            to={paths.register}
            className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl shadow-slate-900/20 transition-all hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-2xl hover:shadow-brand-500/40"
          >
            Start free trial
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#solutions"
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-600 transition-colors hover:text-brand-700"
          >
            <PlayCircle className="h-5 w-5 text-brand-500 transition-transform group-hover:scale-110" />
            Watch demo
          </a>
        </div>

        <div
          ref={detailsRef}
          className="mt-16 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400"
        >
          <span className="hidden sm:inline">{dateStamp}</span>
          <span className="hidden h-8 w-px bg-slate-300 sm:inline" />
          <span className="flex items-end gap-[2px]">
            {BARCODES.map((w, i) => (
              <span key={i} className="block bg-slate-700 opacity-70" style={{ width: `${w}px`, height: i % 3 === 0 ? "18px" : "14px" }} />
            ))}
          </span>
          <span className="hidden h-8 w-px bg-slate-300 sm:inline" />
          <span className="hidden sm:inline">Consume responsibly</span>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex items-center justify-center gap-3 pb-9 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400"
      >
        <MoveDown className="h-4 w-4 animate-bounce" />
        Scroll to discover
      </div>

      <div className="relative overflow-hidden border-y border-white/50 bg-white/50 py-3">
        <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, copy) => (
            <div key={copy} className="flex items-center gap-8">
              {["Products", "Inventory", "Orders", "Customers", "POS", "Payments", "Courier", "Finance", "AI"].map(
                (item) => (
                  <span
                    key={`${copy}-${item}`}
                    className="flex items-center gap-8 text-sm font-bold uppercase tracking-[0.25em] text-slate-400"
                  >
                    {item}
                    <span className="text-brand-400">*</span>
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}