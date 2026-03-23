import { Link } from 'react-router-dom'
import { usePartnerModal } from '../../hooks/usePartnerModal.jsx'

// ─────────────────────────────────────────────────────────────────────────────
// Exact replica of FestMobile footer
// ─────────────────────────────────────────────────────────────────────────────

export default function Footer() {
  const { open } = usePartnerModal()

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-[1200px] mx-auto px-5 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand + address + social */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src="https://festmobile.ng/wp-content/uploads/2024/05/cropped-Fest-Mobile-Logo-Trademark-1-57x39.png"
                alt="FestMobile"
                className="h-8 w-auto brightness-0 invert"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block' }}
              />
              <span className="hidden text-white font-bold text-lg">FestMobile</span>
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              Ground Floor, Africa Re House, Plot 1679 Karimu Kotun St, Victoria Island, Lagos
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { label: 'f',  href: 'https://facebook.com/festmobileng' },
                { label: 'in', href: 'https://linkedin.com/company/festmobileng' },
                { label: '𝕏',  href: '#' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-xs text-gray-400 hover:border-[#E8452A] hover:text-[#E8452A] transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Spacer on large screens */}
          <div className="hidden lg:block" />

          {/* Company links */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us',             href: '/about' },
                { label: 'Product & Services',   href: '/products-services' },
                { label: 'Careers',              href: '/careers' },
                { label: 'Be a Partner',         modal: true },
              ].map((l) => (
                <li key={l.label}>
                  {l.modal ? (
                    <button onClick={open} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {l.label}
                    </button>
                  ) : (
                    <Link to={l.href} className="text-sm hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Help links */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Help</h4>
            <ul className="space-y-3">
              {[
                { label: 'Get Help',   href: '/get-help' },
                { label: 'Contact Us', href: '/contact' },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1200px] mx-auto px-5 py-4 text-xs text-gray-500 text-center">
          © 2026 All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
