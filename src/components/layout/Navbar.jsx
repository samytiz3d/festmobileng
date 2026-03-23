import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { usePartnerModal } from '../../hooks/usePartnerModal.jsx'

// ─────────────────────────────────────────────────────────────────────────────
// Exact replica of the FestMobile navbar
// Logo image | nav links with dropdowns | Login button
// ─────────────────────────────────────────────────────────────────────────────

const NAV = [
  { label: 'Home', href: '/' },
  {
    label: 'Join Us', href: '/about',
    children: [
      { label: 'About Us',     href: '/about' },
      { label: 'Get A SIM',    href: 'https://myaccount.festmobile.ng/sim-activation', external: true },
      { label: 'Sign Up',      href: 'https://myaccount.festmobile.ng/', external: true },
      { label: 'Be A Partner', modal: true },
    ],
  },
  {
    label: 'Products & Services', href: '/products-services',
    children: [
      {
        label: 'Prepaid', href: '/products-services',
        children: [
          { label: 'Voice',            href: '/products-services' },
          { label: 'Data',             href: '/products-services' },
          { label: 'Bundle',           href: '/products-services' },
          { label: 'Digital Services', href: '/products-services' },
        ],
      },
      {
        label: 'Postpaid', href: '/products-services',
        children: [
          { label: 'FestElite', href: '/products-services' },
          { label: 'BiziFest',  href: '/products-services' },
        ],
      },
      {
        label: 'Financial services', href: '/products-services',
        children: [
          { label: 'Routepay', href: 'https://routepay.com/', external: true },
        ],
      },
    ],
  },
  {
    label: 'Get Help', href: '/get-help',
    children: [
      { label: 'Contact Us', href: '/contact' },
    ],
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [activeMenu, setActiveMenu]     = useState(null)
  const [scrolled, setScrolled]         = useState(false)
  const { open: openModal }             = usePartnerModal()
  const location                        = useLocation()
  const navRef                          = useRef(null)

  useEffect(() => { setMobileOpen(false); setActiveMenu(null) }, [location.pathname])
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 4)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  useEffect(() => {
    const fn = (e) => { if (navRef.current && !navRef.current.contains(e.target)) setActiveMenu(null) }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [])

  return (
    <header
      ref={navRef}
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-5 h-[68px]">

        {/* ── Logo ─────────────────────────────── */}
        <Link to="/" className="flex items-center flex-shrink-0">
          {/* Replace src with your actual logo file once you have it */}
          <img
            src="https://festmobile.ng/wp-content/uploads/2024/05/cropped-Fest-Mobile-Logo-Trademark-1-57x39.png"
            alt="FestMobile"
            className="h-9 w-auto"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'block'
            }}
          />
          {/* Fallback text logo if image fails */}
          <span className="hidden font-bold text-lg text-gray-900">
            Fest<span className="text-[#E8452A]">Mobile</span>
          </span>
        </Link>

        {/* ── Desktop nav ───────────────────────── */}
        <nav className="hidden lg:flex items-center gap-0">
          {NAV.map((item) => (
            <DesktopItem
              key={item.label}
              item={item}
              active={activeMenu === item.label}
              onEnter={() => item.children && setActiveMenu(item.label)}
              onLeave={() => setActiveMenu(null)}
              onModal={openModal}
            />
          ))}
        </nav>

        {/* ── Login button ─────────────────────── */}
        <a
          href="https://myaccount.festmobile.ng/sim-activation"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex btn-login"
        >
          Login
        </a>

        {/* ── Mobile hamburger ──────────────────── */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile Menu ───────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white max-h-[80vh] overflow-y-auto">
          <div className="px-5 py-3 space-y-1">
            {NAV.map((item) => (
              <MobileItem key={item.label} item={item} onModal={openModal} />
            ))}
            <div className="pt-3 border-t border-gray-100">
              <a
                href="https://myaccount.festmobile.ng/sim-activation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-login w-full block text-center"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

// ── Desktop nav item with hover dropdown ─────────────────────────────────────
function DesktopItem({ item, active, onEnter, onLeave, onModal }) {
  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {item.children ? (
        <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#E8452A] transition-colors whitespace-nowrap">
          {item.label}
          <svg className={`w-3 h-3 transition-transform ${active ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      ) : (
        <NavLink
          to={item.href}
          className={({ isActive }) =>
            `block px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${isActive ? 'text-[#E8452A]' : 'text-gray-700 hover:text-[#E8452A]'}`
          }
        >
          {item.label}
        </NavLink>
      )}

      {/* Dropdown */}
      {item.children && active && (
        <div className="absolute top-full left-0 mt-0 bg-white shadow-lg border border-gray-100 rounded-lg py-1 min-w-[200px] z-50">
          {item.children.map((child) => (
            <DropdownChild key={child.label} item={child} onModal={onModal} />
          ))}
        </div>
      )}
    </div>
  )
}

// ── Dropdown child (handles external, modal, internal links, and nested) ─────
function DropdownChild({ item, onModal }) {
  const [open, setOpen] = useState(false)

  if (item.modal) return (
    <button
      onClick={onModal}
      className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#E8452A] transition-colors"
    >
      {item.label}
    </button>
  )

  if (item.external) return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#E8452A] transition-colors"
    >
      {item.label}
    </a>
  )

  if (item.children) return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="w-full text-left flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#E8452A] transition-colors">
        {item.label}
        <svg className="w-3 h-3 -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-full top-0 bg-white shadow-lg border border-gray-100 rounded-lg py-1 min-w-[180px]">
          {item.children.map((c) => (
            <DropdownChild key={c.label} item={c} onModal={onModal} />
          ))}
        </div>
      )}
    </div>
  )

  return (
    <NavLink
      to={item.href}
      className={({ isActive }) =>
        `block px-4 py-2 text-sm transition-colors ${isActive ? 'text-[#E8452A] bg-orange-50' : 'text-gray-700 hover:bg-gray-50 hover:text-[#E8452A]'}`
      }
    >
      {item.label}
    </NavLink>
  )
}

// ── Mobile nav item ────────────────────────────────────────────────────────
function MobileItem({ item, onModal }) {
  const [open, setOpen] = useState(false)

  if (!item.children) {
    if (item.modal) return (
      <button onClick={onModal} className="w-full text-left px-3 py-2.5 text-sm font-medium text-gray-800 hover:text-[#E8452A] transition-colors">
        {item.label}
      </button>
    )
    if (item.external) return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className="block px-3 py-2.5 text-sm font-medium text-gray-800 hover:text-[#E8452A] transition-colors">
        {item.label}
      </a>
    )
    return (
      <NavLink to={item.href} className={({ isActive }) =>
        `block px-3 py-2.5 text-sm font-medium transition-colors ${isActive ? 'text-[#E8452A]' : 'text-gray-800 hover:text-[#E8452A]'}`
      }>
        {item.label}
      </NavLink>
    )
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-800"
      >
        {item.label}
        <svg className={`w-3.5 h-3.5 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="ml-4 border-l-2 border-gray-100 pl-3 space-y-0.5">
          {item.children.map((child) => (
            <MobileItem key={child.label} item={child} onModal={onModal} />
          ))}
        </div>
      )}
    </div>
  )
}
