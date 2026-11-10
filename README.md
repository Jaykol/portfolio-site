# Portfolio — Jesutofunmi Ajekola

Warm editorial portfolio site for an IT systems & infrastructure engineer moving
into DevSecOps. Built with [Astro](https://astro.build), ships static HTML with
near-zero JavaScript, deploys to Cloudflare.

**Design:** warm cream (`#FDFBD4`) + warm red accent · Hanken Grotesk display /
JetBrains Mono accents · light + dark themes · single-page scroll, inspired by
[jozue.fr](https://jozue.fr).

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
```

## Editing content

Almost everything is data-driven — no need to touch markup.

| What | Where |
|------|-------|
| Name, title, hero statement, email, links, availability | `src/data/site.ts` → `profile`, `heroCols` |
| About / whoami copy | `src/data/site.ts` → `about` (use `**bold**` for emphasis) |
| Skills | `src/data/site.ts` → `stack` |
| Work experience | `src/data/site.ts` → `experience` |
| Certifications & education | `src/data/site.ts` → `certifications`, `education` |
| **Projects** | `src/content/projects/*.md` — **one file per project** |
| Résumé PDF | replace `public/resume.pdf` |
| Colors / type / spacing | `src/styles/global.css` (CSS custom properties at top) |

### Add or edit a project

Copy any file in `src/content/projects/`, rename it, and edit the frontmatter:

```yaml
---
title: My New Project
order: 11                 # controls position (lower = higher up)
group: devops             # "current" (work) or "devops" (open source)
summary: >-
  One or two sentences describing what you built and why it mattered.
metric: 99.9%             # the big number / headline result
metricLabel: uptime       # small caption under it
tags: [Terraform, AWS]    # mono chips
repo: https://github.com/Jaykol/my-repo   # omit for internal work (shows "internal")
---
```

Cards with a `repo:` link out to GitHub; cards without one render as
non-clickable "internal" work.

## Deploy

See **[DEPLOY.md](./DEPLOY.md)**. TL;DR: `npx wrangler login` once, then
`npm run deploy` — publishes as a Cloudflare Worker at your existing
`portfolio.jaykol.workers.dev` URL.

## Structure

```
src/
  data/site.ts              profile, skills, experience, certs, education
  content/projects/*.md     one markdown file per project
  content.config.ts         project frontmatter schema
  components/               Nav, ProjectCard
  layouts/Base.astro        <head>, meta, fonts, no-flash theme
  pages/index.astro         the page (all sections) + theme/reveal scripts
  styles/global.css         design tokens + all styling
public/
  fonts/                    self-hosted woff2 (Hanken Grotesk, JetBrains Mono)
  resume.pdf                linked from the contact section
  favicon.svg
```
