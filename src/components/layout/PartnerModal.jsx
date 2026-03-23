import { useState, useEffect } from 'react'
import { usePartnerModal } from '../../hooks/usePartnerModal.jsx'

const STATES = ['Abia','Abuja (FCT)','Adamawa','Akwa Ibom','Anambra','Bauchi','Bayelsa','Benue','Borno','Cross River','Delta','Ebonyi','Edo','Ekiti','Enugu','Gombe','Imo','Jigawa','Kaduna','Kano','Katsina','Kebbi','Kogi','Kwara','Lagos','Nasarawa','Niger','Ogun','Ondo','Osun','Oyo','Plateau','Rivers','Sokoto','Taraba','Yobe','Zamfara']
const BUSINESS_TYPES = ['Channel Partner','Strategic Partner','SIM Registration Agent','Retailer','Canvasser','Individual']
const PARTNER_TYPES  = ['Campus Ambassador','SIM Registration Agent','Sales & Distribution Partner','Digital Marketer / Influencer','Corporate / Institutional Partner','Technology Partner','Other (Specify)']
const PROMO_METHODS  = ['Campus activations','Social media marketing','Retail shop sales','Online sales','Events and concerts','Community marketing','Other']

const INIT = { name:'',phone:'',email:'',dob:'',bizName:'',bizType:'',address:'',state:'',city:'',university:'',campus:'',partnerType:'',sellsTelecom:'',promo:[],agreeTerms:false,agreeContact:false }

export default function PartnerModal() {
  const { isOpen, close } = usePartnerModal()
  const [form, setForm]   = useState(INIT)
  const [done, setDone]   = useState(false)

  useEffect(() => { document.body.style.overflow = isOpen ? 'hidden' : '' }, [isOpen])
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [close])

  if (!isOpen) return null

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))
  const togglePromo = (m) => setForm(f => ({
    ...f,
    promo: f.promo.includes(m) ? f.promo.filter(x => x !== m) : [...f.promo, m]
  }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: connect to your API
    console.log('Partner form:', form)
    setDone(true)
  }

  const handleClose = () => {
    close()
    setTimeout(() => { setDone(false); setForm(INIT) }, 300)
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-100">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Become A Partner</h2>
            <p className="text-sm text-gray-500 mt-1">Fill out the form below, and we will be in touch shortly.</p>
          </div>
          <button onClick={handleClose} className="ml-4 text-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 flex-1">
          {done ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
              <p className="text-gray-500 text-sm">Thanks! We'll be in touch shortly.</p>
              <button onClick={handleClose} className="btn-brand mt-6">Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Row>
                <Field label="Name"><input className={inp} required placeholder="Name" value={form.name} onChange={e => set('name', e.target.value)} /></Field>
                <Field label="Phone"><input className={inp} required type="tel" placeholder="Phone" value={form.phone} onChange={e => set('phone', e.target.value)} /></Field>
              </Row>
              <Row>
                <Field label="Email"><input className={inp} required type="email" placeholder="Email" value={form.email} onChange={e => set('email', e.target.value)} /></Field>
                <Field label="DOB"><input className={inp} type="date" value={form.dob} onChange={e => set('dob', e.target.value)} /></Field>
              </Row>
              <Row>
                <Field label="Business/Canvasser Name"><input className={inp} placeholder="Business/Canvasser Name" value={form.bizName} onChange={e => set('bizName', e.target.value)} /></Field>
                <Field label="Business Type">
                  <select className={inp} value={form.bizType} onChange={e => set('bizType', e.target.value)}>
                    <option value="">Business Type</option>
                    {BUSINESS_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </Field>
              </Row>
              <Field label="Business Address"><input className={inp} placeholder="Business Address" value={form.address} onChange={e => set('address', e.target.value)} /></Field>
              <Row>
                <Field label="State">
                  <select className={inp} value={form.state} onChange={e => set('state', e.target.value)}>
                    <option value="">State</option>
                    {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label="City / Town"><input className={inp} placeholder="City / Town" value={form.city} onChange={e => set('city', e.target.value)} /></Field>
              </Row>
              <Field label="University / Institution (if applicable)"><input className={inp} placeholder="University / Institution" value={form.university} onChange={e => set('university', e.target.value)} /></Field>
              <Field label="Campus / Area of Operation"><input className={inp} placeholder="Campus / Area of Operation" value={form.campus} onChange={e => set('campus', e.target.value)} /></Field>
              <Field label="What type of partner are you applying as?">
                <select className={inp} value={form.partnerType} onChange={e => set('partnerType', e.target.value)}>
                  <option value="">What type of partner are you applying as?</option>
                  {PARTNER_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </Field>
              <Field label="Do you currently sell telecom or digital products?">
                <div className="flex gap-6 mt-1">
                  {['Yes','No'].map(o => (
                    <label key={o} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="radio" name="sells" value={o} checked={form.sellsTelecom === o} onChange={() => set('sellsTelecom', o)} className="accent-[#E8452A]" />
                      {o}
                    </label>
                  ))}
                </div>
              </Field>
              <Field label="How do you plan to promote FestMobile?">
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {PROMO_METHODS.map(m => (
                    <label key={m} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" checked={form.promo.includes(m)} onChange={() => togglePromo(m)} className="accent-[#E8452A]" />
                      {m}
                    </label>
                  ))}
                </div>
              </Field>
              <Field label="Upload a valid means of identification (Optional but recommended)">
                <div className="border border-dashed border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-400 cursor-pointer hover:border-[#E8452A] transition-colors">
                  Click to upload file
                </div>
              </Field>
              <div className="space-y-3 pt-1">
                <label className="flex items-start gap-3 text-sm cursor-pointer">
                  <input type="checkbox" required checked={form.agreeTerms} onChange={e => set('agreeTerms', e.target.checked)} className="accent-[#E8452A] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">I agree to the FestMobile Partner Terms & Conditions.</span>
                </label>
                <label className="flex items-start gap-3 text-sm cursor-pointer">
                  <input type="checkbox" required checked={form.agreeContact} onChange={e => set('agreeContact', e.target.checked)} className="accent-[#E8452A] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">I consent to FestMobile contacting me via call, SMS, or WhatsApp regarding this application.</span>
                </label>
              </div>
              <button type="submit" className="btn-brand w-full py-3 text-base mt-2">
                submit ⟶
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

const inp = "w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8452A] focus:border-transparent placeholder-gray-400"
const Field = ({ label, children }) => (
  <div>
    <label className="block text-xs text-gray-500 mb-1">{label}</label>
    {children}
  </div>
)
const Row = ({ children }) => <div className="grid grid-cols-2 gap-3">{children}</div>
