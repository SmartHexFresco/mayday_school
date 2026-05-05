import { Outlet } from 'react-router-dom'
import Navbar from '@components/website/Navbar'
import Footer from '@components/website/Footer'
//import About from  '@pages/website/About'
import WhatsAppButton from '@components/dashboard/WhatsAppButton'

const WebsiteLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
       <main className="grow"> 
        <Outlet />
        {/* < About/> */}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default WebsiteLayout