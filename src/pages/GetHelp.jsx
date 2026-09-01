import { useState } from 'react'
import { Link } from 'react-router-dom'

// ─────────────────────────────────────────────────────────────────────────────
// GET HELP PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function GetHelp() {
  return (
    <>
      <HeroSection />
      <FAQSection />
      <SupportSection />
      <ContactCTA />
    </>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
          How Can We Help?
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-95">
          Find answers, get support, and connect with our team.
        </p>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ
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
  {
    q: 'How do I check my data balance?',
    a: 'You can check your balance by dialing *312# or through the My FestMobile app.',
  },
  {
    q: 'What should I do if I lose my SIM card?',
    a: 'Contact our support team immediately to block your SIM and request a replacement. Visit any FestMobile office with valid ID.',
  },
]

function FAQSection() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Quick answers to common questions about FestMobile services.
        </p>

        <div className="max-w-3xl mx-auto divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
          {FAQS.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-sm md:text-base text-gray-900">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180 text-[#E8452A]' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm md:text-base text-gray-600 leading-relaxed bg-white">
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

// ─────────────────────────────────────────────────────────────────────────────
// SUPPORT CHANNELS
// ─────────────────────────────────────────────────────────────────────────────
const CHANNELS = [
  {
    icon: '📱',
    title: 'My FestMobile App',
    desc: 'Manage your account, check balance, buy bundles, and get instant support.',
    cta: 'Download App',
    href: 'https://myaccount.festmobile.ng/',
  },
  {
    icon: '💬',
    title: 'Live Chat',
    desc: 'Chat with our support team in real-time for quick answers.',
    cta: 'Start Chat',
    href: 'https://myaccount.festmobile.ng/',
  },
  {
    icon: '📞',
    title: 'Call Support',
    desc: 'Speak directly with a customer service representative.',
    cta: 'View Numbers',
    href: '/contact',
  },
  {
    icon: '✉️',
    title: 'Email Us',
    desc: "Send us a detailed message and we'll get back to you within 24 hours.",
    cta: 'Contact Us',
    href: '/contact',
  },
]

function SupportSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Choose the support channel that works best for you.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHANNELS.map((ch) => (
            <div
              key={ch.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-4xl mb-4">{ch.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{ch.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{ch.desc}</p>
              {ch.href.startsWith('http') ? (
                <a
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#E8452A] hover:underline"
                >
                  {ch.cta} →
                </a>
              ) : (
                <Link
                  to={ch.href}
                  className="text-sm font-semibold text-[#E8452A] hover:underline"
                >
                  {ch.cta} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT CTA
// ─────────────────────────────────────────────────────────────────────────────
function ContactCTA() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Still Need Help?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Our support team is here to assist you with any questions or issues.
        </p>
        <Link to="/contact" className="btn-brand">
          Contact Support
        </Link>
      </div>
    </section>
  )
}
