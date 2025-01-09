import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // envDir: './env',
  envDir: 'environment',
  plugins: [react()],
});