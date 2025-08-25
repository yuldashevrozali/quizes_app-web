import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server"; // agar local express kerak bo'lsa

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/", // 🔑 Vercel'da routing ishlashi uchun shart
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: ["./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist/spa", // build natijasi shu papkaga tushadi
    emptyOutDir: true, // eski build fayllarini o'chirib tashlaydi
  },
  plugins: [
    react(),
    mode === "development" ? expressPlugin() : null // Express faqat dev paytida ishlaydi
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // faqat `vite dev` paytida ishlaydi
    configureServer(server) {
      const app = createServer();
      // Express middleware'ni Vite dev serverga ulash
      server.middlewares.use(app);
    },
  };
}
