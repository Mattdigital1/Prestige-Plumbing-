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
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

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
// Gallery items
// ---------------------------------------------------------------------------

interface GalleryItem {
  id: number
  category: Exclude<Category, 'All'>
  alt: string
  label: string
  imageSrc: string
}

const GALLERY_ITEMS: GalleryItem[] = [
  // Residential
  {
    id: 1,
    category: 'Residential',
    alt: 'Under-sink kitchen plumbing installation',
    label: 'Under-Sink Plumbing',
    imageSrc: '/images/under-sink-kitchen.webp',
  },
  {
    id: 2,
    category: 'Residential',
    alt: 'Faucet installation in a residential home',
    label: 'Faucet Installation',
    imageSrc: '/images/faucet-installation.jpg',
  },
  {
    id: 3,
    category: 'Residential',
    alt: 'Plumbing tools and equipment for residential service',
    label: 'Residential Service',
    imageSrc: '/images/plumbing-tools-floor.jpg',
  },

  // Commercial
  {
    id: 4,
    category: 'Commercial',
    alt: 'Commercial plumbing project on the Mississippi Gulf Coast',
    label: 'Commercial Plumbing',
    imageSrc: '/images/B8-Services-Commercial-Plumbing-1-1000x694.jpg',
  },
  {
    id: 5,
    category: 'Commercial',
    alt: 'Commercial pipe rack installation',
    label: 'Commercial Pipe Rack',
    imageSrc: '/images/commercial-pipe-rack.jpg',
  },
  {
    id: 6,
    category: 'Commercial',
    alt: 'Commercial construction plumbing installation',
    label: 'Commercial Construction',
    imageSrc: '/images/commercial-construction.jpg',
  },
  {
    id: 7,
    category: 'Commercial',
    alt: 'Commercial boiler installation and service',
    label: 'Commercial Boiler',
    imageSrc: '/images/commercial-boiler.jpg',
  },

  // New Construction
  {
    id: 8,
    category: 'New Construction',
    alt: 'New construction plumbing rough-in for a residential build',
    label: 'New Construction Rough-In',
    imageSrc: '/images/new-construction-roughin.webp',
  },
  {
    id: 9,
    category: 'New Construction',
    alt: 'Under-slab plumbing installation for new construction',
    label: 'Under-Slab Plumbing',
    imageSrc: '/images/under-slab-plumbing.jpg',
  },
  {
    id: 10,
    category: 'New Construction',
    alt: 'Full rough-in plumbing installation for a new build',
    label: 'Full Rough-In',
    imageSrc: '/images/All-About-Plumbing-Rough-In--scaled.webp',
  },
  {
    id: 11,
    category: 'New Construction',
    alt: 'Bathroom plumbing rough-in dimensions for new construction',
    label: 'Bathroom Rough-In',
    imageSrc: '/images/bathroom-plumbing-rough-in-dimensions-english-hero.jpg',
  },
  {
    id: 12,
    category: 'New Construction',
    alt: 'Three phases of new construction plumbing',
    label: 'Three Phases of Plumbing',
    imageSrc: '/images/3PhasesOfPlumbing_BlogImage_450x360-02.webp',
  },

  // Remodels
  {
    id: 13,
    category: 'Remodels',
    alt: 'Kitchen plumbing remodel with new supply and drain lines',
    label: 'Kitchen Remodel',
    imageSrc: '/images/Kitchen-Plumbing-Remodel3.webp',
  },
  {
    id: 14,
    category: 'Remodels',
    alt: 'Kitchen plumbing renovation and fixture upgrade',
    label: 'Kitchen Plumbing',
    imageSrc: '/images/kitchen-1-scaled-e1668464207381.jpg',
  },
  {
    id: 15,
    category: 'Remodels',
    alt: 'Bathroom remodel plumbing with new under-sink connections',
    label: 'Bathroom Remodel',
    imageSrc: '/images/bathroom-under-sink.webp',
  },

  // Water Heaters
  {
    id: 16,
    category: 'Water Heaters',
    alt: 'Tankless water heater installation',
    label: 'Tankless Installation',
    imageSrc: '/images/tankless-water-heater-installation-or-replacement-1.jpg',
  },
  {
    id: 17,
    category: 'Water Heaters',
    alt: 'Water heater repair service',
    label: 'Water Heater Repair',
    imageSrc: '/images/water-heater-repair.webp',
  },
  {
    id: 18,
    category: 'Water Heaters',
    alt: 'Traditional tank water heater replacement',
    label: 'Tank Water Heater',
    imageSrc: '/images/water-heater-tank.jpg',
  },
  {
    id: 19,
    category: 'Water Heaters',
    alt: 'Water heater installation mounted on wall',
    label: 'Water Heater Install',
    imageSrc: '/images/water-heater-install.jpg',
  },

  // Repairs
  {
    id: 20,
    category: 'Repairs',
    alt: 'Burst pipe repair following storm damage',
    label: 'Burst Pipe Repair',
    imageSrc: '/images/burst-pipe.webp',
  },
  {
    id: 21,
    category: 'Repairs',
    alt: 'Signs you need burst pipe repair services',
    label: 'Pipe Repair',
    imageSrc: '/images/Signs-You-Need-Burst-Pipe-Repair-Services.jpg',
  },
  {
    id: 22,
    category: 'Repairs',
    alt: 'Professional drain cleaning service',
    label: 'Drain Cleaning',
    imageSrc: '/images/drain-cleaning.jpg',
  },
  {
    id: 23,
    category: 'Repairs',
    alt: 'Hydro-jetting drain and sewer line cleaning',
    label: 'Hydro-Jetting',
    imageSrc: '/images/hydro-jetting-services-1.jpg',
  },
  {
    id: 24,
    category: 'Repairs',
    alt: 'Sink and drain line repair',
    label: 'Drain Repair',
    imageSrc: '/images/sink-drain-repair.jpg',
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
                  <div className="relative overflow-hidden rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                    {/* Image */}
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={item.imageSrc}
                        alt={item.alt}
                        fill
                        loading="lazy"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

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
