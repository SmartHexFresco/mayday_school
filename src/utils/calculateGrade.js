/**
 * Grading configuration — single source of truth
 * All grade logic references this object
 * Easy to update school grading policy in one place
 */
export const GRADE_CONFIG = [
  {
    grade: 'A',
    min: 80,
    max: 100,
    remark: 'Excellent',
    points: 5.0,
    color: 'text-green-600',
    bg: 'bg-green-100',
  },
  {
    grade: 'B',
    min: 65,
    max: 79,
    remark: 'Very Good',
    points: 4.0,
    color: 'text-blue-600',
    bg: 'bg-blue-100',
  },
  {
    grade: 'C',
    min: 50,
    max: 64,
    remark: 'Good',
    points: 3.0,
    color: 'text-yellow-600',
    bg: 'bg-yellow-100',
  },
  {
    grade: 'D',
    min: 40,
    max: 49,
    remark: 'Fair',
    points: 2.0,
    color: 'text-orange-500',
    bg: 'bg-orange-100',
  },
  {
    grade: 'F',
    min: 0,
    max: 39,
    remark: 'Fail',
    points: 0.0,
    color: 'text-red-600',
    bg: 'bg-red-100',
  },
]

/**
 * Calculate grade letter from a total score
 * @param {number} score - total score (0 - 100)
 * @returns {string} grade letter e.g. 'A', 'B', 'C', 'D', 'F'
 */
export const calculateGrade = (score) => {
  if (score === null || score === undefined || isNaN(score)) return '—'
  const clamped = Math.min(100, Math.max(0, score))
  const found = GRADE_CONFIG.find(
    (g) => clamped >= g.min && clamped <= g.max
  )
  return found?.grade ?? 'F'
}

/**
 * Get full grade info object for a score
 * @param {number} score
 * @returns {object} grade config object
 */
export const getGradeInfo = (score) => {
  if (score === null || score === undefined || isNaN(score)) {
    return GRADE_CONFIG[GRADE_CONFIG.length - 1]
  }
  const clamped = Math.min(100, Math.max(0, score))
  return (
    GRADE_CONFIG.find((g) => clamped >= g.min && clamped <= g.max) ??
    GRADE_CONFIG[GRADE_CONFIG.length - 1]
  )
}

/**
 * Get remark from score
 * @param {number} score
 * @returns {string} remark e.g. 'Excellent', 'Very Good'
 */
export const getRemark = (score) => {
  return getGradeInfo(score).remark
}

/**
 * Get grade points (GPA scale) from score
 * @param {number} score
 * @returns {number} grade points e.g. 5.0, 4.0
 */
export const getGradePoints = (score) => {
  return getGradeInfo(score).points
}

/**
 * Get Tailwind color class for a grade
 * @param {string} grade - e.g. 'A', 'B'
 * @returns {string} Tailwind text color class
 */
export const getGradeColor = (grade) => {
  const found = GRADE_CONFIG.find((g) => g.grade === grade)
  return found?.color ?? 'text-gray-500'
}

/**
 * Get Tailwind background class for a grade
 * @param {string} grade
 * @returns {string} Tailwind bg class
 */
export const getGradeBg = (grade) => {
  const found = GRADE_CONFIG.find((g) => g.grade === grade)
  return found?.bg ?? 'bg-gray-100'
}

/**
 * Calculate total score from individual components
 * CA1 + CA2 + Assignment + Mid-term + Exam = Total
 * @param {object} scores
 * @returns {number} total score
 */
export const calculateTotal = ({
  ca1 = 0,
  ca2 = 0,
  assignment = 0,
  mid_term = 0,
  exam = 0,
} = {}) => {
  const total = ca1 + ca2 + assignment + mid_term + exam
  return Math.min(100, Math.max(0, total))
}

/**
 * Calculate class average from array of totals
 * @param {number[]} totals
 * @returns {number} average to 1 decimal place
 */
export const calculateClassAverage = (totals = []) => {
  if (!totals.length) return 0
  const sum = totals.reduce((acc, t) => acc + (t || 0), 0)
  return parseFloat((sum / totals.length).toFixed(1))
}

/**
 * Calculate subject average for a student across terms
 * @param {object[]} results - array of result objects
 * @returns {number}
 */
export const calculateSubjectAverage = (results = []) => {
  if (!results.length) return 0
  const sum = results.reduce((acc, r) => acc + (r.total || 0), 0)
  return parseFloat((sum / results.length).toFixed(1))
}

/**
 * Check if student passed all subjects
 * @param {object[]} results
 * @returns {boolean}
 */
export const hasPassedAll = (results = []) => {
  return results.every((r) => (r.total || 0) >= 40)
}

/**
 * Count how many subjects a student failed
 * @param {object[]} results
 * @returns {number}
 */
export const countFailed = (results = []) => {
  return results.filter((r) => (r.total || 0) < 40).length
}

/**
 * Get highest scoring subject from results
 * @param {object[]} results
 * @returns {object|null}
 */
export const getHighestSubject = (results = []) => {
  if (!results.length) return null
  return results.reduce((best, r) =>
    (r.total || 0) > (best.total || 0) ? r : best
  )
}

/**
 * Get lowest scoring subject from results
 * @param {object[]} results
 * @returns {object|null}
 */
export const getLowestSubject = (results = []) => {
  if (!results.length) return null
  return results.reduce((worst, r) =>
    (r.total || 0) < (worst.total || 0) ? r : worst
  )
}