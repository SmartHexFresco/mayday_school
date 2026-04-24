import { supabase } from '@lib/supabaseClient'

// ── Fetch All Students ────────────────────────────────────
export const getAllStudents = async () => {
  const { data, error } = await supabase
    .from('students')
    .select('*')
    .order('first_name', { ascending: true })

  if (error) throw error
  return data
}

// ── Fetch Students by Class ───────────────────────────────
export const getStudentsByClass = async (className) => {
  const { data, error } = await supabase
    .from('students')
    .select('*')
    .eq('class', className)
    .eq('is_active', true)
    .order('first_name', { ascending: true })

  if (error) throw error
  return data
}

// ── Fetch Single Student ──────────────────────────────────
export const getStudentById = async (id) => {
  const { data, error } = await supabase
    .from('students')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

// ── Fetch Student by User ID (for portal) ────────────────
export const getStudentByUserId = async (userId) => {
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('student_id')
    .eq('user_id', userId)
    .single()

  if (profileError) throw profileError

  const { data, error } = await supabase
    .from('students')
    .select('*')
    .eq('id', profile.student_id)
    .single()

  if (error) throw error
  return data
}

// ── Create Student ────────────────────────────────────────
export const createStudent = async (studentData) => {
  const { data, error } = await supabase
    .from('students')
    .insert([studentData])
    .select()
    .single()

  if (error) throw error
  return data
}

// ── Update Student ────────────────────────────────────────
export const updateStudent = async (id, updates) => {
  const { data, error } = await supabase
    .from('students')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

// ── Delete Student ────────────────────────────────────────
export const deleteStudent = async (id) => {
  const { error } = await supabase
    .from('students')
    .delete()
    .eq('id', id)

  if (error) throw error
  return true
}

// ── Bulk Upload Students ──────────────────────────────────
export const bulkCreateStudents = async (studentsArray) => {
  const { data, error } = await supabase
    .from('students')
    .insert(studentsArray)
    .select()

  if (error) throw error
  return data
}

// ── Toggle Student Active Status ─────────────────────────
export const toggleStudentStatus = async (id, isActive) => {
  const { data, error } = await supabase
    .from('students')
    .update({ is_active: isActive })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

// ── Search Students ───────────────────────────────────────
export const searchStudents = async (query) => {
  const { data, error } = await supabase
    .from('students')
    .select('*')
    .or(
      `first_name.ilike.%${query}%,last_name.ilike.%${query}%,parent_email.ilike.%${query}%`
    )
    .order('first_name', { ascending: true })

  if (error) throw error
  return data
}

// ── Get Total Student Count ───────────────────────────────
export const getStudentCount = async () => {
  const { count, error } = await supabase
    .from('students')
    .select('*', { count: 'exact', head: true })
    .eq('is_active', true)

  if (error) throw error
  return count
}