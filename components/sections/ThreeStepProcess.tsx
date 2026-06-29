import SectionHeader from '@/components/ui/SectionHeader'

const STEPS = [
  {
    number: '1',
    title: 'Contact Us',
    description:
      'Call, text, or submit a service request with information about your plumbing issue or project.',
  },
  {
    number: '2',
    title: 'We Respond Fast',
    description:
      'Our team reviews the request and contacts you to discuss scope, timing, and next steps.',
  },
  {
    number: '3',
    title: 'Job Done Right',
    description:
      'We complete the work professionally, communicate clearly throughout, and leave the area clean.',
  },
]

export default function ThreeStepProcess() {
  return (
    <section
      className="bg-white py-16 sm:py-20 lg:py-24"
      aria-label="How it works"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-14 flex justify-center">
          <SectionHeader
            eyebrow="Simple Process"
            title="How It Works"
            subtitle="Getting professional plumbing service is straightforward. Here is what to expect from start to finish."
            align="center"
          />
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute hidden lg:block"
            style={{ top: '1.5rem', left: 'calc(16.666% + 1.5rem)', right: 'calc(16.666% + 1.5rem)', height: '2px', background: '#dbeafe' }}
          />

          <ol
            className="relative grid grid-cols-1 gap-5 sm:grid-cols-3"
            aria-label="Process steps"
          >
            {STEPS.map((step) => (
              <li
                key={step.number}
                className="flex flex-col items-center bg-white border border-slate-200 rounded-xl px-6 pt-8 pb-7 text-center relative z-10 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Numbered circle */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-base font-black text-white shadow-[0_4px_12px_rgba(37,99,235,0.3)]">
                  {step.number}
                </div>

                <h3 className="text-base font-bold text-[#0d1b2a]">{step.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  )
}
