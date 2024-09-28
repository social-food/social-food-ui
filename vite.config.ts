import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
    ],
    build: {
        outDir: "dist",
        rollupOptions: {
            input: resolve(__dirname, 'src/index.ts'),
        }
    },
});
