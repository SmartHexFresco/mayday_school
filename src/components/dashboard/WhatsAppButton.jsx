import { useState, useEffect } from 'react'
import { MessageCircle, X, Send, Clock, CheckCheck, Users, School, Calendar, DollarSign, PhoneCall } from 'lucide-react'

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [customMessage, setCustomMessage] = useState('')
  const [lastMessageTime, setLastMessageTime] = useState(null)
  
  // WhatsApp number (without + sign)
  const phoneNumber = "2348012345678" // CHANGE THIS TO YOUR NUMBER
  
  // Business hours
  const businessHours = {
    weekdays: '8:00 AM - 5:00 PM',
    saturday: '9:00 AM - 1:00 PM',
    sunday: 'Closed'
  }
  
  // Quick reply options
  const quickReplies = [
    { icon: School, text: "Admission Inquiry", message: "Hello! I'm interested in enrolling my child at MayDay School. Can you please provide information about the admission process?" },
    { icon: DollarSign, text: "School Fees", message: "What are the current school fees structure including tuition and other charges?" },
    { icon: Calendar, text: "Deadlines", message: "When is the admission deadline for the upcoming academic session?" },
    { icon: PhoneCall, text: "Schedule Tour", message: "I would like to schedule a physical tour of the school facilities. When can I come?" },
    { icon: Users, text: "Curriculum", message: "Can you tell me more about your curriculum and teaching methodology?" },
    { icon: CheckCheck, text: "Scholarships", message: "Do you offer any scholarships or financial aid programs?" }
  ]
  
  // Auto-close modal after 5 minutes of inactivity
  useEffect(() => {
    let timer
    if (isOpen) {
      timer = setTimeout(() => {
        setIsOpen(false)
      }, 300000) // 5 minutes
    }
    return () => clearTimeout(timer)
  }, [isOpen])
  
  const sendMessage = (message) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setLastMessageTime(new Date())
    setIsOpen(false)
    setCustomMessage('')
  }
  
  const handleCustomMessage = (e) => {
    e.preventDefault()
    if (customMessage.trim()) {
      sendMessage(customMessage)
    }
  }
  
  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const today = days[new Date().getDay()]
    return today
  }
  
  const getBusinessHours = () => {
    const today = getCurrentDay()
    if (today === 'Saturday') return businessHours.saturday
    if (today === 'Sunday') return businessHours.sunday
    return businessHours.weekdays
  }
  
  const isOpenNow = () => {
    const today = getCurrentDay()
    return today !== 'Sunday'
  }

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(20px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
          }
        }
        
        @keyframes ring {
          0% { transform: rotate(0); }
          25% { transform: rotate(15deg); }
          50% { transform: rotate(-15deg); }
          75% { transform: rotate(5deg); }
          100% { transform: rotate(0); }
        }
        
        .animate-slide-up {
          animation: slideUp 0.3s ease-out;
        }
        
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        
        .animate-ring {
          animation: ring 1s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .whatsapp-gradient {
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
        }
        
        .whatsapp-gradient:hover {
          background: linear-gradient(135deg, #20bd59 0%, #0e6e62 100%);
        }
      `}</style>
      
      <div className="fixed bottom-6 right-6 z-50 font-sans">
        {/* Chat Modal */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 w-[400px] max-w-[calc(100vw-40px)] bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
            {/* Header */}
            <div className="whatsapp-gradient px-5 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    {isOpenNow() && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">MayDay Support</h3>
                    <p className="text-green-100 text-xs flex items-center gap-1">
                      {isOpenNow() ? (
                        <>
                          <Clock size={10} /> Online • {getBusinessHours()}
                        </>
                      ) : (
                        <>
                          <Clock size={10} /> Closed • {getBusinessHours()}
                        </>
                      )}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            {/* Welcome Message */}
            <div className="px-5 py-4 bg-gray-50 border-b border-gray-100">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle size="14" className="text-green-600" />
                </div>
                <div className="bg-white rounded-2xl rounded-tl-none px-4 py-2 shadow-sm">
                  <p className="text-sm text-gray-700">
                    👋 Hello! Welcome to MayDay International School. How can we help you today?
                  </p>
                  <span className="text-xs text-gray-400 mt-1 block">
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Quick Reply Options */}
            <div className="max-h-[320px] overflow-y-auto p-4 space-y-3">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Quick Replies
              </p>
              <div className="grid grid-cols-2 gap-2">
                {quickReplies.map((reply, idx) => {
                  const Icon = reply.icon
                  return (
                    <button
                      key={idx}
                      onClick={() => sendMessage(reply.message)}
                      className="flex flex-col items-center gap-2 p-3 bg-gray-50 hover:bg-green-50 rounded-xl transition-all duration-200 group border border-gray-100 hover:border-green-200"
                    >
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <Icon size="18" className="text-green-600" />
                      </div>
                      <span className="text-xs font-medium text-gray-700 group-hover:text-green-700">
                        {reply.text}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
            
            {/* Custom Message Input */}
            <div className="p-4 border-t border-gray-100 bg-white">
              <form onSubmit={handleCustomMessage} className="flex gap-2">
                <input
                  type="text"
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="flex-1 px-4 py-2.5 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-green-400 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!customMessage.trim()}
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                    customMessage.trim()
                      ? 'whatsapp-gradient text-white shadow-md hover:shadow-lg'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Send size="18" />
                </button>
              </form>
              <p className="text-xs text-gray-400 text-center mt-3">
                You'll be redirected to WhatsApp to continue the conversation
              </p>
            </div>
          </div>
        )}
        
        {/* Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative group"
        >
          <div className={`w-14 h-14 rounded-full whatsapp-gradient shadow-lg flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'scale-110 shadow-xl' : 'scale-100'
          }`}>
            {isOpen ? (
              <X size="24" className="text-white" />
            ) : (
              <MessageCircle size="24" className="text-white" />
            )}
          </div>
          
          {/* Notification Badge */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
              1
            </span>
          )}
          
          {/* Tooltip */}
          {isHovered && !isOpen && (
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg">
              Chat with us on WhatsApp
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
            </div>
          )}
        </button>
      </div>
    </>
  )
}

export default WhatsAppButton