export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-[12%] -top-[18%] h-[62vmax] w-[62vmax] animate-blob-1 rounded-full bg-accent-200/60 blur-[90px]" />
      <div className="absolute -right-[10%] top-[5%] h-[52vmax] w-[52vmax] animate-blob-2 rounded-full bg-accent-300/50 blur-[100px]" />
      <div className="absolute bottom-[-15%] left-[18%] h-[58vmax] w-[58vmax] animate-blob-3 rounded-full bg-black/5 blur-[110px]" />
      <div className="absolute left-[55%] top-[-10%] h-[40vmax] w-[40vmax] animate-blob-2 rounded-full bg-accent-100/70 blur-[80px]" />
    </div>
  );
}