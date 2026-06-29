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
    <div className="overflow-hidden rounded-xl">
      <GHLForm instanceId={instanceId} />
    </div>
  )
}
