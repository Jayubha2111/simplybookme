export default function WhatsApp() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F8FCFA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left: Phone mockup with WhatsApp chat */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Soft glow behind phone */}
              <div
                className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-40"
                style={{ background: 'radial-gradient(circle, #25D366 0%, transparent 70%)' }}
              />

              {/* Phone frame */}
              <div className="w-[300px] rounded-[2.2rem] bg-gray-900 p-2.5 shadow-2xl">
                <div className="rounded-[1.7rem] overflow-hidden bg-white">

                  {/* Status bar */}
                  <div className="bg-[#075e54] px-5 pt-2.5 pb-1 flex items-center justify-between">
                    <span className="text-white text-[10px] font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <svg width="12" height="10" viewBox="0 0 16 12" fill="white"><rect width="3" height="4" y="8" rx="0.5"/><rect x="4.5" width="3" height="12" rx="0.5"/><rect x="9" width="3" height="12" rx="0.5" opacity="0.5"/><rect x="13" width="3" height="12" rx="0.5" opacity="0.5"/></svg>
                      <svg width="14" height="10" viewBox="0 0 16 12" fill="white"><path d="M8 2c2.5 0 4.7 1 6.3 2.6l-1.4 1.4C11.6 4.7 9.9 4 8 4s-3.6.7-4.9 2L1.7 4.6C3.3 3 5.5 2 8 2z"/></svg>
                      <svg width="18" height="10" viewBox="0 0 24 12" fill="none"><rect x="1" y="1" width="19" height="10" rx="2" stroke="white" strokeWidth="1"/><rect x="2.5" y="2.5" width="14" height="7" rx="1" fill="white"/><rect x="21" y="4" width="2" height="4" rx="1" fill="white"/></svg>
                    </div>
                  </div>

                  {/* WhatsApp header */}
                  <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                      <path d="M15 19l-7-7 7-7"/>
                    </svg>
                    <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.79c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99C18.34 21.13 22 17 22 12c0-5.52-4.48-10-10-10z" fill="white" opacity="0"/>
                        <path d="M17 8.5a5 5 0 10-8.9 3.1L7 15l3.5-1.1a5 5 0 006.5-5.4z"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-semibold leading-tight">SimplyBookME</p>
                      <p className="text-green-200 text-[11px]">online</p>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>
                  </div>

                  {/* Chat area */}
                  <div
                    className="p-3 space-y-2 min-h-[340px]"
                    style={{
                      backgroundColor: '#e5ddd5',
                      backgroundImage:
                        'radial-gradient(circle at 20% 20%, rgba(0,0,0,0.02) 2px, transparent 2px), radial-gradient(circle at 60% 60%, rgba(0,0,0,0.02) 2px, transparent 2px)',
                      backgroundSize: '24px 24px',
                    }}
                  >
                    {/* date pill */}
                    <div className="flex justify-center mb-2">
                      <span className="bg-white/80 text-[10px] text-gray-500 px-3 py-1 rounded-full shadow-sm">Today</span>
                    </div>

                    {[
                      { text: "Hi Anna! Your appointment is confirmed for tomorrow at 10:30 🎉", time: "10:42" },
                      { text: "Reminder: Hair cut with Marco — Tomorrow 10:30", time: "10:43" },
                      { text: "Need to reschedule? Reply 1 to change time, 2 to cancel.", time: "10:43" },
                    ].map((msg, i) => (
                      <div key={i} className="flex justify-end">
                        <div className="bg-[#dcf8c6] rounded-lg rounded-tr-sm px-3 py-2 max-w-[85%] shadow-sm">
                          <p className="text-[13px] text-gray-800 leading-snug">{msg.text}</p>
                          <div className="flex items-center justify-end gap-1 mt-1">
                            <span className="text-[10px] text-gray-400">{msg.time}</span>
                            <svg width="14" height="10" viewBox="0 0 16 11" fill="none">
                              <path d="M1 5.5L4.5 9L11 1.5" stroke="#34B7F1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M5 5.5L8.5 9L15 1.5" stroke="#34B7F1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input bar */}
                  <div className="bg-[#f0f0f0] px-3 py-2.5 flex items-center gap-2">
                    <div className="flex-1 bg-white rounded-full px-4 py-2 text-[12px] text-gray-400">
                      Type a message
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                        <path d="M2 21l21-9L2 3v7l15 2-15 2z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 max-w-md">
            <div className="inline-flex items-center gap-2 mb-5 bg-green-50 px-3 py-1.5 rounded-full">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
                  <path d="M6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1zm2.5 3.5l-3 3L4 6l-.7.7 1.7 1.7.35.35 3.7-3.7-.55-.55z"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-green-700">WhatsApp Business</span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              WhatsApp notifications
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Stay connected with your clients through automated WhatsApp messages. Send confirmations, reminders and updates directly to where your clients already spend their time — and watch no-shows drop.
            </p>

            {/* Feature bullets */}
            <ul className="space-y-3 mb-8">
              {[
                'Instant booking confirmations',
                'Automated appointment reminders',
                'Two-way messaging for reschedules',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <svg width="13" height="13" viewBox="0 0 16 12" fill="none">
                      <path d="M1 6l4 4 10-9" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#00AEEE] text-sm font-semibold hover:underline"
            >
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