'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const CATEGORIES = [
  'Beauty and wellness',
  'Sport',
  'Personal meetings and services',
  'Medical',
  'Events and entertainment',
  'Education',
  'Retailers',
  'Officials',
  'Other category',
]

const COUNTRIES = [
  'India', 'United States', 'United Kingdom', 'Canada', 'Australia',
  'Germany', 'France', 'UAE', 'Singapore', 'Other',
]

export default function OnboardingPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const [step, setStep] = useState(1)
  const [creating, setCreating] = useState(false)
  const [error, setError] = useState('')
  const [slugStatus, setSlugStatus] = useState<'idle' | 'checking' | 'available' | 'taken'>('idle')

  // Step 1 fields
  const [ownerName, setOwnerName] = useState('')
  const [companyLogin, setCompanyLogin] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)

  // Step 2 fields
  const [country, setCountry] = useState('India')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const [address, setAddress] = useState('')

  // Redirect if not logged in
  useEffect(() => {
    if (status === 'unauthenticated') router.push('/')
  }, [status, router])

  // Pre-fill name from session
  useEffect(() => {
    if (session?.user?.name) setOwnerName(session.user.name)
  }, [session])

  // Check slug availability with debounce
  useEffect(() => {
    if (!companyLogin || companyLogin.length < 3) {
      setSlugStatus('idle')
      return
    }
    setSlugStatus('checking')
    const timer = setTimeout(async () => {
      const res = await fetch(`/api/company?slug=${companyLogin}`)
      const data = await res.json()
      setSlugStatus(data.available ? 'available' : 'taken')
    }, 600)
    return () => clearTimeout(timer)
  }, [companyLogin])

  // Auto-generate slug from owner name
  const handleNameChange = (val: string) => {
    setOwnerName(val)
    const slug = val.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 20)
    setCompanyLogin(slug)
  }

  const handleSlugChange = (val: string) => {
    const clean = val.toLowerCase().replace(/[^a-z0-9-]/g, '')
    setCompanyLogin(clean)
  }

  // Step 1 submit
  const handleStep1 = () => {
    setError('')
    if (!ownerName || !companyLogin || !phone || !category) {
      setError('Please fill all required fields'); return
    }
    if (!agreeTerms) {
      setError('Please agree to Terms and Conditions'); return
    }
    if (slugStatus === 'taken') {
      setError('This company URL is already taken'); return
    }
    setStep(2)
  }

  // Step 2 submit — create company
  const handleSubmit = async () => {
    setError('')
    if (!city || !address) {
      setError('City and Street address are required'); return
    }
    setCreating(true)
    try {
      const res = await fetch('/api/company', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ownerName, companyLogin, phone, category,
          country, state, city, zip, address,
        }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error); setCreating(false); return }

      // Show creating screen for 3 seconds then redirect
      setTimeout(() => {
        router.push('/dashboard')
      }, 3000)
    } catch {
      setError('Something went wrong. Please try again.')
      setCreating(false)
    }
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#00AEEE] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  // ── Creating screen ─────────────────────────────────────────
  if (creating) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-[#00AEEE]/10 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-[#00AEEE] animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Your booking website is being created
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            You have chosen to install the best booking system in the world and evidently it takes a few seconds to create such a system. Just take a sip of your coffee and use the time to think how this can benefit your business.
          </p>
          <div className="mt-6 flex justify-center gap-1">
            {[0,1,2].map(i => (
              <div key={i} className="w-2 h-2 rounded-full bg-[#00AEEE] animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
      {/* Logo */}
      <div className="mb-6">
        <Image src="/Group4.png" alt="SimplyBookME" width={160} height={36} className="h-9 w-auto" />
      </div>

      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">

        {/* ── STEP 1 ── */}
        {step === 1 && (
          <>
            {/* Header */}
            <div className="flex items-center justify-between mb-1">
              <h1 className="text-xl font-bold text-gray-900">Register your company</h1>
              <span className="text-sm font-semibold text-[#00AEEE]">Step 1/2</span>
            </div>
            <div className="w-full h-1 bg-gray-100 rounded-full mb-1">
              <div className="w-1/2 h-1 bg-[#00AEEE] rounded-full" />
            </div>
            <p className="text-xs text-gray-400 mb-6">Your free 14-day trial includes most features and 50 bookings. No credit card is needed.</p>

            <div className="flex flex-col gap-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={ownerName}
                  onChange={e => handleNameChange(e.target.value)}
                  placeholder="Your name"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEE] focus:border-transparent"
                />
              </div>

              {/* Company URL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company login (part of URL) <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#00AEEE]">
                  <span className="bg-gray-50 px-3 py-2.5 text-xs text-gray-400 border-r border-gray-200 whitespace-nowrap">https://</span>
                  <input
                    type="text"
                    value={companyLogin}
                    onChange={e => handleSlugChange(e.target.value)}
                    placeholder="companyname"
                    className="flex-1 px-3 py-2.5 text-sm focus:outline-none"
                  />
                  <span className="bg-gray-50 px-3 py-2.5 text-xs text-gray-400 border-l border-gray-200 whitespace-nowrap">.simplybook.me</span>
                </div>
                {/* Slug status */}
                {companyLogin.length >= 3 && (
                  <p className={`text-xs mt-1 ${
                    slugStatus === 'available' ? 'text-green-500' :
                    slugStatus === 'taken' ? 'text-red-500' :
                    'text-gray-400'
                  }`}>
                    {slugStatus === 'checking' && '⏳ Checking availability...'}
                    {slugStatus === 'available' && '✅ Available!'}
                    {slugStatus === 'taken' && '❌ Already taken. Choose another.'}
                  </p>
                )}
                <p className="text-xs text-gray-400 mt-1">
                  It <strong>cannot be changed later!</strong> Please don&apos;t use www.
                </p>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Work phone <span className="text-red-500">*</span></label>
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#00AEEE]">
                  <span className="bg-gray-50 px-3 py-2.5 text-sm border-r border-gray-200">🇮🇳 +91</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="00000 00000"
                    className="flex-1 px-3 py-2.5 text-sm focus:outline-none"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">You can change this later</p>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business category <span className="text-red-500">*</span></label>
                <select
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEE] bg-white"
                >
                  <option value="">What is your business category?</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <p className="text-xs text-gray-400 mt-1">Help us suggest the best features for your needs</p>
              </div>

              {/* Checkboxes */}
              <div className="flex flex-col gap-2">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" className="mt-0.5 accent-[#00AEEE]" />
                  <span className="text-xs text-gray-500">I want to subscribe to promotional and marketing material and other cool offers from SimplyBook.me.</span>
                </label>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" className="mt-0.5 accent-[#00AEEE]" />
                  <span className="text-xs text-gray-500">By checking this box, I agree to add my business to the Booking.page marketplace.</span>
                </label>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={e => setAgreeTerms(e.target.checked)}
                    className="mt-0.5 accent-[#00AEEE]"
                  />
                  <span className="text-xs text-gray-500">
                    I agree to the provisions of the <a href="#" className="text-[#00AEEE] hover:underline">Terms and Conditions</a> & <a href="#" className="text-[#00AEEE] hover:underline">Privacy Policy</a> <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>

              {error && <p className="text-red-500 text-xs bg-red-50 px-3 py-2 rounded-lg">{error}</p>}

              <button
                onClick={handleStep1}
                className="w-full bg-[#00AEEE] hover:bg-[#0099d6] text-white font-semibold py-3 rounded-lg transition-colors text-sm"
              >
                Continue
              </button>
            </div>

            <p className="text-center text-xs text-gray-400 mt-5">
              Already have an account? <a href="/" className="text-[#00AEEE] hover:underline">Log in</a>
            </p>
          </>
        )}

        {/* ── STEP 2 ── */}
        {step === 2 && (
          <>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <button onClick={() => setStep(1)} className="text-gray-400 hover:text-gray-600">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <h1 className="text-xl font-bold text-gray-900">Address</h1>
              </div>
              <span className="text-sm font-semibold text-[#00AEEE]">Step 2/2</span>
            </div>
            <div className="w-full h-1 bg-gray-100 rounded-full mb-6">
              <div className="w-full h-1 bg-[#00AEEE] rounded-full" />
            </div>

            <div className="flex flex-col gap-4">
              {/* Country + State */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <select
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEE] bg-white"
                  >
                    {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <input
                    type="text"
                    value={state}
                    onChange={e => setState(e.target.value)}
                    placeholder="State"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEE]"
                  />
                </div>
              </div>

              {/* City + ZIP */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    placeholder="City"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEE]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ZIP / Post code</label>
                  <input
                    type="text"
                    value={zip}
                    onChange={e => setZip(e.target.value)}
                    placeholder="ZIP"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEE]"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Street address <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  placeholder="Street address"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEE]"
                />
              </div>

              {/* Map placeholder */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-3 py-2 flex items-center justify-between border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="accent-[#00AEEE]" />
                    <span className="text-xs text-gray-600">Marker matches address</span>
                  </div>
                  <button className="text-xs text-[#00AEEE] border border-[#00AEEE] px-2 py-1 rounded flex items-center gap-1">
                    📍 Locate me
                  </button>
                </div>
                <div className="h-36 bg-[#e8f4f8] flex items-center justify-center">
                  <div className="flex flex-col items-center gap-1 text-gray-400">
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#00AEEE" opacity="0.4"/>
                    </svg>
                    <span className="text-xs">Map preview</span>
                  </div>
                </div>
              </div>

              {error && <p className="text-red-500 text-xs bg-red-50 px-3 py-2 rounded-lg">{error}</p>}

              <button
                onClick={handleSubmit}
                className="w-full bg-[#00AEEE] hover:bg-[#0099d6] text-white font-semibold py-3 rounded-lg transition-colors text-sm"
              >
                Submit
              </button>
            </div>

            <p className="text-center text-xs text-gray-400 mt-5">
              Already have an account? <a href="/" className="text-[#00AEEE] hover:underline">Log in</a>
            </p>
          </>
        )}
      </div>
    </div>
  )
}