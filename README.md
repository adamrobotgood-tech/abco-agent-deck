# SINGULARITY — Agent Command Deck

Project **04 / 04** of the Grok Bot showcase ladder for Adam Barnett / [ABCO Media](https://abcomedia.net).

> The limit-pusher. An ops console for ABCO agents — dispatch missions, watch the fleet ship.

Pure static front-end (HTML / CSS / JS). No build step. No API keys. No backend. Scripted agent streams via timers so it feels alive on GitHub Pages.

## Open locally

From this folder:

```bash
# Option A — Python
python3 -m http.server 4174

# Option B — Node (if installed)
npx --yes serve -l 4174
```

Then open [http://localhost:4174](http://localhost:4174).

Or open `index.html` directly in a browser (`file://` works).

## Deploy

### GitHub Pages

Serve this folder as the site root (or set Pages source to `/04-singularity` in a monorepo). All assets are relative — no base-path hacks required.

### Vercel

```bash
# from this directory
npx vercel --yes
```

Or set the Vercel project root to `grokbot-showcase/04-singularity`. `vercel.json` is configured for clean static hosting.

## Structure

| File | Role |
|------|------|
| `index.html` | Hero strip · mission board · roster / log / artifacts · palette · help |
| `styles.css` | ABCO SYS dark theme (Beacon-matched cyan/ember) · responsive stack |
| `app.js` | Mission scripts · typing streams · ⌘K palette · artifacts · optional sound |
| `vercel.json` | Static headers + clean URLs |
| `README.md` | This file |

## Keyboard

| Shortcut | Action |
|----------|--------|
| `⌘K` / `Ctrl+K` | Command palette |
| `1`–`4` | Dispatch mission by number |
| `?` | Shortcuts help |
| `Esc` | Close overlay / cancel stream |
| `S` | Toggle soft UI sounds (off by default) |
| `C` | Clear mission log |

## Real links (artifacts)

- Beacon live — https://adamrobotgood-tech.github.io/abco-showcase-beacon/
- Cascade live — https://adamrobotgood-tech.github.io/abco-showcase-cascade/
- Beacon repo — https://github.com/adamrobotgood-tech/abco-showcase-beacon
- Cascade repo — https://github.com/adamrobotgood-tech/abco-showcase-cascade
- xAI — https://x.ai
- ABCO — https://abcomedia.net *(HTTPS noted as broken in the finding card)*

## Ladder

1. **Echo** — site intelligence report  
2. **Beacon** — showcase microsite  
3. **Cascade** — multi-channel campaign kit  
4. **Singularity** — this command deck  

Footer: Powered by xAI · Grok Bot · Showcase for ABCO Media
