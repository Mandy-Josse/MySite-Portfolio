import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="work" className="px-8 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
          {t.featuredProject.eyebrow}
        </p>

        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Project visual */}
          <Link
            to="/projects/reverie"
            className="group relative block overflow-hidden rounded-2xl bg-neutral-900"
          >
            <img
              src="/assets/reverie-cover.webp"
              alt={t.featuredProject.alt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <span className="absolute bottom-6 right-6 rounded-full bg-white px-5 py-3 text-black transition-transform group-hover:translate-x-1">
              {t.featuredProject.viewProject}
            </span>
          </Link>

          {/* Project information */}
          <div>
            <span className="text-sm uppercase tracking-widest text-neutral-500">
              {t.featuredProject.category}
            </span>

            <h2 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
              {t.featuredProject.title}
              <br />
              <span className="text-neutral-500">
                {t.featuredProject.titleAccent}
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-400">
              {t.featuredProject.description}
            </p>

            <Link
              to="/projects/reverie"
              className="mt-8 inline-flex items-center gap-3 border-b border-white pb-2 font-medium transition-all hover:gap-5"
            >
              {t.featuredProject.explore.replace(" →", "")}
              <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}