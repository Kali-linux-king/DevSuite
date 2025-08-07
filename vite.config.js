import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/',
    server: {
        port: 3000,
        open: true
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            '@assets': resolve(__dirname, './src/assets')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@assets/scss/base/variables";`
            }
        }
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        emptyOutDir: true
    }
});