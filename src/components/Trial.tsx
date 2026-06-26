'use client'

export default function Trial() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left */}
          <div className="max-w-lg">
            <h2 className="text-4xl text-gray-900 mb-4 leading-tight">
              Try SimplyBookME free for{' '}
              <span className="text-[#00AEEE]">14 days</span>
            </h2>
            <ul className="space-y-2 mb-8">
              {[
                '50 included bookings during the trial',
                'Most custom features unlocked',
                'Your own booking website',
                '24/7 live chat support',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 4" stroke="#00AEEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-block bg-[#00AEEE] hover:bg-[#0099d6] text-white font-semibold px-8 py-4 rounded-md text-base transition-colors"
            >
              Try now
            </a>
          </div>

          {/* Right Illustration */}
          <div className="relative flex items-center justify-center w-full lg:w-auto">

            {/* Background cards (wireframe style) */}
            <div className="relative w-[380px] h-[280px]">
              {/* Blue dot */}

              {/* Bird mascot PNG */}
              <div className="absolute bottom-0 right-4">
                <img
                  src="/14days.png"
                  alt="SimplyBook mascot"
                  style={{ width: '660px', height: '380px', objectFit: 'contain' }}
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}