import { useEffect, useState } from "react";

export type SpyLink = { id: string; label: string; icon: string };

/**
 * Tracks which section is currently on screen and scrolls to the right one.
 * Used by the nav bar so clicking a link moves smoothly instead of jumping,
 * and so the current section is highlighted while scrolling.
 */
export function useScrollSpy(ids: string[], offset = 90) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + offset + 1;
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids, offset]);

  return active;
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: "smooth" });
}
