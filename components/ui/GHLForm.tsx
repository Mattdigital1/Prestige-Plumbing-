const FORM_ID = 'Gv4w0P5hFGGrQTL5Qcbe'
const FORM_SRC = `https://links.m2squareddigital.com/widget/form/${FORM_ID}`

interface GHLFormProps {
  instanceId?: string
  height?: number
}

export default function GHLForm({
  instanceId = `inline-${FORM_ID}`,
  height = 652,
}: GHLFormProps) {
  return (
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
  )
}
