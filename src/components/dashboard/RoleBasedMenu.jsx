import {
  LayoutDashboard,
  Users,
  UserCheck,
  BookOpen,
  FileText,
  School,
  Settings,
  GraduationCap,
} from 'lucide-react'

export const getMenuByRole = (role = 'admin') => {
  const menus = {
    admin: [
      { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
      { name: 'Students', path: '/admin/students', icon: Users },
      { name: 'Staff', path: '/admin/staff', icon: UserCheck },
      { name: 'Classes', path: '/admin/classes', icon: School },
      { name: 'Subjects', path: '/admin/subjects', icon: BookOpen },
      { name: 'Results', path: '/admin/results', icon: FileText },
      { name: 'Settings', path: '/admin/settings', icon: Settings },
    ],

    staff: [
      { name: 'Dashboard', path: '/staff', icon: LayoutDashboard },
      { name: 'My Classes', path: '/staff/classes', icon: School },
      { name: 'Upload Results', path: '/staff/results/upload', icon: FileText },
    ],

    student: [
      { name: 'Dashboard', path: '/student', icon: GraduationCap },
      { name: 'My Results', path: '/student/results', icon: FileText },
      { name: 'Profile', path: '/student/profile', icon: Users },
    ],
  }

  return menus[role] || menus.student
}