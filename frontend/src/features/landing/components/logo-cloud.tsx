import { useRef } from "react";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";

const partners = [
  { name: "bKash", className: "text-[#e2136e]" },
  { name: "Nagad", className: "text-[#f58220]" },
  { name: "RedX", className: "text-[#e23744]" },
  { name: "Pathao", className: "text-slate-900" },
  { name: "Steadfast", className: "text-[#0b5ed7]" },
  { name: "SSLCommerz", className: "text-slate-700" },
];

export function LogoCloud() {
  const ref = useRef<HTMLDivElement | null>(null);
  useGsapReveal(ref, { y: 20, stagger: 0.08 });

  return (
    <section className="mt-16 sm:mt-20">
      <div ref={ref}>
        <p data-gsap className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
          Trusted by <span className="text-brand-600">5,000+</span> businesses across Bangladesh
        </p>
        <div className="mx-auto mt-7 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-5">
          {partners.map((partner) => (
            <span
              key={partner.name}
              data-gsap
              className={`select-none text-xl font-extrabold italic tracking-tight opacity-45 transition-all duration-300 hover:scale-105 hover:opacity-100 ${partner.className}`}
            >
              {partner.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}