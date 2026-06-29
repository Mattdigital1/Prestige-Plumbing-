'use client'

// ---------------------------------------------------------------------------
// Gallery page — client component for category filtering
// Note: metadata is exported separately via a parallel layout or a separate
// generateMetadata export cannot coexist with 'use client'. Export metadata
// from the parent layout or a dedicated metadata file if needed. The title
// and description are defined as constants here for reference.
//
// title: 'Project Gallery | Prestige Plumbing LLC'
// description: 'View completed plumbing projects by Prestige Plumbing LLC including
//   residential, commercial, new construction, remodels, and water heater installations.'
// ---------------------------------------------------------------------------

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

// ---------------------------------------------------------------------------
// Category definitions
// ---------------------------------------------------------------------------

type Category =
  | 'All'
  | 'Residential'
  | 'Commercial'
  | 'New Construction'
  | 'Remodels'
  | 'Water Heaters'
  | 'Repairs'

const CATEGORIES: Category[] = [
  'All',
  'Residential',
  'Commercial',
  'New Construction',
  'Remodels',
  'Water Heaters',
  'Repairs',
]

// ---------------------------------------------------------------------------
// Gallery items — placeholder images awaiting real project photography
// ---------------------------------------------------------------------------

interface GalleryItem {
  id: number
  category: Exclude<Category, 'All'>
  alt: string
  label: string
  aspectRatio: '16/9' | '4/3' | '3/2'
}

const GALLERY_ITEMS: GalleryItem[] = [
  // Residential (2)
  {
    id: 1,
    category: 'Residential',
    alt: 'Residential bathroom plumbing installation',
    /* TODO: Add project photo: Residential bathroom plumbing installation */
    label: 'Residential Installation',
    aspectRatio: '4/3',
  },
  {
    id: 2,
    category: 'Residential',
    alt: 'Residential kitchen sink and fixture installation',
    /* TODO: Add project photo: Residential kitchen sink and fixture installation */
    label: 'Kitchen Fixture Install',
    aspectRatio: '4/3',
  },

  // Commercial (2)
  {
    id: 3,
    category: 'Commercial',
    alt: 'Commercial plumbing rough-in for multi-unit building',
    /* TODO: Add project photo: Commercial plumbing rough-in for multi-unit building */
    label: 'Commercial Rough-In',
    aspectRatio: '4/3',
  },
  {
    id: 4,
    category: 'Commercial',
    alt: 'Commercial restroom plumbing installation',
    /* TODO: Add project photo: Commercial restroom plumbing installation */
    label: 'Commercial Restroom',
    aspectRatio: '4/3',
  },

  // New Construction (2)
  {
    id: 5,
    category: 'New Construction',
    alt: 'New construction plumbing rough-in for residential home',
    /* TODO: Add project photo: New construction plumbing rough-in for residential home */
    label: 'New Construction Rough-In',
    aspectRatio: '4/3',
  },
  {
    id: 6,
    category: 'New Construction',
    alt: 'New construction slab plumbing installation',
    /* TODO: Add project photo: New construction slab plumbing installation */
    label: 'Slab Plumbing',
    aspectRatio: '4/3',
  },

  // Remodels (2)
  {
    id: 7,
    category: 'Remodels',
    alt: 'Bathroom remodel plumbing — new fixtures and supply lines',
    /* TODO: Add project photo: Bathroom remodel plumbing — new fixtures and supply lines */
    label: 'Bathroom Remodel',
    aspectRatio: '4/3',
  },
  {
    id: 8,
    category: 'Remodels',
    alt: 'Kitchen remodel plumbing — relocated drain and supply lines',
    /* TODO: Add project photo: Kitchen remodel plumbing — relocated drain and supply lines */
    label: 'Kitchen Remodel',
    aspectRatio: '4/3',
  },

  // Water Heaters (2)
  {
    id: 9,
    category: 'Water Heaters',
    alt: 'Tankless water heater installation',
    /* TODO: Add project photo: Tankless water heater installation */
    label: 'Tankless Water Heater',
    aspectRatio: '4/3',
  },
  {
    id: 10,
    category: 'Water Heaters',
    alt: 'Traditional tank water heater replacement',
    /* TODO: Add project photo: Traditional tank water heater replacement */
    label: 'Tank Water Heater',
    aspectRatio: '4/3',
  },

  // Repairs (2)
  {
    id: 11,
    category: 'Repairs',
    alt: 'Pipe repair — burst pipe replacement',
    /* TODO: Add project photo: Pipe repair — burst pipe replacement */
    label: 'Pipe Repair',
    aspectRatio: '4/3',
  },
  {
    id: 12,
    category: 'Repairs',
    alt: 'Drain line repair and hydro-jetting service',
    /* TODO: Add project photo: Drain line repair and hydro-jetting service */
    label: 'Drain Line Repair',
    aspectRatio: '4/3',
  },
]

// ---------------------------------------------------------------------------
// Category pill button
// ---------------------------------------------------------------------------

function CategoryButton({
  label,
  active,
  onClick,
  count,
}: {
  label: Category
  active: boolean
  onClick: () => void
  count: number
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
        active
          ? 'bg-[#1e3a5f] text-white shadow-sm'
          : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
      }`}
    >
      {label}
      {label !== 'All' && (
        <span
          className={`text-xs tabular-nums rounded-full px-1.5 py-0.5 leading-none font-semibold ${
            active ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
          }`}
        >
          {count}
        </span>
      )}
    </button>
  )
}

// ---------------------------------------------------------------------------
// Category label badge on each card
// ---------------------------------------------------------------------------

function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#1e3a5f]/90 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
      {label}
    </span>
  )
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')

  const filtered =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory)

  const countFor = (cat: Category) =>
    cat === 'All'
      ? GALLERY_ITEMS.length
      : GALLERY_ITEMS.filter((i) => i.category === cat).length

  return (
    <>
      {/* ── Page Header ── */}
      <section className="bg-[#0d1b2a] pt-12 pb-14 sm:pt-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Gallery' }]} />
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-balance">
            Project Gallery
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Browse completed plumbing projects from across the Mississippi Gulf Coast —
            residential, commercial, new construction, remodels, water heaters, and more.
          </p>
        </div>
      </section>

      {/* ── Filter + Grid ── */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* Filter tabs */}
          <div
            role="toolbar"
            aria-label="Filter gallery by category"
            className="flex flex-wrap gap-2 mb-8"
          >
            {CATEGORIES.map((cat) => (
              <CategoryButton
                key={cat}
                label={cat}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                count={countFor(cat)}
              />
            ))}
          </div>

          {/* Results count */}
          <p className="text-sm text-slate-500 mb-6" aria-live="polite" aria-atomic="true">
            {filtered.length === GALLERY_ITEMS.length
              ? `Showing all ${filtered.length} projects`
              : `Showing ${filtered.length} of ${GALLERY_ITEMS.length} projects in ${activeCategory}`}
          </p>

          {/* Gallery grid */}
          {filtered.length > 0 ? (
            <ul
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              role="list"
              aria-label="Project gallery"
            >
              {filtered.map((item) => (
                <li key={item.id} className="group">
                  {/* TODO: Add project photo: {item.alt} */}
                  <div className="relative overflow-hidden rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                    {/* Image area */}
                    <ImagePlaceholder
                      alt={item.alt}
                      aspectRatio={item.aspectRatio}
                      className="rounded-none"
                    />

                    {/* Category badge — overlaid at bottom-left of image */}
                    <div className="absolute bottom-3 left-3">
                      <CategoryBadge label={item.label} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-lg font-semibold text-slate-700">No projects in this category yet.</p>
              <p className="mt-2 text-sm text-slate-500">Check back as we continue to add completed project photos.</p>
            </div>
          )}

          {/* Photo disclaimer */}
          <p className="mt-8 text-xs text-center text-slate-400">
            Project photos will be added as work is completed. Images shown are placeholders.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white border-t border-slate-200 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl text-balance">
            Have a Project to Discuss?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Whether you&apos;re building new, remodeling, or need a repair, Prestige Plumbing LLC
            provides free estimates across the Mississippi Gulf Coast.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <Link
              href="/request-service"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1e3a5f] px-7 py-3.5 text-base font-semibold text-white shadow-sm
                transition-colors hover:bg-[#2d5a9e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500
                w-full sm:w-auto"
            >
              Request a Free Estimate
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-slate-300 px-7 py-3.5 text-base font-semibold text-slate-700
                transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500
                w-full sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
