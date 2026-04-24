import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Bus, Shield, Heart } from 'lucide-react'

const levels = [
  {
    name: 'Pre-Nursery',
    age: 'Ages 2 – 3',
    description:
      'A warm and playful introduction to learning through guided play, songs, and creative activities.',
  },
  {
    name: 'Nursery',
    age: 'Ages 3 – 5',
    description:
      'Building early literacy and numeracy skills while encouraging social development and confidence.',
  },
  {
    name: 'Primary',
    age: 'Ages 5 – 12',
    description:
      'A structured academic programme covering core subjects and extra-curricular activities for all-round growth.',
  },
]

const welfare = [
  {
    icon: Shield,
    title: 'Security',
    description:
      'Fully gated campus with trained security personnel and CCTV monitoring at all times.',
  },
  {
    icon: Heart,
    title: 'Health',
    description:
      'On-site first aid support, regular health checks, and a clean hygienic environment for every child.',
  },
  {
    icon: Bus,
    title: 'School Bus',
    description:
      'Safe, comfortable, and reliable school transportation covering major routes across the city.',
  },
  {
    icon: Clock,
    title: 'School Hours',
    description:
      'School opens at 7:30 AM and closes at 2:30 PM. After-school care is available until 4:00 PM.',
  },
]

const About = () => {
  return (
    <div className="pt-26">

      {/* Header */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
            About Our School
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Learn about our history, values, and the dedicated team behind
            MayDay International School.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-yellow-600 font-semibold text-sm uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
              A Legacy of <span className="text-blue-700">Academic Excellence</span>
            </h2>
            <p className="text-gray-600 mb-4">
              MayDay International School was founded with a
              vision to raise confident, well-rounded, and excellent students.
            </p>
            <p className="text-gray-600 mb-4">
              We have grown into a respected institution producing outstanding
              students who excel at every level.
            </p>
            <p className="text-gray-600">
              Education here goes beyond exams — we build character, confidence,
              and lifelong learners.
            </p>
          </div>

          {/* Vision / Mission */}
          <div className="space-y-6">
            <div className="bg-blue-800 text-white rounded-xl p-6">
              <h3 className="text-yellow-400 font-semibold mb-3">Our Vision</h3>
              <p>
                To produce confident, creative, and morally sound leaders.
              </p>
            </div>

            <div className="bg-yellow-600 text-white rounded-xl p-6">
              <h3 className="font-semibold mb-3">Our Mission</h3>
              <p>
                To deliver world-class education that develops the whole child.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border">
              <h3 className="text-blue-800 font-semibold mb-3">Our Motto</h3>
              <p className="italic text-gray-600">
                "Nurturing Excellence, Building Futures"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Classes We Offer
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {levels?.map((level, index) => (
              <div key={level.name || index} className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold text-lg">{level.name}</h3>
                <p className="text-yellow-600 text-sm">{level.age}</p>
                <p className="text-gray-500 text-sm mt-2">
                  {level.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welfare */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Student Welfare
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {welfare?.map(({ icon: Icon, title, description }, index) => (
            <div key={title || index} className="bg-white p-6 rounded-xl shadow">
              <Icon className="w-6 h-6 text-blue-800 mb-3" />
              <h3 className="font-semibold">{title}</h3>
              <p className="text-gray-500 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Location */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Location</h2>

        <div className="h-80 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=Abuja&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>

        <p className="mt-4 text-gray-600">
          Your Full School Address, Enugu, Nigeria
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-blue-800 mt-4"
        >
          Get Directions <ArrowRight />
        </Link>
      </section>

    </div>
  )
}

export default About