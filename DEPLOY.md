# Deploying to Cloudflare

Your current site lives at **https://portfolio.jaykol.workers.dev** — that's a
**Worker** (the `workers.dev` subdomain is only issued to Workers). To replace
it *in place and keep the same URL*, deploy this site as a **Worker with static
assets**. That's the recommended path below.

> If you deploy to Cloudflare **Pages** instead, you'll get a new
> `*.pages.dev` URL and the old Worker keeps serving the current address. Only
> use Pages if you're happy changing the URL (see the alternative at the end).

---

## Recommended — Worker with static assets (keeps your URL)

### One-time setup

```bash
# from the project root
npm install
npx wrangler login      # opens a browser; log in to the Cloudflare account that owns "jaykol"
```

### Every deploy

```bash
npm run deploy          # = astro build && wrangler deploy
```

That builds the site to `dist/` and uploads it as the Worker named **`portfolio`**
(set in `wrangler.toml`), serving your static files at
`https://portfolio.jaykol.workers.dev`.

### Confirm the Worker name

Open `wrangler.toml` and check:

```toml
name = "portfolio"
```

- If your existing Worker is **named `portfolio`**, this overwrites it — exactly
  what you want.
- If it's named something else, either rename `name` here to match the existing
  Worker, **or** just deploy — Cloudflare will create
  `portfolio.<your-subdomain>.workers.dev`, and you can repoint your preferred
  name afterward.

> First time you deploy an assets Worker over an older "classic" Worker, Wrangler
> may ask you to confirm replacing it. Say yes.

---

## Custom domain (optional)

To serve from your own domain instead of `workers.dev`:

1. Add the domain to Cloudflare (Dashboard → add site).
2. Workers & Pages → `portfolio` → **Settings → Domains & Routes → Add custom domain**.

---

## Alternative — Cloudflare Pages (new *.pages.dev URL)

Via Git integration (auto-deploy on push):

1. Push this repo to GitHub.
2. Cloudflare Dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy. You'll get `https://<project>.pages.dev`.

Or one-off from the CLI: `npm run build && npx wrangler pages deploy dist`.

---

## Local preview

```bash
npm run dev       # dev server with hot reload  → http://localhost:4321
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```
