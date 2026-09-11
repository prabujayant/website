import { useMemo } from "react";

type Dot = {
  left: string;
  top: string;
  size: number;
  delay: string;
  duration: string;
  opacity: number;
};

// CSS-only particle field — replaces react-tsparticles (not in stack).
export function Particles({ count = 40 }: { count?: number }) {
  const dots = useMemo<Dot[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${(i * 37.7 + 13) % 100}%`,
        top: `${(i * 53.3 + 7) % 100}%`,
        size: 2 + ((i * 7) % 3),
        delay: `${(i % 12) * 0.6}s`,
        duration: `${6 + (i % 7)}s`,
        opacity: 0.15 + ((i * 13) % 30) / 100,
      })),
    [count],
  );

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-amber-200 animate-pulse"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            animationDelay: d.delay,
            animationDuration: d.duration,
          }}
        />
      ))}
    </div>
  );
}
