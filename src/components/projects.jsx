
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Project One",
    category: "Webdesign · UI/UX",
    image: null,
  },
  {
    title: "Project Two",
    category: "Graphic Design · Branding",
    image: null,
  },
  {
    title: "Project Three",
    category: "Illustration · Art Direction",
    image: null,
  },
  {
    title: "Project Four",
    category: "3D · Digital Creation",
    image: null,
  },
];

export default function Projects() {
  return (
    <section id="work" className="px-8 py-24 md:px-12">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="mb-3 text-sm uppercase tracking-widest text-neutral-500">
            Selected work
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Projects.
          </h2>
        </div>

        <span className="hidden text-sm text-neutral-600 md:block">
          2024 — 2026
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
