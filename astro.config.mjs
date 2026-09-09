import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Absolute URLs for canonical links and Open Graph tags are built off this.
  site: 'https://www.joywithinbirth.com',
  integrations: [
    alpinejs({ entrypoint: '/src/alpine' }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
