
import * as THREE from "three";
import { Suspense, useEffect, useMemo, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  useAnimations,
  useGLTF,
  useProgress,
} from "@react-three/drei";
import { useLanguage } from "../context/LanguageContext";

// LOADING OVERLAY
function ModelLoadingOverlay() {
  const { active, progress } = useProgress();

  if (!active) return null;

  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-neutral-950">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-white/70" />

      <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
          Loading model
        </span>

        <span className="text-xs tabular-nums text-white/30">
          {Math.round(progress)}%
        </span>
      </div>

      <div className="h-[2px] w-32 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full bg-white/70 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

// 3D SCULPTURE
function Sculpture({
  model,
  animationName,
  animationPlaying,
  onAnimationsLoaded,
}) {
  const { scene, animations } = useGLTF(model);
  const { actions, names } = useAnimations(animations, scene);

  // Center the model automatically + fix texture artifacts
  useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();

    box.getCenter(center);

    scene.position.x -= center.x;
    scene.position.y -= center.y;
    scene.position.z -= center.z;

    // Fix texture filtering
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        const materials = Array.isArray(child.material)
          ? child.material
          : [child.material];

        materials.forEach((material) => {
          if (material.map) {
            material.map.minFilter = THREE.LinearFilter;
            material.map.needsUpdate = true;
          }
        });
      }
    });
  }, [scene]);

  // Tell CharacterViewer which animations exist
  useEffect(() => {
    onAnimationsLoaded(names);
  }, [names, onAnimationsLoaded]);

  // Handle animation playback and switching
  useEffect(() => {
    Object.values(actions).forEach((action) => {
      action?.stop();
    });

    if (!animationName) return;

    const action = actions[animationName];

    if (!action) return;

    if (animationPlaying) {
      action.reset();
      action.play();
    } else {
      action.stop();
    }

    return () => {
      action.stop();
    };
  }, [actions, animationName, animationPlaying]);

  return <primitive object={scene} />;
}

// CHARACTER VIEWER
export default function ModelViewer({ character }) {
  const { t } = useLanguage();

  const [animations, setAnimations] = useState([]);
  const [selectedAnimation, setSelectedAnimation] = useState("");
  const [animationPlaying, setAnimationPlaying] = useState(true);
  const [spinning, setSpinning] = useState(true);

  // FULLSCREEN
  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await containerRef.current?.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange,
      );
    };
  }, []);

  // ANIMATIONS
  const handleAnimationsLoaded = (names) => {
    setAnimations(names);

    if (names.length > 0) {
      setSelectedAnimation((current) =>
        names.includes(current) ? current : names[0],
      );
    }
  };

  // LAZY LOADING
  const viewerRef = useRef(null);
  const [inRange, setInRange] = useState(false);

  useEffect(() => {
    const element = viewerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInRange(entry.isIntersecting);
      },
      {
        rootMargin: "400px 0px",
        threshold: 0,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <article ref={viewerRef} className="group min-w-0 w-fit h-fit">
      <div className="flex gap-4">

        {/* 3D VIEWER */}
        <div
          ref={containerRef}
          className={`relative overflow-hidden border border-white/10 bg-neutral-500 ${
            isFullscreen
              ? "h-screen w-screen rounded-none"
              : "h-150 w-150 rounded-xl"
          }`}
        >
          {inRange ? (
            <>
              <Canvas
                camera={{ position: [0, 0, 8], fov: 70 }}
                gl={{ antialias: true }}
              >
                <ambientLight intensity={0.25} />

                <directionalLight
                  position={[4, 5, 3]}
                  intensity={1.2}
                  color="#fff1e6"
                />

                <Environment
                  preset="studio"
                  environmentIntensity={0.5}
                />

                <Suspense fallback={null}>
                  <Sculpture
                    model={character.model}
                    animationName={selectedAnimation}
                    animationPlaying={animationPlaying}
                    onAnimationsLoaded={handleAnimationsLoaded}
                  />
                </Suspense>

                <OrbitControls
                  enableDamping
                  dampingFactor={0.06}
                  enablePan={false}
                  enableZoom
                  minDistance={4}
                  maxDistance={25}
                  autoRotate={spinning}
                  autoRotateSpeed={4}
                />
              </Canvas>

              {/* LOADING OVERLAY - OUTSIDE CANVAS */}
              <ModelLoadingOverlay />
            </>
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-xs uppercase tracking-widest text-white/30">
                {t.gallery.loading}
              </span>
            </div>
          )}

          {/* FULLSCREEN BUTTON */}
          <button
            onClick={toggleFullscreen}
            className="absolute right-4 bottom-4 z-20 rounded-md border border-white/20 bg-black/50 p-2 text-white/60 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
            title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
          >
            {isFullscreen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 3v3a2 2 0 0 1-2 2H3" />
                <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
                <path d="M3 16h3a2 2 0 0 1 2 2v3" />
                <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h6v6" />
                <path d="M9 21H3v-6" />
                <path d="M21 3l-7 7" />
                <path d="M3 21l7-7" />
              </svg>
            )}
          </button>

          <span className="pointer-events-none absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.2em] text-white/40">
            {t.gallery.explore}
          </span>

          <span className="pointer-events-none absolute right-4 top-4 text-[10px] tracking-widest text-white/30">
            {character.number}
          </span>
        </div>

        {/* CONTROL PANEL */}
        <section className="flex flex-col gap-5">
          <h3 className="text-xl font-bold text-white/80">
            {character.name}
          </h3>

          <div className="w-52 h-fit rounded-xl border border-white/10 bg-neutral-900/80 p-5 backdrop-blur-sm">
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-white/40">
              {t.gallery.controls}
            </p>

            {/* SPIN CONTROL */}
            <div className="mb-5">
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/70">
                  {t.gallery.rotation}
                </span>

                <button
                  onClick={() => setSpinning((value) => !value)}
                  className={`relative h-5 w-9 rounded-full transition-colors ${
                    spinning ? "bg-white/80" : "bg-white/15"
                  }`}
                >
                  <span
                    className={`absolute top-1 h-3 w-3 rounded-full bg-neutral-900 transition-transform ${
                      spinning ? "translate-x-5" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* ANIMATION CONTROLS */}
            {animations.length > 0 && (
              <>
                <div className="mb-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs text-white/70">
                      Animation
                    </span>

                    <button
                      onClick={() =>
                        setAnimationPlaying((value) => !value)
                      }
                      className="text-[10px] uppercase tracking-widest text-white/40 transition-colors hover:text-white"
                    >
                      {animationPlaying
                        ? t.gallery.stopAnimation
                        : t.gallery.playAnimation}
                    </button>
                  </div>

                  {/* ANIMATION SELECT */}
                  <select
                    value={selectedAnimation}
                    onChange={(event) => {
                      setSelectedAnimation(event.target.value);
                      setAnimationPlaying(true);
                    }}
                    className="w-full rounded-md border border-white/10 bg-neutral-950 px-3 py-2 text-xs text-white/70 outline-none transition-colors focus:border-white/30"
                  >
                    {animations.map((animation) => (
                      <option key={animation} value={animation}>
                        {animation}
                      </option>
                    ))}
                  </select>
                </div>

                {/* PLAY / STOP BUTTON */}
                <button
                  onClick={() =>
                    setAnimationPlaying((value) => !value)
                  }
                  className="w-full rounded-md border border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.15em] text-white/60 transition-all hover:border-white/30 hover:text-white"
                >
                  {animationPlaying
                    ? "Stop Animation"
                    : "Play Animation"}
                </button>
              </>
            )}

            {/* NO ANIMATIONS */}
            {animations.length === 0 && (
              <p className="text-[10px] leading-relaxed text-white/30">
                {t.gallery.noAnimations}
              </p>
            )}
          </div>
        </section>
      </div>
    </article>
  );
}
