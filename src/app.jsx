import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home.jsx";
import Reverie from "./pages/reverie.jsx";

import SilkSongShop from "./pages/SilkSongShop.jsx";
import ProjectCartes from "./pages/projectcartes.jsx";



export default function App() {
  return (
    <BrowserRouter basename="/MySite-Portfolio">
      <Routes>
        <Route path="/"
        element={<Home />} />

        <Route path="/projects/reverie"
        element={<Reverie />} />

        <Route
          path="/projects/SilkSongShop"
          element={<SilkSongShop />}
        />

        <Route
          path="/projects/project-four"
          element={<ProjectCartes />}
        />



      </Routes>
    </BrowserRouter>
  );
}


