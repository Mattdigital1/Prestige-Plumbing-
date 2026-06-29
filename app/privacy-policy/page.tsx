import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { BUSINESS } from '@/lib/config/business'

export const metadata: Metadata = {
  title: 'Privacy Policy | Prestige Plumbing LLC',
  alternates: {
    canonical: '/privacy-policy',
  },
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 mb-3 text-lg font-bold tracking-tight text-slate-900 sm:text-xl first:mt-0">
      {children}
    </h2>
  )
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm leading-relaxed text-slate-700 sm:text-base space-y-3">
      {children}
    </div>
  )
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc list-outside pl-5 space-y-1.5 text-sm leading-relaxed text-slate-700 sm:text-base">
      {children}
    </ul>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="bg-[#0d1b2a] pt-12 pb-14 sm:pt-16 sm:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-balance">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-slate-400">
            Last updated: June 2025
          </p>
        </div>
      </section>

      {/* ── Policy Content ── */}
      <section className="bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-prose">

            {/* Intro */}
            <Prose>
              <p>
                {BUSINESS.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting the
                privacy of visitors to our website and customers who contact us for
                plumbing services. This Privacy Policy describes what information we
                collect, how we use it, and your rights regarding that information.
              </p>
              <p>
                By using our website or submitting a service request, you agree to the
                practices described in this policy.
              </p>
            </Prose>

            {/* 1. Information We Collect */}
            <SectionHeading>1. Information We Collect</SectionHeading>
            <Prose>
              <p>
                We collect personal information you voluntarily provide when you contact
                us, fill out a service request form, or otherwise communicate with us.
                This may include:
              </p>
            </Prose>
            <UL>
              <li><strong>Name</strong> — your first and last name</li>
              <li><strong>Phone number</strong> — your primary contact number</li>
              <li><strong>Email address</strong> — for correspondence and follow-up</li>
              <li><strong>Service address</strong> — the address where plumbing service is requested</li>
              <li>
                <strong>Photos</strong> — images of plumbing issues or project details
                that you voluntarily submit through our contact or service request form
              </li>
              <li>
                <strong>Service request details</strong> — a description of the plumbing
                issue or project you need assistance with
              </li>
            </UL>
            <Prose>
              <p className="mt-3">
                We may also collect limited technical information automatically when you
                visit our website, such as your IP address, browser type, pages visited,
                and referring URL. This information is used only for website analytics
                and security purposes and is not linked to your personal identity.
              </p>
            </Prose>

            {/* 2. How We Use Your Information */}
            <SectionHeading>2. How We Use Your Information</SectionHeading>
            <Prose>
              <p>We use the information you provide for the following purposes:</p>
            </Prose>
            <UL>
              <li>To respond to your service request or inquiry</li>
              <li>To schedule plumbing service appointments</li>
              <li>To communicate with you about the status of your service request</li>
              <li>To provide estimates for requested plumbing work</li>
              <li>To follow up after service has been completed</li>
              <li>To improve our website and customer communication processes</li>
            </UL>
            <Prose>
              <p className="mt-3">
                We do not sell, rent, or trade your personal information to third parties
                for marketing purposes.
              </p>
            </Prose>

            {/* 3. Contact Information Sharing */}
            <SectionHeading>3. Contact Information Sharing</SectionHeading>
            <Prose>
              <p>
                Your contact information — including name, phone number, email address,
                and service address — is used solely to communicate with you regarding
                your plumbing service request. We do not share this information with
                other businesses or individuals for purposes unrelated to fulfilling
                your service request.
              </p>
              <p>
                In limited circumstances, we may share your information with trusted
                service partners or subcontractors who assist us in providing plumbing
                services, only to the extent necessary to fulfill your request. These
                parties are required to protect your information and may not use it for
                any other purpose.
              </p>
            </Prose>

            {/* 4. SMS Consent and Messaging */}
            <SectionHeading>4. SMS Consent and Text Messaging</SectionHeading>
            <Prose>
              <p>
                If you provide your phone number and consent to receive text messages
                through our service request form, we may send you SMS messages related
                to your service request, appointment confirmations, or follow-up
                communications.
              </p>
              <p>
                By checking the SMS consent option on our contact or service request
                form, you agree to receive text messages from {BUSINESS.name} at the
                phone number provided. Consent to receive SMS messages is not required
                as a condition of receiving plumbing services. Message and data rates
                may apply. You may opt out at any time by replying STOP to any message
                or by contacting us directly.
              </p>
              <p>
                We do not share your phone number or SMS consent with third parties for
                marketing purposes.
              </p>
            </Prose>

            {/* 5. Third-Party Services */}
            <SectionHeading>5. Third-Party Services</SectionHeading>
            <Prose>
              <p>
                We may use third-party tools and platforms to help manage customer
                communications and service requests. Form submissions from our website
                may be transmitted to a customer relationship management (CRM) system
                or email platform to help us track and respond to inquiries efficiently.
              </p>
              <p>
                Our website may also use third-party analytics services (such as Google
                Analytics) to help us understand how visitors use our site. These
                services may collect anonymous usage data through cookies or similar
                technologies. We do not control the privacy practices of third-party
                services and encourage you to review their privacy policies.
              </p>
            </Prose>

            {/* 6. Data Retention */}
            <SectionHeading>6. Data Retention</SectionHeading>
            <Prose>
              <p>
                We retain personal information for as long as necessary to fulfill the
                purposes described in this policy, including responding to your service
                request, maintaining records of completed work, and complying with any
                applicable legal or business requirements.
              </p>
              <p>
                If you would like your personal information removed from our records,
                please contact us using the information below and we will make
                reasonable efforts to honor your request.
              </p>
            </Prose>

            {/* 7. Data Security */}
            <SectionHeading>7. Data Security</SectionHeading>
            <Prose>
              <p>
                We take reasonable steps to protect the personal information you share
                with us from unauthorized access, disclosure, or misuse. However, no
                method of transmission over the internet is completely secure. We cannot
                guarantee absolute security of information transmitted through our
                website.
              </p>
            </Prose>

            {/* 8. Children's Privacy */}
            <SectionHeading>8. Children&apos;s Privacy</SectionHeading>
            <Prose>
              <p>
                Our website is not directed to children under the age of 13, and we do
                not knowingly collect personal information from children. If you believe
                a child has provided us with personal information, please contact us and
                we will promptly delete it.
              </p>
            </Prose>

            {/* 9. Changes to This Policy */}
            <SectionHeading>9. Changes to This Policy</SectionHeading>
            <Prose>
              <p>
                We may update this Privacy Policy from time to time to reflect changes
                in our practices or applicable law. When we update the policy, we will
                revise the &ldquo;Last updated&rdquo; date at the top of this page. Continued use
                of our website after any changes constitutes your acceptance of the
                updated policy.
              </p>
            </Prose>

            {/* 10. Contact */}
            <SectionHeading>10. Contact Us</SectionHeading>
            <Prose>
              <p>
                If you have questions, concerns, or requests related to this Privacy
                Policy or the personal information we hold, please contact us:
              </p>
            </Prose>
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-6 py-5">
              <p className="font-semibold text-slate-900">{BUSINESS.name}</p>
              <p className="mt-1 text-sm text-slate-700">{BUSINESS.serviceArea}</p>
              <div className="mt-3 flex flex-col gap-1.5 text-sm text-slate-700">
                <a
                  href={BUSINESS.phoneLink}
                  className="hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
                >
                  {BUSINESS.phone}
                </a>
                <a
                  href={BUSINESS.emailLink}
                  className="hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
                >
                  {BUSINESS.email}
                </a>
              </div>
            </div>

            {/* Back link */}
            <div className="mt-12 border-t border-slate-200 pt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
