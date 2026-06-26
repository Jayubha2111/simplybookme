'use client'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Image from 'next/image'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  // Redirect to home if not logged in
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-[#00AEEE] border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 text-sm">Loading...</p>
        </div>
      </div>
    )
  }

  if (!session) return null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/Group4.svg" alt="SimplyBookME" width={150} height={36} className="h-9 w-auto" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 hidden sm:block">
              Welcome, <span className="font-semibold text-gray-900">{session.user?.name}</span>
            </span>
            {session.user?.image && (
              <img
                src={session.user.image}
                alt="Profile"
                className="w-9 h-9 rounded-full border-2 border-[#00AEEE]"
              />
            )}
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="text-sm text-gray-500 hover:text-red-500 font-medium transition-colors border border-gray-200 px-3 py-1.5 rounded-lg hover:border-red-200"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-8">
          <div className="flex items-center gap-4">
            {session.user?.image ? (
              <img src={session.user.image} alt="Profile" className="w-16 h-16 rounded-full border-4 border-[#00AEEE]/20" />
            ) : (
              <div className="w-16 h-16 rounded-full bg-[#00AEEE] flex items-center justify-center text-white text-2xl font-bold">
                {session.user?.name?.charAt(0).toUpperCase()}
              </div>
            )}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Hello, {session.user?.name}! 👋
              </h1>
              <p className="text-gray-500 text-sm mt-0.5">{session.user?.email}</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {[
            { label: 'Total Bookings', value: '0', icon: '📅', color: 'bg-blue-50 text-blue-600' },
            { label: 'Active Services', value: '0', icon: '⚡', color: 'bg-purple-50 text-purple-600' },
            { label: 'Clients', value: '0', icon: '👥', color: 'bg-green-50 text-green-600' },
            { label: 'Revenue', value: '₹0', icon: '💰', color: 'bg-yellow-50 text-yellow-600' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center text-lg mb-3`}>
                {stat.icon}
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-5">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Add a Service', desc: 'Create your first bookable service', icon: '➕' },
              { label: 'View Calendar', desc: 'See your upcoming appointments', icon: '🗓️' },
              { label: 'Settings', desc: 'Configure your account', icon: '⚙️' },
            ].map((action) => (
              <button
                key={action.label}
                className="text-left border border-gray-100 rounded-xl p-5 hover:border-[#00AEEE] hover:shadow-md transition-all group"
              >
                <div className="text-2xl mb-2">{action.icon}</div>
                <p className="font-semibold text-gray-900 group-hover:text-[#00AEEE] transition-colors">{action.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{action.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}