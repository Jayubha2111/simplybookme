const templates = [
  {
    name: 'Minimal',
    desc: 'Clean, distraction-free design for modern brands.',
    gradient: 'from-gray-700 to-gray-900',
    accent: '#555',
  },
  {
    name: 'Classic',
    desc: 'A timeless layout that works for every industry.',
    gradient: 'from-blue-800 to-blue-950',
    accent: '#2563eb',
  },
  {
    name: 'Belle',
    desc: 'Soft, elegant theme tailored to beauty & wellness.',
    gradient: 'from-pink-400 to-rose-600',
    accent: '#ec4899',
  },
  {
    name: 'Modern',
    desc: 'Bold typography and confident colour for studios.',
    gradient: 'from-blue-500 to-blue-800',
    accent: '#00AEEE',
  },
]

function TemplateMock({ gradient, accent }) {
  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-lg p-3 h-36 flex flex-col justify-between`}>
      {/* Mock lines */}
      <div>
        <div className="w-3/4 h-2 bg-white opacity-30 rounded mb-2"/>
        <div className="w-1/2 h-2 bg-white opacity-20 rounded mb-1"/>
        <div className="w-2/3 h-2 bg-white opacity-20 rounded mb-3"/>
        <div className="w-full h-2 bg-white opacity-10 rounded mb-1"/>
        <div className="w-full h-2 bg-white opacity-10 rounded mb-1"/>
        <div className="w-3/4 h-2 bg-white opacity-10 rounded"/>
      </div>
      <div className="h-7 rounded" style={{ background: accent, opacity: 0.9 }}/>
    </div>
  )
}

export default function Templates() {
  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Customise your own booking site</h2>
          <p className="text-gray-500 text-lg">Choose from beautiful templates or embeddable widgets that match your brand perfectly.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((t, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3">
                <TemplateMock gradient={t.gradient} accent={t.accent} />
              </div>
              <div className="px-4 pb-4">
                <h3 className="font-semibold text-gray-900 mb-1">{t.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{t.desc}</p>
                <div className="flex gap-2">
                  <button className="flex-1 border border-gray-200 text-gray-700 text-xs font-medium py-2 rounded-md hover:bg-gray-50 transition-colors">
                    View demo
                  </button>
                  <button className="flex-1 bg-[#00AEEE] hover:bg-[#0099d6] text-white text-xs font-medium py-2 rounded-md transition-colors">
                    Customise
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="text-[#00AEEE] font-medium hover:underline">
            View all templates →
          </a>
          <p className="text-xs text-gray-400 mt-1">17 custom templates available</p>
        </div>
      </div>
    </section>
  )
}
