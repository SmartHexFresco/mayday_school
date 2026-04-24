import { useState } from 'react'
import { useStudents } from '@hooks/useStudents'
import { createUserAccount, generatePassword } from '@services/userAccountService'
import Table from '@components/ui/Table'
import Button from '@components/ui/Button'
import Modal, { ConfirmModal } from '@components/ui/Modal'
import StudentForm from '@components/forms/StudentForm'
import { StatCard } from '@components/ui/Card'
import toast from 'react-hot-toast'
import {
  Plus,
  Users,
  UserCheck,
  UserX,
  Search,
  Download,
  RefreshCw,
} from 'lucide-react'

const Students = () => {
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [formLoading, setFormLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [classFilter, setClassFilter] = useState('')

  const { students, loading, count, addStudent, editStudent, removeStudent, refetch } =
    useStudents({ search: searchQuery, class: classFilter })

  // ── Class Options ─────────────────────────────────────
  const classOptions = [
    'All Classes',
    'Pre-Nursery',
    'Nursery 1',
    'Nursery 2',
    'Primary 1',
    'Primary 2',
    'Primary 3',
    'Primary 4',
    'Primary 5',
    'Primary 6',
  ]

  // ── Table Columns ─────────────────────────────────────
  const columns = [
    {
      header: '#',
      render: (_, index) => (
        <span className="text-gray-400 text-xs">{index + 1}</span>
      ),
    },
    {
      header: 'Student',
      render: (row) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
            {row.first_name?.charAt(0)}{row.last_name?.charAt(0)}
          </div>
          <div>
            <p className="text-gray-900 font-semibold text-sm">
              {row.first_name} {row.last_name}
            </p>
            <p className="text-gray-400 text-xs">{row.parent_email}</p>
          </div>
        </div>
      ),
    },
    {
      header: 'Class',
      accessor: 'class',
      render: (row) => (
        <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">
          {row.class}
        </span>
      ),
    },
    {
      header: 'Gender',
      accessor: 'gender',
      render: (row) => (
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
          row.gender === 'Male'
            ? 'bg-blue-100 text-blue-700'
            : 'bg-pink-100 text-pink-700'
        }`}>
          {row.gender}
        </span>
      ),
    },
    {
      header: 'Parent',
      render: (row) => (
        <div>
          <p className="text-gray-700 text-sm">{row.parent_name}</p>
          <p className="text-gray-400 text-xs">{row.parent_phone}</p>
        </div>
      ),
    },
    {
      header: 'Status',
      render: (row) => (
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
          row.is_active
            ? 'bg-green-100 text-green-700'
            : 'bg-red-100 text-red-700'
        }`}>
          {row.is_active ? 'Active' : 'Inactive'}
        </span>
      ),
    },
    {
      header: 'Actions',
      align: 'right',
      render: (row) => (
        <div className="flex items-center justify-end gap-2">
          <Button
            size="xs"
            variant="outline"
            onClick={() => {
              setSelectedStudent(row)
              setShowEditModal(true)
            }}
          >
            Edit
          </Button>
          <Button
            size="xs"
            variant="danger"
            onClick={() => {
              setSelectedStudent(row)
              setShowDeleteModal(true)
            }}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ]

  // ── Add Student ───────────────────────────────────────
  const handleAdd = async (formData) => {
    setFormLoading(true)
    try {
      // Step 1 — Add student to students table
      const newStudent = await addStudent({
        ...formData,
        is_active: true,
        admission_date: formData.admission_date || new Date().toISOString().split('T')[0],
      })

      // Step 2 — Create portal account if email provided
      if (formData.parent_email) {
        const password = generatePassword()

        await createUserAccount({
          email: formData.parent_email,
          password,
          role: 'student',
          full_name: `${formData.first_name} ${formData.last_name}`,
          phone: formData.parent_phone,
          student_id: newStudent.id,
        })

        toast.success(
          `Student added! Login credentials sent to ${formData.parent_email}`
        )
      } else {
        toast.success('Student added successfully!')
      }

      setShowAddModal(false)
    } catch (error) {
      toast.error(error.message || 'Failed to add student')
    } finally {
      setFormLoading(false)
    }
  }

  // ── Edit Student ──────────────────────────────────────
  const handleEdit = async (formData) => {
    setFormLoading(true)
    try {
      await editStudent(selectedStudent.id, formData)
      setShowEditModal(false)
      setSelectedStudent(null)
    } catch (error) {
      toast.error(error.message || 'Failed to update student')
    } finally {
      setFormLoading(false)
    }
  }

  // ── Delete Student ────────────────────────────────────
  const handleDelete = async () => {
    setFormLoading(true)
    try {
      await removeStudent(selectedStudent.id)
      setShowDeleteModal(false)
      setSelectedStudent(null)
    } catch (error) {
      toast.error(error.message || 'Failed to delete student')
    } finally {
      setFormLoading(false)
    }
  }

  const activeCount = students.filter((s) => s.is_active).length
  const inactiveCount = students.filter((s) => !s.is_active).length

  return (
    <div className="space-y-6">

      {/* ── Page Header ──────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900">Students</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage all enrolled students and their portal accounts
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            leftIcon={RefreshCw}
            onClick={refetch}
          >
            Refresh
          </Button>
          <Button
            variant="primary"
            size="sm"
            leftIcon={Plus}
            onClick={() => setShowAddModal(true)}
          >
            Add Student
          </Button>
        </div>
      </div>

      {/* ── Stats ────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          title="Total Students"
          value={count}
          icon={Users}
          color="green"
        />
        <StatCard
          title="Active Students"
          value={activeCount}
          icon={UserCheck}
          color="blue"
        />
        <StatCard
          title="Inactive Students"
          value={inactiveCount}
          icon={UserX}
          color="red"
        />
      </div>

      {/* ── Filters ──────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row gap-4 bg-white border border-gray-100 rounded-xl p-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          />
        </div>
        <select
          value={classFilter}
          onChange={(e) =>
            setClassFilter(
              e.target.value === 'All Classes' ? '' : e.target.value
            )
          }
          className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent bg-white"
        >
          {classOptions.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* ── Table ────────────────────────────────────────── */}
      <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
        <Table
          columns={columns}
          data={students}
          loading={loading}
          sortable
          pagination
          pageSize={10}
          emptyTitle="No students found"
          emptyDescription="Add your first student by clicking the Add Student button above"
          emptyIcon={Users}
        />
      </div>

      {/* ── Add Modal ─────────────────────────────────────── */}
      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Student"
        subtitle="Student will receive login credentials via email"
        size="lg"
      >
        <StudentForm
          mode="create"
          loading={formLoading}
          onSubmit={handleAdd}
          onCancel={() => setShowAddModal(false)}
        />
      </Modal>

      {/* ── Edit Modal ────────────────────────────────────── */}
      <Modal
        isOpen={showEditModal}
        onClose={() => {
          setShowEditModal(false)
          setSelectedStudent(null)
        }}
        title="Edit Student"
        size="lg"
      >
        <StudentForm
          mode="edit"
          defaultValues={selectedStudent}
          loading={formLoading}
          onSubmit={handleEdit}
          onCancel={() => {
            setShowEditModal(false)
            setSelectedStudent(null)
          }}
        />
      </Modal>

      {/* ── Delete Confirm ────────────────────────────────── */}
      <ConfirmModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false)
          setSelectedStudent(null)
        }}
        onConfirm={handleDelete}
        loading={formLoading}
        title="Delete Student?"
        description={`Are you sure you want to permanently delete ${selectedStudent?.first_name} ${selectedStudent?.last_name}? This action cannot be undone.`}
        confirmText="Yes, Delete"
        variant="danger"
      />

    </div>
  )
}

export default Students