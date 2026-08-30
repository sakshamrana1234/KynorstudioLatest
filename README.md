# Kynor Studio website

Production-ready Vite/React portfolio for Kynor Studio.

## Run locally

```bash
pnpm install
pnpm dev
```

Production check:

```bash
pnpm build
pnpm preview
```

## Routes

- `/` — immersive homepage
- `/work` — selected-work archive
- `/work/penrose-skin`
- `/work/notion-second-brain`
- `/work/memzero-launch`
- `/start-a-project` — qualified new-business enquiry form

Vercel rewrites are already configured in `vercel.json`, so these client-side routes work when opened directly.

## Add the final project media

Do not commit the original multi-hundred-megabyte or gigabyte video files to Git.

1. Upload each final film to Cloudflare Stream.
2. Create optimized WebP poster images (roughly 1600–2000 px wide, ideally below 300 KB).
3. Put poster files in `public/media/`.
4. Open `src/mediaConfig.js`.
5. Add the full Cloudflare Stream iframe URL to `embedUrl` and poster path to `poster`.

The homepage, Work archive and project detail pages switch from the designed placeholders automatically.

Example:

```js
'penrose-claymation': {
  embedUrl: 'https://customer-ACCOUNT.cloudflarestream.com/VIDEO_ID/iframe',
  poster: '/media/penrose-poster.webp',
  alt: 'Penrose Skin claymation advertisement'
}
```

## Content editing

- Project descriptions, classifications and metadata: `src/siteData.js`
- Media URLs and posters: `src/mediaConfig.js`
- Page components and interactions: `src/main.jsx`
- Visual system and responsive styles: `src/styles.css`
- Global metadata: `index.html`

## Before publishing

- Confirm written permission to display every item marked **Selected prior work**.
- Confirm that the Penrose claims and logo usage are approved.
- Confirm MemZero's final publication status; it is currently labelled selected draft work.
- Keep Notion labelled **Independent concept** and do not imply endorsement or commissioned work.
- Replace all three media placeholders.
- Test contact email, Instagram and LinkedIn links.
- Update the year or project copy if launch occurs after the current portfolio period.
- Run the full checklist in `HANDOFF.md`.

## Deployment

The project is ready for Vercel as a standard Vite site:

- Build command: `pnpm build`
- Output directory: `dist`
- Domain: `kynorstudio.com`

Cloudflare Stream playback uses public embed URLs. The project-enquiry form uses the Vercel Function in `api/contact.js` and Resend for delivery.

### Configure project-enquiry email

1. Create a Resend account and verify `kynorstudio.com`.
2. Create a **sending access** API key.
3. In Vercel → Project → Settings → Environment Variables, add:
   - `RESEND_API_KEY`
   - `CONTACT_FROM_EMAIL` — for example `Kynor Studio <website@kynorstudio.com>`
   - `CONTACT_TO_EMAIL` — `contact@kynorstudio.com`
4. Redeploy and submit one real test enquiry.
5. Confirm the message arrives at `contact@kynorstudio.com` and that Reply goes to the prospect.

The source contains `.env.example` as a field reference only. Never commit the real API key. Until the Vercel variables are configured, the form shows a clear error and provides `contact@kynorstudio.com` as a fallback.
