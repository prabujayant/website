import { Link, createRoute } from "@tanstack/react-router";
import { Route as RootRoute } from "./__root";
import {
  ABOUT_HIGHLIGHTS,
  ABOUT_PARAGRAPHS,
  EXPERIENCE_TIMELINE,
  HERO_TAGLINE,
  HOME_ACHIEVEMENTS,
  PROJECTS_DATA,
  SKILL_GROUPS,
  SOCIAL_LINKS,
} from "../constants";
import heroImg from "../assets/siti-photo.jpg";
import resumeUrl from "../assets/CV_Siti_Annisa_Dahlan.pdf";
import { Particles } from "../components/Particles";
import { Typewriter } from "../components/Typewriter";
import { ProjectCard } from "../components/ProjectCard";
import { FocusBubbles } from "../components/FocusBubbles";

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: "/",
  component: HomePage,
});

const STATS = [
  { value: "7+", label: "Projects shipped" },
  { value: "2", label: "Journal publications" },
  { value: "4", label: "Awards & honors" },
];

/** Colours the highlighted words inside the About copy in amber. */
function Highlighted({ text }: { text: string }) {
  const pattern = new RegExp(
    `(${ABOUT_HIGHLIGHTS.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g",
  );
  const parts = text.split(pattern);
  return (
    <>
      {parts.map((part, i) =>
        ABOUT_HIGHLIGHTS.includes(part) ? (
          <span key={i} className="font-semibold text-amber-300">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

/** Section heading. Use "|" to start the amber-highlighted part. */
function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  const [plain = "", accent = ""] = title.split("|");
  return (
    <div className="text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-amber-300">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold md:text-4xl">
        {plain} <span className="text-amber-300">{accent}</span>
      </h2>
      <div className="mx-auto mt-4 h-1 w-40 bg-gradient-to-r from-amber-300 via-fuchsia-400 to-cyan-300" />
    </div>
  );
}

function HomePage() {
  const featured = PROJECTS_DATA.slice(0, 2);
  const mail = SOCIAL_LINKS.find((s) => s.id === "mail");

  return (
    <div className="relative space-y-0">
      <Particles />

      {/* 1. HERO / HOME */}
      <section id="home" className="relative scroll-mt-20 pt-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-white/80">
              Hi There! <span role="img" aria-label="waving hand">👋</span>
            </p>
            <h1 className="mt-3 text-5xl font-extrabold leading-tight md:text-6xl">
              <span className="mr-3 align-middle text-2xl font-semibold text-white/70">I'M</span>
              SITI ANNISA DAHLAN
            </h1>
            <div className="mt-4 h-1 w-40 bg-gradient-to-r from-amber-300 via-fuchsia-400 to-cyan-300" />

            {/* Typewriter tagline — types out, pauses, then re-types on a loop */}
            <p className="mt-5 min-h-[3.5rem] text-xl font-semibold leading-snug md:min-h-[3rem]">
              <Typewriter text={HERO_TAGLINE} className="text-amber-300" speed={45} hold={3000} />
            </p>

            <p className="mt-4 leading-relaxed text-white/70">
              Driven by the passion to merge <span className="text-amber-300">education</span>,
              <span className="text-amber-300"> technology</span>, and
              <span className="text-amber-300"> user-centered design</span> to empower communities.
            </p>

            {/* Professional "what I do" bubbles */}
            <div className="mt-6">
              <FocusBubbles />
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-lg bg-amber-300 px-5 py-2.5 font-semibold text-black hover:bg-amber-200"
              >
                View My Work ↓
              </a>
              <a
                href="#about"
                className="rounded-lg border border-white/25 px-5 py-2.5 hover:border-amber-300 hover:text-amber-300"
              >
                About Me
              </a>
            </div>

            <dl className="mt-8 grid max-w-md grid-cols-3 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                  <dd className="text-2xl font-bold text-amber-300">{s.value}</dd>
                  <dt className="mt-1 text-xs text-white/60">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          {/* Profile photo on the right */}
          <div className="relative mx-auto w-full max-w-72 md:max-w-80">
            <div
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-amber-300/25 via-fuchsia-400/20 to-cyan-300/25 blur-md"
              style={{ animation: "pulse-ring 5s ease-in-out infinite" }}
            />
            <div className="absolute inset-0 -rotate-2 rounded-[1.75rem] bg-gradient-to-br from-amber-300/25 to-fuchsia-400/25 blur-sm" />
            <img
              src={heroImg}
              alt="Photo of Siti Annisa Dahlan"
              className="relative w-full rounded-[1.75rem] border border-white/10 object-cover shadow-2xl"
            />
            <div className="absolute -top-3 left-4 rounded-full bg-amber-300 px-3 py-1 text-xs font-bold text-black shadow-lg">
              Published Researcher
            </div>
            <div className="absolute -bottom-3 right-4 rounded-full border border-white/15 bg-neutral-900 px-3 py-1 text-xs text-white/80 backdrop-blur">
              UX Researcher &amp; Designer
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT — "Know Who I Am" */}
      <section id="about" className="scroll-mt-20 py-16 md:py-24">
        <div className="grid items-start gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300">Introduction</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Know <span className="text-amber-300">Who</span> I Am
            </h2>
            <div className="mt-4 h-1 w-40 bg-gradient-to-r from-amber-300 via-fuchsia-400 to-cyan-300" />

            <div className="mt-6 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 leading-relaxed text-white/75 backdrop-blur md:p-8">
              {ABOUT_PARAGRAPHS.map((p, i) => (
                <p key={i}>
                  <Highlighted text={p} />
                </p>
              ))}
            </div>

            <div className="mt-6">
              <FocusBubbles />
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-300">Quick facts</p>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
                  <dt className="text-white/60">Name</dt>
                  <dd className="text-right font-semibold">Siti Annisa Dahlan, B.Ed</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
                  <dt className="text-white/60">Based in</dt>
                  <dd className="text-right font-semibold">Kendari, Indonesia</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
                  <dt className="text-white/60">Current role</dt>
                  <dd className="text-right font-semibold">UI/UX &amp; Research @ FlyRank AI</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
                  <dt className="text-white/60">Publications</dt>
                  <dd className="text-right font-semibold text-amber-300">2 peer-reviewed</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/60">Languages</dt>
                  <dd className="text-right font-semibold">English · Indonesian</dd>
                </div>
              </dl>
            </div>

            <div className="mt-5 rounded-2xl border border-amber-300/25 bg-amber-300/5 p-6">
              <p className="text-sm italic leading-relaxed text-white/80">
                “I enjoy turning complex user needs into simple, useful digital experiences.”
              </p>
              <p className="mt-2 text-sm text-amber-300">— Siti Annisa Dahlan</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SKILLS */}
      <section id="skills" className="scroll-mt-20 py-16 md:py-24">
        <SectionHead eyebrow="What I do" title="Core Skills|and Domains" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm tracking-wide text-white/65">
          UX Research · Interaction Design · Educational Technology
        </p>
        <div className="mt-10 grid gap-5 text-left md:grid-cols-2">
          {SKILL_GROUPS.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/40"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-bold text-amber-300">{g.title}</h3>
                <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-xs text-white/70">
                  {g.level}%
                </span>
              </div>
              <p className="mt-2 text-sm text-white/60">{g.blurb}</p>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-300 via-fuchsia-400 to-cyan-300"
                  style={{ width: `${g.level}%` }}
                />
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li key={it} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EXPERIENCE */}
      <section id="experience" className="scroll-mt-20 py-16 md:py-24">
        <SectionHead eyebrow="My journey" title="Work|and Experience" />
        <div className="timeline-rail relative mt-10 space-y-6 md:ml-4">
          {EXPERIENCE_TIMELINE.map((e) => (
            <div key={e.role + e.org} className="relative pl-8">
              <span
                className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-amber-300 ${
                  e.current ? "bg-amber-300" : "bg-neutral-950"
                }`}
              />
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-amber-300/40">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-lg font-bold">{e.role}</h3>
                  {e.current ? (
                    <span className="rounded-full bg-amber-300 px-2.5 py-0.5 text-[11px] font-bold text-black">
                      Current
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm font-medium text-amber-300">
                  {e.org} <span className="text-white/50">· {e.period}</span>
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-white/70">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="text-amber-300">▸</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FEATURED WORK */}
      <section id="work" className="scroll-mt-20 py-16 md:py-24">
        <SectionHead eyebrow="Selected work" title="Featured|Case Studies" />
        <div className="mt-8 grid gap-5 text-left md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard
              key={p.id}
              isBlog={p.isBlog ?? false}
              title={p.title}
              description={p.excerpt ?? p.description.split("\n")[0]}
              demoLink={`/project/${p.id}`}
              customButtonText="Read Case Study"
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/project"
            className="inline-block rounded-lg border border-white/25 px-5 py-2.5 hover:border-amber-300 hover:text-amber-300"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* 6. ACHIEVEMENTS */}
      <section className="py-16 md:py-24">
        <SectionHead eyebrow="Recognition" title="Achievements|& Awards" />
        <div className="mt-8 grid gap-5 text-left sm:grid-cols-2">
          {HOME_ACHIEVEMENTS.map((a) => (
            <div key={a.title} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="h-1.5" style={{ background: a.gradient }} />
              <div className="p-5">
                <h4 className="font-semibold text-white">{a.title}</h4>
                <p className="mt-2 text-sm text-white/60">{a.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FIND ME ON */}
      <section className="py-16 md:py-24">
        <h2 className="text-center text-3xl font-bold">🌐 FIND ME ON</h2>
        <p className="mt-3 text-center text-white/65">
          Feel free to <span className="text-amber-300">connect</span> with me on these platforms:
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {SOCIAL_LINKS.slice(0, 3).map((s) => (
            <a
              key={s.id}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              title={s.label}
              className="rounded-2xl border border-white/15 bg-white/5 px-8 py-5 text-sm font-semibold text-white/80 transition-transform duration-300 hover:-translate-y-1"
            >
              {s.label}
            </a>
          ))}
        </div>
      </section>

      {/* 8. RESUME / CTA */}
      <section id="resume" className="scroll-mt-20 pb-16 pt-6 md:pb-24">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300">Resume</p>
          <h2 className="mt-2 text-3xl font-bold">
            Want the full story? <span className="text-amber-300">Download my CV</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/65">
            I'm open to HCI research collaboration, UI/UX design work, and education-technology projects.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={resumeUrl}
              download="CV_Siti_Annisa_Dahlan.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-amber-300 px-5 py-2.5 font-semibold text-black hover:bg-amber-200"
            >
              ⭳ View My Resume
            </a>
            <Link
              to="/resume"
              className="rounded-lg border border-white/25 px-5 py-2.5 hover:border-amber-300 hover:text-amber-300"
            >
              Open Full Resume Page
            </Link>
            {mail ? (
              <a
                href={mail.url}
                className="rounded-lg border border-white/25 px-5 py-2.5 hover:border-amber-300 hover:text-amber-300"
              >
                ✉ Get in Touch
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
