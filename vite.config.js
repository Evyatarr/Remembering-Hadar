// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Remembering-Hadar/", // Replace 'repo' with your actual repository name
});
