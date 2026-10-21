import * as THREE from "three";
import { Suspense, useEffect,useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {Center,Environment,OrbitControls,useAnimations,useGLTF,} from "@react-three/drei";

function Sculpture({ model }) {
  const { scene, animations } = useGLTF(model);
  const { actions, names } = useAnimations(animations, scene);

  // Corrige le problème de lignes entre les textures (artifacts de mipmapping)
  useMemo(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        
        materials.forEach((material) => {
          if (material.map) {
            // Force l'utilisation de la texture brute sans sous-échantillonnage linéaire
            material.map.minFilter = THREE.LinearFilter;
            material.map.needsUpdate = true;
          }
        });
      }
    });
  }, [scene]);

  // Gestion des animations
  useEffect(() => {
    const action = names.length ? actions[names[0]] : null;

    action?.reset().fadeIn(0.4).play();

    return () => {
      Object.values(actions).forEach((act) => act?.stop());
    };
  }, [actions, names]);

  return <primitive object={scene} />;
}


export default function CharacterViewer({ character }) {
  return (
    <article className="group min-w-0 w-fit h-fit">
      <div className="h-150 w-150 relative overflow-hidden rounded-xl border border-white/10 bg-neutral-500">
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
            <Sculpture model={character.model} />
          </Suspense>


          <OrbitControls
            enableDamping
            dampingFactor={0.06}
            enablePan={false}
            enableZoom
            minDistance={4}
            maxDistance={18}
            autoRotate
            autoRotateSpeed={6}
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
