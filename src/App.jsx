import { AuthProvider } from '@context/AuthContext'
import AppRoutes from '@routes/AppRoutes'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1a5c38',
            color: '#fff',
            fontSize: '14px',
            fontWeight: '500',
            borderRadius: '8px',
            padding: '12px 16px',
          },
          success: {
            iconTheme: {
              primary: '#d4a017',
              secondary: '#fff',
            },
          },
          error: {
            style: {
              background: '#dc2626',
              color: '#fff',
            },
          },
        }}
      />
    </AuthProvider>
  )
}

export default App