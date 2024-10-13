import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@packages': resolve(__dirname, 'src/packages')
        }
    },
    plugins: [
        react(),
        tsconfigPaths(),
    ],
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'social-food-ui',
            fileName: 'index',
            formats: ['es', 'cjs']
        },
        rollupOptions: {
            external: ['@emotion/react', '@emotion/styled']
        },
    },
    optimizeDeps: {
        exclude: ['@emotion/react', '@emotion/styled']
    }
});
