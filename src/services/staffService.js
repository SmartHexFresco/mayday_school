import { supabase } from '@lib/supabaseClient'

// ── Fetch All Staff ───────────────────────────────────────
export const getAllStaff = async () => {
  const { data, error } = await supabase
    .from('staff')
    .select('*')
    .order('full_name', { ascending: true })

  if (error) throw error
  return data
}

// ── Fetch Academic Staff Only ─────────────────────────────
export const getAcademicStaff = async () => {
  const { data, error } = await supabase
    .from('staff')
    .select('*')
    .eq('is_academic', true)
    .eq('is_active', true)
    .order('full_name', { ascending: true })

  if (error) throw error
  return data
}

// ── Fetch Non-Academic Staff Only ─────────────────────────
export const getNonAcademicStaff = async () => {
  const { data, error } = await supabase
    .from('staff')
    .select('*')
    .eq('is_academic', false)
    .eq('is_active', true)
    .order('full_name', { ascending: true })

  if (error) throw error
  return data
}

// ── Fetch Single Staff Member ─────────────────────────────
export const getStaffById = async (id) => {
  const { data, error } = await supabase
    .from('staff')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

// ── Fetch Staff by User ID ────────────────────────────────
export const getStaffByUserId = async (userId) => {
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('staff_id')
    .eq('user_id', userId)
    .single()

  if (profileError) throw profileError

  const { data, error } = await supabase
    .from('staff')
    .select('*')
    .eq('id', profile.staff_id)
    .single()

  if (error) throw error
  return data
}

// ── Create Staff Member ───────────────────────────────────
export const createStaff = async (staffData) => {
  const { data, error } = await supabase
    .from('staff')
    .insert([staffData])
    .select()
    .single()

  if (error) throw error
  return data
}

// ── Update Staff Member ───────────────────────────────────
export const updateStaff = async (id, updates) => {
  const { data, error } = await supabase
    .from('staff')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

// ── Permanently Delete Staff Member ──────────────────────
export const deleteStaff = async (id) => {
  const { error } = await supabase
    .from('staff')
    .delete()
    .eq('id', id)

  if (error) throw error
  return true
}

// ── Bulk Upload Staff ─────────────────────────────────────
export const bulkCreateStaff = async (staffArray) => {
  const { data, error } = await supabase
    .from('staff')
    .insert(staffArray)
    .select()

  if (error) throw error
  return data
}

// ── Toggle Staff Active Status ────────────────────────────
export const toggleStaffStatus = async (id, isActive) => {
  const { data, error } = await supabase
    .from('staff')
    .update({ is_active: isActive })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

// ── Search Staff ──────────────────────────────────────────
export const searchStaff = async (query) => {
  const { data, error } = await supabase
    .from('staff')
    .select('*')
    .or(
      `full_name.ilike.%${query}%,role.ilike.%${query}%,email.ilike.%${query}%`
    )
    .order('full_name', { ascending: true })

  if (error) throw error
  return data
}

// ── Get Total Staff Count ─────────────────────────────────
export const getStaffCount = async () => {
  const { count, error } = await supabase
    .from('staff')
    .select('*', { count: 'exact', head: true })
    .eq('is_active', true)

  if (error) throw error
  return count
}