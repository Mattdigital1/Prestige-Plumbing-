import Link from 'next/link'

const FORM_ID = 'Gv4w0P5hFGGrQTL5Qcbe'
const FORM_SRC = `https://links.m2squareddigital.com/widget/form/${FORM_ID}`

interface GHLFormProps {
  instanceId?: string
  height?: number
}

export default function GHLForm({
  instanceId = `inline-${FORM_ID}`,
  height = 648,
}: GHLFormProps) {
  return (
    <>
      <iframe
        src={FORM_SRC}
        loading="lazy"
        style={{ width: '100%', height: `${height}px`, border: 'none', display: 'block', minHeight: '580px' }}
        id={instanceId}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Prestige Plumbing"
        data-height={height}
        data-layout-iframe-id={instanceId}
        data-form-id={FORM_ID}
        title="Prestige Plumbing — Service Request Form"
      />
      <div className="px-4 py-3 bg-slate-50 border-t border-slate-100 space-y-1.5">
        <p className="text-xs leading-relaxed text-slate-500">
          By submitting this form, you agree to receive SMS messages and/or calls from Prestige
          Plumbing LLC at the number provided. Msg &amp; data rates may apply. Message frequency
          varies. Reply <strong>STOP</strong> to opt out, <strong>HELP</strong> for help. Consent
          is not a condition of purchase.
        </p>
        <p className="text-xs text-slate-400">
          By submitting you also agree to our{' '}
          <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-slate-600 transition-colors">
            Privacy Policy
          </Link>
          {' '}and{' '}
          <Link href="/terms" className="underline underline-offset-2 hover:text-slate-600 transition-colors">
            Terms &amp; Conditions
          </Link>
          .
        </p>
      </div>
    </>
  )
}
