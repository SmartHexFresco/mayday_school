import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import toast from 'react-hot-toast'

const UploadResults = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    student: '',
    subject: '',
    score: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    // Replace with Supabase later
    console.log(form)

    toast.success('Result uploaded successfully')

    setForm({
      student: '',
      subject: '',
      score: '',
    })
  }

  return (
    <div className="p-6">

      <button
        onClick={() => navigate('/portal/staff-dashboard')}
        className="flex items-center gap-2 text-sm mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <h1 className="text-xl font-bold mb-4">
        Upload Results
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow space-y-4"
      >

        <input
          type="text"
          placeholder="Student Name"
          value={form.student}
          onChange={(e) =>
            setForm({ ...form, student: e.target.value })
          }
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          placeholder="Subject"
          value={form.subject}
          onChange={(e) =>
            setForm({ ...form, subject: e.target.value })
          }
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="number"
          placeholder="Score"
          value={form.score}
          onChange={(e) =>
            setForm({ ...form, score: e.target.value })
          }
          className="w-full border p-2 rounded"
          required
        />

        <button className="bg-green-700 text-white px-4 py-2 rounded">
          Upload
        </button>

      </form>
    </div>
  )
}

export default UploadResults