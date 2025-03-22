
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const HomePage = () => {
  useEffect(() => {
    document.title = "DroneCleanerPro - Nettoyage professionnel par drone en Haute-Savoie";
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default HomePage;
