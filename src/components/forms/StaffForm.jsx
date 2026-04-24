import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Input, { Select, Textarea } from '@components/ui/Input'
import Button from '@components/ui/Button'
import { Save, X } from 'lucide-react'

// ── Schema ────────────────────────────────────────────────
const staffSchema = z.object({
  full_name: z.string().min(2, 'Full name is required'),
  role: z.string().min(2, 'Role is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Valid phone required'),
  qualification: z.string().min(2, 'Qualification is required'),
  subject: z.string().optional(),
  bio: z.string().optional(),
  is_academic: z.boolean().optional(),
})

// ── Role Options ──────────────────────────────────────────
const roleOptions = [
  'Director',
  'Head Teacher',
  'Deputy Head Teacher',
  'Class Teacher',
  'Subject Teacher',
  'ICT Teacher',
  'P.E. Teacher',
  'Administrative Officer',
  'School Nurse',
  'Security Officer',
  'Cleaner',
  'Driver',
  'Other',
]

const StaffForm = ({
  defaultValues,
  onSubmit,
  onCancel,
  loading = false,
  mode = 'create',
}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(staffSchema),
    defaultValues: defaultValues || { is_academic: true },
  })

  useEffect(() => {
    if (defaultValues) reset(defaultValues)
  }, [defaultValues, reset])

  const isAcademic = watch('is_academic')

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

      {/* Personal Information */}
      <div>
        <h3 className="text-green-800 font-bold text-sm uppercase tracking-wide border-b border-gray-100 pb-3 mb-5">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            required
            error={errors.full_name?.message}
            placeholder="e.g. Mrs. Adaeze Okonkwo"
            containerClassName="sm:col-span-2"
            {...register('full_name')}
          />
          <Input
            label="Email Address"
            type="email"
            required
            error={errors.email?.message}
            placeholder="staff@school.edu.ng"
            {...register('email')}
          />
          <Input
            label="Phone Number"
            required
            error={errors.phone?.message}
            placeholder="+234 XXX XXX XXXX"
            {...register('phone')}
          />
        </div>
      </div>

      {/* Professional Details */}
      <div>
        <h3 className="text-green-800 font-bold text-sm uppercase tracking-wide border-b border-gray-100 pb-3 mb-5">
          Professional Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Select
            label="Role"
            required
            error={errors.role?.message}
            options={roleOptions.map((r) => ({
              label: r,
              value: r,
            }))}
            {...register('role')}
          />
          <Input
            label="Qualification"
            required
            error={errors.qualification?.message}
            placeholder="e.g. B.Ed Mathematics"
            {...register('qualification')}
          />

          {/* Academic Toggle */}
          <div className="sm:col-span-2 flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-lg px-4 py-3">
            <input
              type="checkbox"
              id="is_academic"
              {...register('is_academic')}
              className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
            />
            <label
              htmlFor="is_academic"
              className="text-sm text-gray-700 cursor-pointer select-none"
            >
              This is an <strong>academic (teaching)</strong> staff
              member
            </label>
          </div>

          {isAcademic && (
            <Input
              label="Subject(s) Taught"
              placeholder="e.g. Mathematics, English"
              containerClassName="sm:col-span-2"
              hint="Separate multiple subjects with a comma"
              {...register('subject')}
            />
          )}

          <Textarea
            label="Short Bio"
            placeholder="Brief description about this staff member..."
            rows={3}
            containerClassName="sm:col-span-2"
            hint="Optional — displayed on the Administration page"
            {...register('bio')}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3 pt-2">
        {onCancel && (
          <Button
            type="button"
            variant="ghost"
            leftIcon={X}
            onClick={onCancel}
            disabled={loading}
          >
            Cancel
          </Button>
        )}
        <Button
          type="submit"
          variant="primary"
          leftIcon={Save}
          loading={loading}
        >
          {mode === 'create' ? 'Add Staff Member' : 'Save Changes'}
        </Button>
      </div>

    </form>
  )
}

export default StaffForm