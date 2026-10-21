import CharacterViewer from "./CharacterViewer";
import { characters } from "../data/characters";

export default function CharacterGallery() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
            The collection
          </p>
          <h2 className="text-3xl tracking-tight md:text-4xl">
            Characters<span className="text-neutral-600">.</span>
          </h2>
        </div>

        <span className="text-xs tracking-widest text-neutral-500">
          {String(characters.length).padStart(2, "0")} OBJECTS
        </span>
      </div>

      <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {characters.map((character) => (
          <CharacterViewer
            key={character.id}
            character={character}
          />
        ))}
      </div>
    </section>
  );
}
