import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, Outlet, createRootRoute, useNavigate, useRouterState } from "@tanstack/react-router";
import { SOCIAL_LINKS } from "../constants";
import { scrollToSection, useScrollSpy } from "../components/ScrollSpyNav";

/**
 * Sections the navbar tracks while scrolling the home page.
 * "work" is included so the "Publication & Project" link lights up while the
 * Featured Case Studies block is on screen.
 */
const SECTION_IDS = ["home", "about", "skills", "experience", "work", "resume"] as const;

/**
 * One unified navbar list: Home, About, Skills, Experience, Publication & Project, Resume.
 * "section" items scroll within the home page; "route" items open their own page.
 * A route item may also list home sections it "covers", so the nav stays lit
 * while reading that part of the home page instead of going dark.
 */
type NavItem =
  | { kind: "section"; id: string; label: string }
  | { kind: "route"; to: string; label: string; covers?: readonly string[] };

const NAV: NavItem[] = [
  { kind: "section", id: "home", label: "Home" },
  { kind: "section", id: "about", label: "About" },
  { kind: "section", id: "skills", label: "Skills" },
  { kind: "section", id: "experience", label: "Experience" },
  { kind: "route", to: "/project", label: "Publication & Project", covers: ["work", "achievements"] },
  { kind: "route", to: "/resume", label: "Resume", covers: ["resume"] },
];

function Layout() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [load, setLoad] = useState(true);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const year = new Date().getFullYear();

  const isHome = pathname === "/";
  const spyIds = useMemo(() => (isHome ? SECTION_IDS.map(String) : []), [isHome]);
  const activeSection = useScrollSpy(spyIds, 90);
  const navigate = useNavigate();

  /** Section links stay on the home page; route links open their own page. */
  const goTo = useCallback(
    (item: NavItem) => {
      setOpen(false);
      if (item.kind === "section") {
        if (isHome) {
          scrollToSection(item.id);
        } else {
          // Land on the home page first, then jump to the requested section.
          navigate({ to: "/", hash: item.id });
        }
        return;
      }
      void navigate({ to: item.to });
    },
    [isHome, navigate],
  );

  const isNavActive = useCallback(
    (item: NavItem) => {
      if (item.kind === "section") return isHome && activeSection === item.id;
      // A route link is lit on its own pages, and also whenever the home
      // section(s) it covers is the one being read.
      if (pathname === item.to || pathname.startsWith(`${item.to}/`)) return true;
      return isHome && !!activeSection && (item.covers?.includes(activeSection) ?? false);
    },
    [isHome, activeSection, pathname],
  );

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
      {/* Fixed navbar — stays pinned to the top of the window at all times */}
      <nav
        className={`fixed inset-x-0 top-0 z-30 border-b backdrop-blur transition-colors ${
          scrolled ? "border-amber-300/30 bg-neutral-950/95 shadow-lg shadow-black/40" : "border-white/10 bg-neutral-950/80"
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
            Menu
          </button>

          {/* Desktop links */}
          <div className="ml-auto hidden items-center gap-5 text-sm text-white/80 md:flex">
            {NAV.map((n) => {
              const isActive = isNavActive(n);
              return (
                <button
                  key={n.label}
                  type="button"
                  onClick={() => goTo(n)}
                  data-active={isActive}
                  className="nav-link text-left"
                  aria-current={isActive ? "true" : undefined}
                >
                  <span className={isActive ? "text-amber-300" : undefined}>{n.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile links */}
        {open ? (
          <div className="flex flex-col gap-1 border-t border-white/10 px-4 py-3 text-sm md:hidden">
            {NAV.map((n) => (
              <button
                key={n.label}
                type="button"
                onClick={() => goTo(n)}
                className={`rounded px-2 py-2 text-left hover:bg-white/5 ${
                  isNavActive(n) ? "text-amber-300" : ""
                }`}
              >
                {n.label}
              </button>
            ))}
          </div>
        ) : null}
      </nav>

      {/* Spacer so the fixed navbar does not cover the top of the page */}
      <div className="h-16" />

      <main className="mx-auto max-w-6xl px-4 pb-12">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-black/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-12 text-center">
          <p className="text-base font-semibold tracking-wide text-white">Siti Annisa Dahlan</p>
          <p className="mt-1 text-sm text-white/60">UX Researcher · UI/UX Designer</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            <a
              href={SOCIAL_LINKS.find((s) => s.id === "linkedin")!.url}
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a
              href={SOCIAL_LINKS.find((s) => s.id === "github")!.url}
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <a href={SOCIAL_LINKS.find((s) => s.id === "mail")!.url} className="footer-link">
              Email
            </a>
          </div>

          <p className="mt-8 text-xs text-white/40">
            © {year} Siti Annisa Dahlan
          </p>
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
