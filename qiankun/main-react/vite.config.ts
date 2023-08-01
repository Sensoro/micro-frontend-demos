import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: {
        "chrome": "58",
      }
    }),
    tsconfigPaths({
      root: __dirname,
    }),
  ],
  server: {
    port: 8700,
    open: true
  },
})
