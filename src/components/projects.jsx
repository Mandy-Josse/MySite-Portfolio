import ProjectCard from "./ProjectCard";
import { useLanguage } from "../context/LanguageContext";

const projects = [
  {
    id: "reverie",
    slug: "reverie",
    image: null,

    en: {
      title: "Reverie",
      category: "Game Design · Roblox",
    },

    fr: {
      title: "Reverie",
      category: "Game Design · Roblox",
    },
  },

  {
    id: "project-two",
    slug: "project-two",
    image: null,

    en: {
      title: "Project Two",
      category: "Graphic Design · Branding",
    },

    fr: {
      title: "Projet Deux",
      category: "Design graphique · Branding",
    },
  },

  {
    id: "project-three",
    slug: "project-three",
    image: null,

    en: {
      title: "Project Three",
      category: "Illustration · Art Direction",
    },

    fr: {
      title: "Projet Trois",
      category: "Illustration · Direction artistique",
    },
  },

  {
    id: "project-cartes",
    slug: "project-cartes",
    image: null,

    en: {
      title: "Tarot Cards Project",
      category: "3D · Digital Creation",
    },

    fr: {
      title: "Projet Cartes Tarot",
      category: "3D · Création numérique",
    },
  },
];

export default function Projects() {
  const { language, t } = useLanguage();

  return (
    <section id="work" className="px-8 py-24 md:px-12">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="mb-3 text-sm uppercase tracking-widest text-neutral-500">
            {t.projects.eyebrow}
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            {t.projects.title}.
          </h2>
        </div>

        <span className="hidden text-sm text-neutral-600 md:block">
          2024 — 2026
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => {
          const content = project[language];

          return (
            <ProjectCard
              key={project.id}
              title={content.title}
              category={content.category}
              image={project.image}
              slug={project.slug}
            />
          );
        })}
      </div>
    </section>
  );
}