// import { createContext, useContext, useEffect, useState } from 'react'
// import { supabase } from '@lib/supabaseClient'

// const AuthContext = createContext(null)

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null)
//   const [profile, setProfile] = useState(null)
//   const [loading, setLoading] = useState(true)

//   // const fetchProfile = async (userId) => {
//   //   try {
//   //     const { data, error } = await supabase
//   //       .from('profiles')
//   //       .select('*')
//   //       .eq('user_id', userId)
//   //       .single()

//   //     if (error) {
//   //       console.error('Error fetching profile:', error.message)
//   //       return null
//   //     }
//   //     return data
//   //   } catch (err) {
//   //     console.error('fetchProfile crashed:', err)
//   //     return null
//   //   }
//   // }












// //   // In AuthContext.jsx, change fetchProfile function:
// // const fetchProfile = async (userId) => {
// //   try {
// //     const { data, error } = await supabase
// //       .from('profiles')
// //       .select('*')
// //       .eq('user_id', userId)
// //       .maybeSingle()  // <-- Change from .single() to .maybeSingle()

// //     if (error) {
// //       console.error('Error fetching profile:', error.message)
// //       return null
// //     }
// //     return data  // Will be null if no profile, which is fine
// //   } catch (err) {
// //     console.error('fetchProfile crashed:', err)
// //     return null
// //   }
// // }







// // // In AuthContext.jsx, update the fetchProfile function:
// // const fetchProfile = async (userId) => {
// //   try {
// //     const { data, error } = await supabase
// //       .from('profiles')
// //       .select('*')
// //       .eq('user_id', userId)
// //       .maybeSingle()  // <-- CHANGE THIS from .single() to .maybeSingle()

// //     if (error) {
// //       console.error('Error fetching profile:', error.message)
// //       return null
// //     }
// //     return data
// //   } catch (err) {
// //     console.error('fetchProfile crashed:', err)
// //     return null
// //   }
// // }





// const fetchProfile = async (userId) => {
//   console.log('🔍 Fetching profile for:', userId)
//   try {
//     const { data, error } = await supabase
//       .from('profiles')
//       .select('*')
//       .eq('user_id', userId)
//       .maybeSingle()

//     if (error) {
//       console.error('⚠️ Supabase error:', error)
//       return null
//     }
    
//     console.log('✅ Profile found:', data)
//     return data
//   } catch (err) {
//     console.error('💥 fetchProfile crashed:', err)
//     return null
//   }
// }




//   useEffect(() => {
//     let mounted = true

//     const initAuth = async () => {
//       try {
//         const { data: { session } } = await supabase.auth.getSession()

//         if (!mounted) return

//         if (session?.user) {
//           setUser(session.user)
//           const profileData = await fetchProfile(session.user.id)
//           if (mounted) setProfile(profileData)
//         }
//       } catch (err) {
//         console.error('initAuth error:', err)
//       } finally {
//         if (mounted) setLoading(false)
//       }
//     }

//     initAuth()

//     const { data: { subscription } } = supabase.auth.onAuthStateChange(
//       async (event, session) => {
//         if (!mounted) return

//         try {
//           if (session?.user) {
//             setUser(session.user)
//             const profileData = await fetchProfile(session.user.id)
//             if (mounted) setProfile(profileData)
//           } else {
//             setUser(null)
//             setProfile(null)
//           }
//         } catch (err) {
//           console.error('onAuthStateChange error:', err)
//         } finally {
//           if (mounted) setLoading(false)
//         }
//       }
//     )

//     return () => {
//       mounted = false
//       subscription.unsubscribe()
//     }
//   }, [])

//   const signIn = async (email, password) => {
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     })
//     if (error) throw error
//     return data
//   }

//   const signOut = async () => {
//     const { error } = await supabase.auth.signOut()
//     if (error) throw error
//     setUser(null)
//     setProfile(null)
//   }

//   const hasRole = (role) => profile?.role === role
//   const isAdmin = () => hasRole('admin')
//   const isStaff = () => hasRole('staff')
//   const isStudent = () => hasRole('student')

//   const value = {
//     user,
//     profile,
//     loading,
//     signIn,
//     signOut,
//     hasRole,
//     isAdmin,
//     isStaff,
//     isStudent,
//   }

//   // ── Render ────────────────────────────────────────────
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white">
//         <div className="flex flex-col items-center gap-4">
//           <div className="w-12 h-12 border-4 border-green-700 border-t-transparent rounded-full animate-spin" />
//           <p className="text-sm text-gray-400 font-medium tracking-wide">
//             Loading...
//           </p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = () => {
//   const context = useContext(AuthContext)
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider')
//   }
//   return context
// }

// export default AuthContext





















import { createContext, useContext, useEffect, useState, useRef } from 'react'
import { supabase } from '@lib/supabaseClient'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  
  const isInitializing = useRef(false)
  const initCompleted = useRef(false)

  const fetchProfile = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle()

      if (error) {
        console.error('Error fetching profile:', error.message)
        return null
      }
      return data
    } catch (err) {
      console.error('fetchProfile crashed:', err)
      return null
    }
  }

  useEffect(() => {
    let mounted = true

    const initAuth = async () => {
      if (isInitializing.current || initCompleted.current) {
        console.log('⏭️ Skipping duplicate initAuth')
        return
      }
      
      isInitializing.current = true
      console.log('🔍 Starting initAuth...')

      try {
        const { data: { session } } = await supabase.auth.getSession()

        if (!mounted) return

        if (session?.user) {
          console.log('👤 User found:', session.user.id)
          setUser(session.user)
          const profileData = await fetchProfile(session.user.id)
          console.log('📊 Profile data:', profileData)
          if (mounted) setProfile(profileData)
        } else {
          console.log('❌ No session')
        }
      } catch (err) {
        console.error('💥 initAuth error:', err)
      } finally {
        if (mounted) {
          setLoading(false)
          initCompleted.current = true
          isInitializing.current = false
          console.log('✅ initAuth completed')
        }
      }
    }

    initAuth()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('🔄 Auth state change:', event)
        
        if (!mounted) return
        if (isInitializing.current) {
          console.log('⏭️ Skipping auth state change - init in progress')
          return
        }

        try {
          if (session?.user) {
            setUser(session.user)
            const profileData = await fetchProfile(session.user.id)
            if (mounted) setProfile(profileData)
          } else {
            setUser(null)
            setProfile(null)
          }
        } catch (err) {
          console.error('onAuthStateChange error:', err)
        }
      }
    )

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [])

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error
    return data
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    setUser(null)
    setProfile(null)
  }

  const hasRole = (role) => profile?.role === role
  const isAdmin = () => hasRole('admin')
  const isStaff = () => hasRole('staff')
  const isStudent = () => hasRole('student')

  const value = {
    user,
    profile,
    loading,
    signIn,
    signOut,
    hasRole,
    isAdmin,
    isStaff,
    isStudent,
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-green-700 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-gray-400 font-medium tracking-wide">
            Loading...
          </p>
        </div>
      </div>
    )
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// THIS IS THE CRITICAL EXPORT - make sure it's spelled correctly
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// Default export as well
export default AuthContext