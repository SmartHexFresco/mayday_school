import { useState, useEffect } from 'react'
import {
  getAllStaff,
  createStaff,
  updateStaff,
  deleteStaff,
} from '@services/staffService'
import { createUserAccount, generatePassword } from '@services/userAccountService'
import Table from '@components/ui/Table'
import Button from '@components/ui/Button'
import Modal, { ConfirmModal } from '@components/ui/Modal'
import StaffForm from '@components/forms/StaffForm'
import { StatCard } from '@components/ui/Card'
import toast from 'react-hot-toast'
import {
  Plus,
  Users,
  UserCheck,
  BookOpen,
  RefreshCw,
  Search,
} from 'lucide-react'

const Staff = () => {
  const [staff, setStaff] = useState([])
  const [loading, setLoading] = useState(true)
  const [formLoading, setFormLoading] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedStaff, setSelectedStaff] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const fetchStaff = async () => {
    setLoading(true)
    try {
      const data = await getAllStaff()
      setStaff(data || [])
    } catch (error) {
      toast.error('Failed to load staff')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStaff()
  }, [])

  // ── Filtered Staff ────────────────────────────────────
  const filteredStaff = searchQuery.trim()
    ? staff.filter(
        (s) =>
          s.full_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.role?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.email?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : staff

  // ── Table Columns ─────────────────────────────────────
  const columns = [
    {
      header: '#',
      render: (_, index) => (
        <span className="text-gray-400 text-xs">{index + 1}</span>
      ),
    },
    {
      header: 'Staff Member',
      render: (row) => (
        <div className="flex items-center gap-3">
          {row.photo_url ? (
            <img
              src={row.photo_url}
              alt={row.full_name}
              className="w-9 h-9 rounded-full object-cover shrink-0"
            />
          ) : (
            <div className="w-9 h-9 bg-yellow-100 text-yellow-800 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
              {row.full_name?.charAt(0)}
            </div>
          )}
          <div>
            <p className="text-gray-900 font-semibold text-sm">
              {row.full_name}
            </p>
            <p className="text-gray-400 text-xs">{row.email}</p>
          </div>
        </div>
      ),
    },
    {
      header: 'Role',
      render: (row) => (
        <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2.5 py-1 rounded-full">
          {row.role}
        </span>
      ),
    },
    {
      header: 'Type',
      render: (row) => (
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
          row.is_academic
            ? 'bg-green-100 text-green-700'
            : 'bg-gray-100 text-gray-600'
        }`}>
          {row.is_academic ? 'Academic' : 'Non-Academic'}
        </span>
      ),
    },
    {
      header: 'Subject',
      render: (row) => (
        <span className="text-gray-600 text-sm">
          {row.subject || '—'}
        </span>
      ),
    },
    {
      header: 'Qualification',
      render: (row) => (
        <span className="text-gray-500 text-xs">
          {row.qualification || '—'}
        </span>
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
              setSelectedStaff(row)
              setShowEditModal(true)
            }}
          >
            Edit
          </Button>
          <Button
            size="xs"
            variant="danger"
            onClick={() => {
              setSelectedStaff(row)
              setShowDeleteModal(true)
            }}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ]

  // ── Add Staff ─────────────────────────────────────────
  const handleAdd = async (formData) => {
    setFormLoading(true)
    try {
      // Step 1 — Add staff to staff table
      const newStaff = await createStaff({
        ...formData,
        is_active: true,
      })

      // Step 2 — Create portal account
      const password = generatePassword()

      await createUserAccount({
        email: formData.email,
        password,
        role: 'staff',
        full_name: formData.full_name,
        phone: formData.phone,
        staff_id: newStaff.id,
      })

      toast.success(
        `Staff added! Login credentials sent to ${formData.email}`
      )

      setShowAddModal(false)
      fetchStaff()
    } catch (error) {
      toast.error(error.message || 'Failed to add staff member')
    } finally {
      setFormLoading(false)
    }
  }

  // ── Edit Staff ────────────────────────────────────────
  const handleEdit = async (formData) => {
    setFormLoading(true)
    try {
      const updated = await updateStaff(selectedStaff.id, formData)
      setStaff((prev) =>
        prev.map((s) => (s.id === selectedStaff.id ? updated : s))
      )
      toast.success('Staff member updated successfully')
      setShowEditModal(false)
      setSelectedStaff(null)
    } catch (error) {
      toast.error(error.message || 'Failed to update staff')
    } finally {
      setFormLoading(false)
    }
  }

  // ── Delete Staff ──────────────────────────────────────
  const handleDelete = async () => {
    setFormLoading(true)
    try {
      await deleteStaff(selectedStaff.id)
      setStaff((prev) => prev.filter((s) => s.id !== selectedStaff.id))
      toast.success('Staff member permanently deleted')
      setShowDeleteModal(false)
      setSelectedStaff(null)
    } catch (error) {
      toast.error(error.message || 'Failed to delete staff')
    } finally {
      setFormLoading(false)
    }
  }

  const academicCount = staff.filter((s) => s.is_academic).length
  const nonAcademicCount = staff.filter((s) => !s.is_academic).length

  return (
    <div className="space-y-6">

      {/* ── Page Header ──────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900">Staff</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage all staff members and their portal accounts
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            leftIcon={RefreshCw}
            onClick={fetchStaff}
          >
            Refresh
          </Button>
          <Button
            variant="primary"
            size="sm"
            leftIcon={Plus}
            onClick={() => setShowAddModal(true)}
          >
            Add Staff
          </Button>
        </div>
      </div>

      {/* ── Stats ────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          title="Total Staff"
          value={staff.length}
          icon={Users}
          color="yellow"
        />
        <StatCard
          title="Academic Staff"
          value={academicCount}
          icon={BookOpen}
          color="green"
        />
        <StatCard
          title="Non-Academic Staff"
          value={nonAcademicCount}
          icon={UserCheck}
          color="blue"
        />
      </div>

      {/* ── Search ───────────────────────────────────────── */}
      <div className="bg-white border border-gray-100 rounded-xl p-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, role, or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          />
        </div>
      </div>

      {/* ── Table ────────────────────────────────────────── */}
      <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
        <Table
          columns={columns}
          data={filteredStaff}
          loading={loading}
          sortable
          pagination
          pageSize={10}
          emptyTitle="No staff members found"
          emptyDescription="Add your first staff member by clicking the Add Staff button above"
          emptyIcon={Users}
        />
      </div>

      {/* ── Add Modal ─────────────────────────────────────── */}
      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add Staff Member"
        subtitle="Staff will receive login credentials via email"
        size="lg"
      >
        <StaffForm
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
          setSelectedStaff(null)
        }}
        title="Edit Staff Member"
        size="lg"
      >
        <StaffForm
          mode="edit"
          defaultValues={selectedStaff}
          loading={formLoading}
          onSubmit={handleEdit}
          onCancel={() => {
            setShowEditModal(false)
            setSelectedStaff(null)
          }}
        />
      </Modal>

      {/* ── Delete Confirm ────────────────────────────────── */}
      <ConfirmModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false)
          setSelectedStaff(null)
        }}
        onConfirm={handleDelete}
        loading={formLoading}
        title="Permanently Delete Staff Member?"
        description={`Are you sure you want to permanently delete ${selectedStaff?.full_name}? This will remove their account and all associated data. This action cannot be undone.`}
        confirmText="Yes, Delete Permanently"
        variant="danger"
      />

    </div>
  )
}

export default Staff