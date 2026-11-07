import Header from "../components/header";
import Footer from "../components/footer";
import ProjectInfoBand from "../components/ProjectInfoBand";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectCartes() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const base = `${import.meta.env.BASE_URL}images/projects/cards/`;
  const CartesVecto = `base/vectoriel`;
  const CartesMatri = `base/matriciel`;

  const content = {
  };

  const t = content[isFr ? "fr" : "en"];

  return (
    <main className="min-h-screen bg-[#EAF8F6] text-[#174C49]">
      <Header />


J'ai commencé par choisir un artiste vectoriel et matriciel, 

J'ai choisis comme artiste vectoriel Monsieur Z, car son style graphique correspond le mieux à mes propres habitudes et préférences artistiques

J'ai choisis comme artiste matriciel Johngall car ses oeuvres me parlaient le plus

Puis j'ai imiter certaines de leurs œuvres pour m'approprier leurs styles et techniques afin de débuter la création des cartes tout






J'ai également réaliser des planches de recherches pour chacun de ces artistes, ce qui me permet de comprendre plus profondément leurs styles et de créer mes cartes

Monsieur Z

Johngall 
Jeu matriciel
Jeu vectoriel


Pour apprendre à préparer des illustrations vouées à l'imprimerie, nous avons du chercher les paramètres à activer sur photoshop pour un format prêt à l'impression en CMJN.

J'ai choisis de faire mes cartes avec leurs noms en anglais
      <Footer />
    </main>
  );
}
