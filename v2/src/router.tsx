import { createRouter, Navigate } from "@tanstack/react-router";
import { Route as RootRoute } from "./routes/__root";
import { Route as HomeRoute } from "./routes/index";
import { Route as AboutRoute } from "./routes/about";
import { Route as ProjectsRoute } from "./routes/projects";
import { Route as ProjectDetailRoute } from "./routes/project-detail";
import { Route as ResumeRoute } from "./routes/resume";

const routeTree = RootRoute.addChildren([
  HomeRoute,
  AboutRoute,
  ProjectsRoute,
  ProjectDetailRoute,
  ResumeRoute,
]);

export const router = createRouter({
  routeTree,
  // Matches v1 catch-all: <Route path="*" element={<Navigate to="/" />} />
  defaultNotFoundComponent: () => <Navigate to="/" />,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
