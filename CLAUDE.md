# Repo notes

Next.js 16 App Router portfolio, en/fr i18n via the `/[lng]` segment
(`proxy.ts` — Next 16's renamed middleware — handles language + experience-mode
redirects). Two experiences ship from one codebase:

- **Classic** — multi-page, under `app/[lng]/(classic)/`, HeroUI + framer-motion.
- **Modern** — single GSAP-scroll page at `app/[lng]/modern`, components under
  `components/modern/`. A first-visit gate on the classic home
  (`components/experience-mode/experience-gate.tsx`) lets visitors pick; the
  choice persists in the `experience-mode` cookie (`lib/experience-mode.ts`).

## Hard constraints

- **`md:` = 1280px in this repo** (`styles/globals.css` sets
  `--breakpoint-md: 80rem`). All existing `md:` styles assume 1280px. New code
  should use `sm:` (640px) / `lg:` (1024px); don't "fix" the override.
- **Tailwind gradient purge safety**: project gradients live as full class
  fragments (e.g. `"from-blue-600 to-cyan-500"`) in
  `components/projects/data/definitions.ts`. They survive purging only because
  `tailwind.config.js` scans `components/**`. Never concatenate gradient class
  names and never move that data outside `components/`.
- **GSAP isolation**: only files under `components/modern/` may import GSAP,
  and only via `components/modern/gsap/gsap-config.ts` — keeps GSAP out of the
  classic bundles.
- Data modules (`components/projects/data`, `components/skills/skills-data.ts`,
  `components/experience/experience-data.ts`, `components/blogs/blogs-data.ts`)
  must stay pure data (no `"use client"`, no React) — `lib/qa/knowledge.ts`
  imports them server-side.

## AI QA bot

`app/api/qa/route.ts` streams answers from **NVIDIA NIM**
(`nvidia/nemotron-3-nano-30b-a3b` via the `openai` SDK, baseURL
`https://integrate.api.nvidia.com/v1`). Grounding prompt built in
`lib/qa/knowledge.ts` from the data modules. Without `NVIDIA_API_KEY` the bot
degrades to canned-only mode (chips still work).

## Env vars

- `NVIDIA_API_KEY` — QA bot free-text answers (optional; canned mode without it)
- `RESEND_API_KEY` — contact form email
- `CONTACT_EMAIL` — contact form recipient (optional override)
- `NEXT_PUBLIC_GA_ID` — Google Analytics 4 measurement id (optional; GA off without it)
- `NEXT_PUBLIC_MIXPANEL_TOKEN` — Mixpanel project token (optional; Mixpanel off without it)

All `lib/analytics.ts` events fan out to Vercel Analytics + GA4 + Mixpanel
when the corresponding env vars are set. `siteConfig.yearsOfExperience`
(config/site.ts) is the single source for the "4+ years" figure.

After deploy: add a Vercel WAF rate-limit rule on `/api/qa` (the in-code
limiter in `lib/qa/rate-limit.ts` is per-warm-instance best effort).

## Commands

- `npm run dev` / `npm run build` / `npm run lint` (lint auto-fixes)
- `npm run i18n:lint` / `i18n:status` — locale JSON parity checks
- Typecheck: `npx tsc --noEmit`
