import { useEffect, useState } from 'react'
import { useAuth } from '@context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const ViewResults = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  const [results, setResults] = useState([])

  useEffect(() => {
    if (!user) {
      navigate('/portal/student-login')
    }

    // Dummy data (replace later)
    setResults([
      { subject: 'Mathematics', score: 85 },
      { subject: 'English', score: 78 },
    ])
  }, [user, navigate])

  return (
    <div className="p-6">

      <button
        onClick={() => navigate('/portal/student-dashboard')}
        className="flex items-center gap-2 text-sm mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <h1 className="text-xl font-bold mb-4">
        My Results
      </h1>

      <div className="bg-white rounded-xl shadow p-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th>Subject</th>
              <th>Score</th>
            </tr>
          </thead>

          <tbody>
            {results.map((r, index) => (
              <tr key={index} className="border-b">
                <td>{r.subject}</td>
                <td>{r.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ViewResults