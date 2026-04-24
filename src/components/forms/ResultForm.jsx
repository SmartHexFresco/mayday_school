import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Input, { Select, Textarea } from '@components/ui/Input'
import Button from '@components/ui/Button'
import { Save, X } from 'lucide-react'
import { calculateTotal, calculateGrade, getRemark } from '@utils/calculateGrade'
import { useWatch } from 'react-hook-form'

// ── Schema ────────────────────────────────────────────────
const resultSchema = z.object({
  student_id: z.coerce.number().min(1, 'Student is required'),
  subject_id: z.coerce.number().min(1, 'Subject is required'),
  class_id: z.coerce.number().min(1, 'Class is required'),
  term: z.string().min(1, 'Term is required'),
  session: z.string().min(1, 'Session is required'),
  ca1: z.coerce.number().min(0).max(10, 'CA1 max is 10'),
  ca2: z.coerce.number().min(0).max(10, 'CA2 max is 10'),
  assignment: z.coerce.number().min(0).max(10, 'Assignment max is 10'),
  mid_term: z.coerce.number().min(0).max(20, 'Mid-term max is 20'),
  exam: z.coerce.number().min(0).max(50, 'Exam max is 50'),
  attendance: z.coerce.number().min(0).optional(),
  total_days: z.coerce.number().min(0).optional(),
  teacher_comment: z.string().optional(),
  head_teacher_comment: z.string().optional(),
})

// ── Live Score Preview ────────────────────────────────────
const ScorePreview = ({ control }) => {
  const values = useWatch({ control })

  const total = calculateTotal({
    ca1: Number(values.ca1) || 0,
    ca2: Number(values.ca2) || 0,
    assignment: Number(values.assignment) || 0,
    mid_term: Number(values.mid_term) || 0,
    exam: Number(values.exam) || 0,
  })

  const grade = calculateGrade(total)
  const remark = getRemark(total)

  const gradeColors = {
    A: 'text-green-600 bg-green-50 border-green-200',
    B: 'text-blue-600 bg-blue-50 border-blue-200',
    C: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    D: 'text-orange-500 bg-orange-50 border-orange-200',
    F: 'text-red-600 bg-red-50 border-red-200',
  }

  return (
    <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
        Live Score Preview
      </p>
      <div className="grid grid-cols-3 gap-3">
        <div className="text-center">
          <p className="text-2xl font-black text-gray-900">{total}</p>
          <p className="text-gray-400 text-xs">Total / 100</p>
        </div>
        <div
          className={`text-center border rounded-lg py-2 ${
            gradeColors[grade] || gradeColors.F
          }`}
        >
          <p className="text-2xl font-black">{grade}</p>
          <p className="text-xs font-medium">Grade</p>
        </div>
        <div className="text-center">
          <p className="text-base font-bold text-gray-700">{remark}</p>
          <p className="text-gray-400 text-xs">Remark</p>
        </div>
      </div>
    </div>
  )
}

const ResultForm = ({
  defaultValues,
  onSubmit,
  onCancel,
  loading = false,
  mode = 'create',
  students = [],
  subjects = [],
  classes = [],
}) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resultSchema),
    defaultValues: defaultValues || {
      ca1: 0,
      ca2: 0,
      assignment: 0,
      mid_term: 0,
      exam: 0,
    },
  })

  useEffect(() => {
    if (defaultValues) reset(defaultValues)
  }, [defaultValues, reset])

  const termOptions = ['First Term', 'Second Term', 'Third Term']

  const currentYear = new Date().getFullYear()
  const sessionOptions = [
    `${currentYear - 1}/${currentYear}`,
    `${currentYear}/${currentYear + 1}`,
    `${currentYear + 1}/${currentYear + 2}`,
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

      {/* Class + Term + Session */}
      <div>
        <h3 className="text-green-800 font-bold text-sm uppercase tracking-wide border-b border-gray-100 pb-3 mb-5">
          Result Context
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Select
            label="Class"
            required
            error={errors.class_id?.message}
            options={classes.map((c) => ({
              label: c.name,
              value: c.id,
            }))}
            {...register('class_id')}
          />
          <Select
            label="Term"
            required
            error={errors.term?.message}
            options={termOptions.map((t) => ({
              label: t,
              value: t,
            }))}
            {...register('term')}
          />
          <Select
            label="Session"
            required
            error={errors.session?.message}
            options={sessionOptions.map((s) => ({
              label: s,
              value: s,
            }))}
            {...register('session')}
          />
        </div>
      </div>

      {/* Student + Subject */}
      <div>
        <h3 className="text-green-800 font-bold text-sm uppercase tracking-wide border-b border-gray-100 pb-3 mb-5">
          Student & Subject
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Select
            label="Student"
            required
            error={errors.student_id?.message}
            options={students.map((s) => ({
              label: `${s.first_name} ${s.last_name}`,
              value: s.id,
            }))}
            {...register('student_id')}
          />
          <Select
            label="Subject"
            required
            error={errors.subject_id?.message}
            options={subjects.map((s) => ({
              label: s.name,
              value: s.id,
            }))}
            {...register('subject_id')}
          />
        </div>
      </div>

      {/* Scores */}
      <div>
        <h3 className="text-green-800 font-bold text-sm uppercase tracking-wide border-b border-gray-100 pb-3 mb-5">
          Scores
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-5">
          <Input
            label="CA 1"
            type="number"
            min={0}
            max={10}
            required
            error={errors.ca1?.message}
            hint="Max: 10"
            {...register('ca1')}
          />
          <Input
            label="CA 2"
            type="number"
            min={0}
            max={10}
            required
            error={errors.ca2?.message}
            hint="Max: 10"
            {...register('ca2')}
          />
          <Input
            label="Assignment"
            type="number"
            min={0}
            max={10}
            required
            error={errors.assignment?.message}
            hint="Max: 10"
            {...register('assignment')}
          />
          <Input
            label="Mid-Term"
            type="number"
            min={0}
            max={20}
            required
            error={errors.mid_term?.message}
            hint="Max: 20"
            {...register('mid_term')}
          />
          <Input
            label="Exam"
            type="number"
            min={0}
            max={50}
            required
            error={errors.exam?.message}
            hint="Max: 50"
            {...register('exam')}
          />
        </div>

        {/* Live Preview */}
        <ScorePreview control={control} />
      </div>

      {/* Attendance */}
      <div>
        <h3 className="text-green-800 font-bold text-sm uppercase tracking-wide border-b border-gray-100 pb-3 mb-5">
          Attendance
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Days Present"
            type="number"
            min={0}
            error={errors.attendance?.message}
            {...register('attendance')}
          />
          <Input
            label="Total School Days"
            type="number"
            min={0}
            error={errors.total_days?.message}
            {...register('total_days')}
          />
        </div>
      </div>

      {/* Comments */}
      <div>
        <h3 className="text-green-800 font-bold text-sm uppercase tracking-wide border-b border-gray-100 pb-3 mb-5">
          Comments
        </h3>
        <div className="space-y-4">
          <Textarea
            label="Class Teacher's Comment"
            placeholder="e.g. An excellent student who shows great commitment..."
            rows={2}
            {...register('teacher_comment')}
          />
          <Textarea
            label="Head Teacher's Comment"
            placeholder="e.g. Keep up the great work..."
            rows={2}
            {...register('head_teacher_comment')}
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
          {mode === 'create' ? 'Save Result' : 'Update Result'}
        </Button>
      </div>

    </form>
  )
}

export default ResultForm