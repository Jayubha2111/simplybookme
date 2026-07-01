const reviews = [
  {
    text: '"SimplybookME transformed how we manage appointments. No-shows dropped by 40% in our first month thanks to automatic reminders."',
    name: 'Sandeep Shah',
    role: 'Owner, Bloom Hair Studio',
    initials: 'SS',
  },
  {
    text: '"The custom features let me build exactly the workflow we needed — from intake forms to membership renewals. Game changer."',
    name: 'Vaishali Dave',
    role: 'Founder, North Strength Gym',
    initials: 'VD',
  },
  {
    text: '"Clients love the branded app and we love how much time we save. Support is genuinely 24/7 — I\'ve tested it."',
    name: 'Niyat bhatt',
    role: 'Director, Serenity Wellness Spa',
    initials: 'NB',
  },
]

const ratings = [
  { platform: 'Capterra', score: '4.6/5' },
  { platform: 'GetApp', score: '4.6/5' },
  { platform: 'FinancesOnline', score: '4.7/5' },
  { platform: 'G2', score: '4.4/5' },
]

function StarRating() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill="#00AEEE">
          <path d="M9 1l2.39 4.84 5.34.78-3.86 3.76.91 5.32L9 13.27l-4.78 2.51.91-5.32L1.27 6.62l5.34-.78L9 1z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-4">
          <span className="text-[#00AEEE] text-sm font-semibold uppercase tracking-widest">REVIEWS</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-3">
          Trusted by thousands of businesses worldwide
        </h2>
        <p className="text-gray-500 text-center text-lg mb-12">
          See how SimplyBookME has helped service businesses simplify scheduling and grow.
        </p>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <StarRating />
              <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">{r.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00AEEE] flex items-center justify-center text-white text-xs font-bold">
                  {r.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
