import { defineConfig } from 'vitepress'
import container from 'markdown-it-container'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const docsDir = fileURLToPath(new URL('..', import.meta.url))
const chapters = fs.readdirSync(docsDir)
  .filter(f => /^\d+-.*\.md$/.test(f))
  .sort((a, b) => parseInt(a) - parseInt(b))
  .map(f => ({
    text: fs.readFileSync(path.join(docsDir, f), 'utf8').match(/^#\s+(.+)$/m)?.[1] ?? f,
    link: '/' + f.replace(/\.md$/, '')
  }))

export default defineConfig({
  lang: 'de',
  title: 'Crypto Guide',
  base: '/crypto-guide/',          // delete this line for a custom domain
  cleanUrls: true,
  markdown: {
    container: { infoLabel: 'Info', warningLabel: 'Hinweis', dangerLabel: 'Achtung' },
    config(md) {
      md.use(container, 'spoiler', {
        render(tokens, idx) {
          const t = tokens[idx]
          if (t.nesting !== 1) return '</div></details>\n'
          const title = t.info.trim().slice(7).trim().replace(/^"|"$/g, '')
          return `<details class="spoiler"><summary>${md.utils.escapeHtml(title)}</summary><div class="spoiler-content">\n`
        }
      })
    }
  },
  themeConfig: {
    sidebar: chapters,
    docFooter: { prev: 'Zurück', next: 'Nächster Schritt' },
    outline: { level: 'deep', label: 'Auf dieser Seite' }
  }
})
