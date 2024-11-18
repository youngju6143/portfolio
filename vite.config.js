import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["sharp"],
  },
  server: {
    port: 5174, // B 프로젝트에서는 5174 포트로 설정
  },
});
