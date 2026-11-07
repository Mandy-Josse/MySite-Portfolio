import { useLanguage } from "../context/LanguageContext";

import Header from "../components/header";
import Footer from "../components/footer";
import ProjectInfoBand from "../components/ProjectInfoBand";

export default function WaitRose() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const content = {
    fr: {
      category: "Audiovisuel · Stop-motion",
      subtitle:
        "Une approche ludique de la cuisine des fruits et légumes, réalisée en stop-motion pour Waitrose.",
      type: "Projet",
      typeValue: "Vidéo publicitaire",
      client: "Marque",
      clientValue: "Waitrose",
      format: "Format",
      formatValue: "Stop-motion",
      language: "Langue",
      languageValue: "Anglais",

      videoTitle: "Le projet",
      conceptLabel: "Le concept",
      conceptTitle: "La cuisine, un jeu d'enfant.",
      conceptText:
        "Parmi plusieurs angles créatifs proposés, nous avons choisi de montrer que cuisiner des fruits et légumes peut être facile et amusant. L'idée était de rendre la préparation des aliments accessible et attrayante à travers une courte animation.",

      processLabel: "La réalisation",
      processTitle: "Du storyboard à l'animation.",
      processText:
        "Nous avons commencé par concevoir un storyboard et rédiger un script en anglais, en accord avec l'identité de Waitrose. Nous sommes ensuite passés au tournage en studio, où nous avons réalisé l'animation image par image.",

      processText2:
        "Malgré un espace de travail assez restreint pour notre groupe de trois personnes, la caméra positionnée directement au-dessus du plan de travail nous a permis de conserver un cadrage fixe et de limiter les ombres pendant le tournage.",

      processText3:
        "Enfin, nous avons enregistré nos voix pour créer un voice-over, synchronisé avec les différentes étapes de l'animation.",

      back: "Retour aux projets",
    },

    en: {
      category: "Audiovisual · Stop-motion",
      subtitle:
        "A playful take on cooking with fruits and vegetables, created through stop-motion animation for Waitrose.",
      type: "Project",
      typeValue: "Promotional video",
      client: "Brand",
      clientValue: "Waitrose",
      format: "Format",
      formatValue: "Stop-motion",
      language: "Language",
      languageValue: "English",

      videoTitle: "The project",
      conceptLabel: "The concept",
      conceptTitle: "Cooking made fun.",
      conceptText:
        "From several proposed creative directions, we chose to show that cooking with fruits and vegetables can be easy and fun. The idea was to make food preparation feel accessible and appealing through a short animation.",

      processLabel: "The process",
      processTitle: "From storyboard to animation.",
      processText:
        "We started by developing a storyboard and writing an English script that matched Waitrose's brand identity. We then moved into the studio to create the animation, capturing each frame individually.",

      processText2:
        "Despite having limited workspace for our group of three, positioning the camera directly above the countertop allowed us to maintain a fixed camera angle and minimise shadows during filming.",

      processText3:
        "Finally, we recorded our voices to create a voice-over, synchronised with the different stages of the animation.",

      back: "Back to projects",
    },
  };

  const t = isFr ? content.fr : content.en;

  return (
    <main className="min-h-screen bg-[#EAF8F6] text-[#174C49]">
      <Header />

      {/* Project header */}
      <nav className="flex items-center justify-between p-8">
        <span className="tracking-[0.3em]">WAITROSE</span>
        <span className="text-sm text-neutral-400">{t.category}</span>
      </nav>
      
      <ProjectInfoBand projectId="waitrose" />

      <header className="mx-auto max-w-7xl px-6 pb-20 pt-16">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-neutral-400">
          {t.category}
        </p>

        <h1 className="text-5xl font-bold tracking-tight md:text-8xl">
          Waitrose<span className="text-neutral-400">.</span>
        </h1>

        <p className="mt-8 max-w-xl text-sm leading-7 text-neutral-500 md:text-base">
          {t.subtitle}
        </p>

        {/* Project information */}
        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-[#174C49]/20 pt-6 md:grid-cols-4">
          {[
            [t.type, t.typeValue],
            [t.client, t.clientValue],
            [t.format, t.formatValue],
            [t.language, t.languageValue],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-xs uppercase tracking-widest text-neutral-400">
                {label}
              </p>
              <p className="mt-2 text-sm font-medium">{value}</p>
            </div>
          ))}
        </div>
      </header>

      {/* Video */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="aspect-video overflow-hidden rounded-xl bg-[#174C49]">
          <iframe
            className="h-full w-full"
            src="https://www.youtube-nocookie.com/embed/zLtwUdaHdak"
            title="Waitrose Stop Motion"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      {/* Concept */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-28 md:grid-cols-2">
        <div>
          <h2 className="max-w-md text-4xl font-semibold leading-tight md:text-6xl">
            {t.conceptTitle}
          </h2>
        </div>

        <div className="flex items-center">
          <p className="text-sm leading-8 text-[#174C49]/70 md:text-base">
            {t.conceptText}
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#D5EEEA] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="max-w-md text-4xl font-semibold leading-tight md:text-6xl">
              {t.processTitle}
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-8 text-[#174C49]/75 md:text-base">
            <p>{t.processText}</p>
            <p>{t.processText2}</p>
            <p>{t.processText3}</p>
          </div>
        </div>
      </section>

      {/* Back */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <a
          href={`${import.meta.env.BASE_URL}#work`}
          className="text-sm text-neutral-500 transition hover:text-[#174C49]"
        >
          ← {t.back}
        </a>
      </div>

      <Footer />
    </main>
  );
}
