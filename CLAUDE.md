# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build (Turbopack)
npm run lint     # ESLint
```

## Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS v4** — uses `@import "tailwindcss"` in `globals.css`, no config file
- **Framer Motion 12** — all animated components require `"use client"`
- **lucide-react v1** — `Github` and `Linkedin` icons were removed; use `GithubIcon` / `LinkedinIcon` from `src/components/icons.tsx` instead
- **next/font/google** — `Inter` (body) and `Space_Grotesk` (headings via `.font-heading` class)

## Architecture

All profile data lives in `src/lib/data.ts` — edit that file to update content without touching components.

```
src/
  app/
    layout.tsx        # Root layout, font setup, metadata
    page.tsx          # Assembles all section components
    globals.css       # Tailwind import + scrollbar styles + .font-heading utility
  components/
    AnimatedSection.tsx  # Reusable scroll-triggered fade-in wrapper (client)
    icons.tsx            # Custom SVG: GithubIcon, LinkedinIcon
    Navbar.tsx           # Fixed nav with scroll detection + mobile menu
    Hero.tsx             # Full-height hero with floating badges and stats row
    About.tsx            # Bio, certifications, availability status
    Skills.tsx           # Tech stack grid grouped by category
    Experience.tsx       # Work history timeline cards
    Projects.tsx         # Featured (2 large) + other projects grid
    Contact.tsx          # Contact info cards + mailto-based form
    Footer.tsx           # Slim footer with social links
  lib/
    data.ts              # All profile content (bio, skills, experience, projects)
```

## Key patterns

- Every section component is a `"use client"` component using `AnimatedSection` for scroll-triggered entrance animations
- `AnimatedSection` wraps children in a Framer Motion `motion.div` using `useInView` — pass `delay` prop to stagger siblings
- The `font-heading` CSS utility applies `Space_Grotesk` to headings (set up in `globals.css` `@layer utilities`)
- Color palette: page bg `#030712`, card surfaces `#0f172a`, accent `indigo-600` / `indigo-400`
