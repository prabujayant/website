import { Link, createRoute } from "@tanstack/react-router";
import { Route as RootRoute } from "./__root";
import { HOME_ACHIEVEMENTS, PROJECTS_DATA, SOCIAL_LINKS } from "../constants";
import heroImg from "../assets/annis.png";
import { Particles } from "../components/Particles";
import { Typewriter } from "../components/Typewriter";
import { ProjectCard } from "../components/ProjectCard";

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: "/",
  component: HomePage,
});

const STATS = [
  { value: "6+", label: "Projects shipped" },
  { value: "1", label: "Journal publication" },
  { value: "4", label: "Awards & honors" },
];

function HomePage() {
  const featured = PROJECTS_DATA.slice(0, 2);
  const mail = SOCIAL_LINKS.find((s) => s.id === "mail");

  return (
    <div className="relative space-y-14">
      <Particles />

      {/* 1. HERO */}
      <section className="relative grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-white/80">
            Hi There! <span role="img" aria-label="waving hand">👋</span>
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
            <span className="mr-3 align-middle text-xl font-semibold text-white/70">I'M</span>
            SITI ANNISA DAHLAN
          </h1>
          <div className="mt-4 h-1 w-40 bg-gradient-to-r from-amber-300 via-fuchsia-400 to-cyan-300" />

          <div className="mt-5 flex flex-wrap gap-2 text-sm">
            <span className="rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1">🎓 HCI Researcher</span>
            <span className="rounded-full border border-fuchsia-400/40 bg-fuchsia-400/10 px-3 py-1">🎨 UI/UX Designer</span>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">📖 English Educator</span>
          </div>

          <p className="mt-5 text-xl font-semibold">
            <Typewriter />
          </p>

          <p className="mt-4 leading-relaxed text-white/70">
            Driven by the passion to merge <span className="text-amber-300">education</span>,
            <span className="text-amber-300"> technology</span>, and
            <span className="text-amber-300"> user-centered design</span> to empower communities.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/project" className="rounded-lg bg-amber-300 px-5 py-2.5 font-semibold text-black hover:bg-amber-200">
              View My Work →
            </Link>
            <Link to="/about" className="rounded-lg border border-white/25 px-5 py-2.5 hover:border-amber-300 hover:text-amber-300">
              About Me
            </Link>
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

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -rotate-2 rounded-3xl bg-gradient-to-br from-amber-300/25 to-fuchsia-400/25 blur-sm" />
          <img src={heroImg} alt="Illustrated portrait of Siti Annisa Dahlan" className="relative w-full rounded-3xl border border-white/10" />
          <div className="absolute -top-3 left-4 rounded-full bg-amber-300 px-3 py-1 text-xs font-bold text-black">
            Published Researcher
          </div>
          <div className="absolute -bottom-3 right-4 rounded-full border border-white/15 bg-neutral-900 px-3 py-1 text-xs text-white/80">
            User-Centered Design
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-300">Introduction</p>
        <h2 className="mt-2 text-3xl font-bold">
          LET ME <span className="text-amber-300">INTRODUCE</span> MYSELF
        </h2>
        <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 text-left leading-relaxed text-white/75 backdrop-blur md:p-8">
          <p>
            I am an <span className="text-amber-300">Aspiring HCI/UI/UX Researcher and Designer</span> with
            hands-on experience in user research, wireframing, and user-centered design. I'm passionate about
            synthesizing insights and translating findings into actionable design solutions.
          </p>
          <p className="mt-4">
            My journey bridges the gap between English pedagogy and specialized expertise in HCI research. I lead
            with intention, always striving to make digital experiences more accessible through{" "}
            <span className="text-amber-300">user-centered principles and creative innovation</span>.
          </p>
          <p className="mt-4">
            Throughout my academic and professional journey, I've honed my skills in{" "}
            <span className="text-amber-300">UX research, prototyping, and responsive web development</span>. I've
            taken on leadership roles in international events and student exchange programs, where I bridged the gap
            between diverse stakeholders and digital platforms. My work spans from developing academic management
            prototypes like TaskFlow to building gamified reading platforms and educational blogs.
          </p>
          <p className="mt-4">
            My belief is simple:{" "}
            <span className="text-amber-300">
              true impact comes from deeply understanding user needs and crafting intuitive digital solutions
            </span>{" "}
            that empower communities. I'm committed to the intersection of education, technology, and
            human-computer interaction.
          </p>
        </div>
      </section>

      {/* 3. FEATURED */}
      <section className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-300">Selected work</p>
        <h2 className="mt-2 text-3xl font-bold">
          FEATURED <span className="text-amber-300">CASE STUDIES</span>
        </h2>
        <div className="mt-6 grid gap-5 text-left md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard
              key={p.id}
              isBlog={p.isBlog ?? false}
              title={p.title}
              description={p.excerpt ?? p.description.split("\n")[0]}
              imgPath={p.imgPath}
              demoLink={`/project/${p.id}`}
              customButtonText="Read Case Study"
            />
          ))}
        </div>
        <Link to="/project" className="mt-6 inline-block rounded-lg border border-white/25 px-5 py-2.5 hover:border-amber-300 hover:text-amber-300">
          View All Projects
        </Link>
      </section>

      {/* 4. ACHIEVEMENTS */}
      <section className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-300">Recognition</p>
        <h2 className="mt-2 text-3xl font-bold">🏆 ACHIEVEMENTS & AWARDS</h2>
        <div className="mt-6 grid gap-5 text-left sm:grid-cols-2">
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

      {/* 5. FIND ME ON */}
      <section className="text-center">
        <h2 className="text-3xl font-bold">🌐 FIND ME ON</h2>
        <p className="mt-3 text-white/65">
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
              onMouseEnter={(e) => {
                e.currentTarget.style.background = s.color;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "";
                e.currentTarget.style.color = "";
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </section>

      {/* 6. CTA */}
      <section className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-300">Contact</p>
        <h2 className="mt-2 text-3xl font-bold">
          Have an idea? Let's build it <span className="text-amber-300">together</span>.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/65">
          I'm open to HCI research collaboration, UI/UX design work, and education-technology projects.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/resume" className="rounded-lg bg-amber-300 px-5 py-2.5 font-semibold text-black hover:bg-amber-200">
            View My Resume →
          </Link>
          {mail ? (
            <a href={mail.url} className="rounded-lg border border-white/25 px-5 py-2.5 hover:border-amber-300 hover:text-amber-300">
              ✉ Get in Touch
            </a>
          ) : null}
        </div>
      </section>
    </div>
  );
}
