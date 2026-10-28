import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = resolve(import.meta.dirname, '..')
const locales = ['me', 'ru', 'en']
const outDir = join(root, 'public', 'og')

const browser = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].find((p) => p && existsSync(p))

if (!browser) {
  console.error('Не найден Chrome/Edge. Укажите путь в CHROME_PATH.')
  process.exit(1)
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const logo = (roof, check, wave, size) => `
  <svg width="${size}" height="${size}" viewBox="0 0 160 160">
    <path d="M24 66 L80 22 L136 66" fill="none" stroke="${roof}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M54 88 L72 106 L106 72" fill="none" stroke="${check}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24 134 Q 38 122 52 134 T 80 134 T 108 134 T 136 134" fill="none" stroke="${wave}" stroke-width="10" stroke-linecap="round"/>
  </svg>`

function page(t) {
  const fmt = (s, n) => s.replace('{n}', n)
  return `<!doctype html>
<html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Onest:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0 }
  body { width: 1200px; height: 630px; overflow: hidden; background: #F6F1E8; font-family: 'Outfit', 'Onest', sans-serif; color: #12324A; position: relative }
  .text { position: absolute; left: 72px; top: 64px; width: 640px; display: flex; flex-direction: column; gap: 28px }
  .brand { display: flex; align-items: center; gap: 14px; font-size: 40px; font-weight: 600; letter-spacing: -0.02em }
  .badge { align-self: flex-start; background: #fff; border-radius: 999px; padding: 10px 20px; font-size: 22px; font-weight: 500; color: #4A6275 }
  h1 { font-size: 72px; line-height: 1.04; font-weight: 700; letter-spacing: -0.03em }
  .note { font-size: 24px; color: #4A6275 }
  .phone { position: absolute; left: 790px; top: 64px; width: 350px; height: 640px; background: #12324A; border-radius: 48px; padding: 11px;
           box-shadow: 0 32px 80px rgba(18,50,74,.28), 0 4px 12px rgba(18,50,74,.12) }
  .screen { height: 100%; border-radius: 38px; overflow: hidden; background: #12324A; display: flex; flex-direction: column }
  .top { padding: 26px 22px 22px; display: flex; flex-direction: column; gap: 16px }
  .row { display: flex; align-items: center; justify-content: space-between; gap: 8px }
  .app { display: flex; align-items: center; gap: 8px; color: #fff; font-size: 17px; font-weight: 600 }
  .avatar { width: 34px; height: 34px; border-radius: 999px; background: #E98A62; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px }
  .date { font-size: 13px; color: #A9BCCB }
  .today { font-size: 25px; font-weight: 700; color: #fff; margin-top: 4px }
  .bar { height: 8px; border-radius: 999px; background: rgba(255,255,255,.15); overflow: hidden }
  .bar i { display: block; width: 25%; height: 100%; border-radius: 999px; background: #3CC48A }
  .progress { font-size: 12px; color: #C9D6E0; margin-top: 8px }
  .list { flex: 1; background: #F6F1E8; border-radius: 20px 20px 0 0; padding: 14px 13px; display: flex; flex-direction: column; gap: 8px }
  .card { background: #fff; border-radius: 16px; padding: 12px 15px; display: flex; flex-direction: column; gap: 6px; box-shadow: 0 2px 8px rgba(18,50,74,.08) }
  .card.alert { background: #FDF3EE; border: 1.5px solid #F0C9B8; box-shadow: none }
  .name { font-size: 14px; font-weight: 600 }
  .meta { font-size: 11px; color: #4A6275 }
  .alert .meta { color: #9A3F1F; font-weight: 500 }
  .work { font-size: 11px; font-weight: 600; color: #1C6A8C }
  .track { height: 5px; border-radius: 999px; background: #E2EFF6; overflow: hidden }
  .track i { display: block; width: 60%; height: 100%; border-radius: 999px; background: #2E8FB8 }
  .pill { border-radius: 999px; padding: 4px 9px; font-size: 11px; font-weight: 600 }
  .ok { background: #E3F4EC; color: #146C48 }
  .later { background: #F1EEE8; color: #4A6275 }
  .btn { background: #B54D28; color: #fff; border-radius: 8px; padding: 4px 9px; font-size: 11px; font-weight: 600 }
</style></head>
<body>
  <div class="text">
    <div class="brand">${logo('#12324A', '#D9643A', '#2E8FB8', 56)}gotovo</div>
    <p class="badge">${esc(t.hero.badge)}</p>
    <h1>${esc(t.hero.title)}</h1>
    <p class="note">${esc(t.hero.note)}</p>
  </div>
  <div class="phone"><div class="screen">
    <div class="top">
      <div class="row"><span class="app">${logo('#FFFFFF', '#E98A62', '#5FB4D9', 26)}gotovo</span><span class="avatar">${esc(t.phone.avatar)}</span></div>
      <div><p class="date">${esc(t.phone.date)}</p><p class="today">${esc(t.phone.today)}</p></div>
      <div><div class="bar"><i></i></div><p class="progress">${esc(fmt(t.phone.progress, 1))}</p></div>
    </div>
    <div class="list">
      <div class="card alert">
        <p class="name">${esc(t.phone.alert.name)}</p>
        <div class="row"><span class="meta">${esc(t.phone.alert.time)}</span><span class="btn">${esc(t.phone.alert.action)}</span></div>
      </div>
      <div class="card">
        <p class="name">${esc(t.phone.progressCard.name)}</p>
        <div class="row"><span class="work">${esc(t.phone.progressCard.status)}</span><span class="meta">${esc(fmt(t.phone.progressCard.rooms, 3))}</span></div>
        <div class="track"><i></i></div>
      </div>
      <div class="card">
        <p class="name">${esc(t.phone.done.name)}</p>
        <div class="row"><span class="meta">${esc(fmt(t.phone.done.photos, 6))}</span><span class="pill ok">${esc(t.phone.done.status)}</span></div>
      </div>
      <div class="card">
        <p class="name">${esc(t.phone.later.name)}</p>
        <div class="row"><span class="meta">${esc(t.phone.later.time)}</span><span class="pill later">${esc(t.phone.later.status)}</span></div>
      </div>
    </div>
  </div></div>
</body></html>`
}

mkdirSync(outDir, { recursive: true })

for (const locale of locales) {
  const t = JSON.parse(readFileSync(join(root, 'i18n', 'locales', `${locale}.json`), 'utf8'))
  const html = join(tmpdir(), `gotovo-og-${locale}.html`)
  const png = join(outDir, `og-${locale}.png`)
  writeFileSync(html, page(t))
  execFileSync(browser, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1200,630',
    '--virtual-time-budget=10000',
    `--screenshot=${png}`,
    pathToFileURL(html).href,
  ], { stdio: 'ignore' })
  console.log(`✔ ${png}`)
}
