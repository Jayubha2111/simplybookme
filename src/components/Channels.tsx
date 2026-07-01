'use client'
import { useState } from 'react'

const channels = {
  facebook: {
    name: 'Facebook',
    subtitle: 'Read on our blog',
    subtitleLink: '#',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="#1877F2">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.79c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99C18.34 21.13 22 17 22 12c0-5.52-4.48-10-10-10z"/>
      </svg>
    ),
    preview: (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="bg-[#4267B2] px-4 py-2.5 flex items-center gap-2">
          <div className="bg-white rounded p-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.79c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99C18.34 21.13 22 17 22 12c0-5.52-4.48-10-10-10z"/>
            </svg>
          </div>
          <div className="bg-white/90 rounded px-2 py-1 flex-1 flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
            </svg>
            <div className="h-2 w-16 bg-gray-200 rounded" />
          </div>
          <div className="w-6 h-6 rounded-full bg-white/90" />
          <div className="hidden sm:flex gap-1">
            <div className="h-2 w-10 bg-white/40 rounded" />
            <div className="h-2 w-10 bg-white/40 rounded" />
          </div>
        </div>
        <div className="relative h-40 bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="absolute -bottom-8 left-6 w-20 h-20 rounded-full bg-gray-300 border-4 border-white flex items-center justify-center text-2xl">
            🙂
          </div>
          <button className="absolute bottom-3 right-4 bg-[#4267B2] text-white text-xs font-semibold px-4 py-2 rounded-md">
            Book now
          </button>
        </div>
        <div className="pt-10 pb-4 px-6">
          <div className="h-2.5 w-32 bg-gray-200 rounded mb-2" />
          <div className="h-2 w-20 bg-gray-100 rounded mb-4" />
          <div className="grid grid-cols-2 gap-3">
            <div className="h-16 bg-gray-50 rounded-lg border border-gray-100" />
            <div className="h-16 bg-gray-50 rounded-lg border border-gray-100" />
          </div>
        </div>
      </div>
    ),
  },
  instagram: {
    name: 'Instagram',
    subtitle: 'See how it works',
    subtitleLink: '#',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <defs>
          <linearGradient id="igGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f58529" />
            <stop offset="50%" stopColor="#dd2a7b" />
            <stop offset="100%" stopColor="#8134af" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#igGrad)" />
        <rect x="6" y="6" width="12" height="12" rx="4" fill="none" stroke="white" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.2" fill="none" stroke="white" strokeWidth="1.8" />
        <circle cx="17" cy="7" r="1.1" fill="white" />
      </svg>
    ),
    preview: (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-sm mx-auto">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
          <div
            className="w-10 h-10 rounded-full p-[2px]"
            style={{ background: 'linear-gradient(135deg, #f58529, #dd2a7b, #8134af)' }}
          >
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-lg">🙂</div>
          </div>
          <div>
            <div className="h-2.5 w-24 bg-gray-300 rounded mb-1.5" />
            <div className="h-2 w-16 bg-gray-100 rounded" />
          </div>
        </div>
        <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <button className="bg-white text-gray-800 text-xs font-semibold px-4 py-2 rounded-full shadow">
            Book now
          </button>
        </div>
        <div className="px-4 py-3 flex items-center gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8"><path d="M12 21s-7-4.5-9.3-8.4C.9 9 2.4 5.5 6 4.8c2-.4 3.8.6 5 2.2 1.2-1.6 3-2.6 5-2.2 3.6.7 5.1 4.2 3.3 7.8C19 16.5 12 21 12 21z"/></svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8"><path d="M21 11.5a8.5 8.5 0 01-8.5 8.5H4l2.5-3A8.5 8.5 0 1121 11.5z"/></svg>
        </div>
      </div>
    ),
  },
  website: {
    name: 'Your website',
    subtitle: 'Learn how to add it',
    subtitleLink: 'https://appointment.harichtech.com/',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00AEEE" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c-2.5 2.3-4 5.5-4 9s1.5 6.7 4 9M12 3c2.5 2.3 4 5.5 4 9s-1.5 6.7-4 9" />
      </svg>
    ),
    preview: (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-2 border-b border-gray-200">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
          </div>
          <div className="bg-white rounded px-3 py-1 flex-1 text-[10px] text-gray-400">
            yourbusiness.com
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="h-3 w-28 bg-gray-800 rounded" />
            <button className="bg-[#00AEEE] text-white text-xs font-semibold px-4 py-2 rounded-md">
              Book now
            </button>
          </div>
          <div className="h-32 bg-gradient-to-br from-sky-50 to-blue-100 rounded-lg mb-4" />
          <div className="grid grid-cols-3 gap-3">
            <div className="h-16 bg-gray-50 rounded-lg border border-gray-100" />
            <div className="h-16 bg-gray-50 rounded-lg border border-gray-100" />
            <div className="h-16 bg-gray-50 rounded-lg border border-gray-100" />
          </div>
        </div>
      </div>
    ),
  },
}

export default function Channels() {
  const [active, setActive] = useState('facebook')
  const list = Object.entries(channels)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Do you want <span className="text-[#00AEEE]">more bookings</span> from more channels?
          </h2>
          <p className="text-gray-500 text-lg">Accept bookings from multiple channels</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: dynamic preview */}
          <div className="w-full max-w-md mx-auto">
            {channels[active].preview}
          </div>

          {/* Right: channel selector grid */}
          <div className="grid grid-cols-3 gap-4">
            {list.map(([key, c]) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`flex flex-col items-center justify-center text-center gap-3 rounded-xl p-6 transition-colors ${
                  active === key ? 'bg-[#EAF6FD]' : 'bg-transparent hover:bg-gray-50'
                }`}
              >
                {c.icon}
                <span className={`text-sm font-medium ${active === key ? 'text-gray-900' : 'text-gray-600'}`}>
                  {c.name}
                </span>
                {active === key && (
                  <a href={c.subtitleLink} className="text-[#00AEEE] text-xs font-medium hover:underline">
                    {c.subtitle}
                  </a>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}