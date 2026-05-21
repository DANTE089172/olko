# OLKO

Strategic Sourcing. Intelligent Supply. Real Results.

Marketing site for OLKO — a polymer procurement and supply intelligence company.

## Stack

- Next.js 14 (App Router) + TypeScript — static export (`output: "export"`)
- Tailwind CSS
- Framer Motion
- Deployed on Cloudflare Pages as static assets

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

Static site is emitted to `out/`.

## Deploy to Cloudflare

The site is deployed as a Cloudflare Worker with [Static Assets](https://developers.cloudflare.com/workers/static-assets/).

### Option A — Git integration (recommended)

In the Cloudflare dashboard, create a **Worker** connected to this repo with:

- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`
- **Node version:** 20

`wrangler.toml` already declares `out` as the assets directory, so the worker will serve the static export directly.

### Option B — Direct upload via Wrangler

```bash
npx wrangler login
npm run deploy
```
