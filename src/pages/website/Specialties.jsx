import {
  Monitor,
  Music,
  Palette,
  Sun,
  Globe,
  GraduationCap,
  Users,
  Heart,
} from 'lucide-react'

// ── Specialties Data ──────────────────────────────────────
const specialties = [
  {
    icon: Monitor,
    title: 'Digital ICT Prowess',
    description:
      'Our fully equipped ICT laboratory exposes students to computer literacy, typing skills, and basic programming from an early age. We believe digital skills are essential for the 21st century learner.',
    color: 'bg-blue-100 text-blue-800',
  },
  {
    icon: Sun,
    title: 'Summer Holiday Lessons',
    description:
      'Our summer holiday programme offers intensive academic coaching, fun learning packages, and special events designed to keep students sharp and engaged during the long vacation.',
    color: 'bg-orange-100 text-orange-800',
  },
  {
    icon: Users,
    title: 'Club Activities',
    description:
      'Students can join a variety of clubs including the Debate Club, Science Club, Art Club, Drama Club, and Press Club — each designed to develop unique talents and leadership skills.',
    color: 'bg-green-100 text-green-800',
  },
  {
    icon: Globe,
    title: 'Cultural Activities',
    description:
      'Our annual cultural day celebrates the rich diversity of Nigeria and the world. Students dress in traditional attire, perform cultural dances, and showcase the beauty of our heritage.',
    color: 'bg-purple-100 text-purple-800',
  },
  {
    icon: GraduationCap,
    title: 'Graduation Ceremony',
    description:
      'Our graduation ceremony is a grand celebration of excellence. We honour our graduating pupils with a memorable ceremony that marks their transition to the next chapter of their academic journey.',
    color: 'bg-green-100 text-green-800',
  },
  {
    icon: Heart,
    title: 'Christmas Party',
    description:
      'Our end-of-year Christmas celebration is a highlight of the school calendar — filled with performances, games, carol singing, gift sharing, and lots of fun for every child.',
    color: 'bg-red-100 text-red-800',
  },
  {
    icon: Music,
    title: 'Music & Performing Arts',
    description:
      'Students are introduced to music, drama, and dance as core elements of holistic development. Our annual concert showcases the incredible talents of our students.',
    color: 'bg-pink-100 text-pink-800',
  },
  {
    icon: Palette,
    title: 'Art & Creativity',
    description:
      'Creative expression is encouraged at every level. From painting and drawing to craft projects, our art programme helps children develop imagination, focus, and fine motor skills.',
    color: 'bg-indigo-100 text-indigo-800',
  },
]

// ── Clubs Data ────────────────────────────────────────────
const clubs = [
  {
    name: 'Debate Club',
    impact:
      'Develops critical thinking, public speaking, and confident communication skills.',
  },
  {
    name: 'Science Club',
    impact:
      'Encourages curiosity and scientific inquiry through fun experiments and projects.',
  },
  {
    name: 'Art Club',
    impact:
      'Nurtures creativity and artistic expression through various visual art forms.',
  },
  {
    name: 'Drama Club',
    impact:
      'Builds confidence, teamwork, and self-expression through theatrical performances.',
  },
  {
    name: 'Press Club',
    impact:
      'Develops writing, journalism, and communication skills for future media stars.',
  },
  {
    name: 'Mathematics Club',
    impact:
      'Makes numbers fun through puzzles, competitions, and problem-solving challenges.',
  },
]

const Specialties = () => {
  return (
    <div className="pt-26">

      {/* ── Page Header ──────────────────────────────────── */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">
            What Makes Us Unique
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
            School Specialties
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Beyond academics, we offer a rich variety of activities and programmes
            that nurture well-rounded, confident, and talented individuals.
          </p>
        </div>
      </section>

      {/* ── Specialties Grid ─────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-widest">
            Our Programmes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            The MayDay Experience
          </h2>
          <p className="text-gray-500 mt-4 text-sm leading-relaxed">
            We go beyond textbooks to provide a truly enriching school experience
            for every child.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map(({ icon: Icon, title, description, color }) => (
            <div
              key={title}
              className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-blue-200 transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color}`}
              >
                <Icon className="w-6 h-6" />
              </div>

              <h3 className="text-gray-900 font-semibold mb-2 group-hover:text-blue-800 transition-colors">
                {title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Club Activities ──────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-yellow-600 font-semibold text-sm uppercase tracking-widest">
              Student Clubs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Club Activities & Their Impact
            </h2>
            <p className="text-gray-500 mt-4 text-sm">
              Our clubs are more than activities — they are platforms for leadership,
              growth, and discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club, index) => (
              <div
                key={`${club.name}-${index}`}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2.5 h-2.5 bg-yellow-600 rounded-full shrink-0" />
                  <h3 className="text-gray-900 font-semibold">{club.name}</h3>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed ml-5">
                  {club.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Summer Holiday ───────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-yellow-600 rounded-2xl px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            <div className="text-white">
              <span className="bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest">
                Every Long Vacation
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
                Summer Holiday Lessons
              </h2>

              <p className="text-yellow-100 leading-relaxed mb-4">
                Our summer programme is one of the most anticipated events on our
                school calendar. It combines rigorous academic coaching with fun
                activities, field trips, and special packages that keep children engaged
                and learning.
              </p>

              <p className="text-yellow-100 leading-relaxed">
                Registration opens at the end of every third term. Contact us to secure
                your child's spot early — spaces fill up fast!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                'Academic Coaching',
                'Arts & Crafts',
                'Sports & Games',
                'Educational Trips',
                'Drama & Music',
                'Special Packages',
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white/20 border border-white/20 rounded-lg p-4 text-center text-white text-sm font-medium"
                >
                  {item}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Events Highlights ────────────────────────────── */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-widest">
              Annual Events
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              Memorable School Events
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Graduation Day',
                description:
                  'A grand celebration honouring our graduating pupils with certificates, awards, and performances.',
              },
              {
                title: 'Cultural Day',
                description:
                  'Students celebrate Nigerian and global cultures through traditional costumes, food, and performances.',
              },
              {
                title: 'Open Day',
                description:
                  'Parents visit classrooms, review progress, and engage directly with teachers and management.',
              },
              {
                title: 'Christmas Party',
                description:
                  'A joyful end-of-year celebration featuring carol singing, talent shows, games, and gift sharing.',
              },
            ].map((event) => (
              <div
                key={event.title}
                className="bg-white/10 border border-white/10 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <h3 className="text-yellow-400 font-semibold mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}

export default Specialties