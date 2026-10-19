import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Reverie from "./pages/Reverie.jsx";

export default function App() {
  return (
    <BrowserRouter basename="/MySite-Portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects/reverie"
          element={<Reverie />}
        />
      </Routes>
    </BrowserRouter>
  );
}
