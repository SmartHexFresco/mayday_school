




import { Clock, Monitor, Trophy, Users, FileText } from 'lucide-react'
import { motion } from 'framer-motion'

// ── Animation Variants ───────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

// ── Subjects Data ─────────────────────────────────────────
const preNurserySubjects = [
  'Phonics & Early Reading',
  'Basic Numeracy',
  'Creative Arts & Crafts',
  'Music & Movement',
  'Social Skills',
  'Oral Communication',
]

const nurserySubjects = [
  'English Language',
  'Mathematics',
  'Basic Science',
  'Social Habits',
  'Cultural & Creative Arts',
  'Religious & Moral Education',
  'Verbal Reasoning',
  'Quantitative Reasoning',
]

const primarySubjects = [
  'English Language',
  'Mathematics',
  'Basic Science & Technology',
  'Social Studies',
  'Civic Education',
  'Cultural & Creative Arts',
  'Christian Religious Studies',
  'Physical & Health Education',
  'Verbal Reasoning',
  'Quantitative Reasoning',
  'Information Technology',
  'French Language',
]

// ── Extra Activities ──────────────────────────────────────
const extraActivities = [
  {
    icon: Monitor,
    title: 'E-Learning',
    description:
      'Students have access to digital learning resources, educational videos, and interactive lessons through our e-learning platform.',
  },
  {
    icon: FileText,
    title: 'Continuous Assessment',
    description:
      'Regular CA tests, assignments, mid-term tests, and end-of-term exams ensure consistent academic monitoring and feedback.',
  },
  {
    icon: Users,
     title:'Classes',
    description:
      'Special coaching and remedial sessions are available for students who need additional academic support.',
  },
  {
    icon: Trophy,
    title: 'Academic Awards',
    description:
      'Outstanding students are recognized and celebrated at our end-of-term prize-giving ceremonies.',
  },
]

// ── Academic Calendar ─────────────────────────────────────
const terms = [
  {
    term: 'First Term',
    months: 'September – December',
    highlight: 'End-of-term exams, Christmas concert & prize-giving day',
  },
  {
    term: 'Second Term',
    months: 'January – March',
    highlight: 'Mid-term break, cultural day & inter-house sports',
  },
  {
    term: 'Third Term',
    months: 'April – July',
    highlight: 'Graduation ceremony, open day & long vacation',
  },
]

// ── Subject Card ──────────────────────────────────────────
const SubjectCard = ({ subject }) => (
  <motion.div
    variants={fadeUp}
    className="flex items-center gap-3 bg-white border border-gray-100 rounded-lg px-4 py-3 hover:border-blue-300 hover:shadow-md transition-all duration-300"
  >
    <div className="w-2 h-2 bg-yellow-600 rounded-full shrink-0" />
    <p className="text-gray-700 text-sm font-medium">{subject}</p>
  </motion.div>
)

const Academics = () => {
  return (
    <div className="pt-26">

      {/* Header */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-blue-700 text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">
            Learning & Curriculum
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Academic Activities
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            A rigorous, balanced, and inspiring curriculum designed to
            develop every child intellectually, creatively, and morally.
          </p>
        </div>
      </motion.section>

      {/* Subjects */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {[preNurserySubjects, nurserySubjects, primarySubjects].map((group, i) => (
            <motion.div key={i} variants={stagger}>
              <div className="space-y-2">
                {group.map((subject) => (
                  <SubjectCard key={subject} subject={subject} />
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </motion.section>

      {/* Extra Activities */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {extraActivities.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-blue-800" />
              </div>
              <h3 className="text-gray-900 font-semibold mb-2">{title}</h3>
              <p className="text-gray-500 text-sm">{description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Calendar */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-blue-900 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {terms.map((item, index) => (
              <motion.div
                key={item.term}
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                className="bg-white/10 border border-white/10 rounded-xl p-6 backdrop-blur"
              >
                <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {index + 1}
                </div>

                <h3 className="font-bold text-lg mb-1">{item.term}</h3>

                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  <p className="text-yellow-300 text-sm">{item.months}</p>
                </div>

                <p className="text-gray-300 text-sm">
                  {item.highlight}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    </div>
  )
}

export default Academics