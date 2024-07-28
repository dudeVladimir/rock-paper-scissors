import {
  type UserConfig,
  defineConfig,
} from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';

function createViteConfig({ mode }: UserConfig): UserConfig {
  const isDev = mode === 'development';

  return {
    base: isDev ? '/' : '/rock-paper-scissors/',
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
}
// https://vitejs.dev/config/
export default defineConfig(createViteConfig);
