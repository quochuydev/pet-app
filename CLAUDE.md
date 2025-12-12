# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 pet clinic landing page built with React 19, TypeScript, and Tailwind CSS 4. The project implements the design specification in `layout.md`, which defines a modern, welcoming website for a veterinary clinic.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React**: 19.2.0
- **TypeScript**: Strict mode enabled
- **Styling**: Tailwind CSS 4 with PostCSS
- **UI Utilities**:
  - `clsx` + `tailwind-merge` for className handling
  - `class-variance-authority` for component variants
  - `lucide-react` for icons
  - `tw-animate-css` for animations

## Project Structure

```
app/
  layout.tsx     # Root layout with Geist fonts
  page.tsx       # Homepage (currently default Next.js template)
  globals.css    # Global Tailwind styles
public/
  sample_pet_dog_02.jpg      # Hero section image
  service_general_checkup.jpg # Service card image
  service_inpatient.jpg       # Service card image
  vet_01.jpg - vet_04.jpg     # Veterinarian profile images
```

## Design Specification

The `layout.md` file contains the complete design specification for the pet clinic landing page, including:

- **8 main sections**: Header/Nav, Hero, Services, Team, Why Choose Us, Testimonials, CTA, Footer
- **Color scheme**: Calming blue/green primary, warm orange/coral secondary
- **Typography**: Modern sans-serif (Poppins/Montserrat for headings, Open Sans/Roboto for body)
- **Responsive design**: Mobile-first with hamburger menu on mobile
- **Images**: All required images are already in the `public/` folder

When implementing components:

- Follow the section layouts specified in `layout.md`
- Use the Geist fonts already configured in `app/layout.tsx`
- Create reusable components for cards (service cards, vet cards, testimonial cards)
- Implement responsive grid layouts (services: 2-col desktop, team: 4-col desktop)
- Use Lucide React for icons (stethoscope, hospital, etc.)

## TypeScript Configuration

- Path alias: `@/*` maps to root directory
- Strict mode enabled
- JSX mode: `react-jsx`
- Module resolution: bundler

## Design-First Workflow (MANDATORY)

**IMPORTANT: Always update design documentation BEFORE writing code.**

The `./design` folder is the source of truth for all UI/UX decisions. When making any visual or functional changes:

1. **First**: Update the relevant design file in `./design/` (e.g., `home.md`, `layout.md`)
2. **Then**: Implement the code based on the updated design specification
3. **Never**: Write code first and document later

This ensures:
- Design decisions are documented and trackable
- Future developers (or AI) understand the intent behind implementations
- Consistency between design specs and actual code

Design files location:
- `./design/home.md` - Home page design specification
- `./design/layout.md` - Overall layout and component design

## Important Notes

- This is a **client-side landing page** - no backend or API routes required yet
- The project uses Next.js App Router (not Pages Router)
- All design assets (images) are pre-loaded in `public/`
- Component implementations should match the card-based, modern design aesthetic specified in `layout.md`
