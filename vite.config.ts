import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4011, // Specify the port number you want to use
    strictPort: true, // Enforce the port number strictly
    host: 'localhost', // Specify the host address
    open: true, // Open the browser automatically when the server starts
  }
})
