import { useQuery } from "@tanstack/react-query";
import { Link, createRoute } from "@tanstack/react-router";
import { Route as RootRoute } from "./__root";
import { fetchProjectById } from "../constants";
import { Particles } from "../components/Particles";

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: "/project/$projectId",
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { projectId } = Route.useParams();
  const id = Number(projectId);
  const { data, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: () => fetchProjectById(id),
  });

  if (isLoading) return <p className="text-white/60">Loading…</p>;
  if (!data)
    return (
      <div className="space-y-4 text-center">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
        <Link to="/project" className="text-amber-300 underline underline-offset-2">
          Back to Projects
        </Link>
      </div>
    );

  return (
    <div className="relative">
      <Particles />
      <article className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-10">
        <Link to="/project" className="text-sm text-amber-300 hover:underline">
          ← Back to Projects
        </Link>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-amber-300">Case study</p>
        <h1 className="mt-2 text-2xl font-bold md:text-4xl">{data.title}</h1>

        {data.imgPath ? (
          <img
            src={data.imgPath}
            alt={`${data.title} cover`}
            loading="lazy"
            className="mx-auto my-8 block w-full max-w-3xl rounded-2xl border border-white/10 object-cover"
            style={{ maxHeight: 320 }}
          />
        ) : null}

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="mb-3 font-semibold text-amber-300">Overview</h3>
            <p className="whitespace-pre-line leading-relaxed text-white/75">{data.description}</p>
          </div>
          <aside>
            <div className="rounded-xl border border-amber-300/30 bg-white/5 p-5">
              <h5 className="font-semibold text-amber-300">Role</h5>
              <p className="text-white">UI/UX Designer & Researcher</p>
              <h5 className="mt-3 font-semibold text-amber-300">Focus</h5>
              <p className="text-white">User research, wireframing, prototyping</p>
              {data.demoLink ? (
                <a
                  href={data.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 block rounded-lg bg-amber-300 px-4 py-2 text-center font-semibold text-black hover:bg-amber-200"
                >
                  {data.customButtonText ?? "View Live Prototype"}
                </a>
              ) : null}
            </div>
          </aside>
        </div>

        <hr className="my-8 border-white/15" />

        <div className="space-y-8 text-white">
          <section>
            <h3 className="mb-3 font-semibold text-amber-300">1. The Problem</h3>
            <p className="text-white/65">
              Users struggle with fragmented information and high cognitive load. This case study focuses on
              simplifying the journey into one clear, accessible flow.
            </p>
          </section>
          <section>
            <h3 className="mb-3 font-semibold text-amber-300">2. Approach</h3>
            <p className="text-white/65">
              Research → synthesize insights → wireframe → prototype → test. Emphasis on readability, visual
              hierarchy, and mobile-first responsiveness.
            </p>
          </section>
          <section>
            <h3 className="mb-3 font-semibold text-amber-300">3. Outcome</h3>
            <p className="text-white/65">
              A cleaner information architecture with measurable readability and engagement improvements. Full
              process documentation coming soon.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
