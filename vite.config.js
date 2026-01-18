import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    port: 5173,
    host: "0.0.0.0"
  },
  plugins: [sveltekit(), tailwindcss()],
});
