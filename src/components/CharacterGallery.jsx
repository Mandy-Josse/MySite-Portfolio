
import { Suspense, useMemo, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";

import CharacterViewer from "./CharacterViewer";
import { useLanguage } from "../context/LanguageContext";

// THUMBNAIL MODEL
function ThumbnailModel({ model }) {
  const { scene } = useGLTF(model);

  const clonedScene = useMemo(() => {
    const cloned = clone(scene);

    // Calculate original dimensions
    const box = new THREE.Box3().setFromObject(cloned);
    const size = new THREE.Vector3();

    box.getSize(size);

    const maxDimension = Math.max(
      size.x,
      size.y,
      size.z
    );

    // Normalize model scale
    if (maxDimension > 0 && Number.isFinite(maxDimension)) {
      cloned.scale.multiplyScalar(1.8 / maxDimension);
    }

    // Recalculate bounding box after scaling
    cloned.updateMatrixWorld(true);

    const centeredBox = new THREE.Box3().setFromObject(cloned);
    const center = new THREE.Vector3();

    centeredBox.getCenter(center);

    // Center model in all three axes
    cloned.position.sub(center);

    cloned.updateMatrixWorld(true);

    return cloned;
  }, [scene]);

  return <primitive object={clonedScene} />;
}

// CHARACTER THUMBNAIL
function CharacterThumbnail({ character, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      aria-label={`Select ${character.name}`}
      className={`
        group flex w-32 shrink-0 flex-col overflow-hidden
        rounded-xl border transition-all duration-300
        ${
          selected
            ? "border-white/60 bg-white/10"
            : "border-white/10 bg-neutral-900/60 hover:border-white/30"
        }
      `}
    >
      {/* MINI 3D VIEWPORT */}
      <div className="relative h-32 w-full bg-neutral-800/60">
        <Canvas
          camera={{
            position: [0, 0.45, 4],
            fov: 45,
            near: 0.01,
            far: 100,
          }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.6} />

          <directionalLight
            position={[4, 5, 3]}
            intensity={1.5}
            color="#fff1e6"
          />

          <Environment
            preset="studio"
            environmentIntensity={0.4}
          />

          <Suspense fallback={null}>
            <ThumbnailModel model={character.model} />
          </Suspense>
        </Canvas>

        <span className="pointer-events-none absolute left-2 top-2 text-[9px] tracking-widest text-white/30">
          {character.number}
        </span>

        {selected && (
          <div className="pointer-events-none absolute inset-0 border border-white/20" />
        )}
      </div>

      {/* CHARACTER NAME */}
      <div className="flex min-h-10 items-center justify-center px-2 py-2">
        <span
          className={`text-[10px] uppercase tracking-widest transition-colors ${
            selected
              ? "text-white"
              : "text-white/40 group-hover:text-white/80"
          }`}
        >
          {character.name}
        </span>
      </div>
    </button>
  );
}

// CHARACTER GALLERY
export default function CharacterGallery({
  models,
  title,
  eyebrow,
}) {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!models.length) return null;

  const selectedCharacter = models[selectedIndex];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">

      {/* HEADER */}
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
            {eyebrow}
          </p>

          <h2 className="text-3xl tracking-tight md:text-4xl">
            {title}
            <span className="text-neutral-600">.</span>
          </h2>
        </div>

        <span className="text-xs tracking-widest text-neutral-500">
          {String(models.length).padStart(2, "0")} {t.gallery.objects}
        </span>
      </div>

      {/* MAIN VIEWER */}
      <div className="mb-8">
        <CharacterViewer
          key={selectedCharacter.id}
          character={selectedCharacter}
        />
      </div>

      {/* THUMBNAIL GALLERY */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
            {t.gallery.objects}
          </p>

          <span className="text-[10px] tabular-nums tracking-widest text-neutral-600">
            {String(selectedIndex + 1).padStart(2, "0")} /{" "}
            {String(models.length).padStart(2, "0")}
          </span>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          {models.map((character, index) => (
            <CharacterThumbnail
              key={character.id}
              character={character}
              selected={selectedIndex === index}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
