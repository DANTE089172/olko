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

## Deploy to Cloudflare Pages

### Option A — Git integration (recommended)

In the Cloudflare dashboard, create a Pages project connected to this repo with:

- **Framework preset:** Next.js (Static HTML Export)
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Node version:** 20

### Option B — Direct upload via Wrangler

```bash
npx wrangler login
npm run deploy
```
