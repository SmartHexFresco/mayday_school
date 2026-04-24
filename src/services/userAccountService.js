import { supabase } from '@lib/supabaseClient'

const FUNCTION_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-user`

/**
 * Create a new user account (student or staff)
 * Calls the secure Edge Function — service role key never exposed
 * @param {object} userData
 * @returns {object} created user
 */
export const createUserAccount = async ({
  email,
  password,
  role,
  full_name,
  phone,
  student_id,
  staff_id,
}) => {
  // Get current admin's session token
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) throw new Error('Not authenticated')

  const response = await fetch(FUNCTION_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session.access_token}`,
      apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
    },
    body: JSON.stringify({
      email,
      password,
      role,
      full_name,
      phone,
      student_id,
      staff_id,
    }),
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(result.error || 'Failed to create account')
  }

  return result
}

/**
 * Generate a secure random password
 * @returns {string} password
 */
export const generatePassword = () => {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lower = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'
  const symbols = '!@#$%'
  const all = upper + lower + numbers + symbols

  let password =
    upper[Math.floor(Math.random() * upper.length)] +
    lower[Math.floor(Math.random() * lower.length)] +
    numbers[Math.floor(Math.random() * numbers.length)] +
    symbols[Math.floor(Math.random() * symbols.length)]

  for (let i = 0; i < 6; i++) {
    password += all[Math.floor(Math.random() * all.length)]
  }

  return password
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('')
}