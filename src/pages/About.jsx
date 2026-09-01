import { Link } from 'react-router-dom'

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT / JOIN US PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ValuesSection />
      <CTASection />
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
          Join the Movement
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-95">
          FestMobile is more than a network. We're a youth-powered movement built for students,
          creators, entrepreneurs, and digital natives across Nigeria.
        </p>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// MISSION
// ─────────────────────────────────────────────────────────────────────────────
function MissionSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We exist to connect Nigeria's future. From lecture halls to late-night side hustles,
              from viral trends to startup dreams, young Nigerians are building the future in real time.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We understand campus life, budget realities, social media culture, and the need for
              affordable, reliable data that never slows down your momentum.
            </p>
          </div>
          <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
              alt="Mission"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VALUES
// ─────────────────────────────────────────────────────────────────────────────
const VALUES = [
  {
    title: 'Youth-Focused',
    desc: 'Built by and for young Nigerians who are creating, streaming, learning, and building businesses online.',
    icon: '🎯',
  },
  {
    title: 'Affordable',
    desc: 'Plans that respect your budget without compromising on speed or reliability.',
    icon: '💰',
  },
  {
    title: 'Reliable',
    desc: 'Fast, dependable connectivity that keeps up with your hustle, no matter where you are.',
    icon: '⚡',
  },
  {
    title: 'Simple',
    desc: 'No hidden fees, no confusing contracts. Just straightforward mobile service that works.',
    icon: '✨',
  },
]

function ValuesSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          What We Stand For
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((v) => (
            <div key={v.title} className="bg-white p-6 rounded-md shadow-sm">
              <div className="text-4xl mb-4">{v.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{v.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// CTA
// ─────────────────────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of young Nigerians already connected with FestMobile.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://myaccount.festmobile.ng/sim-activation"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand"
          >
            Get a SIM
          </a>
          <Link to="/products-services" className="btn-outline">
            View Plans
          </Link>
        </div>
      </div>
    </section>
  )
}
