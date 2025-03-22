
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';

const WhyChooseUsPage = () => {
  useEffect(() => {
    document.title = "Pourquoi Nous Choisir - DroneCleanerPro";
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-20"> {/* Padding to account for fixed navbar */}
        <WhyChooseUs />
      </div>
      <Footer />
    </div>
  );
};

export default WhyChooseUsPage;
