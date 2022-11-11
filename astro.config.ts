import { defineConfig } from 'astro/config';
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
    publicDir: 'static',
    integrations: [tailwind(), react()]
});