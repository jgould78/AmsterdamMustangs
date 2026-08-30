import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: replace "REPLACE_WITH_REPO_NAME" below with your GitHub repo's
// name (the part after github.com/your-username/ in the URL). GitHub Pages
// serves project sites from /<repo-name>/, so this must match exactly,
// including case. See README.md for details.
export default defineConfig({
  plugins: [react()],
  base: "/",
});
