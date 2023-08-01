import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy';
import { legacyQiankun } from 'vite-plugin-legacy-qiankun';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react'

const microName = 'child-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${microName}/`,
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    react(),
    legacy({
      targets: {
        chrome: '58',
      },
    }),
    legacyQiankun({
      name: microName,
      devSandbox: true,
    }),
    tsconfigPaths({
      root: __dirname,
    }),
  ],
  server: {
    port: 8701,
    open: true
  },
})
