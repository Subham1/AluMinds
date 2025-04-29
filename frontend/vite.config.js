import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': {
        target: 'https://aluminds-wo5n.onrender.com', // Replace this with your backend server URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
