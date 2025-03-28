
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Technologie', href: '/technologie' },
    { name: 'Services', href: '/services' },
    { name: 'Zone', href: '/zone-intervention' },
    { name: 'Pourquoi nous', href: '/pourquoi-nous' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-drone-700">DroneCleanerPro</span>
        </Link>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-gray-700 hover:text-drone-600 font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile navigation */}
      <div 
        className={cn(
          'fixed top-[72px] left-0 right-0 bg-white shadow-md md:hidden transition-transform duration-300 ease-in-out transform',
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="flex flex-col py-4 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="py-3 text-gray-700 hover:text-drone-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
