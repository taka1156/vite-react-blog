import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { vitePluginVisualizer } from './plugins';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    root: 'src',
    base: command === 'build' ? 'vite-react-blog' : './',
    build: {
      outDir: '../dist',
      emptyOutDir: true
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    plugins: [react(), vitePluginVisualizer()],
  };
});
