import { useState, useEffect, useCallback } from 'react'
import {
  getAllStudents,
  getStudentsByClass,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
  bulkCreateStudents,
  toggleStudentStatus,
  searchStudents,
  getStudentCount,
} from '@services/studentService'
import toast from 'react-hot-toast'

// ── useStudents ───────────────────────────────────────────
export const useStudents = (filters = {}) => {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [count, setCount] = useState(0)

  const fetchStudents = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      let data
      if (filters.class) {
        data = await getStudentsByClass(filters.class)
      } else if (filters.search) {
        data = await searchStudents(filters.search)
      } else {
        data = await getAllStudents()
      }
      setStudents(data || [])
    } catch (err) {
      setError(err.message)
      toast.error('Failed to load students')
    } finally {
      setLoading(false)
    }
  }, [filters.class, filters.search])

  const fetchCount = useCallback(async () => {
    try {
      const total = await getStudentCount()
      setCount(total || 0)
    } catch (err) {
      console.error('Count error:', err)
    }
  }, [])

  useEffect(() => {
    fetchStudents()
    fetchCount()
  }, [fetchStudents, fetchCount])

  // ── Create ──────────────────────────────────────────────
  const addStudent = async (studentData) => {
    try {
      const newStudent = await createStudent(studentData)
      setStudents((prev) => [newStudent, ...prev])
      setCount((prev) => prev + 1)
      toast.success('Student added successfully')
      return newStudent
    } catch (err) {
      toast.error(err.message || 'Failed to add student')
      throw err
    }
  }

  // ── Update ──────────────────────────────────────────────
  const editStudent = async (id, updates) => {
    try {
      const updated = await updateStudent(id, updates)
      setStudents((prev) =>
        prev.map((s) => (s.id === id ? updated : s))
      )
      toast.success('Student updated successfully')
      return updated
    } catch (err) {
      toast.error(err.message || 'Failed to update student')
      throw err
    }
  }

  // ── Delete ──────────────────────────────────────────────
  const removeStudent = async (id) => {
    try {
      await deleteStudent(id)
      setStudents((prev) => prev.filter((s) => s.id !== id))
      setCount((prev) => prev - 1)
      toast.success('Student deleted successfully')
    } catch (err) {
      toast.error(err.message || 'Failed to delete student')
      throw err
    }
  }

  // ── Bulk Upload ─────────────────────────────────────────
  const bulkAdd = async (studentsArray) => {
    try {
      const created = await bulkCreateStudents(studentsArray)
      setStudents((prev) => [...created, ...prev])
      setCount((prev) => prev + created.length)
      toast.success(`${created.length} students uploaded successfully`)
      return created
    } catch (err) {
      toast.error(err.message || 'Bulk upload failed')
      throw err
    }
  }

  // ── Toggle Status ───────────────────────────────────────
  const toggleStatus = async (id, isActive) => {
    try {
      const updated = await toggleStudentStatus(id, isActive)
      setStudents((prev) =>
        prev.map((s) => (s.id === id ? updated : s))
      )
      toast.success(
        `Student ${isActive ? 'activated' : 'deactivated'} successfully`
      )
      return updated
    } catch (err) {
      toast.error(err.message || 'Failed to update status')
      throw err
    }
  }

  return {
    students,
    loading,
    error,
    count,
    refetch: fetchStudents,
    addStudent,
    editStudent,
    removeStudent,
    bulkAdd,
    toggleStatus,
  }
}

// ── useStudent (single) ───────────────────────────────────
export const useStudent = (id) => {
  const [student, setStudent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return

    const fetchStudent = async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await getStudentById(id)
        setStudent(data)
      } catch (err) {
        setError(err.message)
        toast.error('Failed to load student')
      } finally {
        setLoading(false)
      }
    }

    fetchStudent()
  }, [id])

  return { student, loading, error }
}