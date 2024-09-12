import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/ChatbotToggle.jsx',
      name: 'ChatbotToggle',
      fileName: (format) => `chatbot-toggle.${format}.js`,
      formats: ['umd', 'es'], // Output formats for UMD and ESM
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Exclude these dependencies from the bundle
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    define: {
      'process.env.NODE_ENV': '"production"', // Set NODE_ENV to production
    },
  },
});
