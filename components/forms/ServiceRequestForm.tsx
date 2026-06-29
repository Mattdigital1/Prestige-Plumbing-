import GHLForm from '@/components/ui/GHLForm'

interface ServiceRequestFormProps {
  darkBackground?: boolean
  instanceId?: string
}

export default function ServiceRequestForm({
  darkBackground = false,
  instanceId,
}: ServiceRequestFormProps) {
  return (
    <div
      className={[
        'overflow-hidden rounded-xl',
        darkBackground ? 'ring-1 ring-white/20' : 'shadow-lg ring-1 ring-slate-200',
      ].join(' ')}
    >
      <GHLForm instanceId={instanceId} />
    </div>
  )
}
