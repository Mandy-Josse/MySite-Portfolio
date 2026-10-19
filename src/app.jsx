
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Reverie from "./pages/Reverie";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/reverie" element={<Reverie />} />
      </Routes>

    </BrowserRouter>
  );
}
