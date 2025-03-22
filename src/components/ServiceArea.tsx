
import { MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ServiceArea = () => {
  const mainAreas = [
    "Annecy", "Thonon-les-Bains", "Cluses", "Annemasse",
    "Sallanches", "Bonneville", "Chamonix", "Évian-les-Bains",
    "Saint-Julien-en-Genevois", "Rumilly"
  ];
  
  const secondaryAreas = [
    "Savoie", "Genève (CH)", "Lausanne (CH)"
  ];

  return (
    <section id="area" className="py-24 bg-drone-50">
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre <span className="text-gradient">Zone</span> d'Intervention
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Basés en Haute-Savoie, nous intervenons dans tout le département et les régions limitrophes 
              pour vous offrir nos services de nettoyage par drone.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection delay={100}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-drone-600 mr-2" />
                  Haute-Savoie (74)
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {mainAreas.map((city, index) => (
                    <div 
                      key={index} 
                      className="flex items-center p-3 bg-white rounded-lg shadow-sm"
                    >
                      <span className="ml-2">{city}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-drone-600 mr-2" />
                  Zones limitrophes
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {secondaryAreas.map((area, index) => (
                    <div 
                      key={index} 
                      className="flex items-center p-3 bg-white rounded-lg shadow-sm"
                    >
                      <span className="ml-2">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mt-6">
                Vous ne trouvez pas votre ville? Contactez-nous pour vérifier si nous intervenons dans votre secteur.
              </p>
              
              <a href="#contact" className="btn-primary inline-block mt-4">
                Vérifier votre éligibilité
              </a>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe 
                title="Zone d'intervention en Haute-Savoie"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d351313.6275093142!2d6.101224327773435!3d46.07473110000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596d0d%3A0x408ab2ae4baa380!2sHaute-Savoie!5e0!3m2!1sfr!2sfr!4v1695019440572!5m2!1sfr!2sfr" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
