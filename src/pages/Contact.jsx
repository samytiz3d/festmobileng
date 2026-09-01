// ─────────────────────────────────────────────────────────────────────────────
// CONTACT PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  return (
    <>
      <HeroSection />
      <ContactInfo />
      <LocationSection />
    </>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#E8452A] to-[#d03a20] text-white py-24 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-95">
          We're here to help. Reach out to our team anytime.
        </p>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT INFO
// ─────────────────────────────────────────────────────────────────────────────
const CONTACT_METHODS = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Phone',
    detail: 'Customer Care: 312',
    subdesc: 'Available 24/7',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email',
    detail: 'support@festmobile.ng',
    subdesc: "We'll respond within 24 hours",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Office',
    detail: 'Lagos, Nigeria',
    subdesc: 'Visit our head office',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Hours',
    detail: 'Mon - Fri: 8am - 6pm',
    subdesc: 'Sat: 9am - 4pm',
  },
]

function ContactInfo() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? Need support? Want to partner with us? We'd love to hear from you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CONTACT_METHODS.map((m) => (
            <div
              key={m.title}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl"
            >
              <div className="text-[#E8452A] mb-4">{m.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{m.title}</h3>
              <p className="text-sm font-semibold text-gray-700 mb-1">{m.detail}</p>
              <p className="text-xs text-gray-500">{m.subdesc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// LOCATION / MAP
// ─────────────────────────────────────────────────────────────────────────────
function LocationSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Stop by our head office to speak with our team in person, get a new SIM,
              or learn more about our services.
            </p>
            <div className="space-y-3 text-sm text-gray-600">
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#E8452A] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>FestMobile Head Office<br />Lagos, Nigeria</span>
              </p>
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#E8452A] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM</span>
              </p>
            </div>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
              alt="Office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
