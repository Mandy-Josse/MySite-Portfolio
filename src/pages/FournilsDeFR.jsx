import Header from "../components/header";
import Footer from "../components/footer";
import ProjectInfoBand from "../components/ProjectInfoBand";
import { useLanguage } from "../context/LanguageContext";

export default function FournilsDeFR() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const base = `${import.meta.env.BASE_URL}images/projects/fournils/`;

  const content = {
    hero: {
      category: isFr
        ? "Webdesign · WordPress · Projet universitaire"
        : "Web Design · WordPress · University Project",
      description: isFr
        ? "Imaginer une nouvelle expérience de commande en ligne pour une boulangerie traditionnelle française, à travers la création d'un service de click & collect."
        : "Rethinking the online ordering experience of a traditional French bakery through the creation of a custom click & collect service.",
      figma: isFr ? "Voir le prototype Figma ↗" : "View Figma prototype ↗",
      github: isFr ? "Voir le code source ↗" : "View source code ↗",
    },

    overview: {
      category: isFr ? "Le projet" : "The project",
      title: isFr
        ? "Une nouvelle façon de commander en boulangerie."
        : "A new way to order from the bakery.",
      paragraphs: isFr
        ? [
            "Le site des Fournils de France ne proposait initialement aucun service de click & collect. Les commandes en ligne étaient uniquement accessibles via des plateformes de livraison tierces, comme Uber Eats.",
            "L'objectif était d'imaginer et de développer une expérience de commande intégrée au site existant, permettant aux clients de consulter les produits, composer leur panier et passer commande directement auprès de la boulangerie.",
          ]
        : [
            "The Fournils de France website did not originally offer a click & collect service, with online orders limited to third-party delivery platforms such as Uber Eats.",
            "The goal was to imagine and develop an integrated online ordering experience, allowing customers to browse products, build their basket and place orders directly through the bakery's website.",
          ],
    },

    design: {
      category: isFr ? "01 — Direction artistique" : "01 — Art direction",
      title: isFr
        ? "Rester fidèle à l'identité de la boulangerie."
        : "Staying true to the bakery's identity.",
      paragraphs: isFr
        ? [
            "Avant de concevoir l'interface, j'ai étudié le site original des Fournils de France afin d'en comprendre l'identité visuelle et les codes graphiques.",
            "Cette analyse portait notamment sur la palette de couleurs, les typographies, les séparateurs décoratifs et l'ambiance générale du site.",
            "J'ai ainsi développé une direction artistique inspirée de l'univers chaleureux des boulangeries, autour de tons bruns, beiges et d'éléments visuels accueillants.",
          ]
        : [
            "Before designing the interface, I studied the original Fournils de France website to understand its visual identity and existing design language.",
            "This included its colour palette, typography, decorative separators and overall atmosphere.",
            "A warm bakery-inspired art direction was developed around earthy browns, beige tones and welcoming visual elements.",
          ],
      caption: isFr
        ? "Recherches graphiques et moodboard"
        : "Visual research and moodboard",
    },

    interface: {
      category: isFr
        ? "02 — Conception de l'interface"
        : "02 — Interface design",
      title: isFr
        ? "Des premières idées à une interface complète."
        : "From initial ideas to a complete interface.",
      description: isFr
        ? "J'ai exploré différentes mises en page et structures d'interface à travers plusieurs itérations de wireframes, afin de définir les différentes étapes du parcours de commande. Ces recherches ont ensuite donné naissance aux maquettes finales sur Figma."
        : "I explored different layouts and interface structures through several wireframe iterations, defining the different stages of the ordering journey before moving on to the final high-fidelity mockups in Figma.",
      wireframes: isFr
        ? "Wireframes et explorations de mise en page"
        : "Wireframes and layout explorations",
      mockups: isFr
        ? "Maquettes finales et prototype Figma"
        : "Final interface and Figma prototype",
    },

    development: {
      category: isFr ? "03 — Développement" : "03 — Development",
      title: isFr
        ? "Donner vie à la maquette."
        : "Bringing the design to life.",
      paragraphs: isFr
        ? [
            "Une fois la conception terminée, j'ai reproduit l'interface sous la forme d'un site statique avec React, Vite et Tailwind CSS.",
            "Cette version a servi de base avant l'intégration sur WordPress, où l'expérience de click & collect a été développée au sein du site existant.",
            "L'application finale a été hébergée sur un environnement O2Switch.",
          ]
        : [
            "Once the design was complete, I recreated the interface as a static website using React, Vite and Tailwind CSS.",
            "This version served as the foundation for the subsequent WordPress integration, where the click & collect experience was developed as part of the existing website.",
            "The final application was deployed through an O2Switch hosting environment.",
          ],
    },

    lighthouse: {
      category: isFr
        ? "04 — Performance et optimisation"
        : "04 — Performance & optimisation",
      title: isFr
        ? "Évaluer l'expérience finale."
        : "Measuring the final experience.",
      description: isFr
        ? "Après avoir finalisé le site, j'ai réalisé un audit avec Google Lighthouse afin d'évaluer ses performances, son accessibilité, ses bonnes pratiques et son référencement. Les résultats m'ont ensuite permis d'identifier plusieurs pistes d'amélioration et d'optimiser certaines parties de l'application."
        : "After completing the website, I evaluated its performance using Google Lighthouse. The audit provided an overview of the application's performance, accessibility, best practices and SEO. The results helped identify areas for improvement and optimise several parts of the application.",
      initial: isFr ? "Audit Mobile" : "Mobile audit",
      final: isFr ? "Audit PC" : "PC audit",
    },

    footer: {
      category: isFr ? "Découvrir le projet" : "Explore the project",
      title: isFr
        ? "Envie de découvrir le projet ?"
        : "Interested in the project?",
      figma: isFr ? "Prototype Figma ↗" : "Figma prototype ↗",
      github: isFr ? "Dépôt GitHub ↗" : "GitHub repository ↗",
    },
  };

  const figmaUrl = "https://www.figma.com/design/M6u6Fs5GYa4DNuOTq90L1r/SAE3.01-Mandy-Josse-Les-fournils-de-France?node-id=14-5";

  const githubUrl = "https://mandy-josse.github.io/SAE301-Tailwind/";

  const buttonClass = "rounded-full border border-[#174C49]/30 px-6 py-3 text-sm transition hover:bg-[#174C49] hover:text-white";

  const renderParagraphs = (paragraphs) =>
    paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>);

  return (
    <main className="min-h-screen bg-[#EAF8F6] text-[#174C49]">
      <Header />

      {/* HERO */}
      <section className="px-6 pt-36 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[#65918A]">
            {content.hero.category}
          </p>

          <h1 className="mb-8 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Les Fournils de France
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-[#52736F]">
            {content.hero.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={figmaUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#174C49] px-6 py-3 text-sm text-white transition hover:bg-[#286B63]"
            >
              {content.hero.figma}
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonClass}
            >
              {content.hero.github}
            </a>
          </div>
        </div>
      </section>

      <ProjectInfoBand projectId="fournils" />

      {/* PROJECT OVERVIEW */}
      <section className="px-6 pb-24 md:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          {/* TEXT - LEFT */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="mb-3 text-sm uppercase tracking-widest text-[#65918A]">
                {content.overview.category}
              </p>

              <h2 className="text-3xl font-medium">{content.overview.title}</h2>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-[#52736F]">
              {renderParagraphs(content.overview.paragraphs)}
            </div>
          </div>

          {/* IMAGE - RIGHT */}
          <div className="flex justify-center overflow-hidden rounded-3xl bg-[#D8EAE5] md:p-3">
            <img
              src={`${base}fournils-cover.png`}
              alt="Les Fournils de France click and collect website"
              className="max-w-50 rounded-2xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* ART DIRECTION */}
      <section className="bg-[#174C49] px-6 py-24 text-[#EAF8F6] md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-widest text-[#A6CBC0]">
            {content.design.category}
          </p>

          <h2 className="mb-8 max-w-2xl text-4xl font-medium md:text-5xl">
            {content.design.title}
          </h2>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-5 leading-relaxed text-[#C3DCD5]">
              {renderParagraphs(content.design.paragraphs)}
            </div>

            <div>
              <div className="overflow-hidden rounded-2xl bg-[#286B63]">
                <img
                  src={`${base}moodboard.png`}
                  alt={
                    isFr
                      ? "Moodboard des Fournils de France"
                      : "Fournils de France moodboard"
                  }
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-4 text-sm text-[#A6CBC0]">
                {content.design.caption}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERFACE DESIGN */}
      <section className="px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-widest text-[#65918A]">
            {content.interface.category}
          </p>

          <h2 className="mb-8 max-w-2xl text-4xl font-medium md:text-5xl">
            {content.interface.title}
          </h2>

          <p className="mb-12 max-w-2xl leading-relaxed text-[#52736F]">
            {content.interface.description}
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <div className="overflow-hidden rounded-2xl bg-[#D8EAE5] p-4">
                <img
                  src={`${base}wireframes.png`}
                  alt="Click and collect wireframes"
                  className="w-full rounded-xl"
                />
              </div>

              <p className="mt-4 text-sm text-[#52736F]">
                {content.interface.wireframes}
              </p>
            </div>

            <div>
              <div className="overflow-hidden rounded-2xl bg-[#D8EAE5] p-4">
                <img
                  src={`${base}mockups.png`}
                  alt="Final Figma website mockups"
                  className="w-full rounded-xl"
                />
              </div>

              <p className="mt-4 text-sm text-[#52736F]">
                {content.interface.mockups}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT */}
      <section className="bg-[#D8EAE5] px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-widest text-[#65918A]">
            {content.development.category}
          </p>

          <h2 className="mb-8 max-w-2xl text-4xl font-medium md:text-5xl">
            {content.development.title}
          </h2>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-5 leading-relaxed text-[#52736F]">
              {renderParagraphs(content.development.paragraphs)}
            </div>

            <div className="overflow-hidden rounded-2xl bg-white p-4">
              <img
                src={`${base}development.png`}
                alt={
                  isFr
                    ? "Aperçu de l'intégration du site"
                    : "Website implementation preview"
                }
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTHOUSE RESULTS */}
      <section className="px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-widest text-[#65918A]">
            {content.lighthouse.category}
          </p>

          <h2 className="mb-8 max-w-2xl text-4xl font-medium md:text-5xl">
            {content.lighthouse.title}
          </h2>

          <p className="mb-12 max-w-2xl leading-relaxed text-[#52736F]">
            {content.lighthouse.description}
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* INITIAL AUDIT */}
            <div>
              <div className="overflow-hidden rounded-2xl border border-[#174C49]/10 bg-white p-3">
                <img
                  src={`${base}lighthouse-PC.png`}
                  alt={
                    isFr
                      ? "Résultats de l'audit Lighthouse PC"
                      : "Lighthouse computer audit"
                  }
                  className="w-full rounded-xl"
                />
              </div>

              <p className="mt-4 text-sm text-[#52736F]">
                Lighthouse — {content.lighthouse.initial}
              </p>
            </div>

            {/* FINAL AUDIT */}
            <div>
              <div className="overflow-hidden rounded-2xl border border-[#174C49]/10 bg-white p-3">
                <img
                  src={`${base}lighthouse-Mob.png`}
                  alt={
                    isFr
                      ? "Résultats de l'audit Lighthouse mobile"
                      : "Mobile Lighthouse audit"
                  }
                  className="w-full rounded-xl"
                />
              </div>

              <p className="mt-4 text-sm text-[#52736F]">
                Lighthouse — {content.lighthouse.final}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT LINKS */}
      <section className="bg-[#174C49] px-6 py-20 text-center text-[#EAF8F6] md:px-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-widest text-[#A6CBC0]">
            {content.footer.category}
          </p>

          <h2 className="mb-8 text-4xl font-medium md:text-5xl">
            {content.footer.title}
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={figmaUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#EAF8F6] px-6 py-3 text-sm text-[#174C49] transition hover:bg-white"
            >
              {content.footer.figma}
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#EAF8F6]/40 px-6 py-3 text-sm transition hover:bg-[#EAF8F6] hover:text-[#174C49]"
            >
              {content.footer.github}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
