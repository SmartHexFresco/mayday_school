// import { useEffect } from 'react'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { z } from 'zod'
// import Input, { Select } from '@components/ui/Input'
// import Button from '@components/ui/Button'
// import { Save, X } from 'lucide-react'

// // ── Schema ────────────────────────────────────────────────
// const studentSchema = z.object({
//   first_name: z.string().min(2, 'First name is required'),
//   last_name: z.string().min(2, 'Last name is required'),
//   date_of_birth: z.string().min(1, 'Date of birth is required'),
//   gender: z.enum(['Male', 'Female'], { message: 'Select a gender' }),
//   class: z.string().min(1, 'Class is required'),
//   parent_name: z.string().min(2, 'Parent name is required'),
//   parent_phone: z.string().min(10, 'Valid phone number required'),
//   parent_email: z.string().email('Valid email required').optional().or(z.literal('')),
//   parent_whatsapp: z.string().optional(),
//   address: z.string().min(5, 'Address is required'),
//   admission_date: z.string().optional(),
// })

// // ── Class Options ─────────────────────────────────────────
// const classOptions = [
//   'Pre-Nursery',
//   'Nursery 1',
//   'Nursery 2',
//   'Primary 1',
//   'Primary 2',
//   'Primary 3',
//   'Primary 4',
//   'Primary 5',
//   'Primary 6',
// ]

// const StudentForm = ({
//   defaultValues,
//   onSubmit,
//   onCancel,
//   loading = false,
//   mode = 'create',
// }) => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(studentSchema),
//     defaultValues: defaultValues || {},
//   })

//   useEffect(() => {
//     if (defaultValues) reset(defaultValues)
//   }, [defaultValues, reset])

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

//       {/* Child Information */}
//       <div>
//         <h3 className="text-green-800 font-bold text-sm uppercase tracking-wide border-b border-gray-100 pb-3 mb-5">
//           Child's Information
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <Input
//             label="First Name"
//             required
//             error={errors.first_name?.message}
//             placeholder="e.g. Emmanuel"
//             {...register('first_name')}
//           />
//           <Input
//             label="Last Name"
//             required
//             error={errors.last_name?.message}
//             placeholder="e.g. Okafor"
//             {...register('last_name')}
//           />
//           <Input
//             label="Date of Birth"
//             type="date"
//             required
//             error={errors.date_of_birth?.message}
//             {...register('date_of_birth')}
//           />
//           <Select
//             label="Gender"
//             required
//             error={errors.gender?.message}
//             options={[
//               { label: 'Male', value: 'Male' },
//               { label: 'Female', value: 'Female' },
//             ]}
//             {...register('gender')}
//           />
//           <Select
//             label="Class"
//             required
//             error={errors.class?.message}
//             options={classOptions.map((c) => ({
//               label: c,
//               value: c,
//             }))}
//             {...register('class')}
//           />
//           <Input
//             label="Admission Date"
//             type="date"
//             error={errors.admission_date?.message}
//             {...register('admission_date')}
//           />
//         </div>
//       </div>

//       {/* Parent Information */}
//       <div>
//         <h3 className="text-green-800 font-bold text-sm uppercase tracking-wide border-b border-gray-100 pb-3 mb-5">
//           Parent / Guardian Information
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <Input
//             label="Parent Full Name"
//             required
//             error={errors.parent_name?.message}
//             placeholder="e.g. Mr. & Mrs. Okafor"
//             containerClassName="sm:col-span-2"
//             {...register('parent_name')}
//           />
//           <Input
//             label="Phone Number"
//             required
//             error={errors.parent_phone?.message}
//             placeholder="+234 XXX XXX XXXX"
//             {...register('parent_phone')}
//           />
//           <Input
//             label="WhatsApp Number"
//             placeholder="+234 XXX XXX XXXX"
//             {...register('parent_whatsapp')}
//           />
//           <Input
//             label="Email Address"
//             type="email"
//             error={errors.parent_email?.message}
//             placeholder="parent@gmail.com"
//             containerClassName="sm:col-span-2"
//             {...register('parent_email')}
//           />
//           <Input
//             label="Home Address"
//             required
//             error={errors.address?.message}
//             placeholder="Full home address"
//             containerClassName="sm:col-span-2"
//             {...register('address')}
//           />
//         </div>
//       </div>

//       {/* Actions */}
//       <div className="flex items-center justify-end gap-3 pt-2">
//         {onCancel && (
//           <Button
//             type="button"
//             variant="ghost"
//             leftIcon={X}
//             onClick={onCancel}
//             disabled={loading}
//           >
//             Cancel
//           </Button>
//         )}
//         <Button
//           type="submit"
//           variant="primary"
//           leftIcon={Save}
//           loading={loading}
//         >
//           {mode === 'create' ? 'Add Student' : 'Save Changes'}
//         </Button>
//       </div>

//     </form>
//   )
// }

// export default StudentForm























// import { useEffect, useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { z } from 'zod'
// import Input, { Select } from '@components/ui/Input'
// import Button from '@components/ui/Button'
// import { Save, X } from 'lucide-react'
// import { supabase } from '@lib/supabaseClient'

// // ── Schema Definition ────────────────────────────────────
// const studentSchema = z.object({
//   first_name: z.string().min(2, 'First name is required'),
//   last_name: z.string().min(2, 'Last name is required'),
//   date_of_birth: z.string().min(1, 'Date of birth is required'),
//   gender: z.enum(['Male', 'Female'], { message: 'Select a gender' }),
//   class_id: z.string().uuid('Please select a class'),
//   parent_name: z.string().min(2, 'Parent name is required'),
//   parent_phone: z.string().min(10, 'Valid phone number required'),
//   parent_email: z.string().email('Valid email required').optional().or(z.literal('')),
//   parent_whatsapp: z.string().optional(),
//   address: z.string().min(5, 'Address is required'),
//   admission_date: z.string().optional(),
// })

// // ── Component ────────────────────────────────────────────
// const StudentForm = ({
//   defaultValues,
//   onSubmit,
//   onCancel,
//   loading = false,
//   mode = 'create',
// }) => {
//   const [classes, setClasses] = useState([])
//   const [fetchingClasses, setFetchingClasses] = useState(true)

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(studentSchema),
//     defaultValues: defaultValues || {},
//   })

//   // Fetch classes from database
//   useEffect(() => {
//     const fetchClasses = async () => {
//       try {
//         const { data, error } = await supabase
//           .from('classes')
//           .select('id, name')
//           .eq('is_active', true)
//           .order('name')

//         if (error) throw error
        
//         setClasses(data || [])
//       } catch (err) {
//         console.error('Error fetching classes:', err)
//       } finally {
//         setFetchingClasses(false)
//       }
//     }

//     fetchClasses()
//   }, [])

//   // Reset form when defaultValues change
//   useEffect(() => {
//     if (defaultValues) {
//       reset(defaultValues)
//     }
//   }, [defaultValues, reset])

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

//       {/* Child Information */}
//       <div>
//         <h3 className="text-green-800 font-bold text-sm uppercase tracking-wide border-b border-gray-100 pb-3 mb-5">
//           Child&apos;s Information
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <Input
//             label="First Name"
//             required
//             error={errors.first_name?.message}
//             placeholder="e.g. Emmanuel"
//             {...register('first_name')}
//           />
//           <Input
//             label="Last Name"
//             required
//             error={errors.last_name?.message}
//             placeholder="e.g. Okafor"
//             {...register('last_name')}
//           />
//           <Input
//             label="Date of Birth"
//             type="date"
//             required
//             error={errors.date_of_birth?.message}
//             {...register('date_of_birth')}
//           />
//           <Select
//             label="Gender"
//             required
//             error={errors.gender?.message}
//             options={[
//               { label: 'Male', value: 'Male' },
//               { label: 'Female', value: 'Female' },
//             ]}
//             {...register('gender')}
//           />
//           <Select
//             label="Class"
//             required
//             error={errors.class_id?.message}
//             disabled={fetchingClasses}
//             options={
//               fetchingClasses
//                 ? [{ label: 'Loading classes...', value: '' }]
//                 : classes.map((c) => ({
//                     label: c.name,
//                     value: c.id,
//                   }))
//             }
//             {...register('class_id')}
//           />
//           <Input
//             label="Admission Date"
//             type="date"
//             error={errors.admission_date?.message}
//             {...register('admission_date')}
//           />
//         </div>
//       </div>

//       {/* Parent Information */}
//       <div>
//         <h3 className="text-green-800 font-bold text-sm uppercase tracking-wide border-b border-gray-100 pb-3 mb-5">
//           Parent / Guardian Information
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <Input
//             label="Parent Full Name"
//             required
//             error={errors.parent_name?.message}
//             placeholder="e.g. Mr. & Mrs. Okafor"
//             containerClassName="sm:col-span-2"
//             {...register('parent_name')}
//           />
//           <Input
//             label="Phone Number"
//             required
//             error={errors.parent_phone?.message}
//             placeholder="+234 XXX XXX XXXX"
//             {...register('parent_phone')}
//           />
//           <Input
//             label="WhatsApp Number"
//             placeholder="+234 XXX XXX XXXX"
//             {...register('parent_whatsapp')}
//           />
//           <Input
//             label="Email Address"
//             type="email"
//             error={errors.parent_email?.message}
//             placeholder="parent@gmail.com"
//             containerClassName="sm:col-span-2"
//             {...register('parent_email')}
//           />
//           <Input
//             label="Home Address"
//             required
//             error={errors.address?.message}
//             placeholder="Full home address"
//             containerClassName="sm:col-span-2"
//             {...register('address')}
//           />
//         </div>
//       </div>

//       {/* Actions */}
//       <div className="flex items-center justify-end gap-3 pt-2">
//         {onCancel && (
//           <Button
//             type="button"
//             variant="ghost"
//             leftIcon={X}
//             onClick={onCancel}
//             disabled={loading}
//           >
//             Cancel
//           </Button>
//         )}
//         <Button
//           type="submit"
//           variant="primary"
//           leftIcon={Save}
//           loading={loading}
//         >
//           {mode === 'create' ? 'Add Student' : 'Save Changes'}
//         </Button>
//       </div>

//     </form>
//   )
// }

// export default StudentForm





















































import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Input, { Select } from '@components/ui/Input'
import Button from '@components/ui/Button'
import { Save, X } from 'lucide-react'
import { supabase } from '@lib/supabaseClient'

// ── Schema ────────────────────────────────────────────────
const studentSchema = z.object({
  first_name: z.string().min(2, 'First name is required'),
  last_name: z.string().min(2, 'Last name is required'),
  date_of_birth: z.string().min(1, 'Date of birth is required'),
  gender: z.enum(['Male', 'Female'], { message: 'Select a gender' }),
  class_id: z.string().min(1, 'Please select a class'), // Changed from uuid to min(1) for flexibility
  parent_name: z.string().min(2, 'Parent name is required'),
  parent_phone: z.string().min(10, 'Valid phone number required'),
  parent_email: z.string().email('Valid email required').optional().or(z.literal('')),
  parent_whatsapp: z.string().optional(),
  address: z.string().min(5, 'Address is required'),
  admission_date: z.string().optional(),
})

const StudentForm = ({
  defaultValues,
  onSubmit,
  onCancel,
  loading = false,
  mode = 'create',
}) => {
  const [classes, setClasses] = useState([])
  const [fetchingClasses, setFetchingClasses] = useState(true)
  const [fetchError, setFetchError] = useState(null)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(studentSchema),
    defaultValues: defaultValues || {},
  })

  // Watch class_id for debugging
  const selectedClassId = watch('class_id')
  console.log('Selected class_id:', selectedClassId)

  // Fetch classes from database
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        console.log('Fetching classes...')
        const { data, error } = await supabase
          .from('classes')
          .select('id, name')
          .eq('is_active', true)
          .order('name')

        console.log('Classes data:', data)
        console.log('Classes error:', error)

        if (error) throw error
        
        if (!data || data.length === 0) {
          console.warn('No classes found in database')
          setFetchError('No classes found. Please add classes first.')
        } else {
          setClasses(data)
        }
      } catch (err) {
        console.error('Error fetching classes:', err)
        setFetchError('Failed to load classes: ' + err.message)
      } finally {
        setFetchingClasses(false)
      }
    }

    fetchClasses()
  }, [])

  // Reset form when defaultValues change
  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues)
    }
  }, [defaultValues, reset])

  // Handle class selection with proper value setting
  const handleClassChange = (e) => {
    const value = e.target.value
    console.log('Class selected:', value)
    setValue('class_id', value, { shouldValidate: true })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

      {/* Error message if classes failed to load */}
      {fetchError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {fetchError}
        </div>
      )}

      {/* Child Information */}
      <div>
        <h3 className="text-green-800 font-bold text-sm uppercase tracking-wide border-b border-gray-100 pb-3 mb-5">
          Child&apos;s Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="First Name"
            required
            error={errors.first_name?.message}
            placeholder="e.g. Emmanuel"
            {...register('first_name')}
          />
          <Input
            label="Last Name"
            required
            error={errors.last_name?.message}
            placeholder="e.g. Okafor"
            {...register('last_name')}
          />
          <Input
            label="Date of Birth"
            type="date"
            required
            error={errors.date_of_birth?.message}
            {...register('date_of_birth')}
          />
          <Select
            label="Gender"
            required
            error={errors.gender?.message}
            options={[
              { label: 'Male', value: 'Male' },
              { label: 'Female', value: 'Female' },
            ]}
            {...register('gender')}
          />
          
          {/* Class dropdown with manual handling */}
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">
              Class <span className="text-red-500">*</span>
            </label>
            <select
              {...register('class_id')}
              onChange={handleClassChange}
              disabled={fetchingClasses || classes.length === 0}
              className={`w-full px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.class_id ? 'border-red-300' : 'border-gray-200'
              } ${fetchingClasses || classes.length === 0 ? 'bg-gray-100' : 'bg-white'}`}
            >
              <option value="">
                {fetchingClasses 
                  ? 'Loading classes...' 
                  : classes.length === 0 
                    ? 'No classes available' 
                    : 'Select a class'}
              </option>
              {classes.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
            </select>
            {errors.class_id && (
              <p className="text-red-500 text-xs mt-1">{errors.class_id.message}</p>
            )}
          </div>

          <Input
            label="Admission Date"
            type="date"
            error={errors.admission_date?.message}
            {...register('admission_date')}
          />
        </div>
      </div>

      {/* Parent Information */}
      <div>
        <h3 className="text-green-800 font-bold text-sm uppercase tracking-wide border-b border-gray-100 pb-3 mb-5">
          Parent / Guardian Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Parent Full Name"
            required
            error={errors.parent_name?.message}
            placeholder="e.g. Mr. & Mrs. Okafor"
            containerClassName="sm:col-span-2"
            {...register('parent_name')}
          />
          <Input
            label="Phone Number"
            required
            error={errors.parent_phone?.message}
            placeholder="+234 XXX XXX XXXX"
            {...register('parent_phone')}
          />
          <Input
            label="WhatsApp Number"
            placeholder="+234 XXX XXX XXXX"
            {...register('parent_whatsapp')}
          />
          <Input
            label="Email Address"
            type="email"
            error={errors.parent_email?.message}
            placeholder="parent@gmail.com"
            containerClassName="sm:col-span-2"
            {...register('parent_email')}
          />
          <Input
            label="Home Address"
            required
            error={errors.address?.message}
            placeholder="Full home address"
            containerClassName="sm:col-span-2"
            {...register('address')}
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
          {mode === 'create' ? 'Add Student' : 'Save Changes'}
        </Button>
      </div>

    </form>
  )
}

export default StudentForm