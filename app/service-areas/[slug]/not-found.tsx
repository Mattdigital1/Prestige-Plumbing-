import Link from 'next/link'

export default function CityNotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl font-bold text-gray-900">Service Area Not Found</h1>
      <p className="mt-3 text-gray-600">
        We could not find a service area page for that location.
      </p>
      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="/service-areas"
          className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          View All Service Areas
        </Link>
        <Link
          href="/"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}
