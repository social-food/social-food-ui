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
        lib: {
            entry: resolve(__dirname, 'index.ts'),
            name: 'social-food-ui',
            fileName: (format) => `index.${format}.js`,
        },
    },
});
