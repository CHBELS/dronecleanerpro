
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Technology from '@/components/Technology';
import Services from '@/components/Services';
import ServiceArea from '@/components/ServiceArea';
import WhyChooseUs from '@/components/WhyChooseUs';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "DroneCleanerPro - Nettoyage professionnel par drone en Haute-Savoie";
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Technology />
      <Services />
      <ServiceArea />
      <WhyChooseUs />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
