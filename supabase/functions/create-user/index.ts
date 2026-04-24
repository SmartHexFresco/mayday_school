// // Follow this setup guide to integrate the Deno language server with your editor:
// // https://deno.land/manual/getting_started/setup_your_environment
// // This enables autocomplete, go to definition, etc.

// // Setup type definitions for built-in Supabase Runtime APIs
// import "@supabase/functions-js/edge-runtime.d.ts"

// console.log("Hello from Functions!")

// Deno.serve(async (req) => {
//   const { name } = await req.json()
//   const data = {
//     message: `Hello ${name}!`,
//   }

//   return new Response(
//     JSON.stringify(data),
//     { headers: { "Content-Type": "application/json" } },
//   )
// })

// /* To invoke locally:

//   1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
//   2. Make an HTTP request:

//   curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/create-user' \
//     --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//     --header 'Content-Type: application/json' \
//     --data '{"name":"Functions"}'

// */





import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// ── CORS Headers ──────────────────────────────────────────
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // ── Step 1: Verify the requester is an admin ──────────
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized — no token provided' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Create client with requester's token to verify their role
    const requesterClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: authHeader },
        },
      }
    )

    // Get requester's profile and verify admin role
    const { data: { user: requester }, error: requesterError } =
      await requesterClient.auth.getUser()

    if (requesterError || !requester) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized — invalid token' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const { data: requesterProfile, error: profileCheckError } =
      await requesterClient
        .from('profiles')
        .select('role')
        .eq('user_id', requester.id)
        .single()

    if (profileCheckError || requesterProfile?.role !== 'admin') {
      return new Response(
        JSON.stringify({ error: 'Forbidden — admin access required' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // ── Step 2: Parse and validate request body ───────────
    const {
      email,
      password,
      role,
      full_name,
      phone,
      student_id,
      staff_id,
    } = await req.json()

    if (!email || !password || !role || !full_name) {
      return new Response(
        JSON.stringify({
          error: 'Missing required fields: email, password, role, full_name',
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (!['student', 'staff', 'admin'].includes(role)) {
      return new Response(
        JSON.stringify({ error: 'Invalid role — must be student, staff, or admin' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (password.length < 6) {
      return new Response(
        JSON.stringify({ error: 'Password must be at least 6 characters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // ── Step 3: Create auth user with service role ────────
    const adminClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { data: newUser, error: createError } =
      await adminClient.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: { full_name, role },
      })

    if (createError) {
      return new Response(
        JSON.stringify({ error: createError.message }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // ── Step 4: Create profile row ────────────────────────
    const { error: profileError } = await adminClient
      .from('profiles')
      .insert([
        {
          user_id: newUser.user.id,
          role,
          full_name,
          email,
          phone: phone || null,
          student_id: student_id || null,
          staff_id: staff_id || null,
          is_active: true,
        },
      ])

    if (profileError) {
      // Rollback — delete the auth user if profile creation fails
      await adminClient.auth.admin.deleteUser(newUser.user.id)
      return new Response(
        JSON.stringify({ error: 'Failed to create profile: ' + profileError.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // ── Step 5: Send welcome email ────────────────────────
    const roleLabel =
      role === 'student'
        ? 'Student'
        : role === 'staff'
        ? 'Staff Member'
        : 'Administrator'

    const loginUrl =
      role === 'student'
        ? `${Deno.env.get('SITE_URL')}/portal/student-login`
        : `${Deno.env.get('SITE_URL')}/portal/staff-login`

    await adminClient.auth.admin.sendRawEmail({
      to: email,
      subject: `Welcome to Clusters of Treasure Int'l School — Your Login Details`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a5c38; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">
              Clusters of Treasure Int'l School
            </h1>
            <p style="color: #d4a017; margin: 8px 0 0; font-size: 14px;">
              Welcome to Your Portal
            </p>
          </div>

          <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb;">
            <p style="color: #374151; font-size: 15px;">
              Dear <strong>${full_name}</strong>,
            </p>
            <p style="color: #374151; font-size: 14px; line-height: 1.6;">
              Your <strong>${roleLabel}</strong> account has been created on the 
              Clusters of Treasure International School portal.
              Below are your login credentials:
            </p>

            <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin: 20px 0;">
              <p style="margin: 0 0 8px; font-size: 13px; color: #6b7280; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em;">
                Your Login Details
              </p>
              <p style="margin: 0 0 6px; font-size: 14px; color: #111827;">
                <strong>Email:</strong> ${email}
              </p>
              <p style="margin: 0; font-size: 14px; color: #111827;">
                <strong>Password:</strong> ${password}
              </p>
            </div>

            <div style="text-align: center; margin: 24px 0;">
              <a 
                href="${loginUrl}"
                style="background: #1a5c38; color: white; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px;"
              >
                Login to Your Portal
              </a>
            </div>

            <p style="color: #ef4444; font-size: 13px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; padding: 12px;">
              ⚠️ For your security, please change your password immediately after your first login.
            </p>

            <p style="color: #6b7280; font-size: 13px; margin-top: 20px; line-height: 1.6;">
              If you have any issues logging in, please contact the school administration.
            </p>
          </div>

          <div style="background: #f9fafb; padding: 16px; text-align: center; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              © ${new Date().getFullYear()} Clusters of Treasure Int'l School. All rights reserved.
            </p>
          </div>
        </div>
      `,
    })

    // ── Step 6: Return success ────────────────────────────
    return new Response(
      JSON.stringify({
        success: true,
        message: `${roleLabel} account created successfully`,
        user: {
          id: newUser.user.id,
          email: newUser.user.email,
          role,
          full_name,
        },
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})