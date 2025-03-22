
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="relative">
        <button
          onClick={scrollToTop}
          className="absolute left-1/2 transform -translate-x-1/2 -top-7 bg-drone-600 hover:bg-drone-700 h-14 w-14 rounded-full flex items-center justify-center transition-colors shadow-lg"
          aria-label="Retour en haut"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">DroneCleanerPro</h3>
            <p className="text-gray-400 mb-4">
              Solution innovante de nettoyage professionnel par drone pour tous types de surfaces en hauteur.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-drone-300 transition-colors">Nettoyage de toitures</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-drone-300 transition-colors">Nettoyage de façades</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-drone-300 transition-colors">Entretien de panneaux solaires</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-drone-300 transition-colors">Lavage de vitres en hauteur</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-drone-300 transition-colors">Nettoyage industriel</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Liens Utiles</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-drone-300 transition-colors">Accueil</a></li>
              <li><a href="#technology" className="text-gray-400 hover:text-drone-300 transition-colors">Notre Technologie</a></li>
              <li><a href="#area" className="text-gray-400 hover:text-drone-300 transition-colors">Zone d'intervention</a></li>
              <li><a href="#why" className="text-gray-400 hover:text-drone-300 transition-colors">Pourquoi nous choisir</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-drone-300 transition-colors">À propos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">123 Avenue de l'Innovation</li>
              <li className="text-gray-400">74000 Annecy, France</li>
              <li className="text-gray-400">+33 4 56 78 90 12</li>
              <li><a href="mailto:contact@dronecleanerpro.fr" className="text-gray-400 hover:text-drone-300 transition-colors">contact@dronecleanerpro.fr</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DroneCleanerPro. Tous droits réservés.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-drone-300 transition-colors text-sm">Mentions légales</a>
            <a href="#" className="text-gray-400 hover:text-drone-300 transition-colors text-sm">Politique de confidentialité</a>
            <a href="#" className="text-gray-400 hover:text-drone-300 transition-colors text-sm">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
