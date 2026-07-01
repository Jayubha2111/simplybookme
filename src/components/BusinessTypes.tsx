'use client'

import { businessTypes } from '../data/businessTypes'

const types = Object.values(businessTypes)

export default function BusinessTypes() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            One-Stop Solution for{' '}
            <span className="text-[#00AEEE]">Service Businesses</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {types.map((b, i) => (
            <a
              key={i}
              href="#"
              className={`${b.color} rounded-2xl overflow-hidden flex flex-row hover:shadow-md transition-shadow group`}
              style={{ height: '140px' }}
            >
              {/* Left: Text */}
              <div className="flex flex-col justify-center px-6 py-4" style={{ flex: 1 }}>
                <h3 className="font-semibold text-gray-900 text-base leading-snug mb-3">
                  {b.title}
                </h3>
                <span className="text-[#00AEEE] text-sm font-medium flex items-center gap-1">
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="#00AEEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>

              {/* Right: Image */}
              <div style={{ width: '140px', height: '140px', flexShrink: 0 }}>
                <img
                  src={b.image}
                  alt={b.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}