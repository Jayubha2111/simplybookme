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
          <a href="#" className="text-[#00AEEE] text-sm font-medium hover:underline flex items-center gap-1 whitespace-nowrap">
            See All Business Types
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="#00AEEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Grid - fills a full screen height, 2 rows x 3 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-0 rounded-2xl overflow-hidden min-h-screen">
          {types.map((b, i) => (
            <a
              key={i}
              href="#"
              className="group relative overflow-hidden flex items-start justify-end p-6 min-h-[300px]"
            >
              {/* Background image fills entire card, no color box visible */}
              <img
                src={b.image}
                alt={b.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Title over image, top-right */}
              <h3 className="relative z-10 font-semibold text-gray-900 text-lg leading-snug text-right max-w-[60%] drop-shadow-md transition-opacity duration-300 group-hover:opacity-0">
                {b.title}
              </h3>

              {/* Hover overlay: solid color + title + description + button */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out"
                style={{ backgroundColor: b.hoverColor }}
              >
                <h3 className="text-white text-xl font-bold mb-3">{b.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-6 max-w-xs">
                  {b.description}
                </p>
                <span className="bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 hover:bg-gray-50 transition-colors">
                  Check it out
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}