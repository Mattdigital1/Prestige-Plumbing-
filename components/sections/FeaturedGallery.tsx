import Link from 'next/link'
import Image from 'next/image'

type GalleryItem = {
  id: string
  category: string
  description: string
  altText: string
  imageSrc: string
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'residential',
    category: 'Residential Plumbing',
    description: 'Full-service plumbing system service for a Gulf Coast home, including supply line replacement and fixture upgrades.',
    altText: 'Residential plumbing service in progress inside a Gulf Coast home',
    imageSrc: '/images/plumbing-tools.jpg',
  },
  {
    id: 'commercial',
    category: 'Commercial Project',
    description: 'Commercial plumbing installation for a local business, completed on schedule with zero disruption to operations.',
    altText: 'Commercial plumbing installation at a Mississippi Gulf Coast business',
    imageSrc: '/images/commercial-pipes.jpg',
  },
  {
    id: 'new-construction',
    category: 'New Construction',
    description: 'Rough-in plumbing for a new residential build in Jackson County — coordinated with the general contractor from slab to finish.',
    altText: 'New construction plumbing rough-in for a residential build',
    imageSrc: '/images/commercial-construction.jpg',
  },
  {
    id: 'bathroom-remodel',
    category: 'Bathroom Remodel',
    description: 'Complete bathroom remodel plumbing: relocated drain lines, new supply connections, and fixture installation for a master bath renovation.',
    altText: 'Bathroom remodel plumbing with new fixtures installed',
    imageSrc: '/images/pipe-wrench.jpg',
  },
  {
    id: 'water-heater',
    category: 'Water Heater Installation',
    description: 'Tankless water heater installation with proper venting and code-compliant connections for a Biloxi residence.',
    altText: 'Tankless water heater installation mounted on wall',
    imageSrc: '/images/water-heater-install.jpg',
  },
  {
    id: 'pipe-repair',
    category: 'Pipe Repair',
    description: 'Burst pipe repair following storm damage — fast response, clean repair, and full system pressure test before close-out.',
    altText: 'Completed pipe repair with new copper or PEX fitting',
    imageSrc: '/images/sink-drain-repair.jpg',
  },
]

export default function FeaturedGallery() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-10 sm:mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-2">
            Our Work
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0d1b2a] sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 leading-relaxed">
            A sample of the residential, commercial, and specialty plumbing work we have
            completed across the Mississippi Gulf Coast.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-sm ring-1 ring-slate-200"
            >
              {/* Image */}
              <div
                className="relative h-60 w-full overflow-hidden sm:h-64 lg:h-56 xl:h-64"
                role="img"
                aria-label={item.altText}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.altText}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Hover caption overlay */}
                <div
                  className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#0d1b2a]/90 via-[#0d1b2a]/40 to-transparent p-5
                    opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100"
                  aria-hidden="true"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-1">
                    {item.category}
                  </p>
                  <p className="text-sm leading-snug text-white">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Always-visible caption strip below image */}
              <div className="border-t border-slate-100 bg-white px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center sm:mt-12">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-md bg-[#1e3a5f] px-6 py-3 text-sm font-semibold text-white shadow-sm
              transition-colors hover:bg-[#2d5a9e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a5f]"
          >
            View Full Gallery
            <ArrowRightIcon />
          </Link>
        </div>

      </div>
    </section>
  )
}


function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  )
}
