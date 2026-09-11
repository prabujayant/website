import { createRoute } from "@tanstack/react-router";
import { Route as RootRoute } from "./__root";
import laptopImg from "../assets/about1.jpg";
import { Particles } from "../components/Particles";

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: "/about",
  component: AboutPage,
});

const COMPETENCIES: { title: string; body: string }[] = [
  { title: "UX Research", body: "User Interviews, Qualitative Analysis, Usability Testing, Pain Point Synthesis" },
  { title: "UI/UX Design", body: "Wireframing, Prototyping, Information Architecture, User-Centered Design" },
  { title: "Tech & Web", body: "HTML/CSS/JS, Responsive Web Design, Performance Optimization" },
];

const PROCESS: { title: string; body: string }[] = [
  { title: "Tools", body: "Figma, Canva, Adobe Photoshop, Microsoft 365 Copilot" },
  { title: "Collaboration", body: "Notion, Slack, Google Workspace, Project Management" },
];

const SOFTWARE = ["Figma", "Photoshop", "Notion", "HTML5", "CSS3"];
const TOOLS = ["Figma", "Notion", "Slack", "Canva", "Google Workspace", "Adobe Photoshop"];

const EDUCATION = [
  "Pursuing a Bachelor of Education in English Language at Halu Oleo University (GPA: 3.50/4.0).",
  "PMM4 National Student Exchange Awardee — $1,017 scholarship (Top 15,000 of 50,000+ applicants).",
  'Published Researcher: "The Use of AI in EFL Learning" — IJOPATE Vol. 4, Issue 1.',
];

const FOCUS = [
  "UX Research: User Interviews, Qualitative Analysis, Usability Testing.",
  "UI/UX Design: Wireframing, Prototyping, Information Architecture.",
  "Educational Tech: Building responsive web platforms and gamified learning.",
];

function AboutPage() {
  return (
    <div
      className="relative -m-4 p-4 md:-m-4"
      style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)" }}
    >
      <Particles />
      <div className="relative grid items-center gap-10 py-10 md:grid-cols-2">
        <div>
          <h1 className="bg-gradient-to-r from-yellow-300 via-rose-400 to-cyan-300 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
            Know Who I'M
          </h1>
          <div className="mt-3 h-1 w-40 bg-gradient-to-r from-amber-300 via-fuchsia-400 to-cyan-300" />
          <p className="mt-4 font-light tracking-wide text-white/70">Creative Educator & Digital Innovator</p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-[#2e2e2e] p-6 text-white">
            <p className="text-justify">
              Hi, I'm <span className="text-fuchsia-300">Siti Annisa Dahlan, B.Ed</span> from{" "}
              <span className="text-fuchsia-300">Kendari, Indonesia.</span>
              <br />
              I am an <span className="text-fuchsia-300">Aspiring HCI/UI/UX Researcher and Designer</span> with
              hands-on experience in user research, wireframing, and user-centered design. I'm passionate about
              synthesizing insights and translating findings into actionable design solutions.
            </p>
            <p className="mt-4 font-semibold">Education & Academic Highlights:</p>
            <ul className="mt-2 space-y-2 text-amber-200/90">
              {EDUCATION.map((e) => (
                <li key={e}>▸ {e}</li>
              ))}
            </ul>
            <p className="mt-4 font-semibold">Core Focus Areas:</p>
            <ul className="mt-2 space-y-2 text-amber-200/90">
              {FOCUS.map((f) => (
                <li key={f}>▸ {f}</li>
              ))}
            </ul>
            <p className="mt-4 italic text-fuchsia-200/80">
              "Bridging the gap between education and technology through user-centered digital innovation!"
            </p>
            <p className="mt-2 text-sm text-amber-300">— Siti Annisa Dahlan</p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.03]">
          <div className="absolute -left-4 -top-4 h-full w-full -rotate-2 rounded-3xl bg-gradient-to-br from-amber-300/25 to-fuchsia-400/25" />
          <img
            src={laptopImg}
            alt="Siti Annisa Dahlan — About section portrait"
            className="relative w-full rounded-3xl border border-white/10 shadow-2xl"
          />
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-black/20 py-10">
        <h2 className="text-center text-3xl font-extrabold">
          Professional <span className="text-amber-300">Skillset</span>
        </h2>
        <h3 className="mt-8 text-center text-xl font-bold text-amber-300">UX & Design Competencies</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {COMPETENCIES.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-amber-300/30 bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <p className="text-white">
                <strong className="text-amber-300">{c.title}:</strong> {c.body}
              </p>
            </div>
          ))}
        </div>

        <h3 className="mt-10 text-center text-xl font-bold text-amber-300">Process & Communication</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {PROCESS.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-amber-300/30 bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <p className="text-white">
                <strong className="text-amber-300">{c.title}:</strong> {c.body}
              </p>
            </div>
          ))}
        </div>

        <h3 className="mt-10 text-center text-xl font-bold text-amber-300">Software & Tools</h3>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {SOFTWARE.map((s) => (
            <div
              key={s}
              className="rounded-2xl border border-amber-300/30 bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="text-3xl">✦</div>
              <div className="mt-2 text-white">{s}</div>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-center text-3xl font-extrabold">
          <span className="text-amber-300">Tools</span> I Use
        </h2>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {TOOLS.map((t) => (
            <div
              key={t}
              className="rounded-2xl border border-amber-300/30 bg-[#2e2e2e] p-5 text-center text-sm text-white transition-transform duration-300 hover:-translate-y-2"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
