import type { Project } from "./Projects.types";

/* =========================================================
   DISPLAYED PROJECTS
========================================================= */

export function getDisplayedProjects(projects: Project[], limit?: number) {
    if (!limit) return projects;

    return projects.slice(0, limit);
}