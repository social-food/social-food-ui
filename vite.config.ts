import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
    ],
    resolve: {
        alias: {
            "@packages": resolve(__dirname, "./src/packages"),
        },
    },
});
