import Header from "../components/header";
import Footer from "../components/footer";
import ComingSoon from "../components/ComingSoon";

export default function Latoise() {
  return (
    <main className="min-h-screen bg-[#EAF8F6] text-[#174C49]">
      <Header />
      <ComingSoon />

      <img src="${import.meta.env.BASE_URL}images/projects/Kailis/Toise-Cover.png"></img>
      <Footer />
    </main>
  );
}
 `${import.meta.env.BASE_URL}images/projects/Kailis/Toise-Cover.png`