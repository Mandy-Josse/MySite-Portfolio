
import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Center,
  Environment,
  OrbitControls,
  useAnimations,
  useGLTF,
} from "@react-three/drei";

function Sculpture({ model }) {
  const { scene, animations } = useGLTF(model);
  const { actions, names } = useAnimations(animations, scene);

  useEffect(() => {
    const action = names.length ? actions[names[0]] : null;

    action?.reset().fadeIn(0.4).play();

    return () => {
      Object.values(actions).forEach((action) => action?.stop());
    };
  }, [actions, names]);

  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}

export default function CharacterViewer({ character }) {
  return (
    <article className="group min-w-0">
      <div className="h-150 w-150 relative overflow-hidden rounded-xl border border-white/10 bg-neutral-500">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
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
            <Sculpture model={character.model} />
          </Suspense>

          <OrbitControls
            enableDamping
            dampingFactor={0.06}
            enablePan={false}
            enableZoom
            minDistance={2}
            maxDistance={10}
            autoRotate
            autoRotateSpeed={0.6}
          />
        </Canvas>

        <span className="pointer-events-none absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.2em] text-white/40">
          Drag to explore
        </span>

        <span className="pointer-events-none absolute right-4 top-4 text-[10px] tracking-widest text-white/30">
          {character.number}
        </span>
      </div>

      <div className="flex items-center justify-between py-4">
        <h3 className="text-sm tracking-[0.2em] text-white/80">
          {character.name}
        </h3>
        <span className="text-xs text-white/30 transition-colors group-hover:text-white/70">
          ↗
        </span>
      </div>
    </article>
  );
}
