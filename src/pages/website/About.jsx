// import { Link } from 'react-router-dom'
// import { ArrowRight, Clock, Bus, Shield, Heart } from 'lucide-react'

// const levels = [
//   {
//     name: 'Pre-Nursery',
//     age: 'Ages 2 – 3',
//     description:
//       'A warm and playful introduction to learning through guided play, songs, and creative activities.',
//   },
//   {
//     name: 'Nursery',
//     age: 'Ages 3 – 5',
//     description:
//       'Building early literacy and numeracy skills while encouraging social development and confidence.',
//   },
//   {
//     name: 'Primary',
//     age: 'Ages 5 – 12',
//     description:
//       'A structured academic programme covering core subjects and extra-curricular activities for all-round growth.',
//   },
// ]

// const welfare = [
//   {
//     icon: Shield,
//     title: 'Security',
//     description:
//       'Fully gated campus with trained security personnel and CCTV monitoring at all times.',
//   },
//   {
//     icon: Heart,
//     title: 'Health',
//     description:
//       'On-site first aid support, regular health checks, and a clean hygienic environment for every child.',
//   },
//   {
//     icon: Bus,
//     title: 'School Bus',
//     description:
//       'Safe, comfortable, and reliable school transportation covering major routes across the city.',
//   },
//   {
//     icon: Clock,
//     title: 'School Hours',
//     description:
//       'School opens at 7:30 AM and closes at 2:30 PM. After-school care is available until 4:00 PM.',
//   },
// ]

// const About = () => {
//   return (
//     <div className="pt-26">

//       {/* Header */}
//       <section className="bg-blue-700 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">
//             Who We Are
//           </span>
//           <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
//             About Our School
//           </h1>
//           <p className="text-gray-300 text-lg max-w-2xl">
//             Learn about our history, values, and the dedicated team behind
//             MayDay International School.
//           </p>
//         </div>
//       </section>

//       {/* History */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
//           <div>
//             <span className="text-yellow-600 font-semibold text-sm uppercase tracking-widest">
//               Our Story
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
//               A Legacy of <span className="text-blue-700">Academic Excellence</span>
//             </h2>
//             <p className="text-gray-600 mb-4">
//               MayDay International School was founded with a
//               vision to raise confident, well-rounded, and excellent students.
//             </p>
//             <p className="text-gray-600 mb-4">
//               We have grown into a respected institution producing outstanding
//               students who excel at every level.
//             </p>
//             <p className="text-gray-600">
//               Education here goes beyond exams — we build character, confidence,
//               and lifelong learners.
//             </p>
//           </div>

//           {/* Vision / Mission */}
//           <div className="space-y-6">
//             <div className="bg-blue-800 text-white rounded-xl p-6">
//               <h3 className="text-yellow-400 font-semibold mb-3">Our Vision</h3>
//               <p>
//                 To produce confident, creative, and morally sound leaders.
//               </p>
//             </div>

//             <div className="bg-yellow-600 text-white rounded-xl p-6">
//               <h3 className="font-semibold mb-3">Our Mission</h3>
//               <p>
//                 To deliver world-class education that develops the whole child.
//               </p>
//             </div>

//             <div className="bg-gray-50 rounded-xl p-6 border">
//               <h3 className="text-blue-800 font-semibold mb-3">Our Motto</h3>
//               <p className="italic text-gray-600">
//                 "Nurturing Excellence, Building Futures"
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Levels */}
//       <section className="bg-gray-50 py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Classes We Offer
//           </h2>

//           <div className="grid sm:grid-cols-3 gap-6">
//             {levels?.map((level, index) => (
//               <div key={level.name || index} className="bg-white p-6 rounded-xl shadow">
//                 <h3 className="font-bold text-lg">{level.name}</h3>
//                 <p className="text-yellow-600 text-sm">{level.age}</p>
//                 <p className="text-gray-500 text-sm mt-2">
//                   {level.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Welfare */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Student Welfare
//         </h2>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {welfare?.map(({ icon: Icon, title, description }, index) => (
//             <div key={title || index} className="bg-white p-6 rounded-xl shadow">
//               <Icon className="w-6 h-6 text-blue-800 mb-3" />
//               <h3 className="font-semibold">{title}</h3>
//               <p className="text-gray-500 text-sm">{description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Location */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
//         <h2 className="text-3xl font-bold mb-6">Our Location</h2>

//         <div className="h-80 rounded-xl overflow-hidden">
//           <iframe
//             src="https://www.google.com/maps?q=Abuja&output=embed"
//             className="w-full h-full border-0"
//             loading="lazy"
//           />
//         </div>

//         <p className="mt-4 text-gray-600">
//           Your Full School Address, Enugu, Nigeria
//         </p>

//         <Link
//           to="/contact"
//           className="inline-flex items-center gap-2 text-blue-800 mt-4"
//         >
//           Get Directions <ArrowRight />
//         </Link>
//       </section>

//     </div>
//   )
// }

// export default About






















































































































import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Heart,
  Bus,
  Clock,
  Sparkles,
} from "lucide-react";

const levels = [
  {
    name: "Pre-Nursery",
    age: "Ages 2 – 3",
    description:
      "A warm and playful introduction to learning through guided play, songs and creative exploration.",
  },

  {
    name: "Nursery",
    age: "Ages 3 – 5",
    description:
      "Building early literacy and numeracy skills while nurturing confidence and curiosity.",
  },

  {
    name: "Primary",
    age: "Ages 5 – 12",
    description:
      "Delivering a structured academic programme with strong values and holistic development.",
  },
];

const welfare = [
  {
    icon: Shield,
    title: "Security",
    description:
      "Fully secured campus with trained personnel and continuous monitoring.",
  },

  {
    icon: Heart,
    title: "Health Support",
    description:
      "Clean environment with first aid support and regular health awareness.",
  },

  {
    icon: Bus,
    title: "School Bus",
    description:
      "Safe and comfortable transportation covering major routes.",
  },

  {
    icon: Clock,
    title: "School Hours",
    description:
      "School runs from 7:30 AM to 2:30 PM with after-school care available.",
  },
];

const About = () => {
  return (
    <main className="overflow-hidden bg-white">

      {/* Hero */}
      <section className="relative pt-36 pb-28">

        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-3xl">

            <div
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-100
              bg-blue-50
              px-5
              py-3
              text-xs
              uppercase
              tracking-[3px]
              font-semibold
              text-blue-700
              "
            >
              <Sparkles className="w-4 h-4" />

              Who We Are
            </div>

            <h1
              className="
              mt-8
              text-5xl
              md:text-6xl
              font-bold
              tracking-tight
              leading-tight
              text-slate-900
              "
            >
              Shaping Futures Through
              <span className="block text-blue-700">
                Academic Excellence
              </span>
            </h1>

            <p
              className="
              mt-8
              max-w-2xl
              text-lg
              leading-9
              text-slate-600
              "
            >
              MayDay International School is committed to nurturing
              confident, responsible and creative learners who are
              prepared to thrive in an ever-changing world.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/admissions"
                className="
                flex
                items-center
                gap-3
                h-14
                rounded-full
                bg-blue-700
                px-8
                text-white
                font-semibold
                shadow-[0_20px_40px_rgba(29,78,216,.25)]
                transition-all
                duration-300
                hover:scale-105
                "
              >
                Apply Now

                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/contact"
                className="
                flex
                items-center
                gap-3
                h-14
                rounded-full
                border
                border-slate-200
                bg-white
                px-8
                text-slate-700
                font-semibold
                transition-all
                duration-300
                hover:border-blue-100
                hover:text-blue-700
                hover:shadow-xl
                "
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="pb-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>

              <span
                className="
                text-blue-700
                text-sm
                font-semibold
                uppercase
                tracking-[3px]
                "
              >
                Our Story
              </span>

              <h2
                className="
                mt-5
                text-4xl
                md:text-5xl
                font-bold
                text-slate-900
                leading-tight
                "
              >
                A Legacy Built On
                <span className="block text-blue-700">
                  Excellence & Character
                </span>
              </h2>

              <div className="mt-8 space-y-6 text-slate-600 leading-8">

                <p>
                  MayDay International School was founded with the
                  vision of raising confident and morally sound young
                  leaders equipped for the future.
                </p>

                <p>
                  Over the years, we have grown into a respected
                  institution known for academic excellence and a
                  commitment to developing the whole child.
                </p>

                <p>
                  Beyond academics, we focus on building character,
                  confidence and lifelong values that empower every
                  student to succeed.
                </p>

              </div>
            </div>

            {/* Right */}
            <div className="space-y-6">

              <div
                className="
                rounded-[32px]
                bg-blue-700
                p-8
                text-white
                shadow-[0_25px_60px_rgba(29,78,216,.2)]
                "
              >
                <h3 className="text-xl font-semibold">
                  Our Vision
                </h3>

                <p className="mt-4 text-white/80 leading-8">
                  To produce confident, creative and morally sound
                  leaders who positively impact society.
                </p>
              </div>

              <div
                className="
                rounded-[32px]
                border
                border-blue-100
                bg-blue-50
                p-8
                "
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  Our Mission
                </h3>

                <p className="mt-4 text-slate-600 leading-8">
                  To deliver world-class education that develops the
                  intellectual, social and emotional growth of every
                  child.
                </p>
              </div>

              <div
                className="
                rounded-[32px]
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                "
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  Our Motto
                </h3>

                <p className="mt-4 italic text-slate-600">
                  “Nurturing Excellence, Building Futures.”
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
       id="p2m4jf"
      {/* Academic Levels */}
      <section className="bg-slate-50 py-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto">

            <span
              className="
              text-blue-700
              text-sm
              uppercase
              tracking-[3px]
              font-semibold
              "
            >
              Academic Structure
            </span>

            <h2
              className="
              mt-5
              text-4xl
              md:text-5xl
              font-bold
              text-slate-900
              "
            >
              Classes We Offer
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              Our programmes are carefully designed to support every
              stage of a child's development while building confidence,
              creativity and academic excellence.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {levels.map((level, index) => (
              <div
                key={index}
                className="
                rounded-[32px]
                bg-white
                p-8
                border
                border-slate-100
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                "
              >
                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-blue-50
                  flex
                  items-center
                  justify-center
                  text-blue-700
                  font-bold
                  text-lg
                  "
                >
                  0{index + 1}
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {level.name}
                </h3>

                <p className="mt-3 text-blue-700 font-medium">
                  {level.age}
                </p>

                <p className="mt-6 text-slate-600 leading-8">
                  {level.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Student Welfare */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto">

            <span
              className="
              text-blue-700
              text-sm
              uppercase
              tracking-[3px]
              font-semibold
              "
            >
              Student Welfare
            </span>

            <h2
              className="
              mt-5
              text-4xl
              md:text-5xl
              font-bold
              text-slate-900
              "
            >
              Creating A Safe &
              <span className="block text-blue-700">
                Supportive Environment
              </span>
            </h2>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {welfare.map(({ icon: Icon, title, description }, index) => (
              <div
                key={index}
                className="
                rounded-[32px]
                border
                border-slate-100
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                "
              >
                <div
                  className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-50
                  "
                >
                  <Icon className="w-6 h-6 text-blue-700" />
                </div>

                <h3 className="mt-8 text-xl font-semibold text-slate-900">
                  {title}
                </h3>

                <p className="mt-5 text-slate-600 leading-8">
                  {description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Location */}
      <section className="pb-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto">

            <span
              className="
              text-blue-700
              text-sm
              uppercase
              tracking-[3px]
              font-semibold
              "
            >
              Visit Us
            </span>

            <h2
              className="
              mt-5
              text-4xl
              md:text-5xl
              font-bold
              text-slate-900
              "
            >
              Our Location
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              We welcome parents and guardians to experience the
              nurturing environment and world-class facilities that
              make MayDay International School exceptional.
            </p>

          </div>

          <div
            className="
            mt-16
            overflow-hidden
            rounded-[40px]
            border
            border-slate-200
            shadow-xl
            "
          >
            <iframe
              src="https://www.google.com/maps?q=Abuja&output=embed"
              className="h-[500px] w-full border-0"
              loading="lazy"
              title="School Location"
            />
          </div>

          <div className="mt-10 text-center">

            <p className="text-slate-600 text-lg">
              Your Full School Address, Enugu, Nigeria
            </p>

            <Link
              to="/contact"
              className="
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-blue-700
              px-8
              h-14
              text-white
              font-semibold
              shadow-[0_20px_40px_rgba(29,78,216,.25)]
              transition-all
              duration-300
              hover:scale-105
              "
            >
              Get Directions

              <ArrowRight className="w-5 h-5" />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
};

export default About;


