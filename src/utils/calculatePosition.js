/**
 * Calculate positions for a list of student results
 * Handles ties professionally — students with equal totals
 * share the same position (dense ranking)
 *
 * Example:
 * Score 95 → 1st
 * Score 90 → 2nd
 * Score 90 → 2nd (tie)
 * Score 85 → 3rd (not 4th — dense ranking)
 *
 * @param {object[]} results - array of { id, student_id, total }
 * @returns {object[]} same array with position added to each
 */
export const calculatePosition = (results = []) => {
  if (!results.length) return []

  // Sort by total score descending
  const sorted = [...results].sort(
    (a, b) => (b.total || 0) - (a.total || 0)
  )

  // Assign positions using dense ranking
  let currentPosition = 1

  const withPositions = sorted.map((result, index) => {
    if (index > 0) {
      const prevTotal = sorted[index - 1].total || 0
      const currTotal = result.total || 0

      // Only increment position if score is different
      if (currTotal < prevTotal) {
        currentPosition = index + 1
      }
    }

    return {
      ...result,
      position: currentPosition,
    }
  })

  return withPositions
}

/**
 * Get ordinal suffix for a position number
 * @param {number} position
 * @returns {string} e.g. '1st', '2nd', '3rd', '4th'
 */
export const getOrdinal = (position) => {
  if (!position || isNaN(position)) return '—'

  const n = parseInt(position)
  const suffix =
    n % 100 >= 11 && n % 100 <= 13
      ? 'th'
      : n % 10 === 1
      ? 'st'
      : n % 10 === 2
      ? 'nd'
      : n % 10 === 3
      ? 'rd'
      : 'th'

  return `${n}${suffix}`
}

/**
 * Get position label with ordinal suffix
 * @param {number} position
 * @param {number} total - total number of students
 * @returns {string} e.g. '3rd out of 25'
 */
export const getPositionLabel = (position, total) => {
  if (!position) return '—'
  return `${getOrdinal(position)} out of ${total}`
}

/**
 * Calculate positions grouped by subject
 * Each subject has its own ranking
 * @param {object[]} results - array of results with subject_id and total
 * @returns {object} map of subject_id to ranked results
 */
export const calculatePositionsBySubject = (results = []) => {
  if (!results.length) return {}

  // Group results by subject
  const grouped = results.reduce((acc, result) => {
    const subjectId = result.subject_id
    if (!acc[subjectId]) acc[subjectId] = []
    acc[subjectId].push(result)
    return acc
  }, {})

  // Calculate position within each subject group
  const positioned = {}
  Object.keys(grouped).forEach((subjectId) => {
    positioned[subjectId] = calculatePosition(grouped[subjectId])
  })

  return positioned
}

/**
 * Calculate overall class ranking from
 * aggregated student totals across all subjects
 * @param {object[]} results - all results for a class/term/session
 * @returns {object[]} array of { student_id, totalScore, average, position }
 */
export const calculateOverallClassRanking = (results = []) => {
  if (!results.length) return []

  // Aggregate total scores per student
  const studentTotals = results.reduce((acc, result) => {
    const studentId = result.student_id
    if (!acc[studentId]) {
      acc[studentId] = {
        student_id: studentId,
        totalScore: 0,
        subjectCount: 0,
      }
    }
    acc[studentId].totalScore += result.total || 0
    acc[studentId].subjectCount += 1
    return acc
  }, {})

  // Convert to array and calculate average
  const aggregated = Object.values(studentTotals).map((s) => ({
    ...s,
    average: parseFloat(
      (s.totalScore / s.subjectCount).toFixed(1)
    ),
  }))

  // Sort by total score descending
  const sorted = aggregated.sort(
    (a, b) => b.totalScore - a.totalScore
  )

  // Assign positions using dense ranking on totalScore
  let currentPosition = 1

  return sorted.map((student, index) => {
    if (index > 0) {
      const prev = sorted[index - 1].totalScore
      const curr = student.totalScore
      if (curr < prev) currentPosition = index + 1
    }

    return {
      ...student,
      position: currentPosition,
      positionLabel: getOrdinal(currentPosition),
    }
  })
}

/**
 * Get student rank within overall class ranking
 * @param {object[]} ranking - result of calculateOverallClassRanking
 * @param {number} studentId
 * @returns {object|null} student ranking object
 */
export const getStudentRank = (ranking = [], studentId) => {
  return ranking.find((r) => r.student_id === studentId) ?? null
}

/**
 * Get top N students from overall ranking
 * @param {object[]} ranking
 * @param {number} n - how many top students to return
 * @returns {object[]}
 */
export const getTopStudents = (ranking = [], n = 3) => {
  return ranking.slice(0, n)
}

/**
 * Get performance distribution of a class
 * Returns count of A, B, C, D, F grades
 * @param {object[]} results
 * @returns {object} grade distribution
 */
export const getGradeDistribution = (results = []) => {
  return results.reduce(
    (acc, r) => {
      const grade = r.grade || 'F'
      acc[grade] = (acc[grade] || 0) + 1
      return acc
    },
    { A: 0, B: 0, C: 0, D: 0, F: 0 }
  )
}