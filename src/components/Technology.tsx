
import { Shield, Clock, Droplets } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Technology = () => {
  return (
    <section id="technology" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre <span className="text-gradient">Technologie</span> Innovante
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une solution de nettoyage par drone équipé de la technologie Karcher haute pression,
              sans échafaudage ni nacelle, pour des résultats impeccables en toute sécurité.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection delay={100}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Drone de nettoyage en action" 
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Drone Karcher Haute Pression
              </h3>
              
              <p className="text-gray-700">
                Notre drone de nettoyage est doté d'un système Karcher haute pression intégré, 
                spécialement conçu pour atteindre les zones difficiles d'accès. Cette technologie 
                innovante permet un nettoyage précis et efficace, sans risque pour les opérateurs.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-drone-50 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-drone-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Sécurité optimale</h4>
                    <p className="text-gray-600">
                      Élimine les risques liés au travail en hauteur et supprime le besoin d'échafaudages.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-drone-50 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-drone-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Gain de temps considérable</h4>
                    <p className="text-gray-600">
                      Intervention rapide sans montage d'équipement, réduction des délais de 50%.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-drone-50 rounded-full flex items-center justify-center">
                    <Droplets className="h-6 w-6 text-drone-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Impact écologique réduit</h4>
                    <p className="text-gray-600">
                      Consommation d'eau réduite et absence de produits chimiques agressifs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Technology;
