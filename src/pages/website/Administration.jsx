


// import { Mail, Phone } from 'lucide-react'

// // Import each image with a UNIQUE name (only for images that exist)
// import mathsTeacherImg from '@assets/images/staff/academic/maths-teacher.jpg'
// import directorImg from '@assets/images/staff/leadership/director.jpg'
// import blessingucheImg from '@assets/images/staff/non-academic/blessinguche.jpg'

// // For images that don't exist yet, don't import them - just use null

// // ── Staff Data ──
// const staffData = [
//   // Leadership
//   {
//     id: 1,
//     full_name: 'Dr. Mrs. Ngozi Okonkwo',
//     role: 'Director',
//     subject: null,
//     qualification: 'Ph.D. Educational Management',
//     bio: 'Visionary leader with over 20 years in educational management.',
//     category: 'leadership',
//     image: directorImg  // Uses the director image (if imported)
//   },
//   {
//     id: 2,
//     full_name: 'Mr. Chinedu Okafor',
//     role: 'Head Teacher',
//     subject: null,
//     qualification: 'M.Ed. Educational Administration',
//     bio: 'Dedicated to academic excellence and student development.',
//     category: 'leadership',
//     image: null  // No image yet
//   },
//   {
//     id: 3,
//     full_name: 'Mrs. Grace Eze',
//     role: 'Deputy Head Teacher',
//     subject: null,
//     qualification: 'M.Ed. Guidance & Counseling',
//     bio: 'Passionate about student welfare and teacher development.',
//     category: 'leadership',
//     image: null  // No image yet
//   },
  
//   // Academic Staff
//   {
//     id: 4,
//     full_name: 'Mr. Peter Obi',
//     role: 'Mathematics Teacher',
//     subject: 'Mathematics',
//     qualification: 'B.Sc. Mathematics',
//     bio: 'Making math fun and accessible for all students.',
//     category: 'academic',
//     image: mathsTeacherImg  // Uses the maths teacher image
//   },
//   {
//     id: 5,
//     full_name: 'Mrs. Stella Okonkwo',
//     role: 'English Teacher',
//     subject: 'English Language',
//     qualification: 'M.A. English',
//     bio: 'Developing strong literacy skills in young learners.',
//     category: 'academic',
//     image: null  // No image yet
//   },
//   {
//     id: 6,
//     full_name: 'Mr. James Okafor',
//     role: 'Science Teacher',
//     subject: 'Basic Science',
//     qualification: 'B.Sc. Science Education',
//     bio: 'Making science fun with practical experiments.',
//     category: 'academic',
//     image: null  // No image yet
//   },
  
//   // Non-Academic Staff
//   {
//     id: 7,
//     full_name: 'Mr. John Egwu',
//     role: 'Accountant',
//     subject: null,
//     qualification: 'B.Sc. Accounting',
//     bio: 'Managing all financial operations of the school.',
//     category: 'non-academic',
//     image: null  // No image yet
//   },
//   {
//     id: 8,
//     full_name: 'Mrs. Blessing Uche',
//     role: 'Administrative Officer',
//     subject: null,
//     qualification: 'BBA Business Admin',
//     bio: 'Coordinating daily school activities and parent communications.',
//     category: 'non-academic',
//     image: blessingucheImg  // No image yet
//   }
// ]

// // ── Staff Card Component ──────────────────────────────────
// const StaffCard = ({ member }) => {
//   const { full_name, role, subject, qualification, bio, image } = member

//   return (
//     <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md hover:border-green-200 transition-all duration-300 group">
//       {/* Photo */}
//       <div className="h-52 bg-green-50 overflow-hidden">
//         {image ? (
//           <img
//             src={image}
//             alt={full_name}
//             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//           />
//         ) : (
//           <div className="w-full h-full flex items-center justify-center">
//             <div className="w-20 h-20 bg-green-800 rounded-full flex items-center justify-center text-white text-2xl font-bold">
//               {full_name?.charAt(0).toUpperCase()}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Info */}
//       <div className="p-5">
//         <h3 className="text-gray-900 font-bold text-base mb-0.5">
//           {full_name}
//         </h3>
//         <p className="text-yellow-600 text-sm font-medium mb-1">{role}</p>
//         {subject && (
//           <p className="text-green-700 text-xs font-medium mb-2">{subject}</p>
//         )}
//         {qualification && (
//           <p className="text-gray-400 text-xs mb-3">{qualification}</p>
//         )}
//         {bio && (
//           <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{bio}</p>
//         )}
//       </div>
//     </div>
//   )
// }

// // ── Main Component ────────────────────────────────────────
// const Administration = () => {
//   const leadership = staffData.filter(s => s.category === 'leadership')
//   const academicStaff = staffData.filter(s => s.category === 'academic')
//   const nonAcademicStaff = staffData.filter(s => s.category === 'non-academic')

//   return (
//     <div className="pt-26">
//       {/* Page Header */}
//       <section className="bg-blue-700 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">
//             Our Team
//           </span>
//           <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
//             Administration
//           </h1>
//           <p className="text-gray-300 text-lg max-w-2xl">
//             Meet the dedicated and passionate team of professionals behind
//             the success of the school.
//           </p>
//         </div>
//       </section>

//       {/* Leadership Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="text-center max-w-2xl mx-auto mb-14">
//           <span className="text-yellow-600 font-semibold text-sm uppercase tracking-widest">
//             School Leadership
//           </span>
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
//             Meet Our Leaders
//           </h2>
//           <p className="text-gray-500 mt-4 text-sm">
//             Visionary leaders committed to delivering excellence in education.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {leadership.map((member) => (
//             <StaffCard key={member.id} member={member} />
//           ))}
//         </div>
//       </section>

//       {/* Academic Staff Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="text-center max-w-2xl mx-auto mb-14">
//           <span className="text-yellow-600 font-semibold text-sm uppercase tracking-widest">
//             Teaching Team
//           </span>
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
//             Academic Staff
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {academicStaff.map((member) => (
//             <StaffCard key={member.id} member={member} />
//           ))}
//         </div>
//       </section>

//       {/* Non-Academic Staff Section */}
//       <section className="bg-gray-50 py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-2xl mx-auto mb-14">
//             <span className="text-yellow-600 font-semibold text-sm uppercase tracking-widest">
//               Support Team
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
//               Non-Academic Staff
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {nonAcademicStaff.map((member) => (
//               <StaffCard key={member.id} member={member} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Administration








































import { Mail, Phone } from 'lucide-react'

// Import each image with a UNIQUE name (only for images that exist)
import directorImg from '@assets/images/staff/leadership/director.jpg'
import headTeacherImg from '@assets/images/staff/leadership/headteacher.jpg'
import deputyHeadImg from '@assets/images/staff/leadership/deputyhead.jpg'

// ── Staff Data (Leadership Only) ──
const staffData = [
  {
    id: 1,
    full_name: 'Honourable Mr. Chiude Romanus',
    role: 'Director',
    subject: null,
    qualification: 'LL.B, BL, MBA',
    bio: 'A distinguished educational philanthropist committed to raising exceptional leaders through quality education and moral excellence.',
    category: 'leadership',
    image: directorImg
  },
  {
    id: 2,
    full_name: 'Mrs. Chinwe P. Okafor',
    role: 'Head Teacher',
    subject: null,
    qualification: 'M.Ed. Educational Administration',
    bio: 'A passionate educator with a heart for excellence, dedicated to nurturing young minds and fostering a culture of academic distinction.',
    category: 'leadership',
    image: headTeacherImg
  },
  {
    id: 3,
    full_name: 'Mrs. Chika Modesta',
    role: 'Deputy Head Teacher',
    subject: null,
    qualification: 'M.Ed. Curriculum Studies',
    bio: 'An innovative curriculum specialist committed to academic rigor, teacher development, and student success.',
    category: 'leadership',
    image: deputyHeadImg
  }
]

// ── Staff Card Component ──────────────────────────────────
const StaffCard = ({ member }) => {
  const { full_name, role, subject, qualification, bio, image } = member

  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md hover:border-green-200 transition-all duration-300 group">
      {/* Photo */}
      <div className="h-52 bg-green-50 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={full_name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-20 h-20 bg-green-800 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {full_name?.charAt(0).toUpperCase()}
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-gray-900 font-bold text-base mb-0.5">
          {full_name}
        </h3>
        <p className="text-yellow-600 text-sm font-medium mb-1">{role}</p>
        {subject && (
          <p className="text-green-700 text-xs font-medium mb-2">{subject}</p>
        )}
        {qualification && (
          <p className="text-gray-400 text-xs mb-3">{qualification}</p>
        )}
        {bio && (
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{bio}</p>
        )}
      </div>
    </div>
  )
}

// ── Main Component ────────────────────────────────────────
const Administration = () => {
  const leadership = staffData.filter(s => s.category === 'leadership')

  return (
    <div className="pt-26">
      {/* Page Header */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">
            Our Team
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Administration
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Meet the dedicated and passionate team of professionals behind
            the success of the school.
          </p>
        </div>
      </section>

      {/* Leadership Section Only */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-widest">
            School Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            Meet Our Leaders
          </h2>
          <p className="text-gray-500 mt-4 text-sm">
            Visionary leaders committed to delivering excellence in education.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadership.map((member) => (
            <StaffCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Administration