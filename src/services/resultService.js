import { supabase } from '@lib/supabaseClient'
import { calculateGrade } from '@utils/calculateGrade'
import { calculatePosition } from '@utils/calculatePosition'

// ── Fetch Results by Class + Term + Session ───────────────
export const getResultsByClass = async (classId, term, session) => {
  const { data, error } = await supabase
    .from('results')
    .select(
      `*,
      students (id, first_name, last_name, class),
      subjects (id, name)`
    )
    .eq('class_id', classId)
    .eq('term', term)
    .eq('session', session)
    .eq('is_published', true)
    .order('created_at', { ascending: true })

  if (error) throw error
  return data
}

// ── Fetch Results by Student ──────────────────────────────
export const getResultsByStudent = async (studentId, term, session) => {
  const { data, error } = await supabase
    .from('results')
    .select(
      `*,
      subjects (id, name),
      classes (id, name)`
    )
    .eq('student_id', studentId)
    .eq('term', term)
    .eq('session', session)
    .eq('is_published', true)
    .order('created_at', { ascending: true })

  if (error) throw error
  return data
}

// ── Fetch Single Result ───────────────────────────────────
export const getResultById = async (id) => {
  const { data, error } = await supabase
    .from('results')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

// ── Create Result ─────────────────────────────────────────
export const createResult = async (resultData) => {
  // Auto calculate total and grade
  const total =
    (resultData.ca1 || 0) +
    (resultData.ca2 || 0) +
    (resultData.assignment || 0) +
    (resultData.mid_term || 0) +
    (resultData.exam || 0)

  const grade = calculateGrade(total)

  const { data, error } = await supabase
    .from('results')
    .insert([{ ...resultData, total, grade }])
    .select()
    .single()

  if (error) throw error
  return data
}

// ── Update Result ─────────────────────────────────────────
export const updateResult = async (id, updates) => {
  // Recalculate total and grade on update
  const total =
    (updates.ca1 || 0) +
    (updates.ca2 || 0) +
    (updates.assignment || 0) +
    (updates.mid_term || 0) +
    (updates.exam || 0)

  const grade = calculateGrade(total)

  const { data, error } = await supabase
    .from('results')
    .update({ ...updates, total, grade })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

// ── Delete Result ─────────────────────────────────────────
export const deleteResult = async (id) => {
  const { error } = await supabase
    .from('results')
    .delete()
    .eq('id', id)

  if (error) throw error
  return true
}

// ── Bulk Create Results ───────────────────────────────────
export const bulkCreateResults = async (resultsArray) => {
  const processed = resultsArray.map((r) => {
    const total =
      (r.ca1 || 0) +
      (r.ca2 || 0) +
      (r.assignment || 0) +
      (r.mid_term || 0) +
      (r.exam || 0)
    return { ...r, total, grade: calculateGrade(total) }
  })

  const { data, error } = await supabase
    .from('results')
    .insert(processed)
    .select()

  if (error) throw error
  return data
}

// ── Publish Results ───────────────────────────────────────
export const publishResults = async (classId, term, session) => {
  const { data, error } = await supabase
    .from('results')
    .update({ is_published: true })
    .eq('class_id', classId)
    .eq('term', term)
    .eq('session', session)
    .select()

  if (error) throw error
  return data
}

// ── Unpublish Results ─────────────────────────────────────
export const unpublishResults = async (classId, term, session) => {
  const { data, error } = await supabase
    .from('results')
    .update({ is_published: false })
    .eq('class_id', classId)
    .eq('term', term)
    .eq('session', session)
    .select()

  if (error) throw error
  return data
}

// ── Update Positions for a Class ──────────────────────────
export const updatePositions = async (classId, term, session) => {
  // Fetch all results for this class/term/session
  const { data: results, error } = await supabase
    .from('results')
    .select('id, student_id, total')
    .eq('class_id', classId)
    .eq('term', term)
    .eq('session', session)

  if (error) throw error

  // Calculate positions
  const withPositions = calculatePosition(results)

  // Update each result with its position
  const updates = withPositions.map(({ id, position }) =>
    supabase
      .from('results')
      .update({ position })
      .eq('id', id)
  )

  await Promise.all(updates)
  return true
}

// ── Get Result Summary for Student ───────────────────────
export const getStudentResultSummary = async (
  studentId,
  term,
  session
) => {
  const { data, error } = await supabase
    .from('results')
    .select('total, grade, position, subjects(name)')
    .eq('student_id', studentId)
    .eq('term', term)
    .eq('session', session)
    .eq('is_published', true)

  if (error) throw error

  if (!data || data.length === 0) return null

  const totalScore = data.reduce((sum, r) => sum + (r.total || 0), 0)
  const average = totalScore / data.length
  const overallGrade = calculateGrade(average)

  return {
    results: data,
    totalScore,
    average: average.toFixed(1),
    overallGrade,
    subjectCount: data.length,
  }
}