
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Technology from '@/components/Technology';
import Footer from '@/components/Footer';

const TechnologyPage = () => {
  useEffect(() => {
    document.title = "Notre Technologie - DroneCleanerPro";
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-20"> {/* Padding to account for fixed navbar */}
        <Technology />
      </div>
      <Footer />
    </div>
  );
};

export default TechnologyPage;
