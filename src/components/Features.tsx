'use client'
import { useState } from 'react'
import Image from "next/image";

const features = {
  Main: [
    {
      icon: "/icnos1.png",
      title: "Accept online bookings",
      shortDesc: "Your own mobile-optimised booking website",
      fullDesc: "Your own mobile-optimised booking website or integration with your existing site. Also accept bookings directly via Facebook, Instagram, Google or your own branded client app.",
    },
    {
      icon: "/icnos2.svg",
      title: "Notifications via WhatsApp, SMS & Email",
      shortDesc: "Send automated reminders and updates to",
      fullDesc: "Send automated reminders and updates to staff and clients whenever appointments are booked, canceled, or rescheduled. Keep clients informed with WhatsApp, SMS, and email notifications, and get push notifications in the admin app for new booking activity.",
    },
    {
      icon: "/icnos6.png",
      title: "Business Analytics",
      shortDesc: "Monitor your bookings and site visits",
      fullDesc: "Monitor your bookings, site visits, most popular service providers and services on any device, at any time, or from within the mobile admin app.",
    },
    {
      icon: "/icnos3.png",
      title: "Reviews",
      shortDesc: "Automatically collect client feedback",
      fullDesc: "The system automatically sends feedback requests after appointments so that clients can post their own reviews. Clients can also read other people's reviews.",
    },
  ],
}

export default function Features() {
  const [activeTab, setActiveTab] = useState('Main')

  return (
    <section id="features" className="py-20 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Our <span className="text-[#00AEEE]">features</span>
          </h2>
          <p className="text-gray-500 text-lg mt-2">
            Everything you need to run a modern, service-based business — in one place.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features[activeTab].map((feature, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center text-center px-4"
            >
              {/* Icon + Glow wrapper */}
              <div className="relative w-24 h-24 flex items-center justify-center mb-5">
                {/* Glow behind icon - only visible on hover */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-full opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(0,174,238,0.20) 0%, rgba(0,174,238,0.08) 45%, rgba(0,174,238,0) 70%)",
                  }}
                />

                {/* Icon */}
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="relative w-16 h-16 object-contain transition-transform duration-500 group-hover:scale-110"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>

              {/* Description - short by default, expands to full on hover */}
              <div className="grid transition-[grid-template-rows] duration-500 ease-out grid-rows-[1fr] group-hover:grid-rows-[1fr] w-full">
                <div className="overflow-hidden">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    <span className="block group-hover:hidden">
                      {feature.shortDesc}
                    </span>
                    <span className="hidden group-hover:block">
                      {feature.fullDesc}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}