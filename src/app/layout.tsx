import './globals.css'
import Providers from '../components/Providers'

export const metadata = {
  title: 'SimplyBookME - Online Booking System for Every Service Business',
  description: 'Simply define your services and providers, display their availability, and you will have clients both old and new making bookings 24/7.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-inter">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}