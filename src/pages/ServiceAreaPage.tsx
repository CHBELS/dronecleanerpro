
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ServiceArea from '@/components/ServiceArea';
import Footer from '@/components/Footer';

const ServiceAreaPage = () => {
  useEffect(() => {
    document.title = "Zone d'Intervention - DroneCleanerPro";
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-20"> {/* Padding to account for fixed navbar */}
        <ServiceArea />
      </div>
      <Footer />
    </div>
  );
};

export default ServiceAreaPage;
