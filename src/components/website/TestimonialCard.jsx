import { Star } from 'lucide-react'

const TestimonialCard = ({ testimonial }) => {
  const {
    full_name,
    role,
    photo_url,
    quote,
    rating,
  } = testimonial || {}

  const safeRating = Math.min(Math.max(rating || 0, 0), 5)

  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-white">

      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < safeRating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-500'
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-200 text-sm leading-relaxed mb-6 line-clamp-4">
        "{quote || 'No testimonial provided.'}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        {photo_url ? (
          <img
            src={photo_url}
            alt={full_name || 'User'}
            onError={(e) => (e.target.style.display = 'none')}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0">
            {(full_name?.charAt(0) || 'A').toUpperCase()}
          </div>
        )}

        <div>
          <p className="font-semibold text-sm">
            {full_name || 'Anonymous'}
          </p>
          <p className="text-yellow-400 text-xs">
            {role || 'Parent'}
          </p>
        </div>
      </div>

    </div>
  )
}

export default TestimonialCard