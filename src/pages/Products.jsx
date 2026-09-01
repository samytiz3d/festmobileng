import { Link } from 'react-router-dom'

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCTS & SERVICES PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function Products() {
  return (
    <>
      <HeroSection />
      <PrepaidSection />
      <PostpaidSection />
      <FinancialSection />
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
          Products & Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-95">
          Explore our full range of voice, data, and digital services designed for your lifestyle.
        </p>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// PREPAID
// ─────────────────────────────────────────────────────────────────────────────
const PREPAID_PLANS = [
  {
    name: 'FestIntro',
    desc: 'Start your journey here. Get connected first, then move on to the bundle that works best for you.',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
  },
  {
    name: 'FestNet',
    desc: 'Enjoy fast, reliable internet for browsing, streaming, and staying connected every day.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop',
  },
  {
    name: 'FestSpice',
    desc: 'All-in-one bundles packed with calls, messages, and data to spice up your connection.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
  },
  {
    name: 'FestVibe',
    desc: 'Dedicated data for streaming, gaming, social, and learning — built for your lifestyle.',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
  },
  {
    name: 'BYOB',
    desc: 'Create a bundle that fits your lifestyle — choose the calls, SMS, and data you need.',
    img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=300&fit=crop',
  },
]

function PrepaidSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Prepaid Plans
          </h2>
          <p className="text-gray-600">
            Flexible, pay-as-you-go plans with no contracts. Perfect for students, freelancers, and anyone on the move.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PREPAID_PLANS.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={plan.img}
                  alt={plan.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{plan.desc}</p>
                <div className="mt-4">
                  <a
                    href="https://myaccount.festmobile.ng/addons"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#E8452A] text-white text-sm font-semibold px-5 py-2 rounded-full group-hover:bg-[#d03a20] transition-colors"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// POSTPAID
// ─────────────────────────────────────────────────────────────────────────────
const POSTPAID_PLANS = [
  {
    name: 'FestElite',
    desc: 'Premium postpaid service with priority support, generous data allowances, and exclusive perks for professionals.',
    img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop',
  },
  {
    name: 'BiziFest',
    desc: 'Business-grade connectivity with dedicated account management, custom plans, and enterprise support.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
  },
]

function PostpaidSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Postpaid Plans
          </h2>
          <p className="text-gray-600">
            Premium service with monthly billing. Ideal for professionals and businesses who need reliability and support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {POSTPAID_PLANS.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={plan.img}
                  alt={plan.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-xl mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{plan.desc}</p>
                <div className="mt-5">
                  <Link
                    to="/contact"
                    className="inline-block bg-[#E8452A] text-white text-sm font-semibold px-5 py-2 rounded-full group-hover:bg-[#d03a20] transition-colors"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// FINANCIAL SERVICES
// ─────────────────────────────────────────────────────────────────────────────
function FinancialSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Financial Services
            </h2>
            <h3 className="text-2xl font-bold text-[#E8452A] mb-4">
              Routepay
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Simple, safe, and seamless digital payments. Top up your FestMobile account, pay bills,
              send money, and manage your finances—all in one place.
            </p>
            <a
              href="https://routepay.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand inline-block"
            >
              Learn More
            </a>
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
              alt="Routepay"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
