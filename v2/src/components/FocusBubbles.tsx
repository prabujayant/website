import { PROFESSIONAL_FOCUS } from "../constants";

/**
 * Floating "what I do" bubbles. Each bubble drifts at a slightly different
 * speed/delay so the cluster feels alive instead of rigid.
 */
export function FocusBubbles() {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:justify-start">
      {PROFESSIONAL_FOCUS.map((label, i) => (
        <span
          key={label}
          className="group relative rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/60 hover:text-amber-300"
          style={{ animation: `float-bubble ${5 + i}s ease-in-out ${i * 0.6}s infinite` }}
        >
          <span className="mr-2 text-amber-300">◆</span>
          {label}
        </span>
      ))}
    </div>
  );
}
