import { useQuery } from "@tanstack/react-query";
import { createRoute } from "@tanstack/react-router";
import { Route as RootRoute } from "./__root";
import { fetchProjects } from "../constants";
import { ProjectsTable } from "../components/ProjectsTable";
import { ProjectCard } from "../components/ProjectCard";
import { Particles } from "../components/Particles";

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: "/project",
  component: ProjectsPage,
});

function ProjectsPage() {
  const { data, isLoading, isError } = useQuery({ queryKey: ["projects"], queryFn: fetchProjects });

  if (isLoading) return <p className="text-white/60">Loading projects…</p>;
  if (isError || !data) return <p className="text-red-300">Failed to load projects.</p>;

  return (
    <div className="relative space-y-8">
      <Particles />
      <div className="relative text-center">
        <p className="mx-auto mb-4 table text-xs uppercase tracking-[0.3em] text-amber-300">Portfolio</p>
        <h1 className="text-3xl font-bold md:text-4xl">
          Annisa's Recent <span className="text-amber-300">Works</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-white/65">
          A selection of research, UI/UX case studies, and educational platforms — focused on clarity,
          accessibility, and real user impact.
        </p>
      </div>

      <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.map((p) => (
          <ProjectCard
            key={p.id}
            isBlog={p.isBlog ?? false}
            title={p.title}
            description={p.description}
            imgPath={p.imgPath}
            demoLink={p.isBlog || !p.imgPath ? p.demoLink : `/project/${p.id}`}
            customButtonText={p.customButtonText}
          />
        ))}
      </div>

      <div className="relative">
        <h2 className="mb-4 text-xl font-semibold">Browse all ({data.length})</h2>
        <ProjectsTable data={data} />
      </div>
    </div>
  );
}
