import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { BUSINESS } from '@/lib/config/business'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Prestige Plumbing LLC',
  description:
    'Terms and Conditions for SMS messaging services provided by Prestige Plumbing LLC on the Mississippi Gulf Coast.',
  alternates: {
    canonical: '/terms',
  },
}

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

export default function TermsPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="bg-[#0d1b2a] pt-12 pb-14 sm:pt-16 sm:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-balance">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-base font-semibold text-slate-300">
            {BUSINESS.name}
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Last updated: June 2026
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-prose">

            {/* Intro */}
            <Prose>
              <p>
                These Terms and Conditions apply to all SMS messages sent and received
                as part of the A2P 10DLC messaging services provided by{' '}
                {BUSINESS.name}. Your use of this service constitutes acceptance of
                these terms.
              </p>
            </Prose>

            {/* Messaging Consent */}
            <SectionHeading>Messaging Consent</SectionHeading>
            <Prose>
              <p>
                As a user, you must explicitly consent to receive messages from{' '}
                {BUSINESS.name}. Consent can be given through various channels
                including, but not limited to, our website service request forms,
                paper forms, or verbally through customer service interactions.
              </p>
            </Prose>

            {/* Message Types and Frequency */}
            <SectionHeading>Message Types and Frequency</SectionHeading>
            <Prose>
              <p>
                Messages sent by {BUSINESS.name} may include service appointment
                confirmations, estimates, reminders, updates, and other relevant
                communications related to your plumbing service request. The frequency
                of these messages will depend on your interaction with our services and
                your preferences.
              </p>
            </Prose>

            {/* Data Rates */}
            <SectionHeading>Data Rates and Charges</SectionHeading>
            <Prose>
              <p>
                Standard message and data rates may apply to any messages you send or
                receive as part of our service. This could affect your bill and depends
                on the terms set by your mobile carrier.
              </p>
            </Prose>

            {/* Opt-Out */}
            <SectionHeading>Opt-Out Instructions</SectionHeading>
            <Prose>
              <p>
                To discontinue receiving messages from {BUSINESS.name}, you can reply{' '}
                <strong>STOP</strong> to any of our messages at any time. This will
                unsubscribe you from our SMS communications. For assistance, reply{' '}
                <strong>HELP</strong> or contact us directly at{' '}
                <a href={BUSINESS.phoneLink} className="underline underline-offset-2 hover:text-slate-900">
                  {BUSINESS.phone}
                </a>
                .
              </p>
            </Prose>

            {/* Privacy Policy */}
            <SectionHeading>Privacy Policy</SectionHeading>
            <Prose>
              <p>
                Our{' '}
                <Link
                  href="/privacy-policy"
                  className="underline underline-offset-2 hover:text-slate-900 transition-colors"
                >
                  Privacy Policy
                </Link>{' '}
                outlines how we collect, use, and protect your data in relation to our
                A2P 10DLC messaging service. It can be found at{' '}
                <Link
                  href="/privacy-policy"
                  className="underline underline-offset-2 hover:text-slate-900 transition-colors"
                >
                  {BUSINESS.domain}/privacy-policy
                </Link>
                .
              </p>
            </Prose>

            {/* Message Delivery */}
            <SectionHeading>Message Delivery</SectionHeading>
            <Prose>
              <p>
                {BUSINESS.name} does not guarantee that messages will be delivered
                without delays or failures. Such issues can occur due to factors outside
                our control, such as network problems or device compatibility. Mobile
                carriers are not liable for delayed or undelivered messages.
              </p>
            </Prose>

            {/* User Obligations */}
            <SectionHeading>User Obligations</SectionHeading>
            <Prose>
              <p>
                When using our messaging service, you agree to abide by all applicable
                laws and regulations. You must not use this service to send messages
                that are offensive, illegal, or intended to harass or harm others.
              </p>
            </Prose>

            {/* Compliance */}
            <SectionHeading>Compliance with Laws</SectionHeading>
            <Prose>
              <p>
                You acknowledge that the messaging service must be used in compliance
                with all relevant laws, including those relating to privacy,
                telecommunications, and commercial communications.
              </p>
            </Prose>

            {/* Changes */}
            <SectionHeading>Changes to Terms and Conditions</SectionHeading>
            <Prose>
              <p>
                {BUSINESS.name} reserves the right to change these Terms and Conditions
                at any time. Changes will be communicated through our website or direct
                communications where feasible.
              </p>
            </Prose>

            {/* Contact */}
            <SectionHeading>Contact Information</SectionHeading>
            <Prose>
              <p>
                For any queries or concerns regarding these Terms and Conditions,
                please contact {BUSINESS.name}:
              </p>
            </Prose>
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-6 py-5">
              <p className="font-semibold text-slate-900">{BUSINESS.name}</p>
              <p className="mt-1 text-sm text-slate-700">{BUSINESS.address.full}</p>
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
