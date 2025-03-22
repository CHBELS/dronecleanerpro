
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DroneCleanerPro</h3>
            <p className="text-gray-400">
              Nettoyage professionnel par drone<br />
              Haute-Savoie
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/a-propos" className="text-gray-400 hover:text-white transition-colors">À propos</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contact@dronecleanerpro.com</li>
              <li>Téléphone: +33 1 23 45 67 89</li>
              <li>Adresse: Annecy, Haute-Savoie</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Horaires</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Lundi - Vendredi: 8h - 18h</li>
              <li>Samedi: 9h - 14h</li>
              <li>Dimanche: Fermé</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DroneCleanerPro. Tous droits réservés.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-gray-500">
            <Link to="/login" className="hover:text-gray-300 transition-colors">Accès admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
