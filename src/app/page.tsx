import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Reviews from '../components/Reviews';
import Templates from '../components/Templates';
import MobileApp from '../components/MobileApp';
import AIVoice from '../components/AIVoice';
import WhatsApp from '../components/WhatsApp';
import Channels from '../components/Channels';
import BusinessTypes from '../components/BusinessTypes';
import Security from '../components/Security';
import HowItWorks from '../components/HowItWorks';
import Trial from '../components/Trial';
import Footer from '../components/Footer';
import { getTopReviews, getAppointmentFeatures, getSystemFeatures, getAllBusinessTypes } from '../helpers';

export default function Home() {
  const topReviews = getTopReviews();
  const appointmentFeatures = getAppointmentFeatures();
  const systemFeatures = getSystemFeatures();
  const businessTypes = getAllBusinessTypes();

  return (
    <main className="w-full overflow-x-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      <Hero />
      <Features />
      <Reviews />
      <Templates />
      <MobileApp />
      <AIVoice />
      <WhatsApp />
      <Channels />
      <BusinessTypes />
      <Security/>
      <HowItWorks />
      <Trial />
      <Footer />
    </main>
  );
}