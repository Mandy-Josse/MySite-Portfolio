import { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "../context/LanguageContext";

const projects = [
  {
    id: "reverie",
    slug: "/projects/reverie",
    image: `${import.meta.env.BASE_URL}images/reverie-cover.png`,
    categories: ["game-design", "3d"],
    type: "personal",
    en: { title: "Reverie", category: "Roblox · LUA · 3D" },
    fr: { title: "Reverie", category: "Roblox · LUA · 3D" },
  },
  {
    id: "card",
    slug: "/projects/cartestarot",
    image: `${import.meta.env.BASE_URL}images/projects/cards/cardcover.png`,
    categories: ["illustration", "graphic-design"],
    type: "university",
    en: { title: "Tarot Cards", category: "Illustration · Illustrator" },
    fr: { title: "Cartes de Tarot", category: "Illustration · Illustrator" },
  },
  {
    id: "silksongshop",
    slug: "/projects/silksongshop",
    image: `${import.meta.env.BASE_URL}images/projects/silksongshop/Silksongshop-cover.png`,
    categories: ["web-design", "3d"],
    type: "university",
    en: { title: "Silksong Shop", category: "WordPress · 3D" },
    fr: { title: "Shop Silksong", category: "WordPress · 3D" },
  },
  {
    id: "waitrose",
    slug: "/projects/waitrose",
    image: `${import.meta.env.BASE_URL}images/projects/waitrose/Waitrose-cover.png`,
    categories: ["audiovisual"],
    type: "university",
    en: { title: "Waitrose", category: "Audiovisual" },
    fr: { title: "Waitrose", category: "Audiovisuel" },
  },
  {
    id: "fournils",
    slug: "/projects/fournils",
    image: `${import.meta.env.BASE_URL}images/projects/fournils/`,
    categories: ["web-design"],
    type: "university",
    en: { title: "France Fournils", category: "Web" },
    fr: { title: "Les Fournils de France", category: "Web" },
  },
  {
    id: "latoise",
    slug: "/projects/latoise",
    image: `${import.meta.env.BASE_URL}images/projects/toise/`,
    categories: ["illustration"],
    type: "professional",
    en: { title: "La Toise", category: "Illustration · Photoshop" },
    fr: { title: "La Toise", category: "Illustration · Photoshop" },
  },
];

const categories = [
  ["all", "All", "Tout"],
  ["web-design", "Web Design", "Web Design"],
  ["graphic-design", "Graphic Design", "Design graphique"],
  ["illustration", "Illustration", "Illustration"],
  ["3d", "3D", "3D"],
  ["motion-design", "Motion Design", "Motion Design"],
  ["audiovisual", "Audiovisual", "Audiovisuel"],
  ["game-design", "Game Design", "Game Design"],
];

const types = [
  ["all", "All", "Tous"],
  ["personal", "Personal", "Personnel"],
  ["university", "University", "Universitaire"],
  ["professional", "Professional", "Professionnel"],
];

export default function Projects() {
  const { language, t } = useLanguage();

  const [activeCategory, setActiveCategory] = useState("all");
  const [activeType, setActiveType] = useState("all");

  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [cardWidth, setCardWidth] = useState(340);

  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startRotation = useRef(0);
  const moved = useRef(false);
  const rotationRef = useRef(0);

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    if (project.empty) {
      return activeCategory === "all" && activeType === "all";
    }

    const categoryMatch =
      activeCategory === "all" || project.categories.includes(activeCategory);

    const typeMatch = activeType === "all" || project.type === activeType;

    return categoryMatch && typeMatch;
  });

  const count = filteredProjects.length;
  const angle = count > 0 ? 360 / count : 0;

  // Responsive card sizing
  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;

      setCardWidth(
        Math.min(340, Math.max(190, containerRef.current.offsetWidth * 0.52)),
      );
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Reset carousel when filters change
  useEffect(() => {
    rotationRef.current = 0;

    setRotation(0);
    setActiveIndex(0);

    moved.current = false;
    isDragging.current = false;

    setDragging(false);
  }, [activeCategory, activeType]);

  // Card dimensions
  const cardHeight = cardWidth * 1.05;

  // More spacing with fewer cards, tighter spacing with more cards
  const spacingFactor = Math.max(1, Math.min(1.55, 1.66 - count * 0.047));

  // Carousel radius
  const radius =
    count <= 1
      ? 0
      : Math.round(
          (cardWidth / (2 * Math.tan(Math.PI / count))) * spacingFactor,
        ) + 60;

  const perspective = Math.max(1800, radius * 2.5);

  // Calculate the vertical movement caused by the 3D rotation
  const rotationRadians = (8 * Math.PI) / 180;
  const verticalOrbit = radius * Math.sin(rotationRadians);

  // Extra room above and below the cards
  const carouselHeight = Math.ceil(cardHeight + verticalOrbit * 2 + 280);

  // Update active card
  const updateActiveIndex = (rotationValue) => {
    if (count === 0) return;

    const normalized = ((-rotationValue % 360) + 360) % 360;
    const index = Math.round(normalized / angle) % count;

    setActiveIndex(index);
  };

  // Rotate carousel
  const rotateTo = (index) => {
    if (count === 0) return;

    const normalized = ((index % count) + count) % count;

    const current = rotationRef.current;
    const target = -normalized * angle;

    const difference = ((target - current + 540) % 360) - 180;
    const newRotation = current + difference;

    rotationRef.current = newRotation;

    setRotation(newRotation);
    setActiveIndex(normalized);
  };

  const next = () => rotateTo(activeIndex + 1);
  const previous = () => rotateTo(activeIndex - 1);

  // Drag interaction

  const handlePointerDown = (e) => {
    if (e.button !== 0 || count === 0) return;

    isDragging.current = true;
    moved.current = false;

    startX.current = e.clientX;
    startRotation.current = rotationRef.current;

    setDragging(true);

    // Capture the pointer on the card itself,
    // not on the entire carousel.
    const card = e.target.closest("article");

    if (card) {
      card.setPointerCapture(e.pointerId);
    } else {
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;

    const delta = e.clientX - startX.current;

    if (Math.abs(delta) > 5) moved.current = true;

    const sensitivity = 0.45;
    const newRotation = startRotation.current + delta * sensitivity;

    rotationRef.current = newRotation;

    setRotation(newRotation);
    updateActiveIndex(newRotation);
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;

    isDragging.current = false;
    setDragging(false);

    if (count === 0) return;

    const nearestIndex = Math.round(-rotationRef.current / angle);

    rotateTo(nearestIndex);
  };

  const handleClickCapture = (e) => {
    if (moved.current) {
      e.preventDefault();
      e.stopPropagation();
      moved.current = false;
    }
  };

  const handleCardClick = (index) => {
    if (!moved.current && index !== activeIndex) {
      rotateTo(index);
    }
  };

  return (
    <section id="work" className="px-6 py-24 md:px-12">
      {/* Section heading */}
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          {t.projects.title}
        </h2>

        <span className="hidden text-sm text-neutral-600 md:block">
          2024 — 2026
        </span>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-5">
        <div>
          <p className="mb-3 text-xs uppercase tracking-widest text-neutral-500">
            {language === "fr" ? "Catégories" : "Categories"}
          </p>

          <div className="flex flex-wrap gap-2">
            {categories.map(([id, en, fr]) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`rounded-full border border-teal-800 px-4 py-2 text-xs transition ${
                  activeCategory === id
                    ? " bg-teal-500 text-white"
                    : "text-teal-800  hover:bg-teal-800 hover:text-white"
                }`}
              >
                {language === "fr" ? fr : en}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-widest text-neutral-500">
            {language === "fr" ? "Type de projet" : "Project type"}
          </p>

          <div className="flex flex-wrap gap-2">
            {types.map(([id, en, fr]) => (
              <button
                key={id}
                onClick={() => setActiveType(id)}
                className={`rounded-full border border-teal-800 px-4 py-2 text-xs transition ${
                  activeType === id
                    ? " bg-teal-500 text-white"
                    : "text-teal-800  hover:bg-teal-800 hover:text-white"
                }`}
              >
                {language === "fr" ? fr : en}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel / Empty state */}
      {count === 0 ? (
        <div className="flex h-[400px] items-center justify-center rounded-3xl overflow-hidden  border border-teal-800/40 bg-teal-950 text-sm text-neutral-400">
          {language === "fr"
            ? "Aucun projet dans cette catégorie."
            : "No projects found in this category."}
        </div>
      ) : (
        <div
          ref={containerRef}
          className="relative flex w-full flex-col items-center"
        >
          {/* Carousel */}
          <div
            className="relative flex w-full items-center justify-center overflow-hidden isolate select-none cursor-grab active:cursor-grabbing rounded-3xl border border-teal-800/40 bg-teal-950"
            style={{
              height: `${carouselHeight}px`,
              minHeight: `${carouselHeight}px`,
              perspective: `${perspective}px`,
              touchAction: "pan-y",
              isolation: "isolate",
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onClickCapture={handleClickCapture}
          >
            <div
              className="relative shrink-0"
              style={{
                width: cardWidth,
                height: cardHeight,
                transform: `
                  translateZ(-${radius}px)
                  rotateX(-8deg)
                  rotateY(${rotation}deg)
                `,
                transformStyle: "preserve-3d",
                transition: dragging
                  ? "none"
                  : "transform 450ms cubic-bezier(0.2, 0.7, 0.2, 1)",
                willChange: "transform",
              }}
            >
              {filteredProjects.map((project, index) => {
                const content = project[language];

                const relativeIndex = (index - activeIndex + count) % count;

                const distance = Math.min(relativeIndex, count - relativeIndex);

                const isActive = index === activeIndex;

                return (
                  <div
                    key={project.id}
                    className="absolute inset-0"
                    style={{
                      transform: `
                        rotateY(${index * angle}deg)
                        translateZ(${radius}px)
                        translateY(${isActive ? "-10px" : "0px"})
                      `,
                      opacity: distance === 0 ? 1 : distance === 1 ? 0.8 : 0.45,
                      zIndex: isActive ? 50 : 10 - distance,
                      backfaceVisibility: "visible",
                      transition:
                        "opacity 300ms ease, transform 450ms cubic-bezier(0.2, 0.7, 0.2, 1)",
                    }}
                    onClick={() => handleCardClick(index)}
                  >
                    {project.empty ? (
                      <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl border border-dashed border-white/20 bg-neutral-900/80">
                        <span className="text-5xl font-light text-neutral-600">
                          +
                        </span>

                        <p className="mt-4 text-xs uppercase tracking-widest text-neutral-500">
                          {content.title}
                        </p>

                        <p className="mt-2 text-xs text-neutral-600">
                          {content.category}
                        </p>
                      </div>
                    ) : (
                      <ProjectCard
                        title={content.title}
                        category={content.category}
                        image={project.image}
                        slug={project.slug}
                        active={isActive}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-5 flex items-center justify-center gap-8">
            <button
              onClick={previous}
              aria-label="Previous project"
              className="grid size-11 place-items-center rounded-full border border-neutral-700 bg-white/5 transition hover:border-white/50 hover:bg-white/10"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <p className="text-xs tracking-widest text-neutral-500 tabular-nums">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(count).padStart(2, "0")}
            </p>

            <button
              onClick={next}
              aria-label="Next project"
              className="grid size-11 place-items-center rounded-full border border-neutral-700 bg-white/5 transition hover:border-white/50 hover:bg-white/10"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
