import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/stores/theme-store";

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200/80 bg-white/60 text-slate-500 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600",
        className,
      )}
    >
      <Sun
        className={cn(
          "absolute h-4 w-4 transition-all duration-300",
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
        )}
      />
      <Moon
        className={cn(
          "absolute h-4 w-4 transition-all duration-300",
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
        )}
      />
    </button>
  );
}
