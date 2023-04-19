import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      {
        find: 'pages',
        replacement: path.resolve(__dirname, 'src', 'pages'),
      },
      {
        find: 'components',
        replacement: path.resolve(__dirname, 'src', 'components'),
      },
    ],
  },
});
