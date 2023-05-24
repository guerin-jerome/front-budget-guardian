import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  // @ts-ignore
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    coverage: {
      all: true,
      exclude: [
        "coverage/**",
        "dist/**",
        "src/mocks/*.ts",
        "src/entities/*.ts",
        "**/__tests__/**",
        "**/*.type.ts",
        "*.config.ts",
        "src/main.tsx",
      ],
      reporter: ["text", "lcov"],
    },
    reporters: ["default", "vitest-sonar-reporter"],
    outputFile: "./coverage/test-report.xml",
  },
});
