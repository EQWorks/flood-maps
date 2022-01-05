import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [
    react(), // out-of-box support for babel is decent
  ],
  build: {
    outDir: 'build', // map to CRA convention
  },
})
