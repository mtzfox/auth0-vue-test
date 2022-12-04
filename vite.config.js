import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [vue()],
      base: '/',
    }
  } else {
    // command === 'build'
    return {
      plugins: [vue()],
      base: '/auth-vue-app/',
      build: {
        outDir: 'docs'
      }
    }
  }
});
