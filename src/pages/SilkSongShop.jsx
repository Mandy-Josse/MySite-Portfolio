import CharacterGallery from "../components/CharacterGallery";
import { silksongModels } from "../data/silksongshop";

import Header from "../components/header";
import Footer from "../components/footer";

export default function SilksongShop() {
  return (
    <main className="min-h-screen bg-[#EAF8F6] text-[#174C49]">
      <Header />

      <nav className="flex items-center justify-between p-8">
        <span className="tracking-[0.3em]">
          SILKSONG SHOP
        </span>

        <span className="text-sm text-neutral-400">
          3D Modeling · Blender
        </span>
      </nav>

      <header className="mx-auto max-w-7xl px-6 pb-16 pt-16">
        <h1 className="text-5xl tracking-tight md:text-7xl">
          Silksong Shop<span className="text-neutral-600">.</span>
        </h1>

        <p className="mt-5 max-w-md text-sm leading-7 text-neutral-400">
          A collection of 3D models created for the Silksong Shop project.
          Explore each model from every angle.
        </p>
      </header>

      <CharacterGallery
        models={silksongModels}
        eyebrow="SILKSONG COLLECTION"
        title="3D Models"
      />

      <Footer />
    </main>
  );
}