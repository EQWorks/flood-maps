import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [
    react({
      babel: { configFile: true },
    }),
  ],
  build: {
    outDir: 'build', // map to CRA convention
  },
})
