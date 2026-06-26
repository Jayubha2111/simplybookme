export default function Channels() {
  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Want more bookings from more channels?</h2>
          <p className="text-gray-500 text-lg">Accept appointments wherever your clients already are.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Facebook */}
          <a href="#" className="group block relative overflow-hidden rounded-xl">
            <div className="bg-[#1877f2] h-48 flex flex-col items-center justify-center rounded-xl transition-transform group-hover:scale-[1.02]">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="white">
                <path d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4zm5 11h-3c-1.1 0-1 .4-1 1.5V18h4l-.5 4H25v12h-4V22h-3v-4h3v-2.5C21 12.8 22.9 11 26 11h3v4z"/>
              </svg>
            </div>
            <div className="mt-3 flex items-center justify-between px-1">
              <span className="font-medium text-gray-800">Facebook</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 8h8M8 4l4 4-4 4" stroke="#00AEEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </a>

          {/* Instagram */}
          <a href="#" className="group block relative overflow-hidden rounded-xl">
            <div className="h-48 flex flex-col items-center justify-center rounded-xl transition-transform group-hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #f58529, #dd2a7b, #8134af, #515bd4)' }}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="2.5">
                <rect x="8" y="8" width="32" height="32" rx="10"/>
                <circle cx="24" cy="24" r="8"/>
                <circle cx="35" cy="13" r="2" fill="white" stroke="none"/>
              </svg>
            </div>
            <div className="mt-3 flex items-center justify-between px-1">
              <span className="font-medium text-gray-800">Instagram</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 8h8M8 4l4 4-4 4" stroke="#00AEEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </a>

          {/* Your website */}
          <a href="#" className="group block relative overflow-hidden rounded-xl">
            <div className="bg-[#00AEEE] h-48 flex flex-col items-center justify-center rounded-xl transition-transform group-hover:scale-[1.02]">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="2.5">
                <circle cx="24" cy="24" r="18"/>
                <path d="M6 24h36M24 6c-6 4-10 11-10 18s4 14 10 18M24 6c6 4 10 11 10 18s-4 14-10 18" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="mt-3 flex items-center justify-between px-1">
              <span className="font-medium text-gray-800">Your website</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 8h8M8 4l4 4-4 4" stroke="#00AEEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
