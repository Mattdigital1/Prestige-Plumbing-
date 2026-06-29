export function formatPhone(phone: string): string {
  return phone
    .replace(/[^\d]/g, '')
    .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
}
