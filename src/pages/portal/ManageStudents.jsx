import { useEffect, useState } from 'react'
import { useAuth } from '@context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Users, ArrowLeft } from 'lucide-react'

const ManageStudents = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  const [students, setStudents] = useState([])

  useEffect(() => {
    if (!user) {
      navigate('/portal/staff-login')
    }

    // Dummy data (replace with Supabase later)
    setStudents([
      { id: 1, name: 'John Doe', class: 'SS2', email: 'john@email.com' },
      { id: 2, name: 'Jane Smith', class: 'SS1', email: 'jane@email.com' },
    ])
  }, [user, navigate])

  return (
    <div className="p-6">

      <button
        onClick={() => navigate('/portal/staff-dashboard')}
        className="flex items-center gap-2 text-sm mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <h1 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Users className="w-5 h-5" />
        Manage Students
      </h1>

      <div className="bg-white rounded-xl shadow p-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th>Name</th>
              <th>Class</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b">
                <td>{student.name}</td>
                <td>{student.class}</td>
                <td>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ManageStudents