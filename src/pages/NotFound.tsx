
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    document.title = "Page non trouvée - DroneCleanerPro";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-drone-50 px-6">
      <div className="glass-card p-12 max-w-lg w-full text-center">
        <h1 className="text-6xl font-bold text-drone-700 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">
          Oups ! La page que vous recherchez n'existe pas.
        </p>
        <a 
          href="/" 
          className="btn-primary inline-flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
