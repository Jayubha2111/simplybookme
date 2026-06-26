export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-5xl lg:text-6xl text-[#121212] leading-tight mb-6">
              Online booking
              <br />
              system for{' '}
              <span className="text-[#00AEEE]">every</span>
              <br />
              <span className="text-[#00AEEE]">service business</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Simply define your services and providers, display their
              availability, and you will have clients both old and new
              making bookings 24/7.
            </p>
            <a
              href="#"
              className="inline-block bg-[#00AEEE] hover:bg-[#0099d6] text-white font-semibold px-8 py-4 rounded-md text-base transition-colors"
            >
              Get a Free Account
            </a>
          </div>

          {/* Right Dashboard Preview */}
          <div className="flex-1 relative">
            <div className="bg-gradient-to-br from-[#e8f7fd] to-[#f0f9ff] rounded-2xl p-6 shadow-lg">
              {/* Dashboard Mock */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                {/* Top Bar */}
                <div className="bg-gray-900 px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"/>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"/>
                    <div className="w-3 h-3 rounded-full bg-green-400"/>
                  </div>
                  <div className="flex-1 flex justify-end gap-2">
                    <span className="text-xs text-white bg-gray-700 px-3 py-1 rounded">Last 7 days</span>
                    <span className="text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded">Last 30 days</span>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-5">
                  <p className="text-xs text-gray-400 mb-4">Performance summary across All forms</p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="border border-gray-100 rounded-lg p-3">
                      <p className="text-xs text-gray-400 mb-1">TOTAL VISITS</p>
                      <p className="text-xl font-bold text-gray-800">815</p>
                    </div>
                    <div className="border border-gray-100 rounded-lg p-3">
                      <p className="text-xs text-gray-400 mb-1">TOTAL BOOKINGS</p>
                      <p className="text-xl font-bold text-gray-800">124</p>
                    </div>
                    <div className="border border-gray-100 rounded-lg p-3">
                      <p className="text-xs text-gray-400 mb-1">CONVERSION RATE</p>
                      <p className="text-xl font-bold text-gray-800">15.21%</p>
                    </div>
                    <div className="border border-gray-100 rounded-lg p-3">
                      <p className="text-xs text-gray-400 mb-1">SLOTS AVAILABLE</p>
                      <p className="text-xl font-bold text-gray-800">664</p>
                    </div>
                    <div className="border border-gray-100 rounded-lg p-3">
                      <p className="text-xs text-gray-400 mb-1">ACTIVE FORMS</p>
                      <p className="text-xl font-bold text-gray-800">4</p>
                    </div>
                    <div className="border border-gray-100 rounded-lg p-3">
                      <p className="text-xs text-gray-400 mb-1">SLOTS FILLED</p>
                      <p className="text-xl font-bold text-gray-800">15.74%</p>
                    </div>
                  </div>

                  {/* Charts Row */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Line Chart */}
                    <div className="border border-gray-100 rounded-lg p-3">
                      <p className="text-xs text-gray-400 mb-3">Visits Over Time</p>
                      <svg viewBox="0 0 160 60" className="w-full">
                        <polyline
                          points="0,50 20,45 40,30 60,40 80,20 100,35 120,15 140,25 160,10"
                          fill="none"
                          stroke="#00AEEE"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <polyline
                          points="0,50 20,45 40,30 60,40 80,20 100,35 120,15 140,25 160,10 160,60 0,60"
                          fill="url(#gradient)"
                          opacity="0.15"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#00AEEE"/>
                            <stop offset="100%" stopColor="#00AEEE" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    {/* Bar Chart */}
                    <div className="border border-gray-100 rounded-lg p-3">
                      <p className="text-xs text-gray-400 mb-3">Bookings by slot</p>
                      <div className="flex items-end gap-0.5 h-12">
                        {[30,50,20,70,40,80,35,60,45,90,55,30,65,40,75,50,85,45,60,70].map((h, i) => (
                          <div
                            key={i}
                            style={{ height: `${h}%` }}
                            className="flex-1 bg-gray-800 rounded-sm"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
