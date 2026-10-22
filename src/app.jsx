import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home.jsx";
import Reverie from "./pages/reverie.jsx";

import ProjectTwo from "./pages/project-two.jsx";
import ProjectThree from "./pages/project-three.jsx";
import ProjectCartes from "./pages/projectCartes.jsx";



export default function App() {
  return (
    <BrowserRouter basename="/MySite-Portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/reverie" element={<Reverie />} />
        
        <Route
          path="/projects/project-two"
          element={<ProjectTwo />}
        />

        <Route
          path="/projects/project-three"
          element={<ProjectThree />}
        />

        <Route
          path="/projects/project-four"
          element={<ProjectCartes />}
        />



      </Routes>
    </BrowserRouter>
  );
}


