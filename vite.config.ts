import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '/@/': resolve(__dirname, './src'),
      '/@components/': resolve(__dirname, './src/components'),
      '/@app_modules': resolve(__dirname, './src/modules'),
      '/@store': resolve(__dirname, './src/store'),
    },
  },

  plugins: [vue()]
})
function __dirname(__dirname: any, arg1: string): string {
  throw new Error('Function not implemented.');
}

