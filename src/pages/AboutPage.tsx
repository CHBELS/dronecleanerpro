
import React from 'react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';
import { useSiteContent } from '@/context/SiteContext';

const AboutPage = () => {
  const { siteContent } = useSiteContent();

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
