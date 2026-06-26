export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Video Thumbnail */}
          <div className="flex-1">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0077aa] to-[#004d77] shadow-xl aspect-video flex items-center justify-center cursor-pointer group">
              <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#00AEEE">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
              <div className="absolute bottom-4 left-4">
                <p className="text-white text-xs opacity-70">2:34</p>
                <p className="text-white text-sm font-medium">How SimplyBookME works</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 max-w-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">New to SimplyBookME?</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Want to see how SimplyBookME can help you manage your online bookings? Watch a quick walkthrough — it really is easy.
            </p>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">It's really easy</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Set up your services, share your booking link, and start filling your calendar in minutes. No technical skills required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
