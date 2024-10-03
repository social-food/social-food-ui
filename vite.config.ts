import * as path from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/packages/index.tsx"),
            name: "index",
            fileName: "index",
        },
        rollupOptions: {
            external: ["react"],
            output: {
                globals: {
                    react: "React",
                },
            },
        },
        commonjsOptions: {
            esmExternals: ["react"],
        },
    },
});