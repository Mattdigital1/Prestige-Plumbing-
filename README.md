# Prestige Plumbing LLC — Website

Production-ready Next.js website for Prestige Plumbing LLC, a fifth-generation family-owned plumbing company serving the Mississippi Gulf Coast.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Local Development

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_LEAD_WEBHOOK_URL` | GoHighLevel or CRM webhook URL for lead form submissions |
| `NEXT_PUBLIC_SITE_URL` | The live site URL (used for canonical tags and OG metadata) |

## Project Structure

```
app/               # Next.js App Router pages and layout
components/
  layout/          # Header, Footer, MobileNav, AnnouncementBar, MobileCallBar
  ui/              # Buttons, cards, badges, breadcrumbs, EmergencyBanner
  sections/        # Full-width homepage and page section components
  forms/           # ServiceRequestForm (connects to CRM webhook)
lib/
  config/          # Central business data — edit here to update all pages
    business.ts    # Business name, phone, email, hours, license
    services.ts    # All service definitions
    serviceAreas.ts # All service area city data
    automation.ts  # SMS/email automation templates
  schema/          # Structured data / JSON-LD schema builders
public/
  images/          # Add real photos here — see placeholder comments in components
```

## Where to Add Content

### Logo
Replace the text logo placeholder in `components/layout/Header.tsx` with an `<Image>` component pointing to `/images/logo.png` or `/images/logo.svg`.

### Project Photos
Add real photos to `public/images/` and update the `src` attributes in:
- `components/sections/FeaturedGallery.tsx`
- `app/gallery/page.tsx`
- `components/sections/Hero.tsx`

### Customer Reviews
Replace placeholder cards in `app/reviews/page.tsx` and `components/sections/ReviewsSection.tsx`. Each card is clearly marked with `{/* TODO: Replace with verified customer review */}`.

### Google Review Link
Search for `GOOGLE_REVIEW_LINK` in the codebase and replace with the actual Google Business Profile review URL.

### CRM Webhook
Set `NEXT_PUBLIC_LEAD_WEBHOOK_URL` in your `.env.local` (or Vercel environment variables) to your GoHighLevel webhook or other CRM endpoint.

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Set environment variables in the Vercel dashboard under Project Settings → Environment Variables.

## License

All rights reserved. Prestige Plumbing LLC — (228) 327-6151
