import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages base path: https://narekv7.github.io/cargo/
  base: "/cargo/",
});

