import { useEffect, useState } from "react";
import { TYPEWRITER_WORDS } from "../constants";

// Lightweight typewriter — replaces typewriter-effect (not in stack).
export function Typewriter({ words = TYPEWRITER_WORDS }: { words?: string[] }) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    const speed = deleting ? 30 : 70;
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDeleting(true), 1200);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words]);

  return (
    <span className="text-amber-300">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}
