'use client'
import { useState } from 'react'
import Image from "next/image";

const features = {
  Main: [
    {
      icon: "/icnos1.png",
      title: "Accept online bookings",
      desc: "A mobile-optimised booking site or seamless integration with your existing one. Also accept bookings via Facebook, Instagram, Google, or your branded client app.",
    },
    {
      icon: "/icnos2.svg",
      title: "WhatsApp, SMS & Email alerts",
      desc: "Automated reminders and updates for both staff and clients whenever appointments are booked, cancelled, or rescheduled.",
    },
    {
      icon: "/icnos3.png",
      title: "Admin",
      desc: "Offer clients your own branded mobile app, and manage your schedule on the go with the admin app.",
    },
    {
      icon: "/icnos4.png",
      title: "Accept payments",
      desc: "Take online payments and deposits through Stripe, PayPal, Square and dozens of other processors.",
    },
    {
      icon: "/icnos5.png",
      title: "Integrations & API",
      desc: "Connect with Facebook, Instagram, Google My Business, Zapier, Quickbooks and many more — or build with our open API.",
    },
    {
      icon: "/icnos6.png",
      title: "Custom features",
      desc: "Coupons & gift cards, tips, custom emails, product sales, intake forms, memberships and more — turn on what you need.",
    },
  ],
}

export default function Features() {
  const [activeTab, setActiveTab] = useState('Main')
  const tabs = ['Main', 'For business', 'For clients']

  return (
    <section id="features" className="py-20 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Our features</h2>
          <p className="text-gray-500 text-lg">Everything you need to run a modern, service-based business — in one place.</p>
        </div>



        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features[activeTab].map((feature, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#EAF8FD] flex items-center justify-center mb-5">
  <Image
    src={feature.icon}
    alt={feature.title}
    width={44}
    height={24}
    className="w-10 h-10 object-contain"
  />
</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{feature.desc}</p>
              <a href="#" className="text-[#00AEEE] text-sm font-medium hover:underline flex items-center gap-1">
                Learn more
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="#00AEEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
