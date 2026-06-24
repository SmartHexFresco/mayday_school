











import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Layouts
import WebsiteLayout from '@layouts/WebsiteLayout'
import PortalLayout from '@layouts/PortalLayout'

// Website Pages
import Home from '@pages/website/Home'
import About from '@pages/website/About'
import Admissions from '@pages/website/Admissions'
// import Academics from '@pages/website/Academics'
import Contact from '@pages/website/Contact'
//import Specialties from '@pages/website/Specialties'
//import Administration from '@pages/website/Administration'
import Reports from '@pages/website/Reports'
import FAQ from '@pages/website/FAQ'  // Add this import

// Portal Pages
import StudentLogin from '@pages/portal/StudentLogin'
import StaffLogin from '@pages/portal/StaffLogin'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ── Public Website Routes ── */}
        <Route element={<WebsiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          {/* <Route path="/academics" element={<Academics />} /> */}
          {/* <Route path="/specialties" element={<Specialties />} /> */}
          {/* <Route path="/administration" element={<Administration />} /> */}
          <Route path="/reports" element={<Reports />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />  {/* Add this route */}
        </Route>

        {/* ── Portal Routes ── */}
        <Route element={<PortalLayout />}>
          <Route path="/portal/student-login" element={<StudentLogin />} />
          <Route path="/portal/staff-login" element={<StaffLogin />} />
        </Route>

        {/* ── Fallback ── */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes