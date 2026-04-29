

// import { Clock, Monitor, Trophy, Users, FileText, BookOpen, Brain, GraduationCap } from 'lucide-react'
// import { motion } from 'framer-motion'

// // ── Animation Variants ───────────────────────────────────
// const fadeUp = {
//   hidden: { opacity: 0, y: 60 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease: 'easeOut' },
//   },
// }

// const stagger = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// }

// // ── Subjects Data by Level ─────────────────────────────────────────

// // Early Years (Pre-Nursery & Nursery)
// const preNurserySubjects = [
//   'Phonics & Early Reading',
//   'Basic Numeracy',
//   'Creative Arts & Crafts',
//   'Music & Movement',
//   'Social Skills',
//   'Oral Communication',
// ]

// const nurserySubjects = [
//   'English Language',
//   'Mathematics',
//   'Basic Science',
//   'Social Habits',
//   'Cultural & Creative Arts',
//   'Religious & Moral Education',
//   'Verbal Reasoning',
//   'Quantitative Reasoning',
// ]

// // Primary School (Grade 1-6)
// const primarySubjects = [
//   'English Language',
//   'Mathematics',
//   'Basic Science & Technology',
//   'Social Studies',
//   'Civic Education',
//   'Cultural & Creative Arts',
//   'Christian Religious Studies',
//   'Physical & Health Education',
//   'Verbal Reasoning',
//   'Quantitative Reasoning',
//   'Information Technology',
//   'French Language',
// ]

// // Junior Secondary School (JSS 1-3)
// const juniorSecondarySubjects = [
//   'English Language',
//   'Mathematics',
//   'Basic Science',
//   'Basic Technology',
//   'Social Studies',
//   'Civic Education',
//   'Christian Religious Studies',
//   'Business Studies',
//   'Agricultural Science',
//   'Home Economics',
//   'French Language',
//   'Computer Studies',
//   'Physical & Health Education',
//   'Cultural & Creative Arts',
// ]

// // Senior Secondary School (SSS 1-3)
// const seniorSecondarySubjects = [
//   'English Language',
//   'Mathematics',
//   'Biology',
//   'Chemistry',
//   'Physics',
//   'Further Mathematics',
//   'Literature in English',
//   'Economics',
//   'Government',
//   'Geography',
//   'Christian Religious Studies',
//   'Agricultural Science',
//   'Computer Science',
//   'Accounting',
//   'Commerce',
//   'History',
// ]

// // ── Extra Activities ──────────────────────────────────────
// const extraActivities = [
//   {
//     icon: Monitor,
//     title: 'E-Learning',
//     description: 'Students have access to digital learning resources, educational videos, and interactive lessons through our e-learning platform.',
//   },
//   {
//     icon: FileText,
//     title: 'Continuous Assessment',
//     description: 'Regular CA tests, assignments, mid-term tests, and end-of-term exams ensure consistent academic monitoring and feedback.',
//   },
//   {
//     icon: Users,
//     title: 'Remedial Classes',
//     description: 'Special coaching and remedial sessions are available for students who need additional academic support.',
//   },
//   {
//     icon: Trophy,
//     title: 'Academic Awards',
//     description: 'Outstanding students are recognized and celebrated at our end-of-term prize-giving ceremonies.',
//   },
// ]

// // ── Academic Calendar ─────────────────────────────────────
// const terms = [
//   {
//     term: 'First Term',
//     months: 'September – December',
//     highlight: 'End-of-term exams, Christmas concert & prize-giving day',
//   },
//   {
//     term: 'Second Term',
//     months: 'January – March',
//     highlight: 'Mid-term break, cultural day & inter-house sports',
//   },
//   {
//     term: 'Third Term',
//     months: 'April – July',
//     highlight: 'Graduation ceremony, open day & long vacation',
//   },
// ]

// // ── Subject Card ──────────────────────────────────────────
// const SubjectCard = ({ subject }) => (
//   <motion.div
//     variants={fadeUp}
//     className="flex items-center gap-3 bg-white border border-gray-100 rounded-lg px-4 py-3 hover:border-yellow-500 hover:shadow-md transition-all duration-300"
//   >
//     <div className="w-2 h-2 bg-yellow-500 rounded-full shrink-0" />
//     <p className="text-gray-700 text-sm font-medium">{subject}</p>
//   </motion.div>
// )

// // ── Level Section Component ──────────────────────────────────
// const LevelSection = ({ title, subtitle, description, subjects, icon: Icon, color }) => (
//   <motion.div
//     variants={fadeUp}
//     className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
//   >
//     <div className={`p-5 ${color} border-b`}>
//       <div className="flex items-center gap-3">
//         <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
//           <Icon className={`w-5 h-5 ${color === 'bg-navy-700' ? 'text-white' : 'text-navy-700'}`} />
//         </div>
//         <div>
//           <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
//           <p className="text-gray-500 text-xs">{subtitle}</p>
//         </div>
//       </div>
//       <p className="text-gray-600 text-sm mt-3">{description}</p>
//     </div>
    
//     <div className="p-5">
//       <div className="grid grid-cols-1 gap-2">
//         {subjects.map((subject) => (
//           <SubjectCard key={subject} subject={subject} />
//         ))}
//       </div>
//     </div>
//   </motion.div>
// )

// const Academics = () => {
//   return (
//     <div className="pt-26">

//       {/* Header - Navy Blue like the uniform */}
//       <motion.section
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="bg-navy-700 text-white py-20"
//         style={{ backgroundColor: '#1a2a4f' }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">
//             Learning & Curriculum
//           </span>
//           <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
//             Academic Activities
//           </h1>
//           <p className="text-gray-300 text-lg max-w-2xl">
//             A rigorous, balanced, and inspiring curriculum designed to
//             develop every child intellectually, creatively, and morally
//             from Pre-Nursery through Senior Secondary School.
//           </p>
//         </div>
//       </motion.section>

//       {/* All Levels Section */}
//       <motion.section
//         variants={stagger}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
//       >
//         <div className="text-center max-w-2xl mx-auto mb-14">
//           <span className="text-yellow-600 font-semibold text-sm uppercase tracking-widest">
//             Our Academic Structure
//           </span>
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
//             Curriculum by Level
//           </h2>
//           <p className="text-gray-500 mt-4 text-sm leading-relaxed">
//             A comprehensive, age-appropriate curriculum designed to meet the needs
//             of every learner at every stage of their educational journey.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Early Years - Yellow accent like uniform */}
//           <LevelSection
//             title="Early Years"
//             subtitle="Pre-Nursery & Nursery"
//             description="Building strong foundations through play-based learning, social development, and early literacy and numeracy skills."
//             subjects={[...preNurserySubjects, ...nurserySubjects]}
//             icon={BookOpen}
//             color="bg-yellow-50"
//           />

//           {/* Primary School - Navy accent like uniform */}
//           <LevelSection
//             title="Primary School"
//             subtitle="Grades 1 - 6"
//             description="Comprehensive education across core subjects, developing critical thinking, creativity, and character."
//             subjects={primarySubjects}
//             icon={BookOpen}
//             color="bg-navy-50"
//           />

//           {/* Junior Secondary - Yellow accent */}
//           <LevelSection
//             title="Junior Secondary"
//             subtitle="JSS 1 - 3"
//             description="Broad-based curriculum preparing students for senior secondary specialization."
//             subjects={juniorSecondarySubjects}
//             icon={Brain}
//             color="bg-yellow-50"
//           />

//           {/* Senior Secondary - Navy accent */}
//           <LevelSection
//             title="Senior Secondary"
//             subtitle="SSS 1 - 3"
//             description="Comprehensive curriculum preparing students for WAEC, NECO, and beyond."
//             subjects={seniorSecondarySubjects}
//             icon={GraduationCap}
//             color="bg-navy-50"
//           />
//         </div>
//       </motion.section>

//       {/* Extra Activities - Navy theme */}
//       <motion.section
//         variants={stagger}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-navy-50 rounded-3xl"
//         style={{ backgroundColor: '#f0f2f8' }}
//       >
//         <div className="text-center max-w-2xl mx-auto mb-14">
//           <span className="text-yellow-600 font-semibold text-sm uppercase tracking-widest">
//             Beyond the Classroom
//           </span>
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
//             Extra-Curricular Activities
//           </h2>
//           <p className="text-gray-500 mt-4 text-sm leading-relaxed">
//             Holistic development through diverse activities that complement our academic programmes.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {extraActivities.map(({ icon: Icon, title, description }) => (
//             <motion.div
//               key={title}
//               variants={fadeUp}
//               whileHover={{ y: -8 }}
//               className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:border-yellow-400"
//             >
//               <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mb-4"
//                 style={{ backgroundColor: '#e8ebf3' }}>
//                 <Icon className="w-6 h-6" style={{ color: '#1a2a4f' }} />
//               </div>
//               <h3 className="text-gray-900 font-semibold mb-2">{title}</h3>
//               <p className="text-gray-500 text-sm">{description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Academic Calendar - Navy Blue */}
//       <motion.section
//         variants={stagger}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="text-white py-20"
//         style={{ backgroundColor: '#1a2a4f' }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-2xl mx-auto mb-14">
//             <span className="text-yellow-400 font-semibold text-sm uppercase tracking-widest">
//               School Calendar
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-bold mt-3">
//               Academic Terms
//             </h2>
//             <p className="text-gray-300 mt-4 text-sm">
//               Our academic year is divided into three terms, each packed with learning, growth, and memorable events.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//             {terms.map((item, index) => (
//               <motion.div
//                 key={item.term}
//                 variants={fadeUp}
//                 whileHover={{ scale: 1.03 }}
//                 className="bg-white/10 border border-white/10 rounded-xl p-6 backdrop-blur hover:bg-white/15 transition-all duration-300"
//               >
//                 <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-navy-700 font-bold mb-4">
//                   {index + 1}
//                 </div>

//                 <h3 className="font-bold text-lg mb-1">{item.term}</h3>

//                 <div className="flex items-center gap-2 mb-3">
//                   <Clock className="w-4 h-4 text-yellow-400" />
//                   <p className="text-yellow-300 text-sm">{item.months}</p>
//                 </div>

//                 <p className="text-gray-300 text-sm">
//                   {item.highlight}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Call to Action - Yellow like uniform accent */}
//       <motion.section
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
//       >
//         <div className="rounded-2xl p-10 text-white"
//           style={{ background: 'linear-gradient(135deg, #1a2a4f 0%, #2a3a5f 100%)' }}>
//           <h2 className="text-3xl font-bold mb-3">Ready to Enroll Your Child?</h2>
//           <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
//             Join our community of excellence. Give your child the gift of quality education.
//           </p>
//           <button className="bg-yellow-500 text-navy-700 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg">
//             Enroll Now
//           </button>
//         </div>
//       </motion.section>

//     </div>
//   )
// }

// export default Academics




















import { Clock, Monitor, Trophy, Users, FileText, BookOpen, Brain, GraduationCap } from 'lucide-react'
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

// ── Subjects Data by Level ─────────────────────────────────────────

// Early Years (Pre-Nursery & Nursery)
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

// Primary School (Grade 1-6)
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

// Junior Secondary School (JSS 1-3)
const juniorSecondarySubjects = [
  'English Language',
  'Mathematics',
  'Basic Science',
  'Basic Technology',
  'Social Studies',
  'Civic Education',
  'Christian Religious Studies',
  'Business Studies',
  'Agricultural Science',
  'Home Economics',
  'French Language',
  'Computer Studies',
  'Physical & Health Education',
  'Cultural & Creative Arts',
]

// Senior Secondary School (SSS 1-3)
const seniorSecondarySubjects = [
  'English Language',
  'Mathematics',
  'Biology',
  'Chemistry',
  'Physics',
  'Further Mathematics',
  'Literature in English',
  'Economics',
  'Government',
  'Geography',
  'Christian Religious Studies',
  'Agricultural Science',
  'Computer Science',
  'Accounting',
  'Commerce',
  'History',
]

// ── Extra Activities ──────────────────────────────────────
const extraActivities = [
  {
    icon: Monitor,
    title: 'E-Learning',
    description: 'Students have access to digital learning resources, educational videos, and interactive lessons through our e-learning platform.',
  },
  {
    icon: FileText,
    title: 'Continuous Assessment',
    description: 'Regular CA tests, assignments, mid-term tests, and end-of-term exams ensure consistent academic monitoring and feedback.',
  },
  {
    icon: Users,
    title: 'Remedial Classes',
    description: 'Special coaching and remedial sessions are available for students who need additional academic support.',
  },
  {
    icon: Trophy,
    title: 'Academic Awards',
    description: 'Outstanding students are recognized and celebrated at our end-of-term prize-giving ceremonies.',
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

// ── Level Section Component ──────────────────────────────────
const LevelSection = ({ title, subtitle, description, subjects, icon: Icon }) => (
  <motion.div
    variants={fadeUp}
    className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
  >
    <div className="p-5 bg-blue-50 border-b">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shadow-sm">
          <Icon className="w-5 h-5 text-blue-700" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
          <p className="text-gray-500 text-xs">{subtitle}</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm mt-3">{description}</p>
    </div>
    
    <div className="p-5">
      <div className="grid grid-cols-1 gap-2">
        {subjects.map((subject) => (
          <SubjectCard key={subject} subject={subject} />
        ))}
      </div>
    </div>
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
        className="bg-blue-700 text-white py-20"
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
            develop every child intellectually, creatively, and morally
            from Pre-Nursery through Senior Secondary School.
          </p>
        </div>
      </motion.section>

      {/* All Levels Section */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-widest">
            Our Academic Structure
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            Curriculum by Level
          </h2>
          <p className="text-gray-500 mt-4 text-sm leading-relaxed">
            A comprehensive, age-appropriate curriculum designed to meet the needs
            of every learner at every stage of their educational journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Early Years */}
          <LevelSection
            title="Early Years"
            subtitle="Pre-Nursery & Nursery"
            description="Building strong foundations through play-based learning, social development, and early literacy and numeracy skills."
            subjects={[...preNurserySubjects, ...nurserySubjects]}
            icon={BookOpen}
          />

          {/* Primary School */}
          <LevelSection
            title="Primary School"
            subtitle="Grades 1 - 6"
            description="Comprehensive education across core subjects, developing critical thinking, creativity, and character."
            subjects={primarySubjects}
            icon={BookOpen}
          />

          {/* Junior Secondary */}
          <LevelSection
            title="Junior Secondary"
            subtitle="JSS 1 - 3"
            description="Broad-based curriculum preparing students for senior secondary specialization."
            subjects={juniorSecondarySubjects}
            icon={Brain}
          />

          {/* Senior Secondary */}
          <LevelSection
            title="Senior Secondary"
            subtitle="SSS 1 - 3"
            description="Comprehensive curriculum preparing students for WAEC, NECO, and beyond."
            subjects={seniorSecondarySubjects}
            icon={GraduationCap}
          />
        </div>
      </motion.section>

      {/* Extra Activities */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 rounded-3xl"
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-widest">
            Beyond the Classroom
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            Extra-Curricular Activities
          </h2>
          <p className="text-gray-500 mt-4 text-sm leading-relaxed">
            Holistic development through diverse activities that complement our academic programmes.
          </p>
        </div>

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

      {/* Academic Calendar */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-blue-900 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-widest">
              School Calendar
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              Academic Terms
            </h2>
            <p className="text-gray-300 mt-4 text-sm">
              Our academic year is divided into three terms, each packed with learning, growth, and memorable events.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {terms.map((item, index) => (
              <motion.div
                key={item.term}
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                className="bg-white/10 border border-white/10 rounded-xl p-6 backdrop-blur hover:bg-white/15 transition-all duration-300"
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

      {/* Call to Action */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
      >
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-10 text-white">
          <h2 className="text-3xl font-bold mb-3">Ready to Enroll Your Child?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join our community of excellence. Give your child the gift of quality education.
          </p>
          <button className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg">
            Enroll Now
          </button>
        </div>
      </motion.section>

    </div>
  )
}

export default Academics