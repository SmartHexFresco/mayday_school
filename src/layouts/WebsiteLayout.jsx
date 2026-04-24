import { Outlet } from 'react-router-dom'
import Navbar from '@components/website/Navbar'
import Footer from '@components/website/Footer'

const WebsiteLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
       <main className="grow"> 
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default WebsiteLayout