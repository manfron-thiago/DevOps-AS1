import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Faz com que o Vite sirva a aplicação em todas as interfaces de rede
    port: 3000, // Define a porta 3000 (ou outra, se preferir)
  },
})
