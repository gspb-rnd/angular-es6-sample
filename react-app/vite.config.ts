import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    allowedHosts: [
      'angular-sample-app-tunnel-pusennys.devinapps.com',
      'angular-sample-app-tunnel-ot9zslze.devinapps.com',
      '.devinapps.com'
    ]
  },
})

