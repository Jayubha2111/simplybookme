export default function AIVoice() {
  return (
    <section className="py-20 px-6 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-md">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Book by voice —{' '}
              <span className="text-[#00AEEE]">24/7 AI scheduling</span>
            </h2>
            <p className="font-semibold text-gray-800 mb-4">
              No forms. No clicks. Just speak, and the appointment is set in seconds.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Our AI voice agent answers calls, checks availability and books appointments in real time. It speaks naturally in 30+ languages, recognises returning clients, and hands off to a human whenever you want it to.
            </p>
            <a
              href="#"
              className="inline-block bg-[#00AEEE] hover:bg-[#0099d6] text-white font-medium px-6 py-3 rounded-md text-sm transition-colors"
            >
              Try AI voice booking
            </a>
          </div>

          {/* Right Chat Mock */}
          <div className="flex-1 flex justify-center">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 w-full max-w-sm p-6">
              {/* Microphone Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 rounded-full bg-[#00AEEE] flex items-center justify-center shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                    <line x1="12" y1="19" x2="12" y2="23" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="8" y1="23" x2="16" y2="23" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-3">
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                    <p className="text-sm text-gray-700">"Hi, I'd like to book a haircut for tomorrow morning."</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-[#00AEEE] rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                    <p className="text-sm text-white">Of course! We have 9:30 or 11:15 with Marco. Which works best?</p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                    <p className="text-sm text-gray-700">"11:15 please."</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-[#00AEEE] rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                    <p className="text-sm text-white">Booked 🎉 I just sent the confirmation to your phone.</p>
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
