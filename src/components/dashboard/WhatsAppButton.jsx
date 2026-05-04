import { useState, useEffect } from 'react'
import { MessageCircle, X, Send, Phone, Mail, Clock } from 'lucide-react'

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [customMessage, setCustomMessage] = useState('')
  
  // Your WhatsApp number (format: country code + number, no plus sign)
  const phoneNumber = "2348012345678" // CHANGE THIS TO YOUR NUMBER
  
  // Pre-defined quick messages
  const quickMessages = [
    { icon: "📚", text: "I want to enroll my child", emoji: "🎓" },
    { icon: "💰", text: "What are the school fees?", emoji: "💵" },
    { icon: "📅", text: "When is the admission deadline?", emoji: "⏰" },
    { icon: "🏫", text: "I want to book a school tour", emoji: "👀" },
    { icon: "📞", text: "Call me back please", emoji: "📱" },
    { icon: "❓", text: "General inquiry", emoji: "🤔" }
  ]
  
  const sendMessage = (message) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }
  
  const handleCustomMessage = (e) => {
    e.preventDefault()
    if (customMessage.trim()) {
      sendMessage(customMessage)
      setCustomMessage('')
    }
  }
  
  // Hide button when scrolling up (optional)
  useEffect(() => {
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      lastScrollY = currentScrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  if (!isVisible) return null
  
  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 9999,
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
    }}>
      
      {/* Chat Modal */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '80px',
          right: '0',
          width: '380px',
          maxWidth: 'calc(100vw - 40px)',
          backgroundColor: 'white',
          borderRadius: '20px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden',
          animation: 'slideUp 0.3s ease-out'
        }}>
          
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            padding: '20px',
            color: 'white'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                backgroundColor: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}>
                <MessageCircle style={{ width: '28px', height: '28px', color: '#25D366' }} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>Chat with Us</h3>
                <p style={{ margin: '4px 0 0', fontSize: '12px', opacity: 0.9 }}>Typically replies within minutes</p>
              </div>
            </div>
          </div>
          
          {/* Business Hours */}
          <div style={{
            padding: '12px 20px',
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12px',
            color: '#6b7280'
          }}>
            <Clock style={{ width: '14px', height: '14px' }} />
            <span>Mon-Fri: 8am - 5pm | Sat: 9am - 1pm</span>
          </div>
          
          {/* Quick Messages */}
          <div style={{ padding: '16px 20px', borderBottom: '1px solid #f0f0f0' }}>
            <p style={{ margin: '0 0 12px', fontSize: '13px', fontWeight: '600', color: '#374151' }}>
              Quick replies:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
              {quickMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => sendMessage(msg.text)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 12px',
                    backgroundColor: '#f0fdf4',
                    border: '1px solid #dcfce7',
                    borderRadius: '12px',
                    fontSize: '12px',
                    color: '#166534',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#dcfce7'
                    e.currentTarget.style.transform = 'translateX(2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f0fdf4'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <span style={{ fontSize: '16px' }}>{msg.icon}</span>
                  <span style={{ flex: 1 }}>{msg.text}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Custom Message Input */}
          <form onSubmit={handleCustomMessage} style={{ padding: '16px 20px', display: 'flex', gap: '8px' }}>
            <input
              type="text"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              placeholder="Type your message here..."
              style={{
                flex: 1,
                padding: '12px 16px',
                border: '1px solid #e5e7eb',
                borderRadius: '30px',
                fontSize: '14px',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#25D366'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
            />
            <button
              type="submit"
              disabled={!customMessage.trim()}
              style={{
                padding: '12px 20px',
                backgroundColor: customMessage.trim() ? '#25D366' : '#d1d5db',
                border: 'none',
                borderRadius: '30px',
                color: 'white',
                cursor: customMessage.trim() ? 'pointer' : 'not-allowed',
                transition: 'background-color 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '14px',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => {
                if (customMessage.trim()) {
                  e.currentTarget.style.backgroundColor = '#128C7E'
                }
              }}
              onMouseLeave={(e) => {
                if (customMessage.trim()) {
                  e.currentTarget.style.backgroundColor = '#25D366'
                }
              }}
            >
              <Send style={{ width: '14px', height: '14px' }} />
              Send
            </button>
          </form>
          
          {/* Footer */}
          <div style={{
            padding: '12px 20px',
            backgroundColor: '#f8f9fa',
            borderTop: '1px solid #e5e7eb',
            textAlign: 'center',
            fontSize: '11px',
            color: '#9ca3af'
          }}>
            Powered by MayDay International School
          </div>
        </div>
      )}
      
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          position: 'relative'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)'
          e.currentTarget.style.boxShadow = '0 20px 35px -8px rgba(0, 0, 0, 0.3)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.2)'
        }}
      >
        {isOpen ? (
          <X style={{ width: '28px', height: '28px', color: 'white' }} />
        ) : (
          <>
            <MessageCircle style={{ width: '30px', height: '30px', color: 'white' }} />
            <span style={{
              position: 'absolute',
              top: '-2px',
              right: '-2px',
              width: '16px',
              height: '16px',
              backgroundColor: '#ef4444',
              borderRadius: '50%',
              border: '2px solid white',
              animation: 'pulse 1.5s infinite'
            }} />
          </>
        )}
      </button>
      
      {/* CSS Animations */}
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
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  )
}

export default WhatsAppButton