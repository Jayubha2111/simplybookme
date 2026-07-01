'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type ModalType = 'signup' | 'login' | null

export default function Navbar() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [modal, setModal] = useState<ModalType>(null)
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const openModal = (type: ModalType) => {
    setForm({ name: '', email: '', password: '' })
    setError('')
    setModal(type)
    setMenuOpen(false)
  }
  const closeModal = () => { setModal(null); setError('') }

  // ── Sign Up ──────────────────────────────────────────────────
  const handleSignup = async () => {
    if (!form.name || !form.email || !form.password) {
      setError('All fields are required'); return
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters'); return
    }
    setLoading(true); setError('')
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error); return }

      // Auto login after signup
      const result = await signIn('credentials', {
        email: form.email,
        password: form.password,
        redirect: false,
      })
      if (result?.ok) { closeModal(); router.push('/onboarding') }
      else setError('Account created! Please log in.')
    } catch {
      setError('Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  // ── Log In ───────────────────────────────────────────────────
  const handleLogin = async () => {
    if (!form.email || !form.password) {
      setError('Email and password are required'); return
    }
    setLoading(true); setError('')
    try {
      const result = await signIn('credentials', {
        email: form.email,
        password: form.password,
        redirect: false,
      })
      if (result?.ok) { closeModal(); router.push('/dashboard') }
      else setError(result?.error || 'Invalid email or password')
    } catch {
      setError('Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  // ── Google Login ─────────────────────────────────────────────
  const handleGoogle = () => signIn('google', { callbackUrl: '/onboarding' })

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

          {/* Logo - click karke home pe jayega */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative h-9 sm:h-11 w-auto">
              <Image src="/Group4.png" alt="SimplyBookME Logo" width={180} height={40} priority className="h-full w-auto object-contain" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Home</a>
            <a href="#features" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Pricing</a>
            <a href="#enterprise" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Enterprise</a>
          </div>

          {/* Auth Area */}
          <div className="hidden md:flex items-center gap-4">
            {status === 'loading' ? (
              <div className="w-6 h-6 border-2 border-[#00AEEE] border-t-transparent rounded-full animate-spin" />
            ) : session ? (
              // ── Logged In State ──
              <div className="flex items-center gap-3">
                <button onClick={() => router.push('/dashboard')} className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 font-medium">
                  {session.user?.image ? (
                    <img src={session.user.image} alt="Profile" className="w-8 h-8 rounded-full border-2 border-[#00AEEE]" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-[#00AEEE] flex items-center justify-center text-white text-sm font-bold">
                      {session.user?.name?.charAt(0).toUpperCase()}
                    </div>
                  )}
                  {session.user?.name?.split(' ')[0]}
                </button>
                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="text-sm text-gray-500 hover:text-red-500 font-medium border border-gray-200 px-3 py-1.5 rounded-lg hover:border-red-200 transition-colors"
                >
                  Sign out
                </button>
              </div>
            ) : (
              // ── Logged Out State ──
              <>
                <button onClick={() => openModal('login')} className="text-sm text-gray-600 hover:text-gray-900 font-medium flex items-center gap-1 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-gray-400">
                    <circle cx="7" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M1 13c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  Log in
                </button>
                <button onClick={() => openModal('signup')} className="bg-[#00AEEE] hover:bg-[#0099d6] text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors">
                  Sign up
                </button>
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden p-2 text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round"/> : <>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </>}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
            <a href="#" className="text-gray-700 text-sm font-medium">Home</a>
            <a href="#features" className="text-gray-700 text-sm font-medium">Features</a>
            <a href="#pricing" className="text-gray-700 text-sm font-medium">Pricing</a>
            <a href="#enterprise" className="text-gray-700 text-sm font-medium">Enterprise</a>
            <div className="flex gap-3 pt-2">
              {session ? (
                <>
                  <button onClick={() => router.push('/dashboard')} className="text-sm text-[#00AEEE] font-medium">Dashboard</button>
                  <button onClick={() => signOut({ callbackUrl: '/' })} className="text-sm text-red-500 font-medium">Sign out</button>
                </>
              ) : (
                <>
                  <button onClick={() => openModal('login')} className="text-sm text-gray-600 font-medium">Log in</button>
                  <button onClick={() => openModal('signup')} className="bg-[#00AEEE] text-white text-sm font-medium px-4 py-2 rounded-md">Sign up</button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* ── Modal ──────────────────────────────────────────────── */}
      {modal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4" onClick={closeModal}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative" onClick={e => e.stopPropagation()}>

            {/* Close */}
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 5l14 14M5 19L19 5" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {modal === 'signup' ? 'Create your account' : 'Welcome back'}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {modal === 'signup' ? 'Start your free trial — no credit card needed' : 'Log in to your SimplyBook.me account'}
              </p>
            </div>

            {/* Google */}
            <button
              onClick={handleGoogle}
              className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg py-2.5 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors mb-4 shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
                <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-gray-200"/>
              <span className="text-xs text-gray-400 font-medium">OR</span>
              <div className="flex-1 h-px bg-gray-200"/>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 text-red-600 text-sm px-4 py-2.5 rounded-lg mb-4 border border-red-100">
                {error}
              </div>
            )}

            {/* Form Fields */}
            <div className="flex flex-col gap-3">
              {modal === 'signup' && (
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00AEEE] focus:border-transparent transition"
                  />
                </div>
              )}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Email address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00AEEE] focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Min. 6 characters"
                  value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  onKeyDown={e => e.key === 'Enter' && (modal === 'signup' ? handleSignup() : handleLogin())}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00AEEE] focus:border-transparent transition"
                />
              </div>

              {modal === 'login' && (
                <div className="text-right">
                  <a href="#" className="text-xs text-[#00AEEE] hover:underline">Forgot password?</a>
                </div>
              )}

              <button
                onClick={modal === 'signup' ? handleSignup : handleLogin}
                disabled={loading}
                className="w-full bg-[#00AEEE] hover:bg-[#0099d6] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-lg transition-colors mt-1 text-sm flex items-center justify-center gap-2"
              >
                {loading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
                {loading ? 'Please wait...' : modal === 'signup' ? 'Create Account' : 'Log In'}
              </button>
            </div>

            {/* Switch */}
            <p className="text-center text-xs text-gray-500 mt-5">
              {modal === 'signup' ? (
                <>Already have an account?{' '}
                  <button onClick={() => openModal('login')} className="text-[#00AEEE] font-medium hover:underline">Log in</button>
                </>
              ) : (
                <>Don&apos;t have an account?{' '}
                  <button onClick={() => openModal('signup')} className="text-[#00AEEE] font-medium hover:underline">Sign up free</button>
                </>
              )}
            </p>
          </div>
        </div>
      )}
    </>
  )
}