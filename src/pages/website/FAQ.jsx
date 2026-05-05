import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle, GraduationCap, BookOpen, Bus, DollarSign, Calendar, Users, Trophy, Award, PhoneCall } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        onClick={onClick}
        className="w-full text-left flex items-center justify-between group cursor-pointer"
      >
        <span className="text-gray-800 font-semibold text-lg hover:text-yellow-600 transition-colors">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp size="20" className="text-yellow-500 shrink-0 ml-4" />
        ) : (
          <ChevronDown size="20" className="text-gray-400 group-hover:text-yellow-500 shrink-0 ml-4" />
        )}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-2 text-gray-500 text-base leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Can school fees be paid in installments?",
      answer: "Yes, we offer flexible payment plans. School fees can be paid termly or in multiple installments. Please contact our accounts office for a detailed payment schedule and available options."
    },
    {
      question: "What curriculum does the school provide?",
      answer: "We follow the Nigerian National Curriculum enhanced with modern teaching methodologies. Our students prepare for First School Leaving Certificate (FSLC), Common Entrance, and other national examinations."
    },
    {
      question: "Why do your children not write the SSCE/NECO examination?",
      answer: "Our students are prepared for external examinations at appropriate levels. We focus on building a strong foundation first. For specific examination pathways, please consult our academic office."
    },
    {
      question: "Is the school certificate accepted in Nigerian Universities?",
      answer: "Yes, our students write approved national examinations and our certificates are fully recognized by all Nigerian universities and institutions of higher learning."
    },
    {
      question: "Does the school offer scholarship programs?",
      answer: "Yes, we offer merit-based scholarships and financial aid for eligible students. Scholarships are awarded based on entrance examination performance, academic excellence, and special talents."
    },
    {
      question: "What extracurricular activities are available?",
      answer: "We offer a wide range of activities including: Debate Club, Science Club, Art Club, Drama Club, Press Club, Mathematics Club, Sports (Football, Basketball, Athletics), Music & Performing Arts, and Cultural Activities."
    },
    {
      question: "Do you have a school bus service?",
      answer: "Yes, we provide reliable school bus transportation within designated routes for the safety and convenience of our students. Contact our transport office for route information and availability."
    },
    {
      question: "How can I schedule a school tour?",
      answer: "To schedule a school tour, please call our admissions office, send an email, or use our WhatsApp button. We'll arrange a convenient time for you to tour our facilities and meet our staff."
    },
    {
      question: "What is the admission process?",
      answer: "The admission process involves: 1) Purchase of admission form, 2) Entrance examination/interview, 3) Submission of required documents (birth certificate, previous report cards, etc.), 4) Payment of fees, and 5) Resumption."
    },
    {
      question: "What is the student-to-teacher ratio?",
      answer: "We maintain a low student-to-teacher ratio of approximately 15:1 to ensure personalized attention and better learning outcomes for every child."
    },
    {
      question: "Do you offer boarding facilities?",
      answer: "Yes, we offer comfortable and secure boarding facilities with dedicated housemasters, nutritious meals, study time supervision, and recreational activities."
    },
    {
      question: "How do I get my child's report card?",
      answer: "Report cards are distributed at the end of each term during parent-teacher conferences. Parents can also access digital copies through our parent portal."
    }
  ]

  return (
    <div className="pt-26 bg-gray-50 min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative h-[350px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/faq-hero.jpg" 
            alt="FAQ" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">Got Questions?</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">
              Frequently Asked <span className="text-yellow-400">Questions</span>
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              Find answers to common questions about our school, admissions, fees, and more.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <HelpCircle className="w-12 h-12 text-yellow-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Everything You Need to Know
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Can't find what you're looking for? Contact our support team
            </p>
          </div>

          {/* FAQ Items */}
          <div>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Still have questions?</h3>
            <p className="text-gray-500 text-sm mb-6">We're here to help you!</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition"
              >
                <PhoneCall size="16" />
                Contact Us
              </a>
              <a
                href="https://wa.me/2348012345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ