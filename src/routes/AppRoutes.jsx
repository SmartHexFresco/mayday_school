// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// // Layouts
// import WebsiteLayout from '@components/WebsiteLayout'
// import DashboardLayout from '@components/DashboardLayout'
// import PortalLayout from '@components/PortalLayout'

// // Website Pages
// import Home from '@/redux/axios/Home'
// import About from '@components/About'
// import Admissions from '@components/Admissions'
// import Academics from '@components/Academics'
// import Gallery from '@/redux/axios/Gallery'
// import News from '@components/News'
// import Contact from '@components/Contact'
// import Specialties from '@components/Specialties'
// import Administration from '@/redux/axios/Administration'
// import Reports from '@/redux/axios/Reports'

// // Portal Pages
// import StudentLogin from '@components/StudentLogin'
// import StaffLogin from '@components/StaffLogin'
// import StudentDashboard from '@components/StudentDashboard'
// import StaffDashboard from '@components/StaffDashboard'
// import ManageStudents from '@components/Students'
// import UploadResults from '@components/Results'
// import ViewResults from '@components/Results'


// // Admin Dashboard Pages
// import AdminDashboard from '@/redux/axios/AdminDashboard'
// import Students from '@components/Students'
// import Staff from '@components/Staff'
// import Results from '@components/Results'
// import Classes from '@components/Classes'
// import Subjects from '@components/Subjects'
// import AdminNews from '@components/News'
// import Events from '@components/Events'


// // Guards
// import ProtectedRoute from '@components/ProtectedRoute'

// const AppRoutes = () => {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* ── Public Website Routes ── */}
//         <Route element={<WebsiteLayout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/admissions" element={<Admissions />} />
//           <Route path="/academics" element={<Academics />} />
//           <Route path="/specialties" element={<Specialties />} />
//           <Route path="/administration" element={<Administration />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/news" element={<News />} />
//           <Route path="/reports" element={<Reports />} />
//           <Route path="/contact" element={<Contact />} />
//         </Route>

//         {/* ── Portal Routes (Student & Staff Login) ── */}
//         <Route element={<PortalLayout />}>
//           <Route path="/portal/student-login" element={<StudentLogin />} />
//           <Route path="/portal/staff-login" element={<StaffLogin />} />
//           <Route path="/portal/manage-students" element={<ManageStudents />} />
//           <Route path="/portal/upload-results" element={<UploadResults />} />
//           <Route path="/portal/view-results" element={<ViewResults />} />

//           {/* Protected — Student */}
//           <Route element={<ProtectedRoute allowedRoles={['student']} />}>
//             <Route path="/portal/student-dashboard" element={<StudentDashboard />} />
//           </Route>

//           {/* Protected — Staff */}
//           <Route element={<ProtectedRoute allowedRoles={['staff']} />}>
//             <Route path="/portal/staff-dashboard" element={<StaffDashboard />} />
//           </Route>
//         </Route>

//         {/* ── Admin Dashboard Routes ── */}
//         <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
//           <Route element={<DashboardLayout />}>
//             <Route path="/admin" element={<AdminDashboard />} />
//             <Route path="/admin/students" element={<Students />} />
//             <Route path="/admin/staff" element={<Staff />} />
//             <Route path="/admin/results" element={<Results />} />
//             <Route path="/admin/classes" element={<Classes />} />
//             <Route path="/admin/subjects" element={<Subjects />} />
//             <Route path="/admin/news" element={<AdminNews />} />
//             <Route path="/admin/events" element={<Events />} />
//           </Route>
//         </Route>

//         {/* ── Fallback Route ── */}
//         <Route path="*" element={<Navigate to="/" replace />} />

//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default AppRoutes















import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Layouts
import WebsiteLayout from '@layouts/WebsiteLayout'
import DashboardLayout from '@layouts/DashboardLayout'
import PortalLayout from '@layouts/PortalLayout'

// Website Pages
import Home from '@pages/website/Home'
import About from '@pages/website/About'
import Admissions from '@pages/website/Admissions'
import Academics from '@pages/website/Academics'
import Gallery from '@pages/website/Gallery'
import News from '@pages/website/News'
import Contact from '@pages/website/Contact'
import Specialties from '@pages/website/Specialties'
import Administration from '@pages/website/Administration'
import Reports from '@pages/website/Reports'

// Portal Pages
import StudentLogin from '@pages/portal/StudentLogin'
import StaffLogin from '@pages/portal/StaffLogin'
import StudentDashboard from '@pages/portal/StudentDashboard'
import StaffDashboard from '@pages/portal/StaffDashboard'
import ManageStudents from '@pages/portal/ManageStudents'
import UploadResults from '@pages/portal/UploadResults'
import ViewResults from '@pages/portal/ViewResults'

// Admin Dashboard Pages
import AdminDashboard from '@pages/dashboard/AdminDashboard'
import Students from '@pages/dashboard/Students'
import Staff from '@pages/dashboard/Staff'
import Results from '@pages/dashboard/Results'
import Classes from '@pages/dashboard/Classes'
import Subjects from '@pages/dashboard/Subjects'
import AdminNews from '@pages/dashboard/News'
import Events from '@pages/dashboard/Events'

// Guards
import ProtectedRoute from '@components/ProtectedRoute'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* ── Public Website Routes ── */}
        <Route element={<WebsiteLayout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<div>HOME WORKING</div>} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* ── Portal Routes ── */}
        <Route element={<PortalLayout />}>
          <Route path="/portal/student-login" element={<StudentLogin />} />
          <Route path="/portal/staff-login" element={<StaffLogin />} />

          {/* Protected — Student */}
          <Route element={<ProtectedRoute allowedRoles={['student']} />}>
            <Route path="/portal/student-dashboard" element={<StudentDashboard />} />
            <Route path="/portal/student-results" element={<ViewResults />} />
          </Route>

          {/* Protected — Staff */}
          <Route element={<ProtectedRoute allowedRoles={['staff']} />}>
            <Route path="/portal/staff-dashboard" element={<StaffDashboard />} />
            <Route path="/portal/manage-students" element={<ManageStudents />} />
            <Route path="/portal/upload-results" element={<UploadResults />} />
          </Route>
        </Route>

        {/* ── Admin Dashboard Routes ── */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route element={<DashboardLayout />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/students" element={<Students />} />
            <Route path="/admin/staff" element={<Staff />} />
            <Route path="/admin/results" element={<Results />} />
            <Route path="/admin/classes" element={<Classes />} />
            <Route path="/admin/subjects" element={<Subjects />} />
            <Route path="/admin/news" element={<AdminNews />} />
            <Route path="/admin/events" element={<Events />} />
          </Route>
        </Route>

        {/* ── Fallback ── */}
        <Route path="*" element={<Navigate to="/" replace />} />

        

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes