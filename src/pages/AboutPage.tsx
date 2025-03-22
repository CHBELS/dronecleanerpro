
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';

const AboutPage = () => {
  useEffect(() => {
    document.title = "À Propos - DroneCleanerPro";
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-20"> {/* Padding to account for fixed navbar */}
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
