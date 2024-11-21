// vite.config.ts

// Remove these lines if not used
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// Ensure you're exporting the actual configuration object
export default {
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 5173,
  },
};
