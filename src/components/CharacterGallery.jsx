import CharacterViewer from "./CharacterViewer";
import { useLanguage } from "../context/LanguageContext";

export default function CharacterGallery({
  models,
  title,
  eyebrow,
}) {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
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

      <div className="grid grid-cols-1 gap-y-8">
        {models.map((character) => (
          <CharacterViewer
            key={character.id}
            character={character}
          />
        ))}
      </div>
    </section>
  );
}