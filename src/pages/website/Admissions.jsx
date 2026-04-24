import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { supabase } from '@lib/supabaseClient'
import toast from 'react-hot-toast'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

// ── Validation Schema ─────────────────────────────────────
const admissionSchema = z.object({
  child_first_name: z.string().trim().min(2, 'First name is required'),
  child_last_name: z.string().trim().min(2, 'Last name is required'),
  date_of_birth: z.string().min(1, 'Date of birth is required'),
  gender: z.enum(['Male', 'Female'], { message: 'Select a gender' }),
  class_applying: z.string().min(1, 'Please select a class'),
  previous_school: z.string().optional(),
  parent_name: z.string().trim().min(2, 'Parent name is required'),
  parent_phone: z.string().min(10).regex(/^[0-9+]+$/),
  parent_email: z.string().email('Valid email is required'),
  address: z.string().trim().min(5, 'Address is required'),
})

// ── Data ─────────────────────────────────────────────
const availableClasses = [
  'Pre-Nursery','Nursery 1','Nursery 2',
  'Primary 1','Primary 2','Primary 3',
  'Primary 4','Primary 5','Primary 6',
]

const steps = [
  { step: '01', title: 'Submit Application', description: 'Fill the form correctly.' },
  { step: '02', title: 'Assessment', description: 'Short evaluation for the child.' },
  { step: '03', title: 'Admission Offer', description: 'Offer letter issued.' },
  { step: '04', title: 'Enrollment', description: 'Complete registration.' },
]

// ── Animations ───────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const Admissions = () => {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(admissionSchema),
    defaultValues: {
      gender: '',
      class_applying: '',
    },
  })

  const onSubmit = async (formData) => {
    setLoading(true)
    try {
      const { error } = await supabase
        .from('admissions')
        .insert([{ ...formData, status: 'pending' }])

      if (error) throw error

      toast.success('Application submitted successfully!')
      setSubmitted(true)
      reset()
    } catch (error) {
      toast.error(error.message || 'Submission failed')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 " +
    "placeholder:text-gray-400 shadow-sm transition-all duration-200 " +
    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-300"

  const labelClass = "block text-sm font-semibold text-gray-700 mb-1"
  const errorText = "text-red-500 text-xs mt-1"

  return (
    <div className="pt-26 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-blue-700 text-white py-20 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold">Admissions</h1>
        <p className="text-blue-100 mt-3 max-w-xl mx-auto px-4 text-lg">
          Begin your child's journey at MayDay International School.
        </p>
      </motion.section>

      {/* STEPS */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-12"
      >
        {steps.map((item) => (
          <motion.div
            key={item.step}
            variants={fadeUp}
            className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
          >
            <span className="text-blue-600 font-bold text-sm uppercase">
              Step {item.step}
            </span>
            <h3 className="font-bold text-lg mt-2">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* FORM */}
      <section className="max-w-4xl mx-auto px-4 py-16">

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-white p-12 rounded-3xl shadow-xl"
          >
            <CheckCircle className="mx-auto text-green-600 mb-4" size={40} />
            <h2 className="text-2xl font-bold">Application Received!</h2>

            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 bg-blue-700 text-white px-6 py-2 rounded-xl"
            >
              Submit Another
            </button>
          </motion.div>
        ) : (

          <motion.form
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-3xl shadow-2xl space-y-6"
          >

            {/* Child Info */}
            <motion.div variants={fadeUp}>
              <label className={labelClass}>First Name</label>
              <input {...register('child_first_name')} className={inputClass} />
              {errors.child_first_name && <p className={errorText}>{errors.child_first_name.message}</p>}
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className={labelClass}>Last Name</label>
              <input {...register('child_last_name')} className={inputClass} />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className={labelClass}>Date of Birth</label>
              <input type="date" {...register('date_of_birth')} className={inputClass} />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className={labelClass}>Gender</label>
              <select {...register('gender')} className={inputClass}>
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className={labelClass}>Class Applying</label>
              <select {...register('class_applying')} className={inputClass}>
                <option value="">Select Class</option>
                {availableClasses.map(c => <option key={c}>{c}</option>)}
              </select>
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className={labelClass}>Parent Name</label>
              <input {...register('parent_name')} className={inputClass} />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className={labelClass}>Phone</label>
              <input {...register('parent_phone')} className={inputClass} />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className={labelClass}>Email</label>
              <input {...register('parent_email')} className={inputClass} />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className={labelClass}>Address</label>
              <textarea {...register('address')} className={inputClass} />
            </motion.div>

            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className="w-full bg-blue-700 text-white py-3 rounded-xl flex justify-center items-center gap-2"
            >
              {loading ? 'Submitting...' : 'Submit Application'}
              <ArrowRight size={18} />
            </motion.button>

          </motion.form>
        )}
      </section>
    </div>
  )
}

export default Admissions