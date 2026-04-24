







import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { supabase } from '@lib/supabaseClient'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  CheckCircle
} from 'lucide-react'

// Validation Schema
const contactSchema = z.object({
  full_name: z.string().min(2, 'Full name is required'),
  email: z.string().email('Valid email address is required'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

const contactInfo = [
  {
    icon: Phone,
    label: 'Call Us',
    lines: ['+234 800 000 0000', '+234 900 000 0000'],
    action: (line) => `tel:${line.replace(/\s/g, '')}`,
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    lines: ['+234 800 000 0000'],
    action: (line) => `https://wa.me{line.replace(/\s|\+/g, '')}`,
    color: 'bg-yellow-50 text-yellow-700',
  },
  {
    icon: Mail,
    label: 'Email Us',
    lines: ['info@MayDay.edu.ng'],
    action: (line) => `mailto:${line}`,
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    lines: ['Plot 123, School Road,', 'Enugu, Nigeria'],
    action: () => 'https://google.com',
    color: 'bg-red-50 text-red-700',
  },
]

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (formData) => {
    setLoading(true)
    try {
      const { error } = await supabase.from('contact_messages').insert([{ ...formData, is_read: false }])
      if (error) throw error
      toast.success('Message sent!')
      setSubmitted(true)
      reset()
    } catch (error) {
      toast.error('Failed to send.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-gray-50 text-gray-800"

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
        >
          Get in <span className="text-blue-700">Touch</span>
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Have questions about admissions or school life? Our team is here to help you every step of the way.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12">
        
        {/* Left Column: Contact Cards */}
        <div className="space-y-6">
          {contactInfo.map(({ icon: Icon, label, lines, action, color }) => (
            <motion.div 
              whileHover={{ x: 5 }}
              key={label} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-5 items-start"
            >
              <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
                <Icon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">{label}</h3>
                {lines.map((line, i) => (
                  <a key={i} href={action(line)} className="block text-gray-500 hover:text-blue-700 transition-colors text-sm">
                    {line}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Social Links Card - CLEANED VERSION */}
          <div className="bg-blue-700 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                {/* We use only icons we definitely have imported */}
                <div className="p-3 bg-white/10 rounded-full hover:bg-yellow-500 transition-all cursor-pointer">
                  <MessageCircle size={20} />
                </div>
                <div className="p-3 bg-white/10 rounded-full hover:bg-yellow-500 transition-all cursor-pointer">
                  <Mail size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-2">
          {submitted ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-12 rounded-3xl shadow-xl border border-blue-50 text-center h-full flex flex-col justify-center items-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={40} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Message Sent!</h2>
              <p className="text-gray-500 mb-8">Thank you for reaching out. We will get back to you within 24 hours.</p>
              <button onClick={() => setSubmitted(false)} className="text-blue-700 font-bold hover:underline">Send another message</button>
            </motion.div>
          ) : (
            <motion.form 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              onSubmit={handleSubmit(onSubmit)} 
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Full Name</label>
                  <input {...register('full_name')} className={inputClass} placeholder="John Doe" />
                  {errors.full_name && <p className="text-red-500 text-xs mt-1">{errors.full_name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email Address</label>
                  <input {...register('email')} className={inputClass} placeholder="john@example.com" />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Phone (Optional)</label>
                  <input {...register('phone')} className={inputClass} placeholder="+234..." />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Subject</label>
                  <input {...register('subject')} className={inputClass} placeholder="Inquiry about..." />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Your Message</label>
                <textarea {...register('message')} rows="5" className={`${inputClass} resize-none`} placeholder="How can we help you today?" />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button 
                disabled={loading}
                className="w-full bg-blue-700 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-800 transition-all shadow-lg disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send size={20} />
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
