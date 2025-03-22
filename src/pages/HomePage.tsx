
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Technology from '../components/Technology';
import WhyChooseUs from '../components/WhyChooseUs';
import ServiceArea from '../components/ServiceArea';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useSiteContent } from '@/context/SiteContext';

const HomePage = () => {
  const { siteContent } = useSiteContent();

  useEffect(() => {
    document.title = siteContent.home.title;
  }, [siteContent.home.title]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Technology />
        <WhyChooseUs />
        <ServiceArea />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
