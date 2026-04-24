import { format, parseISO, isValid } from 'date-fns'

/**
 * Safely parse date (handles ISO and fallback formats)
 */
const parseDate = (dateString) => {
  if (!dateString) return null

  let date = parseISO(dateString)

  // Fallback if not valid ISO
  if (!isValid(date)) {
    date = new Date(dateString)
  }

  return isValid(date) ? date : null
}

/**
 * Format a date string into a readable format
 */
export const formatDate = (dateString, pattern = 'dd MMM yyyy') => {
  const date = parseDate(dateString)
  if (!date) return '—'

  try {
    return format(date, pattern)
  } catch {
    return '—'
  }
}

/**
 * Format date with time
 */
export const formatDateTime = (dateString) => {
  return formatDate(dateString, 'dd MMM yyyy, hh:mm a')
}

/**
 * Get relative time (e.g. "2 days ago")
 */
export const formatRelativeDate = (dateString) => {
  const date = parseDate(dateString)
  if (!date) return '—'

  const now = new Date()
  const diffMs = now - date

  // Handle future dates
  if (diffMs < 0) {
    return formatDate(dateString)
  }

  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`

  return formatDate(dateString)
}