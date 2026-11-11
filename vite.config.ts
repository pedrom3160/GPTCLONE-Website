import { copyFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

/**
 * Base path used when building for GitHub Pages (project site).
 * The default matches the repository `pedrom3160/about`.
 * Override with the WEBSITE_BASE_PATH environment variable when the
 * repository (and therefore the URL path) is different.
 */
export const DEFAULT_BASE_PATH = '/about/'

/**
 * GitHub Pages has no SPA fallback, but it serves `404.html` for every
 * unknown path. Duplicating `index.html` there lets React Router take over
 * on the requested URL. Asset URLs are absolute (Vite `base`), so the page
 * loads correctly from any path.
 */
function ghPagesSpaFallback(): Plugin {
  let outDir = ''
  return {
    name: 'gptclone:gh-pages-spa-fallback',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    async closeBundle() {
      try {
        await copyFile(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
      } catch (error) {
        this.warn(`Could not write the 404.html SPA fallback: ${String(error)}`)
      }
    },
  }
}

export default defineConfig(({ mode }) => ({
  base: mode === 'development' ? '/' : (process.env.WEBSITE_BASE_PATH || DEFAULT_BASE_PATH),
  plugins: [react(), tailwindcss(), ghPagesSpaFallback()],
  server: {
    host: '127.0.0.1',
    port: 5174,
  },
  preview: {
    host: '127.0.0.1',
    port: 4174,
  },
}))
