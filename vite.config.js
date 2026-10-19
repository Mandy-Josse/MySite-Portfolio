import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/MySite-Portfolio/", // Remplacez <REPO> par le nom de votre dépôt GitHub
});