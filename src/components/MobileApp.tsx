import Image from "next/image";

function PhoneMock({ title, subtitle, items }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 w-44 overflow-hidden">
      <div className="bg-[#00AEEE] px-4 py-3">
        <p className="text-white text-xs font-semibold">{title} 👋</p>
        <p className="text-white text-xs opacity-80">{subtitle}</p>
      </div>
      <div className="p-3 space-y-2">
        {items.map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#e8f7fd] rounded-lg flex-shrink-0"/>
            <div className="flex-1">
              <div className="h-2 bg-gray-200 rounded w-full mb-1"/>
              <div className="h-2 bg-gray-100 rounded w-2/3"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function MobileApp() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-md">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Go smart — <span className="text-[#00AEEE]">go mobile</span>
            </h2>
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Client app</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Give clients a personalised, branded app to book services, manage appointments, view history and buy gift cards from their phone.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-2">Admin app</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Manage your full schedule, add new bookings and clients on the go with a streamlined admin app built for busy days.
              </p>
            </div>
            <a href="#" className="text-[#00AEEE] text-sm font-medium hover:underline flex items-center gap-1">
              See our apps
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="#00AEEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

       {/* Right Phone Mock */}
<div className="flex-1 flex justify-center">
  <Image
    src="/Container.png"
    alt="Container"
    width={500}
    height={700}
    className="w-full max-w-md h-auto object-contain"
    priority
  />
</div>
        </div>
      </div>
    </section>
  )
}
