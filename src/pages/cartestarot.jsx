import Header from "../components/header";
import Footer from "../components/footer";
import { useLanguage } from "../context/LanguageContext";
import ProjectInfoBand from "../components/ProjectInfoBand";

export default function ProjectCartes() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const content = {
    fr: {
      title: "Jeu de cartes",
      subtitle: "Illustration · Vectoriel & Matriciel",

      introTitle: "Une exploration artistique",
      intro:
        "Pour réaliser ce jeu de cartes, j'ai commencé par sélectionner deux artistes aux approches graphiques différentes : un artiste vectoriel et un artiste matriciel. Cette recherche m'a permis d'étudier leurs univers visuels, leurs techniques et leurs choix artistiques.",

      researchTitle: "Recherches & inspirations",
      research:
        "J'ai réalisé des planches de recherches pour chacun des artistes afin d'analyser plus en profondeur leurs styles. J'ai ensuite reproduit certaines de leurs œuvres pour m'approprier leurs techniques et comprendre leur manière de construire une illustration. Ces expérimentations m'ont servi de point de départ pour concevoir mes propres cartes.",

      pixelTitle: "Johngall",
      pixelSubtitle: "Illustration matricielle",
      pixelDescription:
        "Pour la partie matricielle, j'ai choisi Johngall comme référence artistique. Son travail m'a permis d'explorer une approche de l'illustration reposant sur les pixels et le travail de l'image matricielle.",

      vectorTitle: "Monsieur Z",
      vectorSubtitle: "Illustration vectorielle",
      vectorDescription:
        "Monsieur Z est un artiste qui travaille avec des formes sans contour, aux couleurs unies. Malgré cette apparente simplicité, il parvient à transmettre le relief de ses paysages et de ses personnages. Son univers se caractérise notamment par l'utilisation de couleurs chaudes et contrastées, comme le bleu, le rouge, l'orange et le jaune. J'ai repris cette palette dans mon propre projet.",

      imitationTitle: "Expérimentations graphiques",
      imitation:
        "J'ai commencé par reproduire certaines de ses illustrations afin de comprendre sa construction graphique, ses formes et ses associations de couleurs. C'est un style que j'apprécie particulièrement pour son aspect simpliste et agréable à regarder, tout en étant capable d'offrir un niveau de détail important.",

      printTitle: "Préparation à l'impression",
      print:
        "Cette réalisation m'a également permis de découvrir les contraintes liées à l'impression. J'ai notamment recherché les paramètres à configurer dans Photoshop pour préparer correctement mes illustrations : passage en mode CMJN et adaptation du document aux exigences d'un fichier destiné à l'imprimerie.",

      cards: "Mes cartes",
    },

    en: {
      title: "Card Game",
      subtitle: "Illustration · Vector & Raster",

      introTitle: "An artistic exploration",
      intro:
        "To create this card game, I first selected two artists with different graphic approaches: one specialising in vector art and the other in raster art. This research allowed me to explore their visual worlds, techniques and artistic choices.",

      researchTitle: "Research & inspiration",
      research:
        "I created research boards for each artist to study their styles in greater depth. I then recreated some of their artworks to explore their techniques and understand how they build their illustrations. These experiments became the starting point for designing my own cards.",

      pixelTitle: "Johngall",
      pixelSubtitle: "Raster illustration",
      pixelDescription:
        "For the raster illustrations, I chose Johngall as my artistic reference. Their work allowed me to explore pixel-based illustration and the techniques involved in raster graphics.",

      vectorTitle: "Monsieur Z",
      vectorSubtitle: "Vector illustration",
      vectorDescription:
        "Monsieur Z is an artist who creates illustrations using solid shapes without outlines. Despite this apparent simplicity, he manages to convey depth in his landscapes and characters. His work is characterised by warm, contrasting colours such as blue, red, orange and yellow. I incorporated this palette into my own project.",

      imitationTitle: "Graphic experiments",
      imitation:
        "I started by recreating some of his illustrations to understand his use of shapes, composition and colour combinations. I particularly enjoy this style for its simplicity and visual appeal, while still allowing for a considerable level of detail.",

      printTitle: "Preparing artwork for print",
      print:
        "This project also introduced me to the technical requirements of print production. I researched the Photoshop settings needed to prepare my illustrations correctly, including converting documents to CMYK and adapting them to the requirements of professional printing.",

      cards: "My cards",
    },
  };

  const t = content[isFr ? "fr" : "en"];
  const base = `${import.meta.env.BASE_URL}images/projects/cards/`;

  const matricielBase = `${base}matriciel/`;
  const vectorielBase = `${base}vectoriel/`;

  const pixelCards = [
    "Death.gif",
    "sun.gif",
    "Moon.gif",
    "fortune.gif",
    "Hanged.gif",
    "Strength.gif",
    "Fool.gif",
  ];

  const vectorCards = [
    "base.png",
    "empress.png",
    "justice.png",
    "devil.png",
    "cat.png",
    "strength.png",
    "sun.png",
  ];

  return (
    <main className="min-h-screen bg-[#EAF8F6] text-[#174C49]">
      <Header />

      {/* HERO */}
      <section className="px-6 pb-16 pt-36 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#57958D]">
            {t.subtitle}
          </p>

          <h1 className="mb-8 text-5xl font-bold tracking-tight md:text-7xl">
            {t.title}
          </h1>

          <div className="max-w-3xl">
            <h2 className="mb-4 text-2xl font-semibold">{t.introTitle}</h2>
            <p className="text-base leading-relaxed text-[#46716D] md:text-lg">
              {t.intro}
            </p>
          </div>
        </div>
      </section>
      <ProjectInfoBand projectId="card" />

      {/* RESEARCH */}
      <section className="bg-[#174C49] px-6 py-20 text-[#EAF8F6] md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">
                {t.researchTitle}
              </h2>
            </div>

            <p className="text-base leading-relaxed text-[#C5E0DB] md:text-lg">
              {t.research}
            </p>
          </div>

          {/* Research images */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-[#D8EAE5] p-4">
              <img
                src={`${base}/recherches/Johngall/planche_recherche_matriciel.png`}
                alt="Johngall research board"
                className="w-full rounded-xl"
              />
              <img
                src={`${base}/recherches/Johngall/MimicWork.png`}
                alt="Johngall research board"
                className="w-full rounded-xl"
              />
            </div>

            <div className="overflow-hidden rounded-2xl bg-[#D8EAE5] p-4">
              <img
                src={`${base}/recherches/MonsieurZ/planche_recherches_vectoriel.png`}
                alt="Monsieur Z research board"
                className="w-full rounded-xl"
              />
              <img
                src={`${base}/recherches/MonsieurZ/MimicWork.png`}
                alt="Johngall research board"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RASTER / JOHNGALL */}
      <section className="px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-bold md:text-6xl">{t.pixelTitle}</h2>
              <p className="mt-3 text-lg text-[#57958D]">{t.pixelSubtitle}</p>
            </div>

            <p className="max-w-xl leading-relaxed text-[#46716D]">
              {t.pixelDescription}
            </p>
          </div>

          {/* Raster cards */}
          <div className="grid grid-cols-2 justify-items-center gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {pixelCards.map((image, index) => (
              <div
                key={index}
                className="w-full max-w-[190px] overflow-hidden rounded-2xl bg-white/60 p-3"
              >
                <img
                  src={matricielBase + image}
                  alt={`${t.pixelTitle} - ${index + 1}`}
                  className="h-auto w-full rounded-xl object-contain transition-transform duration-300 hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VECTOR / MONSIEUR Z */}
      <section className="bg-[#D4EEEA] px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold md:text-6xl">{t.vectorTitle}</h2>
            <p className="mt-3 text-lg text-[#57958D]">{t.vectorSubtitle}</p>
          </div>

          <div className="grid items-start gap-12 md:grid-cols-2">
            <p className="leading-relaxed text-[#46716D] md:text-lg">
              {t.vectorDescription}
            </p>

            <div className="rounded-3xl border border-[#A5D4CC] bg-[#EAF8F6] p-8">
              <h3 className="mb-4 text-2xl font-semibold">
                {t.imitationTitle}
              </h3>
              <p className="leading-relaxed text-[#46716D]">{t.imitation}</p>
            </div>
          </div>

          {/* Final vector cards */}
          <div className="mt-20">
            <h3 className="mb-8 text-2xl font-bold">{t.cards}</h3>

            <div className="grid grid-cols-2 justify-items-center gap-6 sm:grid-cols-3 lg:grid-cols-5">
              {vectorCards.map((image, index) => (
                <div
                  key={index}
                  className="w-full max-w-[190px] overflow-hidden rounded-2xl bg-white/60 p-3"
                >
                  <img
                    src={vectorielBase + image}
                    alt={`${t.vectorTitle} card ${index + 1}`}
                    className="h-auto w-full rounded-xl object-contain transition-transform duration-300 hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRINT */}
      <section className="px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              {t.printTitle}
            </h2>
            <p className="leading-relaxed text-[#46716D] md:text-lg">
              {t.print}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl bg-[#D8EAE5] p-4">
            <img
              src={`${base}card-print-example.png`}
              alt="Print preparation example"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
