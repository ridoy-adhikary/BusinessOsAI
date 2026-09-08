import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapReveal(ref: RefObject<HTMLElement | null>, options?: {
  y?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
}) {
  const { y = 40, duration = 0.8, stagger = 0.1, delay = 0 } = options ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll("[data-gsap]");
    const ctx = gsap.context(() => {
      if (targets.length > 0) {
        gsap.fromTo(
          targets,
          { y, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration,
            stagger,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    }, el);

    return () => ctx.revert();
  }, [ref, y, duration, stagger, delay]);
}
