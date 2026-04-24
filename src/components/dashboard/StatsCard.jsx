const StatCard = ({ title, value, icon: Icon, color = 'bg-green-500' }) => {
  return (
    <div className="bg-white border rounded-xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition">

      {/* Left content */}
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-xl font-bold text-gray-800 mt-1">
          {value}
        </h2>
      </div>

      {/* Icon box */}
      <div className={`${color} w-12 h-12 rounded-lg flex items-center justify-center text-white`}>
        <Icon className="w-5 h-5" />
      </div>

    </div>
  )
}

export default StatCard