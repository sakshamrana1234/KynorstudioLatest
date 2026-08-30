# Kynor Studio — developer handoff

## What is complete

- Responsive immersive homepage
- Continuous centered editorial-to-logo scroll opening with a subdued mark, frame counter, coordinates and production notation
- Scroll-driven 3D selected-work carousel
- Complete Work archive
- Three reusable project case-study routes
- Accessible keyboard focus, skip link and reduced-motion behavior
- Contact, Instagram and LinkedIn actions
- Public founding-engagement pricing section
- Calendly introduction-call booking
- Dedicated `/start-a-project` intake page
- Vercel/Resend enquiry function with validation, honeypot protection and email fallback
- Open Graph/social preview metadata
- Favicon, robots file and sitemap
- Vercel client-route configuration
- Central project-data and media configuration files
- Mobile layouts for homepage, Work and case studies
- Designed media placeholders that fail gracefully until assets are supplied

## What the receiving developer must supply

1. Three final video embeds from Cloudflare Stream.
2. Three compressed WebP poster images.
3. Any approved brand/client logos.
4. Confirmed permission for selected prior work.
5. Optional verified performance metrics; never add unverified claims.
6. A Resend sending-access API key and verified `kynorstudio.com` sending domain.

## Media mapping

| Media key | Project | Source file currently known |
|---|---|---|
| `penrose-claymation` | Penrose Skin | `Penrose_ClaymationAD.mp4` |
| `notion-second-brain` | Notion | `notion (2).mp4` |
| `memzero-launch` | MemZero | `final_v9_4.mp4` |

The original files stay outside Git. Their locations were provided during design and should be uploaded directly to the chosen video host.

## Launch QA

- [ ] Homepage starts immediately with no blank frame.
- [ ] Opening scroll remains continuous into the philosophy.
- [ ] Work carousel is usable with mouse, trackpad and touch.
- [ ] Every Work card opens its correct route.
- [ ] Directly opening every project URL works on Vercel.
- [ ] Video posters display before playback.
- [ ] Videos do not autoplay with sound.
- [ ] Mobile performance is acceptable on a real iPhone and Android device.
- [ ] `prefers-reduced-motion` produces a calm usable experience.
- [ ] Contact email subject lines are correct.
- [ ] `/start-a-project` validates required fields and submits successfully on Vercel.
- [ ] Vercel has `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` and `CONTACT_TO_EMAIL` configured.
- [ ] A real test enquiry reaches `contact@kynorstudio.com`, and Reply targets the prospect.
- [ ] Calendly booking displays available dates and creates the intended calendar event.
- [ ] Instagram and LinkedIn open the intended Kynor accounts.
- [ ] Social preview renders with `public/og.png`.
- [ ] Sitemap domain matches the production domain.
- [ ] No prior-work item is published without permission.

## Recommended media settings

- Poster: WebP, 16:10 or matching the source aspect ratio, under 300 KB where possible.
- Homepage preview: muted, looped and short; load only when near the viewport.
- Case-study playback: Cloudflare Stream iframe with native adaptive delivery.
- Keep original masters in cloud storage, not in this repository.

## Current public pricing

| Engagement | Price | Output |
|---|---:|---|
| Creative Diagnostic | $600 | Audit, review, three territories, hooks and roadmap |
| Brand Positioning Sprint | $1,000 | Positioning, story, messaging, tone and territories |
| Performance Creative Pilot | $1,500 | Three concepts, four versions each, 12 finished ads |
| UGC Testing Sprint | $1,800 | Five original concepts plus 11 variations, 16 finished ads |

Two revision rounds are included. Additional revision rounds are quoted separately. Monthly partnership pricing is intentionally not public yet.
