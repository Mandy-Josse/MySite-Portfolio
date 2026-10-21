import CharacterGallery from "../components/CharacterGallery";

export default function Reverie() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <nav className="flex items-center justify-between p-8">
        <span className="tracking-[0.3em]">REVERIE</span>
        <span className="text-sm text-neutral-400">
          A Roblox project        
        </span>
      </nav>

      <header className="mx-auto max-w-7xl px-6 pb-16 pt-16">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
          Objects of the imagination
        </p>
        <h1 className="text-5xl tracking-tight md:text-7xl">
          Reverie<span className="text-neutral-600">.</span>
        </h1>
        <p className="mt-5 max-w-md text-sm leading-7 text-neutral-400">
          A collection of forms, characters, and digital sculptures.
          Each object invites a closer look.
        </p>
      </header>

      <CharacterGallery />

      <footer className="border-t border-white/10 px-8 py-8 text-xs tracking-widest text-neutral-500">
        REVERIE © 2026
      </footer>
    </main>
  );
}



// import { Canvas } from "@react-three/fiber";
// import { Environment, OrbitControls, Float, useGLTF, Center, useAnimations } from "@react-three/drei";
// import { useEffect } from "react";


// function Sculpture() {
//   const { scene, animations } = useGLTF(
//     `${import.meta.env.BASE_URL}models/Dia.glb`
//   );

//   const { actions, names } = useAnimations(animations, scene);

//   useEffect(() => {
//     // Play the first animation included in the model.
//     if (names.length > 0) {
//       actions[names[0]]?.reset().fadeIn(0.4).play();
//     }

//     return () => {
//       Object.values(actions).forEach((action) => {
//         action?.stop();
//       });
//     };
//   }, [actions, names]);

//   return (
//     <Center>
//       <primitive object={scene} />
//     </Center>
//   );
// }

// useGLTF.preload(`${import.meta.env.BASE_URL}models/Dia.glb`);

// export default function Reverie() {
//   return (
//     <main className="min-h-screen bg-neutral-950 text-white">
//       <nav className="flex justify-between p-8">
//         <span className="tracking-[0.3em]">REVERIE</span>
//         <span className="text-sm text-neutral-400">
//           11 - Dia
//         </span>
//       </nav>

//       <section className="mx-auto max-w-6xl px-6">
//         <div className="h-150 w-150 overflow-hidden rounded-2xl border border-white/10">


//           <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
//             <ambientLight intensity={0.25} />
//             <directionalLight
//               position={[4, 5, 3]}
//               intensity={1.2}
//               color="#fff1e6"
//             />
//             <Environment preset="studio" environmentIntensity={0.5} />

//             <Sculpture />

//             <OrbitControls
//               enableDamping
//               dampingFactor={0.06}
//               enablePan={false}
//               enableZoom
//               minDistance={2}
//               maxDistance={10}
//               autoRotate
//               autoRotateSpeed={0.6}
//             />
//           </Canvas>

//           <div className="pointer-events-none absolute bottom-6 left-6 text-xs uppercase tracking-widest text-neutral-400">
//             Drag to explore · Scroll to zoom
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
