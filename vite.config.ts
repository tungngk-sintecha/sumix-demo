import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002, // Custom port
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Points '@' to 'src' folder
    },
  },
});
