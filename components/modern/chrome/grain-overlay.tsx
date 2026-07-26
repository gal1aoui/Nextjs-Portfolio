const GRAIN_DATA_URI = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

/** Subtle film-grain texture over the whole modern page. */
export default function GrainOverlay() {
  return (
    // Plain low opacity, deliberately no mix-blend mode: a full-viewport
    // blend layer forces the GPU to re-composite the whole page every
    // scrolled frame, which reads as scroll lag.
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] opacity-[0.05]"
      style={{ backgroundImage: GRAIN_DATA_URI }}
    />
  );
}
