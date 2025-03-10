import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "index.ts"),
      name: "JunoBuildCommunityReact",
      fileName: "main",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "@junobuild/core"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@junobuild/core": "JunoBuildCore",
        },
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
  plugins: [
    dts({
      include: ["**/*.ts", "**/*.tsx"],
      exclude: ["**/*.spec.ts", "**/*.test.ts", "node_modules/**"],
    }),
  ],
});
