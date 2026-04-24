




import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {
  Users,
  UserCheck,
  BookOpen,
  GraduationCap,
  Bell,
  Calendar,
  TrendingUp,
  ArrowRight,
  ClipboardList,
} from 'lucide-react'
import { supabase } from '@lib/supabaseClient'
import { useAuth } from '@context/AuthContext'
import { StatCard } from '@components/ui/Card'
import { formatDate } from '@utils/formatDate'

const AdminDashboard = () => {
  const { profile } = useAuth()
  const [stats, setStats] = useState({
    students: 0,
    staff: 0,
    classes: 0,
    admissions: 0,
  })
  const [recentAnnouncements, setRecentAnnouncements] = useState([])
  const [recentAdmissions, setRecentAdmissions] = useState([])
  const [upcomingEvents, setUpcomingEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch all stats in parallel
        const [
          { count: studentCount },
          { count: staffCount },
          { count: classCount },
          { count: admissionCount },
          { data: announcements },
          { data: admissions },
          { data: events },
        ] = await Promise.all([
          supabase
            .from('students')
            .select('*', { count: 'exact', head: true })
            .eq('is_active', true),
          supabase
            .from('staff')
            .select('*', { count: 'exact', head: true })
            .eq('is_active', true),
          supabase
            .from('classes')
            .select('*', { count: 'exact', head: true })
            .eq('is_active', true),
          supabase
            .from('admissions')
            .select('*', { count: 'exact', head: true })
            .eq('status', 'pending'),
          supabase
            .from('announcements')
            .select('*')
            .eq('is_published', true)
            .order('created_at', { ascending: false })
            .limit(5),
          supabase
            .from('admissions')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(5),
          supabase
            .from('events')
            .select('*')
            .eq('is_published', true)
            .gte('event_date', new Date().toISOString().split('T')[0])
            .order('event_date', { ascending: true })
            .limit(4),
        ])

        setStats({
          students: studentCount || 0,
          staff: staffCount || 0,
          classes: classCount || 0,
          admissions: admissionCount || 0,
        })
        setRecentAnnouncements(announcements || [])
        setRecentAdmissions(admissions || [])
        setUpcomingEvents(events || [])
      } catch (error) {
        console.error('Dashboard fetch error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])


  

  // ── Quick Links ───────────────────────────────────────
  const quickLinks = [
    {
      label: 'Students',
      path: '/admin/students',
      icon: Users,
      color: 'bg-green-100 text-green-800',
    },
    {
      label: 'Staff',
      path: '/admin/staff',
      icon: UserCheck,
      color: 'bg-yellow-100 text-yellow-800',
    },
    {
      label: 'Results',
      path: '/admin/results',
      icon: ClipboardList,
      color: 'bg-blue-100 text-blue-800',
    },
    {
      label: 'Classes',
      path: '/admin/classes',
      icon: BookOpen,
      color: 'bg-purple-100 text-purple-800',
    },
    {
      label: 'Subjects',
      path: '/admin/subjects',
      icon: GraduationCap,
      color: 'bg-pink-100 text-pink-800',
    },
    {
      label: 'Announcements',
      path: '/admin/news',
      icon: Bell,
      color: 'bg-orange-100 text-orange-800',
    },
    {
      label: 'Events',
      path: '/admin/events',
      icon: Calendar,
      color: 'bg-red-100 text-red-800',
    },
    {
      label: 'Reports',
      path: '/admin/reports',
      icon: TrendingUp,
      color: 'bg-teal-100 text-teal-800',
    },
  ]

  // ── Admission Status Badge ────────────────────────────
  const StatusBadge = ({ status }) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-700',
      approved: 'bg-green-100 text-green-700',
      rejected: 'bg-red-100 text-red-700',
    }
    return (
      <span
        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
          styles[status] || styles.pending
        }`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    )
  }

  return (
    <div className="space-y-8">

      {/* ── Welcome Header ─────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900">
            Welcome back, {profile?.full_name?.split(' ')[0] ?? 'Admin'} 👋
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Here's what's happening at Clusters of Treasure today.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400 bg-gray-50 border border-gray-100 rounded-lg px-4 py-2.5">
          <Calendar className="w-4 h-4" />
        {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
         })}
        </div>
      </div>

      {/* ── Stats Grid ─────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          title="Students"
          value={loading ? '...' : stats.students}
          icon={Users}
          color="green"
        />
        <StatCard
          title="Staff"
          value={loading ? '...' : stats.staff}
          icon={UserCheck}
          color="yellow"
        />
        <StatCard
          title="Classes"
          value={loading ? '...' : stats.classes}
          icon={BookOpen}
          color="blue"
        />
        <StatCard
          title="Admissions"
          value={loading ? '...' : stats.admissions}
          icon={ClipboardList}
          color="red"
        />
      </div>

      {/* ── Quick Links ─────────────────────────────────── */}
      <div>
        <h2 className="text-gray-900 font-bold text-base mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {quickLinks.map(({ label, path, icon: Icon, color }) => (
            <Link
              key={path + label}
              to={path}
              className="flex flex-col items-center gap-2 bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md hover:border-green-200 transition-all duration-200 group text-center"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <p className="text-gray-700 text-xs font-medium group-hover:text-green-800 transition-colors leading-tight">
                {label}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Main Content Grid ───────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ── Recent Admissions ─────────────────────────── */}
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="text-gray-900 font-bold text-base">
              Recent Admissions
            </h2>
            <Link
              to="/admin/students"
              className="text-green-700 hover:text-green-900 text-xs font-semibold flex items-center gap-1 transition-colors"
            >
              View All
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {loading ? (
            <div className="p-6 space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 animate-pulse"
                >
                  <div className="w-10 h-10 bg-gray-200 rounded-full shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-1/2" />
                    <div className="h-3 bg-gray-200 rounded w-1/3" />
                  </div>
                  <div className="h-6 bg-gray-200 rounded w-16" />
                </div>
              ))}
            </div>
          ) : recentAdmissions.length === 0 ? (
            <div className="p-10 text-center">
              <p className="text-gray-400 text-sm">
                No admissions yet.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-50">
              {recentAdmissions.map((admission) => (
                <div
                  key={admission.id}
                  className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-800 font-bold text-sm shrink-0">
                    {admission.child_first_name?.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900 font-semibold text-sm truncate">
                      {admission.child_first_name}{' '}
                      {admission.child_last_name}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {admission.class_applying} •{' '}
                      {formatDate(admission.created_at)}
                    </p>
                  </div>
                  <StatusBadge status={admission.status} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Upcoming Events ───────────────────────────── */}
        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="text-gray-900 font-bold text-base">
              Upcoming Events
            </h2>
            <Link
              to="/admin/events"
              className="text-green-700 hover:text-green-900 text-xs font-semibold flex items-center gap-1 transition-colors"
            >
              View All
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {loading ? (
            <div className="p-6 space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-3 animate-pulse">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-3/4" />
                    <div className="h-3 bg-gray-200 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : upcomingEvents.length === 0 ? (
            <div className="p-10 text-center">
              <p className="text-gray-400 text-sm">
                No upcoming events.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-50">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-start gap-3 px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-green-800 text-white rounded-lg flex flex-col items-center justify-center shrink-0">
                    <span className="text-xs font-medium leading-none">
                      {new Date(event.event_date).toLocaleString(
                        'en',
                        { month: 'short' }
                      )}
                    </span>
                    <span className="text-lg font-black leading-none">
                      {new Date(event.event_date).getDate()}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900 font-semibold text-sm line-clamp-1">
                      {event.title}
                    </p>
                    {event.venue && (
                      <p className="text-yellow-600 text-xs mt-0.5">
                        {event.venue}
                      </p>
                    )}
                    <p className="text-gray-400 text-xs mt-0.5 line-clamp-1">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* ── Recent Announcements ────────────────────────── */}
      <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-gray-900 font-bold text-base">
            Recent Announcements
          </h2>
          <Link
            to="/admin/news"
            className="text-green-700 hover:text-green-900 text-xs font-semibold flex items-center gap-1 transition-colors"
          >
            Manage All
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {loading ? (
          <div className="p-6 space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse space-y-2">
                <div className="h-4 bg-gray-200 rounded w-1/3" />
                <div className="h-3 bg-gray-200 rounded w-full" />
                <div className="h-3 bg-gray-200 rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : recentAnnouncements.length === 0 ? (
          <div className="p-10 text-center">
            <p className="text-gray-400 text-sm">
              No announcements yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-x divide-gray-50">
            {recentAnnouncements.map((item) => (
              <div
                key={item.id}
                className="px-6 py-5 hover:bg-gray-50 transition-colors border-b border-gray-50"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold bg-green-100 text-green-700 px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                  {item.is_pinned && (
                    <span className="text-xs font-semibold bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-full">
                      Pinned
                    </span>
                  )}
                </div>
                <h3 className="text-gray-900 font-semibold text-sm line-clamp-1 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs line-clamp-2 mb-2">
                  {item.content}
                </p>
                <p className="text-gray-300 text-xs">
                  {formatDate(item.created_at)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default AdminDashboard




