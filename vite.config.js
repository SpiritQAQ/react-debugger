import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import vitePluginFlow from 'vite-plugin-flow'

const reactPackages = ['react', 'react-dom', 'shared', 'react-reconciler']

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitePluginFlow({
      all: true,
    }),
  ],
  // optimizeDeps: {
  //   include: ['react', 'react-dom'],
  //   link: ['react', 'react-dom'],
  // },
  // optimizeDeps: {
  //   esbuildOptions: {
  //     plugins: [esbuildFlowPlugin()],
  //   },
  // },

  server: { port: 2222 },

  resolve: {
    alias: [
      ...reactPackages.map((p) => {
        return {
          find: p,
          replacement: path.resolve(
            __dirname,
            `/react-source-code/packages/${p}`
          ),
        }
      }),
      {
        find: '@',
        replacement: path.resolve(__dirname, `/src`),
      },
    ],
  },

  define: {
    __DEV__: true,
    __PROFILE__: true,
    __UMD__: true,
    __EXPERIMENTAL__: true,
  },
})
