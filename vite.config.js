import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite'
// import path from 'path'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js'], // 'resources/css/app.css', 
            refresh: true,
        }),
        vue(),
        tailwindcss()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./resources/js', import.meta.url)),
      },
    },
    build: {
        outDir: 'public/build', // dossier de sortie correct
        emptyOutDir: true, // supprime les anciens fichiers à chaque build
    },
});
