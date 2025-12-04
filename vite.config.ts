import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // REPLACE "<USER>" AND "<REPO>" WITH YOUR GITHUB USER/ORG AND REPO NAME
  // Example: base: '/universal-genealogy-of-despecho/'
  base: "/Universal-Genealogy-of-Despecho/",
});
