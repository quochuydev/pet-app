# Next.js App Router Performance Checklist (2025)

This comprehensive checklist covers performance optimization best practices for Next.js applications using the App Router (Next.js 14+).

---

## 🎯 Core Web Vitals

### Largest Contentful Paint (LCP)

- [ ] LCP target: < 2.5s
- [ ] Use `priority` attribute on above-the-fold images
- [ ] Optimize hero images with next/image
- [ ] Preload critical fonts
- [ ] Minimize render-blocking resources

### Interaction to Next Paint (INP)

- [ ] INP target: < 200ms
- [ ] Minimize JavaScript bundle size
- [ ] Defer non-critical JavaScript
- [ ] Use Server Components by default
- [ ] Lazy load Client Components

### Cumulative Layout Shift (CLS)

- [ ] CLS target: < 0.1
- [ ] Define width/height for images
- [ ] Reserve space for dynamic content
- [ ] Avoid inserting content above existing content
- [ ] Use Font Module for font optimization

---

## 🚀 React Server Components (RSC)

### Architecture Patterns

- [x] Use Server Components by default (no 'use client' unless needed)
- [x] Add 'use client' only for components requiring:
  - State (useState, useReducer)
  - Effects (useEffect, useLayoutEffect)
  - Browser APIs (window, document)
  - Event handlers (onClick, onChange)
- [x] Keep Client Components as leaf nodes in component tree
- [ ] Move interactivity down the tree (colocation)
- [ ] Extract static parts from Client Components into Server Components

### Data Fetching

- [ ] Fetch data in Server Components (no client-side fetching overhead)
- [ ] Use async/await directly in Server Components
- [ ] Leverage built-in fetch caching
- [ ] Use cache tags for granular revalidation
- [ ] Fetch data as close to where it's used as possible
- [ ] Avoid waterfalls - fetch in parallel when possible

---

## 📦 Bundle Size & Code Splitting

### Bundle Analysis

- [ ] Install and configure @next/bundle-analyzer
- [ ] Run bundle analysis before production deploy
- [ ] Review client.html, edge.html, nodejs.html reports
- [ ] Track bundle size over time
- [ ] Set bundle size budgets in CI/CD

### Optimization Techniques

- [ ] Use optimizePackageImports in next.config.js for large libraries
- [ ] Replace barrel imports with direct imports
- [ ] Use dynamic imports (next/dynamic) for non-critical components
- [ ] Set ssr: false for client-only components (with 'use client')
- [ ] Remove unused dependencies and code
- [ ] Tree-shake third-party libraries

### Target Metrics

- [ ] Initial JavaScript bundle: < 200KB (gzipped)
- [ ] Total JavaScript: < 1MB (gzipped)
- [ ] First-party JavaScript reduction: 20-30% vs Pages Router

---

## 🖼️ Image Optimization

### next/image Configuration

- [ ] Use next/image for all images
- [ ] Set priority={true} for above-the-fold images
- [ ] Define width and height explicitly
- [ ] Use fill prop with sizes for responsive images
- [ ] Configure remotePatterns for external images

### Format & Quality

- [ ] Serve images in WebP/AVIF format (automatic with next/image)
- [ ] Optimize quality (default 75 is usually sufficient)
- [ ] Use appropriate sizes for different viewports
- [ ] Implement lazy loading for below-the-fold images
- [ ] Use CDN for image delivery (Vercel automatically optimizes)

---

## ⚡ Rendering Strategies

### Static Generation (SSG)

- [ ] Use for pages that can be pre-rendered at build time
- [ ] Generate static pages for marketing/blog content
- [ ] Use generateStaticParams for dynamic routes
- [ ] Pre-render all public routes

### Incremental Static Regeneration (ISR)

- [ ] Use revalidate for pages with occasional updates
- [ ] Set appropriate revalidate intervals (60s, 3600s, etc.)
- [ ] Use on-demand revalidation with revalidatePath/revalidateTag
- [ ] Combine with cache tags for granular invalidation

### Server-Side Rendering (SSR)

- [ ] Use for personalized/authenticated content
- [ ] Use for pages requiring real-time data
- [ ] Implement Suspense boundaries for streaming
- [ ] Show loading states during data fetching

### Streaming & Suspense

- [ ] Wrap slow components in Suspense boundaries
- [ ] Show loading UI while content loads
- [ ] Stream HTML in chunks to improve TTFB
- [ ] Use loading.tsx for route segment loading states

---

## 🔤 Font Optimization

### next/font Usage

- [x] Use next/font/google or next/font/local
- [x] Self-host fonts (automatic with next/font)
- [x] Preload fonts to reduce layout shift
- [x] Use font-display: swap for better perceived performance
- [ ] Subset fonts to include only used characters/languages

### Configuration

```typescript
// Example:
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
```

---

## 📜 Third-Party Scripts

### next/script Configuration

- [ ] Use next/script for third-party scripts
- [ ] Set appropriate strategy (afterInteractive, lazyOnload, beforeInteractive)
- [ ] Defer non-critical scripts with lazyOnload
- [ ] Avoid inline scripts when possible
- [ ] Monitor third-party impact with RUM tools

### Common Scripts

- [ ] Analytics: Use lazyOnload strategy
- [ ] Tag managers: Use afterInteractive strategy
- [ ] Ads: Load after content is visible
- [ ] Social widgets: Lazy load on interaction

---

## 🗄️ Caching Strategy

### Data Cache

- [ ] Use fetch with cache: 'force-cache' for static data
- [ ] Use cache: 'no-store' for dynamic data
- [ ] Set revalidate for time-based invalidation
- [ ] Use cache tags for on-demand revalidation
- [ ] Understand default caching behavior (fetch is cached by default)

### Full Route Cache

- [ ] Understand static vs dynamic routes
- [ ] Use dynamic functions (cookies, headers, searchParams) carefully
- [ ] Force dynamic with export const dynamic = 'force-dynamic'
- [ ] Force static with export const dynamic = 'force-static'

### Router Cache

- [ ] Understand client-side route caching (30s default)
- [ ] Use router.refresh() when needed
- [ ] Clear cache with revalidatePath after mutations

---

## 🎨 CSS Optimization

### Tailwind CSS 4 (as used in this project)

- [x] Use JIT compilation (default in Tailwind 4)
- [x] Purge unused styles in production
- [x] Use @layer for custom utilities
- [x] Minimize custom CSS
- [x] Use CSS variables for theming

### General CSS

- [ ] Critical CSS is inlined automatically
- [ ] Use CSS modules for component-scoped styles
- [ ] Avoid large global stylesheets
- [ ] Minimize CSS bundle size
- [ ] Use modern CSS features (container queries, :has(), etc.)

---

## 🔧 Build Optimization

### Production Build

- [ ] Run `next build` and review output
- [ ] Check route generation times
- [ ] Review bundle sizes per route
- [ ] Look for red warnings (oversized bundles)
- [ ] Set NODE_ENV=production

### Configuration

- [ ] Enable SWC minification (default)
- [ ] Configure compiler options if needed
- [ ] Set output: 'standalone' for Docker deployments
- [ ] Use experimental features carefully
- [ ] Review next.config.js for optimization opportunities

---

## 📊 Performance Monitoring

### Lighthouse & Core Web Vitals

- [ ] Run Lighthouse in incognito mode
- [ ] Test on real devices (not just desktop)
- [ ] Test on 3G/4G networks
- [ ] Monitor Core Web Vitals in production
- [ ] Set up Google Search Console

### Real User Monitoring (RUM)

- [ ] Implement web-vitals tracking
- [ ] Use Vercel Analytics or similar
- [ ] Track custom metrics (Time to Interactive, etc.)
- [ ] Monitor performance by page/route
- [ ] Set up alerts for performance regressions

### Testing

```typescript
// Example: Report Web Vitals
import { onCLS, onFID, onLCP, onINP } from "web-vitals";

onCLS(console.log);
onINP(console.log);
onLCP(console.log);
```

---

## 🌐 Network Optimization

### API Routes & Server Actions

- [ ] Minimize API payload sizes
- [ ] Use Server Actions for mutations
- [ ] Implement request deduplication
- [ ] Use parallel data fetching
- [ ] Set appropriate cache headers

### Edge Runtime

- [ ] Consider Edge Runtime for global deployment
- [ ] Use for API routes with low latency requirements
- [ ] Understand Edge limitations (no Node.js APIs)
- [ ] Deploy static assets to CDN

---

## 🧪 Before Production Checklist

### Build & Test

- [ ] Run `pnpm build` successfully
- [ ] Run `pnpm start` and test locally
- [ ] Test all critical user flows
- [ ] Verify no console errors
- [ ] Check 404/500 error pages

### Performance Validation

- [ ] Run Lighthouse (target: 90+ score)
- [ ] Check Core Web Vitals (all green)
- [ ] Test on mobile devices
- [ ] Test on slow networks (3G)
- [ ] Verify bundle sizes are acceptable

### SEO & Accessibility

- [ ] Generate sitemap.xml
- [ ] Add robots.txt
- [ ] Set meta tags (title, description, OG tags)
- [ ] Verify semantic HTML
- [ ] Test keyboard navigation
- [ ] Check color contrast ratios

---

## 🎯 Quick Wins (High Impact, Low Effort)

1. **Enable next/image for all images** - Automatic optimization
2. **Use Server Components by default** - Reduce JavaScript by 20-30%
3. **Add @next/bundle-analyzer** - Identify large dependencies
4. **Use next/font** - Eliminate external font requests
5. **Set priority on hero images** - Improve LCP
6. **Remove unused dependencies** - Reduce bundle size
7. **Use optimizePackageImports** - Tree-shake large libraries
8. **Add Suspense boundaries** - Enable streaming

---

## 📚 Resources & References

### Official Documentation

- [Next.js Optimization Guide](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Next.js Production Checklist](https://nextjs.org/docs/app/guides/production-checklist)
- [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

### Performance Tools

- [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [web-vitals](https://github.com/GoogleChrome/web-vitals)

### Key Articles (2025)

- [Next.js Performance Optimization Guide](https://pagepro.co/blog/nextjs-performance-optimization-in-9-steps/)
- [Optimizing Next.js Bundle Size](https://www.catchmetrics.io/blog/optimizing-nextjs-performance-bundles-lazy-loading-and-images)
- [React Server Components Performance](https://www.developerway.com/posts/react-server-components-performance)

---

## 📝 Notes

- This checklist is based on Next.js 14+ App Router best practices (2025)
- Performance targets may vary based on application requirements
- Always test on real devices and networks
- Monitor performance continuously, not just at launch
- Core Web Vitals are Google ranking factors

**Last Updated**: December 2025
