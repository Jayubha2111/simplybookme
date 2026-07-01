import Image from 'next/image'

const navLinks = [
'Home',  
  'Features',
  'Pricing',
  'Enterprise',
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Logo + tagline */}
          <div>
            <div className="relative h-9 sm:h-11 w-auto mb-4">
              <Image
                src="/Group4.png"
                alt="SimplyBookME Logo"
                width={180}
                height={40}
                priority
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Simple online booking for every service business.
              <br />
              Accept appointments 24/7, from anywhere.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">
              NAVIGATION
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-gray-500 hover:text-[#00AEEE] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">
              Contact Info
            </h4>
            <div className="space-y-3">
              <a href="tel:+911234567890" className="block text-sm text-gray-500 hover:text-[#00AEEE] transition-colors">
                +91 8200 6656 84
              </a>
              <a href="mailto:support@simplybookme.com" className="block text-sm text-gray-500 hover:text-[#00AEEE] transition-colors">
                support@simplybookme.com
              </a>
              <p className="text-sm text-gray-500 leading-relaxed">
               Shilp3, 3rd Floor, Sindhu Bhavan Road, Shilp Circle, Above Bajarang Grocery, Bodakdev, Ahmedabad, Gujarat – 380054.
                {/* <br />
                City, State – Pincode. */}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © 2026 SimplyBookME Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}