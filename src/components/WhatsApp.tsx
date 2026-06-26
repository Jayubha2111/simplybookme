export default function WhatsApp() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left WhatsApp Mock */}
          <div className="flex-1 flex justify-center">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 w-full max-w-sm overflow-hidden">
              {/* WhatsApp Header */}
              <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-300 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                    <rect x="2" y="2" width="5" height="5" rx="1"/>
                    <rect x="9" y="2" width="5" height="5" rx="1"/>
                    <rect x="2" y="9" width="5" height="5" rx="1"/>
                    <rect x="9" y="9" width="5" height="5" rx="1"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">SimplyBookME</p>
                  <p className="text-green-300 text-xs">online</p>
                </div>
              </div>

              {/* WhatsApp Chat */}
              <div className="bg-[#e5ddd5] p-4 space-y-3 min-h-48">
                {[
                  { text: "Hi Anna! Your appointment is confirmed for tomorrow at 10:30 🎉", time: "10:42" },
                  { text: "Reminder: Hair cut with Marco - Tomorrow 10:30", time: "10:42" },
                  { text: "Need to reschedule? Reply 1 to change time, 2 to cancel.", time: "10:42" },
                ].map((msg, i) => (
                  <div key={i} className="flex justify-end">
                    <div className="bg-[#dcf8c6] rounded-lg rounded-tr-sm px-3 py-2 max-w-xs shadow-sm">
                      <p className="text-sm text-gray-800">{msg.text}</p>
                      <p className="text-xs text-gray-400 text-right mt-1">{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
                  <path d="M6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1zm2.5 3.5l-3 3L4 6l-.7.7 1.7 1.7.35.35 3.7-3.7-.55-.55z"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-green-700">WhatsApp Business</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">WhatsApp notifications</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Stay connected with your clients through automated WhatsApp messages. Send confirmations, reminders and updates directly to where your clients already spend their time— and watch no shows drop.
            </p>
            <a href="#" className="text-[#00AEEE] text-sm font-medium hover:underline flex items-center gap-1">
              Learn more about WhatsApp notifications
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="#00AEEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
