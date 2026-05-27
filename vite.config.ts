import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// vite.config.ts
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    force: true,
    exclude: [
      '@phosphor-icons/vue',
      '@tabler/icons-vue',
      '@fortawesome/free-solid-svg-icons',
      'hugeicons-vue',
      'simple-icons'
    ]
  }
})
