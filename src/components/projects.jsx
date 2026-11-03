import { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "../context/LanguageContext";

const projects = [
  {
    id: "card",
    slug: "card",
    image: `${import.meta.env.BASE_URL}images/projects/cardcover.png`,
    en: { title: "Tarot Cards", category: "Illustration · Illustrator" },
    fr: { title: "Cartes de Tarot", category: "Illustration · Illustrator" },
  },
  {
    id: "project-two",
    slug: "project-two",
    image: null,
    en: { title: "Project Two", category: "Graphic Design · Branding" },
    fr: { title: "Projet Deux", category: "Design graphique · Branding" },
  },

  {
    id: "silksongshop",
    slug: "silksongshop",
    image: null,
    en: { title: "Silksong Shop", category: "Wordpress · 3D" },
    fr: { title: "Shop Silksong", category: "Wordpress · 3D" },
  },

  {
    id: "project-cartes",
    slug: "project-cartes",
    image: null,
    en: { title: "Tarot Cards Project", category: "3D · Digital Creation" },
    fr: { title: "Projet Cartes Tarot", category: "3D · Création numérique" },
  },

  ...Array.from({ length: 4 }, (_, i) => ({
    id: `empty-${i + 1}`,
    slug: null,
    image: null,
    empty: true,
    en: { title: "Your next project", category: "Coming soon" },
    fr: { title: "Votre prochain projet", category: "À venir" },
  })),
];

export default function Projects() {
  const { language, t } = useLanguage();

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

  const count = projects.length;
  const angle = 360 / count;

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

  const radius = Math.round(cardWidth / (2 * Math.tan(Math.PI / count))) + 220;

  const updateActiveIndex = (rotationValue) => {
    const normalized = ((-rotationValue % 360) + 360) % 360;
    const index = Math.round(normalized / angle) % count;
    setActiveIndex(index);
  };

  const rotateTo = (index) => {
    const normalized = (index + count) % count;

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

  const handlePointerDown = (e) => {
    if (e.button !== 0) return;

    isDragging.current = true;
    moved.current = false;

    startX.current = e.clientX;
    startRotation.current = rotationRef.current;

    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
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
    <section id="work" className="px-6 py-24 md:px-12 overflow-hidden">
      <div className="mb-8 flex items-end justify-between">
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

      <div
        ref={containerRef}
        className="relative w-full flex flex-col items-center"
      >
        <div
          className="relative w-full flex items-center justify-center overflow-hidden select-none cursor-grab active:cursor-grabbing"
          style={{
            height: "clamp(500px, 65vw, 680px)",
            perspective: "1800px",
            touchAction: "pan-y",
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onClickCapture={handleClickCapture}
        >
          <div
            className="relative"
            style={{
              width: cardWidth,
              height: cardWidth * 1.05,
              transform: `
                translateY(-5px)
                translateZ(-${radius}px)
                rotateX(-12deg)
                rotateY(${rotation}deg)
              `,
              transformStyle: "preserve-3d",
              transition: dragging
                ? "none"
                : "transform 450ms cubic-bezier(0.2, 0.7, 0.2, 1)",
              willChange: "transform",
            }}
          >
            {projects.map((project, index) => {
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
                      translateY(${isActive ? "-35px" : "0px"})
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
                    <div className="w-full h-full flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/20 bg-neutral-900/80">
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
    </section>
  );
}
