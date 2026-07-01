// import { useState, useEffect } from 'react'
// import { MessageCircle, X, Send, Clock, CheckCheck, Users, School, Calendar, DollarSign, PhoneCall } from 'lucide-react'

// const WhatsAppButton = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isHovered, setIsHovered] = useState(false)
//   const [customMessage, setCustomMessage] = useState('')
//   const [lastMessageTime, setLastMessageTime] = useState(null)
  
//   // WhatsApp number (without + sign)
//   const phoneNumber = "234 803 334 3041" // CHANGE THIS TO YOUR NUMBER
  
//   // Business hours
//   const businessHours = {
//     weekdays: '8:00 AM - 5:00 PM',
//     saturday: '9:00 AM - 1:00 PM',
//     sunday: 'Closed'
//   }
  
//   // Quick reply options
//   const quickReplies = [
//     { icon: School, text: "Admission Inquiry", message: "Hello! I'm interested in enrolling my child at MayDay School. Can you please provide information about the admission process?" },
//     { icon: DollarSign, text: "School Fees", message: "What are the current school fees structure including tuition and other charges?" },
//     { icon: Calendar, text: "Deadlines", message: "When is the admission deadline for the upcoming academic session?" },
//     { icon: PhoneCall, text: "Schedule Tour", message: "I would like to schedule a physical tour of the school facilities. When can I come?" },
//     { icon: Users, text: "Curriculum", message: "Can you tell me more about your curriculum and teaching methodology?" },
//     { icon: CheckCheck, text: "Scholarships", message: "Do you offer any scholarships or financial aid programs?" }
//   ]
  
//   // Auto-close modal after 5 minutes of inactivity
//   useEffect(() => {
//     let timer
//     if (isOpen) {
//       timer = setTimeout(() => {
//         setIsOpen(false)
//       }, 300000) // 5 minutes
//     }
//     return () => clearTimeout(timer)
//   }, [isOpen])
  
//   const sendMessage = (message) => {
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
//     window.open(whatsappUrl, '_blank')
//     setLastMessageTime(new Date())
//     setIsOpen(false)
//     setCustomMessage('')
//   }
  
//   const handleCustomMessage = (e) => {
//     e.preventDefault()
//     if (customMessage.trim()) {
//       sendMessage(customMessage)
//     }
//   }
  
//   const getCurrentDay = () => {
//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
//     const today = days[new Date().getDay()]
//     return today
//   }
  
//   const getBusinessHours = () => {
//     const today = getCurrentDay()
//     if (today === 'Saturday') return businessHours.saturday
//     if (today === 'Sunday') return businessHours.sunday
//     return businessHours.weekdays
//   }
  
//   const isOpenNow = () => {
//     const today = getCurrentDay()
//     return today !== 'Sunday'
//   }

//   return (
//     <>
//       <style>{`
//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes slideDown {
//           from {
//             opacity: 1;
//             transform: translateY(0);
//           }
//           to {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//         }
        
//         @keyframes pulse {
//           0%, 100% {
//             transform: scale(1);
//             opacity: 1;
//           }
//           50% {
//             transform: scale(1.2);
//             opacity: 0.7;
//           }
//         }
        
//         @keyframes ring {
//           0% { transform: rotate(0); }
//           25% { transform: rotate(15deg); }
//           50% { transform: rotate(-15deg); }
//           75% { transform: rotate(5deg); }
//           100% { transform: rotate(0); }
//         }
        
//         .animate-slide-up {
//           animation: slideUp 0.3s ease-out;
//         }
        
//         .animate-slide-down {
//           animation: slideDown 0.3s ease-out;
//         }
        
//         .animate-pulse {
//           animation: pulse 2s infinite;
//         }
        
//         .animate-ring {
//           animation: ring 1s ease-in-out infinite;
//           animation-delay: 2s;
//         }
        
//         .whatsapp-gradient {
//           background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
//         }
        
//         .whatsapp-gradient:hover {
//           background: linear-gradient(135deg, #20bd59 0%, #0e6e62 100%);
//         }
//       `}</style>
      
//       <div className="fixed bottom-6 right-6 z-50 font-sans">
//         {/* Chat Modal */}
//         {isOpen && (
//           <div className="absolute bottom-20 right-0 w-[400px] max-w-[calc(100vw-40px)] bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
//             {/* Header */}
//             <div className="whatsapp-gradient px-5 py-4">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <div className="relative">
//                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
//                       <MessageCircle className="w-6 h-6 text-green-600" />
//                     </div>
//                     {isOpenNow() && (
//                       <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></span>
//                     )}
//                   </div>
//                   <div>
//                     <h3 className="text-white font-bold text-base">MayDay Support</h3>
//                     <p className="text-green-100 text-xs flex items-center gap-1">
//                       {isOpenNow() ? (
//                         <>
//                           <Clock size={10} /> Online • {getBusinessHours()}
//                         </>
//                       ) : (
//                         <>
//                           <Clock size={10} /> Closed • {getBusinessHours()}
//                         </>
//                       )}
//                     </p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="text-white hover:text-gray-200 transition-colors"
//                 >
//                   <X size={20} />
//                 </button>
//               </div>
//             </div>
            
//             {/* Welcome Message */}
//             <div className="px-5 py-4 bg-gray-50 border-b border-gray-100">
//               <div className="flex items-start gap-2">
//                 <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
//                   <MessageCircle size="14" className="text-green-600" />
//                 </div>
//                 <div className="bg-white rounded-2xl rounded-tl-none px-4 py-2 shadow-sm">
//                   <p className="text-sm text-gray-700">
//                     👋 Hello! Welcome to MayDay International School. How can we help you today?
//                   </p>
//                   <span className="text-xs text-gray-400 mt-1 block">
//                     {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                   </span>
//                 </div>
//               </div>
//             </div>
            
//             {/* Quick Reply Options */}
//             <div className="max-h-[320px] overflow-y-auto p-4 space-y-3">
//               <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
//                 Quick Replies
//               </p>
//               <div className="grid grid-cols-2 gap-2">
//                 {quickReplies.map((reply, idx) => {
//                   const Icon = reply.icon
//                   return (
//                     <button
//                       key={idx}
//                       onClick={() => sendMessage(reply.message)}
//                       className="flex flex-col items-center gap-2 p-3 bg-gray-50 hover:bg-green-50 rounded-xl transition-all duration-200 group border border-gray-100 hover:border-green-200"
//                     >
//                       <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
//                         <Icon size="18" className="text-green-600" />
//                       </div>
//                       <span className="text-xs font-medium text-gray-700 group-hover:text-green-700">
//                         {reply.text}
//                       </span>
//                     </button>
//                   )
//                 })}
//               </div>
//             </div>
            
//             {/* Custom Message Input */}
//             <div className="p-4 border-t border-gray-100 bg-white">
//               <form onSubmit={handleCustomMessage} className="flex gap-2">
//                 <input
//                   type="text"
//                   value={customMessage}
//                   onChange={(e) => setCustomMessage(e.target.value)}
//                   placeholder="Type your message here..."
//                   className="flex-1 px-4 py-2.5 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-green-400 transition-colors"
//                 />
//                 <button
//                   type="submit"
//                   disabled={!customMessage.trim()}
//                   className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
//                     customMessage.trim()
//                       ? 'whatsapp-gradient text-white shadow-md hover:shadow-lg'
//                       : 'bg-gray-100 text-gray-400 cursor-not-allowed'
//                   }`}
//                 >
//                   <Send size="18" />
//                 </button>
//               </form>
//               <p className="text-xs text-gray-400 text-center mt-3">
//                 You'll be redirected to WhatsApp to continue the conversation
//               </p>
//             </div>
//           </div>
//         )}
        
//         {/* Floating Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           className="relative group"
//         >
//           <div className={`w-14 h-14 rounded-full whatsapp-gradient shadow-lg flex items-center justify-center transition-all duration-300 ${
//             isHovered ? 'scale-110 shadow-xl' : 'scale-100'
//           }`}>
//             {isOpen ? (
//               <X size="24" className="text-white" />
//             ) : (
//               <MessageCircle size="24" className="text-white" />
//             )}
//           </div>
          
//           {/* Notification Badge */}
//           {!isOpen && (
//             <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
//               1
//             </span>
//           )}
          
//           {/* Tooltip */}
//           {isHovered && !isOpen && (
//             <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg">
//               Chat with us on WhatsApp
//               <div className="absolute left-full top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
//             </div>
//           )}
//         </button>
//       </div>
//     </>
//   )
// }

// export default WhatsAppButton










































































































import { useState, useEffect, useRef, useCallback } from 'react'
import { MessageCircle, X, Send, Clock, CheckCheck, Users, School, Calendar, DollarSign, PhoneCall } from 'lucide-react'

// Same WhatsApp line used elsewhere on the site — one constant, one place
// to update it.
const WHATSAPP_NUMBER = '+234 803 334 3041'
const toWhatsAppDigits = (number) => number.replace(/[\s+]/g, '')

const BUTTON_SIZE = 56 // px, matches h-14/w-14
const EDGE_MARGIN = 12 // px, minimum gap kept from any screen edge
const PANEL_WIDTH = 400 // px, desktop panel width used for placement math
const PANEL_HEIGHT = 560 // px, desktop panel height used for placement math
const DRAG_THRESHOLD = 6 // px of movement before a press counts as a drag, not a tap

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [customMessage, setCustomMessage] = useState('')

  // Position is stored as distance from the right/bottom edges, so it
  // naturally stays anchored to a corner as the window resizes.
  const [position, setPosition] = useState({ right: 24, bottom: 24 })
  // Where the panel should open relative to the button, worked out fresh
  // each time it opens so it never gets clipped off-screen.
  const [placement, setPlacement] = useState({ openUp: true, openLeft: false })

  const dragStateRef = useRef(null) // { startX, startY, startRight, startBottom }
  const movedRef = useRef(false)
  const buttonRef = useRef(null)

  // Business hours
  const businessHours = {
    weekdays: '8:00 AM - 5:00 PM',
    saturday: '9:00 AM - 1:00 PM',
    sunday: 'Closed',
  }

  // Quick reply options
  const quickReplies = [
    { icon: School, text: 'Admission Inquiry', message: "Hello! I'm interested in enrolling my child at MayDay School. Can you please provide information about the admission process?" },
    { icon: DollarSign, text: 'School Fees', message: 'What are the current school fees structure including tuition and other charges?' },
    { icon: Calendar, text: 'Deadlines', message: 'When is the admission deadline for the upcoming academic session?' },
    { icon: PhoneCall, text: 'Schedule Tour', message: 'I would like to schedule a physical tour of the school facilities. When can I come?' },
    { icon: Users, text: 'Curriculum', message: 'Can you tell me more about your curriculum and teaching methodology?' },
    { icon: CheckCheck, text: 'Scholarships', message: 'Do you offer any scholarships or financial aid programs?' },
  ]

  // Keep the button on-screen if the window is resized/rotated after it
  // was dragged somewhere.
  useEffect(() => {
    const handleResize = () => {
      setPosition((pos) =>
        clampPosition(pos, window.innerWidth, window.innerHeight)
      )
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const clampPosition = (pos, w, h) => ({
    right: clamp(pos.right, EDGE_MARGIN, Math.max(EDGE_MARGIN, w - BUTTON_SIZE - EDGE_MARGIN)),
    bottom: clamp(pos.bottom, EDGE_MARGIN, Math.max(EDGE_MARGIN, h - BUTTON_SIZE - EDGE_MARGIN)),
  })

  // Auto-close modal after 5 minutes of inactivity
  useEffect(() => {
    if (!isOpen) return undefined
    const timer = setTimeout(() => setIsOpen(false), 300000)
    return () => clearTimeout(timer)
  }, [isOpen])

  const sendMessage = (message) => {
    const whatsappUrl = `https://wa.me/${toWhatsAppDigits(WHATSAPP_NUMBER)}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setIsOpen(false)
    setCustomMessage('')
  }

  const handleCustomMessage = (e) => {
    e.preventDefault()
    if (customMessage.trim()) sendMessage(customMessage)
  }

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days[new Date().getDay()]
  }

  const getBusinessHours = () => {
    const today = getCurrentDay()
    if (today === 'Saturday') return businessHours.saturday
    if (today === 'Sunday') return businessHours.sunday
    return businessHours.weekdays
  }

  const isOpenNow = () => getCurrentDay() !== 'Sunday'

  // Works out whether the panel should open above/below and left/right of
  // the button's *current* position, so it always fits on screen no
  // matter where the button has been dragged to.
  const computePlacement = useCallback(() => {
    const w = window.innerWidth
    const h = window.innerHeight
    const spaceAbove = h - position.bottom - BUTTON_SIZE
    const spaceLeft = w - position.right

    setPlacement({
      openUp: spaceAbove >= PANEL_HEIGHT || spaceAbove >= position.bottom,
      openLeft: spaceLeft >= PANEL_WIDTH,
    })
  }, [position])

  const toggleOpen = () => {
    if (!isOpen) computePlacement()
    setIsOpen((v) => !v)
  }

  // ── Dragging (unified for mouse + touch via Pointer Events) ──────────
  const handlePointerDown = (e) => {
    buttonRef.current?.setPointerCapture(e.pointerId)
    movedRef.current = false
    dragStateRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startRight: position.right,
      startBottom: position.bottom,
    }
    setIsDragging(true)
  }

  const handlePointerMove = (e) => {
    if (!dragStateRef.current) return
    const { startX, startY, startRight, startBottom } = dragStateRef.current
    const deltaX = e.clientX - startX
    const deltaY = e.clientY - startY

    if (Math.abs(deltaX) + Math.abs(deltaY) > DRAG_THRESHOLD) {
      movedRef.current = true
    }

    setPosition(
      clampPosition(
        { right: startRight - deltaX, bottom: startBottom - deltaY },
        window.innerWidth,
        window.innerHeight
      )
    )
  }

  const handlePointerUp = (e) => {
    buttonRef.current?.releasePointerCapture(e.pointerId)
    dragStateRef.current = null
    setIsDragging(false)
    // A press that never moved beyond the threshold counts as a tap/click.
    if (!movedRef.current) toggleOpen()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleOpen()
    }
  }

  // Subtle WhatsApp-style doodle wallpaper, tiled at low opacity.
  const chatWallpaper = {
    backgroundColor: '#ECE5DD',
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23000000' fill-opacity='0.035'%3E%3Ccircle cx='12' cy='12' r='2'/%3E%3Ccircle cx='40' cy='30' r='2'/%3E%3Cpath d='M55 10c3 3 3 7 0 10-3-3-3-7 0-10z'/%3E%3Cpath d='M20 55c3 3 3 7 0 10-3-3-3-7 0-10z'/%3E%3Ccircle cx='65' cy='55' r='2'/%3E%3C/g%3E%3C/svg%3E\")",
  }

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-slide-up { animation: slideUp 0.22s ease-out; }
        .whatsapp-gradient { background: linear-gradient(135deg, #25D366 0%, #128C7E 100%); }
        .whatsapp-gradient:hover { background: linear-gradient(135deg, #20bd59 0%, #0e6e62 100%); }
      `}</style>

      <div
        className="fixed z-50 font-sans"
        style={{ right: position.right, bottom: position.bottom }}
      >
        {/* Chat Panel */}
        {isOpen && (
          <div
            className={`
              fixed inset-x-3 bottom-3 top-auto
              sm:absolute sm:inset-x-auto sm:inset-y-auto
              ${placement.openUp ? 'sm:bottom-[72px] sm:top-auto' : 'sm:top-[72px] sm:bottom-auto'}
              ${placement.openLeft ? 'sm:right-0 sm:left-auto' : 'sm:left-0 sm:right-auto'}
              w-auto sm:w-[400px]
              max-w-[calc(100vw-24px)]
              h-[min(80dvh,640px)] sm:h-auto sm:max-h-[min(80vh,600px)]
              flex flex-col
              bg-white rounded-3xl sm:rounded-2xl overflow-hidden shadow-2xl
              animate-slide-up
            `}
            role="dialog"
            aria-label="WhatsApp chat"
          >
            {/* Header — classic WhatsApp teal */}
            <div className="shrink-0 bg-[#075E54] px-5 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-[#075E54]" />
                    </div>
                    {isOpenNow() && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#075E54]" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base leading-tight">MayDay Support</h3>
                    <p className="text-green-100/90 text-xs flex items-center gap-1">
                      <Clock size={10} />
                      {isOpenNow() ? 'Online' : 'Closed'} • {getBusinessHours()}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                  className="text-white/80 hover:text-white transition-colors p-1"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Scrollable chat body — welcome bubble + quick replies, on
                the classic WhatsApp doodle wallpaper */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4" style={chatWallpaper}>
              {/* Welcome bubble */}
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MessageCircle size={14} className="text-[#075E54]" />
                </div>
                <div className="max-w-[85%] bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm">
                  <p className="text-sm text-gray-800">
                    👋 Hello! Welcome to MayDay International School. How can we help you today?
                  </p>
                  <span className="mt-1 flex items-center justify-end gap-1 text-[11px] text-gray-400">
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    <CheckCheck size={13} className="text-[#53BDEB]" />
                  </span>
                </div>
              </div>

              {/* Quick replies — presented like a WhatsApp interactive
                  list message rather than a plain icon grid */}
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 flex-shrink-0" aria-hidden="true" />
                <div className="max-w-[85%] w-full bg-white rounded-2xl rounded-tl-sm shadow-sm overflow-hidden">
                  <p className="px-4 pt-3 pb-1 text-sm text-gray-800">
                    Pick a topic to get started quickly:
                  </p>
                  <div className="divide-y divide-gray-100">
                    {quickReplies.map((reply, idx) => {
                      const Icon = reply.icon
                      return (
                        <button
                          key={idx}
                          onClick={() => sendMessage(reply.message)}
                          className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-green-50 transition-colors"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100">
                            <Icon size={15} className="text-[#128C7E]" />
                          </span>
                          <span className="text-sm font-medium text-[#075E54]">{reply.text}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Message Input */}
            <div className="shrink-0 p-3 border-t border-gray-100 bg-white">
              <form onSubmit={handleCustomMessage} className="flex items-center gap-2">
                <input
                  type="text"
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="flex-1 min-w-0 px-4 py-2.5 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition-shadow"
                />
                <button
                  type="submit"
                  disabled={!customMessage.trim()}
                  aria-label="Send message"
                  className={`w-11 h-11 shrink-0 rounded-full flex items-center justify-center transition-all ${
                    customMessage.trim()
                      ? 'whatsapp-gradient text-white'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Send size={18} />
                </button>
              </form>
              <p className="text-[11px] text-gray-400 text-center mt-2">
                You'll be redirected to WhatsApp to continue the conversation
              </p>
            </div>
          </div>
        )}

        {/* Floating Button — drag with mouse or finger, tap to open */}
        <button
          ref={buttonRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
          aria-expanded={isOpen}
          className="relative group select-none touch-none cursor-grab active:cursor-grabbing"
        >
          <div
            className={`w-14 h-14 rounded-full whatsapp-gradient shadow-lg flex items-center justify-center transition-transform duration-200 ${
              isHovered && !isDragging ? 'scale-110' : 'scale-100'
            } ${isDragging ? 'shadow-2xl' : ''}`}
          >
            {isOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <MessageCircle size={24} className="text-white" />
            )}
          </div>

          {/* Notification Badge */}
          {!isOpen && !isDragging && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-[10px] font-bold flex items-center justify-center">
              1
            </span>
          )}

          {/* Tooltip */}
          {isHovered && !isOpen && !isDragging && (
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg pointer-events-none">
              Chat with us on WhatsApp
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45" />
            </div>
          )}
        </button>
      </div>
    </>
  )
}

export default WhatsAppButton