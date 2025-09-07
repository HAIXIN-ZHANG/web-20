import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  server: {
    host: '0.0.0.0',  // 允许外网访问
    port: 8080,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
