import { useEffect, useState } from "react";
import { TYPEWRITER_WORDS } from "../constants";

type TypewriterProps = {
  /** Either rotate through a list of words, or type a single sentence. */
  words?: string[];
  text?: string;
  className?: string;
  /** Milliseconds between each typed/deleted character. */
  speed?: number;
  /** Milliseconds to hold the full text before it re-types. */
  hold?: number;
};

/**
 * Lightweight typewriter — replaces typewriter-effect (not in stack).
 * Types a phrase out character by character, pauses, then erases it and
 * starts again, so the sentence "re-types" on a loop.
 */
export function Typewriter({ words, text, className = "", speed, hold = 2200 }: TypewriterProps) {
  const [out, setOut] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");

  // When rotating words we track which word is showing; for a single sentence
  // the word list is just [text], so the same loop handles both cases.
  const list = text ? [text] : (words ?? TYPEWRITER_WORDS);
  const [index, setIndex] = useState(0);
  const current = list[index % list.length] ?? "";

  const typeSpeed = speed ?? (text ? 45 : 70);
  const deleteSpeed = speed != null ? Math.max(18, Math.round(speed * 0.55)) : 30;

  useEffect(() => {
    if (phase === "holding") {
      const t = setTimeout(() => setPhase("deleting"), hold);
      return () => clearTimeout(t);
    }

    if (phase === "typing") {
      if (out === current) {
        setPhase("holding");
        return;
      }
      const t = setTimeout(() => setOut(current.slice(0, out.length + 1)), typeSpeed);
      return () => clearTimeout(t);
    }

    // deleting
    if (out === "") {
      setPhase("typing");
      setIndex((i) => (list.length > 1 ? i + 1 : 0));
      return;
    }
    const t = setTimeout(() => setOut(current.slice(0, out.length - 1)), deleteSpeed);
    return () => clearTimeout(t);
  }, [phase, out, current, typeSpeed, deleteSpeed, hold, list.length]);

  return (
    <span className={className}>
      {out}
      <span className="ml-0.5 inline-block animate-pulse">|</span>
    </span>
  );
}
