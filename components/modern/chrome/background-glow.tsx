/**
 * Ambient animated background for the modern page: three large blurred color
 * orbs drifting slowly. Transform-only keyframes, so each orb is rasterized
 * once and then composited (no per-frame paint). Static under reduced motion.
 */
export default function BackgroundGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-1/4 left-[8%] h-[46vw] w-[46vw] animate-aurora1 rounded-full bg-violet-600/20 blur-3xl motion-reduce:animate-none" />
      <div className="absolute right-[4%] top-1/3 h-[38vw] w-[38vw] animate-aurora2 rounded-full bg-cyan-500/15 blur-3xl motion-reduce:animate-none" />
      <div className="absolute -bottom-[12%] left-1/3 h-[42vw] w-[42vw] animate-aurora3 rounded-full bg-fuchsia-500/10 blur-3xl motion-reduce:animate-none" />
    </div>
  );
}
