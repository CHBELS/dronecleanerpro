
import { Users, Lightbulb, Landmark } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-drone-50">
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              À <span className="text-gradient">Propos</span> de Nous
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez l'histoire de notre entreprise et notre passion pour l'innovation 
              et le respect de l'environnement.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection delay={100}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1507149800647-742cf8a5a28e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" 
                alt="Notre équipe DroneCleanerPro" 
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Notre Histoire
              </h3>
              
              <p className="text-gray-700">
                Fondée en 2020 en Haute-Savoie par une équipe passionnée d'aéronautique et d'innovation, 
                DroneCleanerPro est née de la conviction que les nouvelles technologies pouvaient révolutionner 
                le secteur du nettoyage industriel et résidentiel.
              </p>
              
              <p className="text-gray-700">
                Face aux défis posés par le nettoyage des bâtiments en hauteur - coûts élevés, risques 
                pour les travailleurs, impact environnemental - nous avons développé une solution unique 
                combinant la technologie des drones et le savoir-faire Karcher.
              </p>
              
              <div className="space-y-6 mt-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-drone-50 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-drone-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Une équipe d'experts</h4>
                    <p className="text-gray-600">
                      Pilotes de drones certifiés, techniciens et spécialistes du nettoyage industriel.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-drone-50 rounded-full flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-drone-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Innovation constante</h4>
                    <p className="text-gray-600">
                      Recherche perpétuelle d'amélioration de nos équipements et méthodes.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-drone-50 rounded-full flex items-center justify-center">
                    <Landmark className="h-6 w-6 text-drone-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Valeurs fortes</h4>
                    <p className="text-gray-600">
                      Engagement écologique, excellence du service et satisfaction client.
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

export default About;
