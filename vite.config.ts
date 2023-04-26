import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    coverage: {
      all: true,
      exclude: [
        "**/interfaces/**/*.{ts,tsx}",
        "**/*.test.{ts,tsx}",
        "**/*.type.ts",
        "*.config.ts",
        "src/main.tsx",
      ],
    },
  },
});
