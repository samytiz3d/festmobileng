import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { usePartnerModal } from '../hooks/usePartnerModal.jsx'

// ─────────────────────────────────────────────────────────────────────────────
// HOME PAGE — exact replica of festmobile.ng
//
// Sections (in order):
//   1. HeroSlider       – full-width image banner with arrows + dots
//   2. QuickActions     – 4 cards with circular images
//   3. VoiceAndData     – plan cards with photos, title, desc, Buy Now
//   4. ConnectSection   – dark bg, large heading, text, CTA
//   5. AppSection       – app badges, features list, phone screenshot
//   6. FAQSection       – accordion
//   7. Footer is in Layout
// ─────────────────────────────────────────────────────────────────────────────

// ── Placeholder image helper (picsum for now, replace with real assets) ──────
// Using picsum.photos for realistic placeholder photography
const PH = {
  // Hero slides — wide landscape (approx 1536x577)
  hero: [
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1536&h=577&fit=crop',  // young Nigerians / youth
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1536&h=577&fit=crop',  // students / campus
    'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1536&h=577&fit=crop',  // creator / entrepreneur
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1536&h=577&fit=crop',  // digital / phone
  ],
  // Quick action circular images
  sim:     'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=300&fit=crop',
  bundle:  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=300&fit=crop',
  wallet:  'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=300&h=300&fit=crop',
  digital: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=300&fit=crop',
  // Plan card images (portrait-ish)
  festintro: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
  festnet:   'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop',
  festspice: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
  festvibe:  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
  byob:      'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=300&fit=crop',
  // App section phone screenshots (portrait)
  appScreen: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=700&fit=crop',
}

export default function Home() {
  return (
    <>
      <HeroSlider />
      <QuickActions />
      <VoiceAndData />
      <ConnectSection />
      <AppSection />
      <FAQSection />
    </>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. HERO SLIDER
// Full-width image carousel. 4 slides. Left/right arrows. Dot indicators.
// ─────────────────────────────────────────────────────────────────────────────
function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const total = PH.hero.length
  const timerRef = useRef(null)

  const go = (n) => {
    setCurrent((n + total) % total)
    resetTimer()
  }
  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % total), 5000)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % total), 5000)
    return () => clearInterval(timerRef.current)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-gray-100" style={{ aspectRatio: '1536/577' }}>
      {/* Slides */}
      {PH.hero.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img
            src={src}
            alt={`Slide ${i + 1}`}
            className="w-full h-full object-cover"
            // TODO: replace src with: import slide1 from '../assets/images/Group-54.png'
          />
        </div>
      ))}

      {/* Left arrow */}
      <button
        onClick={() => go(current - 1)}
        className="slider-arrow left-4"
        aria-label="Previous"
      >
        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={() => go(current + 1)}
        className="slider-arrow right-4"
        aria-label="Next"
      >
        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {PH.hero.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2.5 bg-[#E8452A]' : 'w-2.5 h-2.5 bg-white/60'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. QUICK ACTIONS
// 4 cards: circular image, title, subtitle
// ─────────────────────────────────────────────────────────────────────────────
const QUICK_ACTIONS = [
  { img: PH.sim,     title: 'Get a SIM',       sub: 'Get connected the right way',      href: 'https://myaccount.festmobile.ng/sim-activation' },
  { img: PH.bundle,  title: 'Buy A Bundle',    sub: 'Simple plans. Smarter connectivity.', href: 'https://myaccount.festmobile.ng/addons' },
  { img: PH.wallet,  title: 'Wallet',          sub: 'Simple, safe, and seamless',       href: 'https://routepay.com/' },
  { img: PH.digital, title: 'Digital Services',sub: 'Do more online',                   href: 'https://myaccount.festmobile.ng/addons' },
]

function QuickActions() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_ACTIONS.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center gap-3 group"
            >
              {/* Circular masked image */}
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-gray-100 group-hover:border-[#E8452A] transition-colors duration-200">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  // TODO: replace with: import simImg from '../assets/images/Mask-group-3-1.png'
                />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm md:text-base group-hover:text-[#E8452A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. VOICE AND DATA
// Heading + subtitle, then 5 plan cards (image top, name, desc, Buy Now)
// ─────────────────────────────────────────────────────────────────────────────
const PLANS = [
  {
    img:  PH.festintro,
    name: 'FestIntro',
    desc: 'Start your journey here. Get connected first, then move on to the bundle that works best for you.',
    href: 'https://myaccount.festmobile.ng/addons',
  },
  {
    img:  PH.festnet,
    name: 'FestNet',
    desc: 'Enjoy fast, reliable internet for browsing, streaming, and staying connected every day.',
    href: 'https://myaccount.festmobile.ng/addons',
  },
  {
    img:  PH.festspice,
    name: 'FestSpice',
    desc: 'All-in-one bundles packed with calls, messages, and data to spice up your connection.',
    href: 'https://myaccount.festmobile.ng/addons',
  },
  {
    img:  PH.festvibe,
    name: 'FestVibe',
    desc: 'Dedicated data for streaming, gaming, social, and learning — built for your lifestyle.',
    href: 'https://myaccount.festmobile.ng/addons',
  },
  {
    img:  PH.byob,
    name: 'BYOB',
    desc: 'Create a bundle that fits your lifestyle — choose the calls, SMS, and data you need.',
    href: 'https://myaccount.festmobile.ng/addons',
  },
]

function VoiceAndData() {
  return (
    <section className="py-14 px-4 bg-white border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Voice and Data</h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Explore all our voice and data packages. Choose the best option to suit your needs.
          </p>
        </div>

        {/* Plan cards — horizontal scroll on mobile, 5-col grid on desktop */}
        <div className="flex gap-5 overflow-x-auto pb-3 lg:grid lg:grid-cols-5 lg:overflow-visible">
          {PLANS.map((plan) => (
            <a
              key={plan.name}
              href={plan.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-52 lg:w-auto flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 group"
            >
              {/* Plan image */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={plan.img}
                  alt={plan.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  // TODO: replace with real plan images from /assets/images/
                />
              </div>
              {/* Plan info */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-base mb-1">{plan.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed flex-1">{plan.desc}</p>
                <div className="mt-4">
                  <span className="inline-block bg-[#E8452A] text-white text-xs font-semibold px-4 py-1.5 rounded-full group-hover:bg-[#d03a20] transition-colors">
                    Buy Now
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. CONNECT. CREATE. DOMINATE.
// Dark background section with large heading, body text, Explore Plans button
// ─────────────────────────────────────────────────────────────────────────────
function ConnectSection() {
  return (
    <section className="bg-gray-900 py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
          Connect. Create. Dominate.
        </h2>
        <div className="max-w-3xl space-y-4 text-gray-300 text-sm md:text-base leading-relaxed mb-8">
          <p>
            Because your life doesn't slow down — and your network shouldn't either. From lecture halls
            to late-night side hustles, from viral trends to startup dreams, young Nigerians are building
            the future in real time. We are not just another network, we are a youth-powered movement
            built for students, creators, entrepreneurs, and digital natives.
          </p>
          <p>
            We understand campus life, budget realities, social media culture, and the need for
            affordable, reliable data that never slows down your momentum.
          </p>
          <p>The future isn't coming, it's already here.<br />FestMobile exists to connect that future.</p>
        </div>
        <Link to="/products-services" className="btn-brand">
          Explore Plans
        </Link>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. APP SECTION
// "Be you with the FestMobile App" — store badges, feature list, phone image
// ─────────────────────────────────────────────────────────────────────────────
const APP_FEATURES = [
  { title: 'Personalized Recommendations', desc: 'The app suggests bundles and add-ons based on how you actually use your line.' },
  { title: 'Build Your Own Bundle',         desc: 'Pick exactly the calls, SMS, and data you need—no wasted minutes, messages, or data.' },
  { title: 'Instant Top-Ups & Payments',    desc: 'Recharge your plan or pay your bill in just a few taps, anytime, anywhere.' },
  { title: 'Fast, Reliable Connectivity',   desc: 'Browse, stream, and call with smooth, dependable performance wherever you are.' },
]

function AppSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: text + badges + features */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Be you with the FestMobile App
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              On your iPhone, open the App Store. On Android, open the Google Play Store.
              Search for FestMobile and tap 'Get' or 'Install' to download the app.
            </p>

            {/* Store badges */}
            <div className="flex gap-3 mb-8 flex-wrap">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                {/* Apple icon SVG */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px] opacity-75">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                {/* Play store icon */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.3.18.65.2.96.06l11.37-6.37-2.8-2.8-9.53 9.11zM.5 1.08C.19 1.4 0 1.89 0 2.53v18.94c0 .64.19 1.13.5 1.45l.08.08L10.84 12v-.26L.58 1.01.5 1.08zM19.4 10.16l-2.67-1.5-3.06 3.06 3.06 3.06 2.68-1.5c.76-.43.76-1.12 0-1.55l-.01-.07zM4.14.24L15.51 6.61l-2.8 2.8L4.14.24z"/>
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px] opacity-75">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            {/* Features list */}
            <div className="space-y-4">
              {APP_FEATURES.map((f) => (
                <div key={f.title} className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#E8452A] flex-shrink-0 mt-2" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{f.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: phone screenshot */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-56 md:w-64">
              <img
                src={PH.appScreen}
                alt="FestMobile App"
                className="w-full rounded-3xl shadow-2xl"
                // TODO: replace with actual app screenshot from assets
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. FAQ SECTION
// Heading, "I have more Questions" link, 6 accordion items
// ─────────────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'What is FestNet?',
    a: 'FestNet are affordable data plans designed to give access to the internet through data enabled devices. It is usually within a defined unit of bytes and at a pre-determined price for a definite period. FestNet has a robust bouquet of data bundles that suits all lifestyle.',
  },
  {
    q: 'Who can subscribe to FestNet Data bundles?',
    a: 'FestNet is open to all prepaid users.',
  },
  {
    q: 'What are the different FestMobile Data bundle plans available?',
    a: 'They are the Daily, Weekly, Monthly, Bi-monthly, Quarterly and Yearly plans.',
  },
  {
    q: 'How do I subscribe to FestMobile Data bundles?',
    a: 'You can subscribe to any FestMobile data bundles via the following channels: USSD: Dialling *312# then select your preferred data plan. SMS: Sending the bundle keyword to 312. My FestMobile App: You can download the My FestMobile App directly from Play Store or Apple Store.',
  },
  {
    q: 'Will I be able to roll over my unused data bonus?',
    a: 'Yes. All bundles will renew according to their bundle category – daily, weekly, and monthly, etc. However, if you have multiple data bundles active from same category, the last data plan you purchased from that category will be the bundle that will be auto renewed.',
  },
  {
    q: 'What if I purchase a data plan different from the category I bought before?',
    a: 'If the new data plan purchased is different from the old category, data roll-over will not occur. The different data plans will be placed in different data accounts with unique validities.',
  },
]

function FAQSection() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-16 px-4 bg-white border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <Link
            to="/get-help"
            className="text-[#E8452A] text-sm font-semibold hover:underline whitespace-nowrap"
          >
            I have more Questions
          </Link>
        </div>
        <p className="text-gray-500 text-sm mb-8 -mt-4">
          Curious about how it works? From data bundles to SIM swaps, we've covered the basics so you can get back to being you.
        </p>

        {/* Accordion */}
        <div className="divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
          {FAQS.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-sm text-gray-900">{faq.q}</span>
                <svg
                  className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180 text-[#E8452A]' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed bg-white">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
