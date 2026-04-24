import { useState, useEffect, useCallback } from 'react'
import {
  getResultsByClass,
  getResultsByStudent,
  createResult,
  updateResult,
  deleteResult,
  bulkCreateResults,
  publishResults,
  unpublishResults,
  updatePositions,
  getStudentResultSummary,
} from '@services/resultService'
import {
  calculateOverallClassRanking,
  getGradeDistribution,
} from '@utils/calculatePosition'
import toast from 'react-hot-toast'

// ── useResults (class level) ──────────────────────────────
export const useResults = ({ classId, term, session } = {}) => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [publishing, setPublishing] = useState(false)

  const fetchResults = useCallback(async () => {
    if (!classId || !term || !session) {
      setLoading(false)
      return
    }
    setLoading(true)
    setError(null)
    try {
      const data = await getResultsByClass(classId, term, session)
      setResults(data || [])
    } catch (err) {
      setError(err.message)
      toast.error('Failed to load results')
    } finally {
      setLoading(false)
    }
  }, [classId, term, session])

  useEffect(() => {
    fetchResults()
  }, [fetchResults])

  // ── Add Result ──────────────────────────────────────────
  const addResult = async (resultData) => {
    try {
      const created = await createResult(resultData)
      setResults((prev) => [...prev, created])
      toast.success('Result added successfully')
      return created
    } catch (err) {
      toast.error(err.message || 'Failed to add result')
      throw err
    }
  }

  // ── Update Result ───────────────────────────────────────
  const editResult = async (id, updates) => {
    try {
      const updated = await updateResult(id, updates)
      setResults((prev) =>
        prev.map((r) => (r.id === id ? updated : r))
      )
      toast.success('Result updated successfully')
      return updated
    } catch (err) {
      toast.error(err.message || 'Failed to update result')
      throw err
    }
  }

  // ── Delete Result ───────────────────────────────────────
  const removeResult = async (id) => {
    try {
      await deleteResult(id)
      setResults((prev) => prev.filter((r) => r.id !== id))
      toast.success('Result deleted')
    } catch (err) {
      toast.error(err.message || 'Failed to delete result')
      throw err
    }
  }

  // ── Bulk Create ─────────────────────────────────────────
  const bulkAdd = async (resultsArray) => {
    try {
      const created = await bulkCreateResults(resultsArray)
      setResults((prev) => [...prev, ...created])
      toast.success(`${created.length} results uploaded successfully`)
      return created
    } catch (err) {
      toast.error(err.message || 'Bulk upload failed')
      throw err
    }
  }

  // ── Publish Results ─────────────────────────────────────
  const publish = async () => {
    if (!classId || !term || !session) return
    setPublishing(true)
    try {
      // First update positions
      await updatePositions(classId, term, session)
      // Then publish
      await publishResults(classId, term, session)
      setResults((prev) =>
        prev.map((r) => ({ ...r, is_published: true }))
      )
      toast.success('Results published successfully!')
    } catch (err) {
      toast.error(err.message || 'Failed to publish results')
      throw err
    } finally {
      setPublishing(false)
    }
  }

  // ── Unpublish Results ───────────────────────────────────
  const unpublish = async () => {
    if (!classId || !term || !session) return
    setPublishing(true)
    try {
      await unpublishResults(classId, term, session)
      setResults((prev) =>
        prev.map((r) => ({ ...r, is_published: false }))
      )
      toast.success('Results unpublished')
    } catch (err) {
      toast.error(err.message || 'Failed to unpublish results')
      throw err
    } finally {
      setPublishing(false)
    }
  }

  // ── Derived Data ────────────────────────────────────────
  const classRanking = calculateOverallClassRanking(results)
  const gradeDistribution = getGradeDistribution(results)
  const isPublished = results.some((r) => r.is_published)
  const totalStudents = [
    ...new Set(results.map((r) => r.student_id)),
  ].length

  return {
    results,
    loading,
    error,
    publishing,
    isPublished,
    totalStudents,
    classRanking,
    gradeDistribution,
    refetch: fetchResults,
    addResult,
    editResult,
    removeResult,
    bulkAdd,
    publish,
    unpublish,
  }
}

// ── useStudentResults (student portal) ───────────────────
export const useStudentResults = ({
  studentId,
  term,
  session,
} = {}) => {
  const [results, setResults] = useState([])
  const [summary, setSummary] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!studentId || !term || !session) {
      setLoading(false)
      return
    }

    const fetchResults = async () => {
      setLoading(true)
      setError(null)
      try {
        const [data, summaryData] = await Promise.all([
          getResultsByStudent(studentId, term, session),
          getStudentResultSummary(studentId, term, session),
        ])
        setResults(data || [])
        setSummary(summaryData)
      } catch (err) {
        setError(err.message)
        toast.error('Failed to load your results')
      } finally {
        setLoading(false)
      }
    }

    fetchResults()
  }, [studentId, term, session])

  return {
    results,
    summary,
    loading,
    error,
  }
}