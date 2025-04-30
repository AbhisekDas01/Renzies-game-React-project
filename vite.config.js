// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Renzies-game-React-project/', // 👈 replace with your actual repo name
  plugins: [react()],
});
