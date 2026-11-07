
import Header from "../components/header";
import Footer from "../components/footer";
import ProjectInfoBand from "../components/ProjectInfoBand";
import { useLanguage } from "../context/LanguageContext";

export default function Latoise() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const base = `${import.meta.env.BASE_URL}images/projects/Kailis/Toise/`;

  const content = {
    fr: {
      category: "Illustration · Projet professionnel",
      title: "Une toise pour le Théâtre Jean Lurçat",
      intro:
        "Création d'une toise illustrée pour le Théâtre Jean Lurçat d'Aubusson. Pensée comme un support visuel original, elle se compose de trois feuilles A4 assemblées, pour une hauteur totale d'environ 90 cm.",
      processTitle: "Du concept à l'illustration finale",
      stages: [
        {
          title: "Recherches de composition",
          description:
            "Exploration de différentes compositions afin de trouver un équilibre visuel et de construire une illustration cohérente sur toute la hauteur de la toise.",
        },
        {
          title: "Recherche de signification",
          description:
            "Recherche autour des symboles, des références et des éléments visuels permettant de donner du sens à l'illustration et de l'ancrer dans l'univers du théâtre.",
        },
        {
          title: "Note d'intention",
          description:
            "Définition de l'intention créative et des choix graphiques qui guideront la réalisation de l'illustration.",
        },
        {
          title: "Croquis en niveaux de gris",
          description:
            "Mise en place des formes, des volumes et des contrastes à travers des croquis en niveaux de gris, avant le travail de couleur.",
        },
        {
          title: "Finalisation de la toise",
          description:
            "Affinement de l'illustration, ajout des détails et finalisation de la composition pour obtenir un visuel prêt à être assemblé sur trois feuilles A4.",
        },
      ],
      resultTitle: "Le résultat final",
      resultText:
        "Une illustration verticale d'environ 90 cm, conçue pour prendre place dans l'environnement du Théâtre Jean Lurçat d'Aubusson.",
    },
    en: {
      category: "Illustration · Professional project",
      title: "A growth chart for Théâtre Jean Lurçat",
      intro:
        "Creation of an illustrated growth chart for Théâtre Jean Lurçat in Aubusson. Designed as an original visual piece, it consists of three A4 sheets assembled into a composition approximately 90 cm tall.",
      processTitle: "From concept to final illustration",
      stages: [
        {
          title: "Composition research",
          description:
            "Exploring different compositions to find a visual balance and build a coherent illustration across the full height of the growth chart.",
        },
        {
          title: "Meaning and symbolism research",
          description:
            "Researching symbols, references and visual elements to give meaning to the illustration and connect it to the theatre's world.",
        },
        {
          title: "Creative statement",
          description:
            "Defining the creative direction and graphic choices that would guide the illustration.",
        },
        {
          title: "Greyscale sketches",
          description:
            "Establishing shapes, volumes and contrasts through greyscale sketches before moving on to colour.",
        },
        {
          title: "Final illustration",
          description:
            "Refining the illustration, adding details and completing the composition to create a visual ready to be assembled across three A4 sheets.",
        },
      ],
      resultTitle: "The final result",
      resultText:
        "A vertical illustration approximately 90 cm tall, designed to become part of the environment of Théâtre Jean Lurçat in Aubusson.",
    },
  };

  const t = content[isFr ? "fr" : "en"];

  return (
    <main className="min-h-screen bg-[#EAF8F6] text-[#174C49]">
      <Header />
      {/* INTRODUCTION */}
      <section className="px-6 pb-24 md:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <p className="text-sm uppercase tracking-widest text-[#65918A]">
              {t.category}
            </p>

            <h1 className="text-3xl font-medium md:text-4xl">
              {t.title}
            </h1>

            <p className="text-base leading-relaxed text-[#52736F]">
              {t.intro}
            </p>
          </div>

          <div className="flex justify-center rounded-3xl bg-[#D8EAE5] p-3 md:p-5">
            <img
              src={`${base}ToiseComplete.jpg`}
              alt="Illustration complète de la toise du Théâtre Jean Lurçat"
              className="max-h-[650px] w-auto max-w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      </section>

      
      <ProjectInfoBand projectId="latoise" />

      {/* CREATIVE PROCESS */}
      <section className="bg-[#D8EAE5] px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-widest text-[#65918A]">
              {isFr ? "Processus créatif" : "Creative process"}
            </p>

            <h2 className="text-3xl font-medium md:text-4xl">
              {t.processTitle}
            </h2>
          </div>

          <div className="space-y-16">
            {t.stages.map((stage, index) => (
              <div
                key={stage.title}
                className="grid items-start gap-6 border-t border-[#A9C9C1] pt-8 md:grid-cols-[100px_1fr]"
              >
                <span className="text-4xl font-light text-[#8AAFA6]">
                  0{index + 1}
                </span>

                <div className="grid gap-6 md:grid-cols-2">
                  <h3 className="text-2xl font-medium">
                    {stage.title}
                  </h3>

                  <p className="text-base leading-relaxed text-[#52736F]">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL RESULT */}
      <section className="px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-widest text-[#65918A]">
              {isFr ? "Réalisation" : "Final artwork"}
            </p>

            <h2 className="mb-4 text-3xl font-medium md:text-4xl">
              {t.resultTitle}
            </h2>

            <p className="leading-relaxed text-[#52736F]">
              {t.resultText}
            </p>
          </div>

          <div className="flex justify-center rounded-3xl bg-[#D8EAE5] p-4 md:p-8">
            <img
              src={`${base}ToiseComplete.jpg`}
              alt="Résultat final de la toise"
              className="max-h-[800px] w-auto max-w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
