import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home.jsx";
import Reverie from "./pages/reverie.jsx";
import SilkSongShop from "./pages/SilkSongShop.jsx";
import ProjectCartes from "./pages/cartestarot.jsx";
import WaitRose from "./pages/Waitrose.jsx";
import Latoise from "./pages/Latoise.jsx";

export default function App() {
  return (
    <BrowserRouter basename="/MySite-Portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/reverie" element={<Reverie />} />
        <Route path="/projects/silksongshop" element={<SilkSongShop />} />
        <Route path="/projects/cartestarot" element={<ProjectCartes />} />
        <Route path="/projects/waitrose" element={<WaitRose />} />
        <Route path="/projects/latoise" element={<Latoise />} />
      </Routes>
    </BrowserRouter>
  );
}
