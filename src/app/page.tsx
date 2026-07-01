import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Reviews from '../components/Reviews';
// import Templates from '../components/Templates';
// import MobileApp from '../components/MobileApp';
// import AIVoice from '../components/AIVoice';
import WhatsApp from '../components/WhatsApp';
import Channels from '../components/Channels';
import BusinessTypes from '../components/BusinessTypes';
// import Security from '../components/Security';
// import HowItWorks from '../components/HowItWorks';
import Trial from '../components/Trial';
import Footer from '../components/Footer';
import { getTopReviews, getAppointmentFeatures, getSystemFeatures, getAllBusinessTypes } from '../helpers';

export default function Home() {
  const topReviews = getTopReviews();
  const appointmentFeatures = getAppointmentFeatures();
  const systemFeatures = getSystemFeatures();
  const businessTypes = getAllBusinessTypes();

  return (
    <main >
      <Navbar />
      <Hero />
      <Features />
      <Reviews />
      {/* <Templates /> */}
      {/* <MobileApp /> */}
      {/* <AIVoice /> */}
      <WhatsApp />
      <BusinessTypes />

      <Channels />
      {/* <Security/> */}
      {/* <HowItWorks />  */}
      <Trial />
      <Footer />
    </main>
  );
}