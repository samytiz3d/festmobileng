import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import PartnerModal from './PartnerModal.jsx'
import { PartnerModalProvider } from '../../hooks/usePartnerModal.jsx'

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return (
    <PartnerModalProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-[68px]">
          <Outlet />
        </main>
        <Footer />
        <PartnerModal />
      </div>
    </PartnerModalProvider>
  )
}
