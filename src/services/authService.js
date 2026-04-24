import { supabase } from '@lib/supabaseClient'

// ── Sign In ───────────────────────────────────────────────
export const signIn = async (email, password, rememberMe = false) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
    options: {
      persistSession: rememberMe,
    },
  })

  if (error) throw error
  return data
}

// ── Sign Out ──────────────────────────────────────────────
export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
  return true
}

// ── Get Current Session ───────────────────────────────────
export const getSession = async () => {
  const { data: { session }, error } = await supabase.auth.getSession()
  if (error) throw error
  return session
}

// ── Get Current User ──────────────────────────────────────
export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error) throw error
  return user
}

// ── Get User Profile ──────────────────────────────────────
export const getUserProfile = async (userId) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', userId)
    .single()

  if (error) throw error
  return data
}

// ── Create User Profile ───────────────────────────────────
export const createUserProfile = async (profileData) => {
  const { data, error } = await supabase
    .from('profiles')
    .insert([profileData])
    .select()
    .single()

  if (error) throw error
  return data
}

// ── Update User Profile ───────────────────────────────────
export const updateUserProfile = async (userId, updates) => {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('user_id', userId)
    .select()
    .single()

  if (error) throw error
  return data
}

// ── Reset Password ────────────────────────────────────────
export const resetPassword = async (email) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  })

  if (error) throw error
  return true
}

// ── Update Password ───────────────────────────────────────
export const updatePassword = async (newPassword) => {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  })

  if (error) throw error
  return data
}

// ── Create New Auth User (Admin only) ─────────────────────
export const createAuthUser = async (email, password) => {
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  })

  if (error) throw error
  return data
}

// ── Update Last Login ─────────────────────────────────────
export const updateLastLogin = async (userId) => {
  const { error } = await supabase
    .from('profiles')
    .update({ last_login: new Date().toISOString() })
    .eq('user_id', userId)

  if (error) throw error
  return true
}

// ── Check if User Has Role ────────────────────────────────
export const checkUserRole = async (userId, role) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('role')
    .eq('user_id', userId)
    .single()

  if (error) throw error
  return data?.role === role
}

// ── Get Role-Based Redirect Path ─────────────────────────
export const getRoleRedirectPath = (role) => {
  const redirects = {
    admin: '/admin',
    staff: '/portal/staff-dashboard',
    student: '/portal/student-dashboard',
  }
  return redirects[role] ?? '/'
}