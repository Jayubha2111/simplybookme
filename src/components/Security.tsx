const certifications = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#00AEEE" strokeWidth="1.8">
        <rect x="4" y="10" width="20" height="14" rx="2"/>
        <path d="M9 10V7a5 5 0 0 1 10 0v3"/>
      </svg>
    ),
    label: '256-bit SSL',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#00AEEE" strokeWidth="1.8">
        <path d="M14 3L5 7v8c0 5 4 9.7 9 11 5-1.3 9-6 9-11V7L14 3z"/>
      </svg>
    ),
    label: 'HIPAA',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#00AEEE" strokeWidth="1.8">
        <circle cx="14" cy="14" r="10"/>
        <path d="M14 8v6l4 2"/>
      </svg>
    ),
    label: 'ISO 27001',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#00AEEE" strokeWidth="1.8">
        <circle cx="14" cy="14" r="10"/>
        <path d="M4 14c0-1 2-4 6-6M18 8c4 2 6 5 6 6" strokeLinecap="round"/>
        <ellipse cx="14" cy="14" rx="5" ry="10"/>
        <line x1="4" y1="14" x2="24" y2="14"/>
      </svg>
    ),
    label: 'Hosted in EU',
  },
]

export default function Security() {
  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-md">
            <span className="inline-block bg-[#e8f7fd] text-[#00AEEE] text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Security
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Security matters.</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Your data — and your clients' data — is encrypted in transit and at rest, backed up daily, and protected by industry-leading certifications.
            </p>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8">
              {[
                'HIPAA compliance',
                'ISO 27001 certified',
                'Password security & SSL',
                'Single sign-on (SSO)',
                'Daily encrypted backups',
                'Dedicated security officer',
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
              className="inline-block bg-[#00AEEE] hover:bg-[#0099d6] text-white font-medium px-6 py-3 rounded-md text-sm transition-colors"
            >
              Get a free account
            </a>
          </div>

          {/* Right Certifications Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 p-6 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-[#e8f7fd] rounded-xl flex items-center justify-center">
                    {cert.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-700">{cert.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
