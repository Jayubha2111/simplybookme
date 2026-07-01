'use client'

export default function Trial() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Center heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Try the Booking System{' '}
            <span className="text-[#00AEEE]">for 7 days</span>
          </h2>
          <p className="text-gray-500 text-lg">Most features included</p>
        </div>

<div className="flex flex-col lg:flex-row items-center justify-center gap-24 lg:gap-32">
          {/* Left Illustration */}
          <div className="relative flex items-center justify-center w-full lg:w-auto shrink-0">
            <img
              src="/14days.png"
              alt="SimplyBook mascot"
              style={{ width: '560px', height: 'auto', objectFit: 'contain' }}
            />
          </div>

          {/* Right: list + CTA */}
          <div className="max-w-md">
            <ul className="space-y-2 mb-10">
              {[
                { icon: 'calendar', text: <><span className="font-semibold">10</span>included bookings during trial period</> },
                { icon: 'check', text: <><span className="font-semibold">Most</span>Custom Features included</> },
                { icon: 'laptop', text: <>Your own<span className="font-semibold">booking website</span></> },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-1 text-base text-gray-800">
                  <span className="shrink-0 text-[#0F2C4E]">
                    {item.icon === 'calendar' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="3" y="5" width="18" height="16" rx="2" />
                        <path d="M3 9h18M8 3v4M16 3v4" strokeLinecap="round" />
                      </svg>
                    )}
                    {item.icon === 'check' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <path d="M8 12l2.5 2.5L16 9" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {item.icon === 'laptop' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="3" y="5" width="18" height="12" rx="1.5" />
                        <path d="M8.5 9l-2 2 2 2M15.5 9l2 2-2 2M1 21h22" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
<a
            
              href="#"
              className="inline-flex items-center gap-2 bg-[#00AEEE] hover:bg-[#00AEEE] text-white font-semibold px-7 py-2 rounded-full text-base transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M2 12l19-9-6 9 6 9-19-9z" />
              </svg>
              Try now
            </a>

            <div className="relative mt-4 ml-2">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                stroke="#00AEEE"
                strokeWidth="2"
                className="absolute -left-8 top-0"
              >
                <path d="M20 26C10 26 4 18 6 8" strokeLinecap="round" />
                <path d="M2 10l4-4 4 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p
                className="text-[#00AEEE] text-lg pl-2"
                style={{ fontFamily: "'Comic Sans MS', cursive" }}
              >
                It's free! No credit card required!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}