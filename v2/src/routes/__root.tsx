import { useEffect, useState } from "react";
import { Link, Outlet, createRootRoute, useRouterState } from "@tanstack/react-router";
import { SOCIAL_LINKS } from "../constants";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/project", label: "Projects" },
  { to: "/resume", label: "Resume" },
] as const;

function Layout() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [load, setLoad] = useState(true);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const year = new Date().getFullYear();

  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY >= 20);
      setShowTop(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {load ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950">
          <p className="animate-pulse text-2xl font-bold tracking-widest text-amber-300">Portfolio</p>
        </div>
      ) : null}
      <nav
        className={`fixed inset-x-0 top-0 z-20 border-b backdrop-blur transition-colors ${
          scrolled ? "border-amber-300/20 bg-neutral-950/90" : "border-white/10 bg-neutral-950/70"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center px-4 py-3">
          <Link to="/" className="font-bold tracking-wide">
            Portfolio
          </Link>
          <button
            type="button"
            className="ml-auto rounded-lg border border-white/15 px-3 py-1.5 text-sm md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            ☰
          </button>
          <div className="ml-auto hidden items-center gap-5 text-sm text-white/80 md:flex">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="hover:text-amber-300 [&.active]:text-amber-300">
                {n.label}
              </Link>
            ))}
          </div>
        </div>
        {open ? (
          <div className="flex flex-col gap-1 border-t border-white/10 px-4 py-3 text-sm md:hidden">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 hover:bg-white/5 hover:text-amber-300 [&.active]:text-amber-300"
              >
                {n.label}
              </Link>
            ))}
          </div>
        ) : null}
      </nav>

      <main className="mx-auto max-w-6xl px-4 pb-12 pt-20">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-black/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
          <div>
            <h3 className="font-semibold">Designed and Developed by Siti Annisa Dahlan</h3>
            <nav aria-label="Footer" className="mt-3 flex flex-wrap gap-4 text-sm">
              {NAV.map((n) => (
                <Link key={n.to} to={n.to} className="text-white/70 hover:text-amber-300">
                  {n.label}
                </Link>
              ))}
            </nav>
            <p className="mt-3 text-sm text-white/50">HCI Research • UI/UX Design • English Education</p>
          </div>
          <div className="md:text-center">
            <h3 className="text-white/70">Copyright © {year}</h3>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
                className="rounded-lg border border-white/15 px-3 py-2 text-sm text-white/75 hover:border-amber-300 hover:text-amber-300"
              >
                <span className="mr-1.5 inline-block h-2 w-2 rounded-full" style={{ background: s.color }} />
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {showTop ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          title="Back to top"
          className="fixed bottom-6 right-6 z-20 rounded-full bg-amber-300 px-4 py-3 font-bold text-black shadow-lg hover:bg-amber-200"
        >
          ↑
        </button>
      ) : null}
    </div>
  );
}

export const Route = createRootRoute({ component: Layout });
