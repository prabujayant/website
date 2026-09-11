import { createRoute } from "@tanstack/react-router";
import { Route as RootRoute } from "./__root";
import resumeUrl from "../assets/Resume_UIUX_Annis.pdf";
import { Particles } from "../components/Particles";

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: "/resume",
  component: ResumePage,
});

function ResumePage() {
  return (
    <div className="relative space-y-6 text-center">
      <Particles />
      <div className="relative">
        <p className="mx-auto table text-xs uppercase tracking-[0.3em] text-amber-300">Resume</p>
        <h1 className="mt-2 text-3xl font-bold md:text-4xl">My Experience</h1>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block rounded-lg border border-amber-300/60 px-5 py-2.5 text-amber-300 hover:bg-amber-300 hover:text-black"
        >
          ⭳ Download CV
        </a>
      </div>
      <embed src={resumeUrl} type="application/pdf" className="h-[70vh] w-full rounded-xl border border-white/10 bg-white" />
      <div>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-lg border border-amber-300/60 px-5 py-2.5 text-amber-300 hover:bg-amber-300 hover:text-black"
        >
          ⭳ Download CV
        </a>
      </div>
    </div>
  );
}
