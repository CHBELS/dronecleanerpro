
import { Leaf, ShieldCheck, Zap, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Leaf className="h-12 w-12 text-drone-600" />,
      title: "Solution Écologique",
      description: "Notre technologie utilise jusqu'à 80% moins d'eau que les méthodes traditionnelles et n'implique aucun produit chimique nocif pour l'environnement, préservant ainsi votre cadre de vie et la planète.",
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-drone-600" />,
      title: "Sécurité Maximale",
      description: "En éliminant la nécessité d'échafaudages et d'interventions humaines en hauteur, nous réduisons à zéro les risques d'accidents liés au travail en hauteur, pour une tranquillité d'esprit totale.",
    },
    {
      icon: <Zap className="h-12 w-12 text-drone-600" />,
      title: "Efficacité Supérieure",
      description: "Notre drone atteint des zones inaccessibles aux méthodes traditionnelles et réalise le travail jusqu'à 5 fois plus rapidement, avec des résultats visibles instantanément grâce à la haute pression Karcher.",
    },
    {
      icon: <Award className="h-12 w-12 text-drone-600" />,
      title: "Expertise Certifiée",
      description: "Nous possédons toutes les certifications requises pour le pilotage de drones professionnels et sommes assurés pour tous types d'interventions, garantissant un service conforme aux plus hautes normes du secteur.",
    },
  ];

  return (
    <section id="why" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-drone-50" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
      
      <div className="section-container relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi <span className="text-gradient">Nous Choisir</span> ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des avantages uniques qui font de notre solution la référence 
              pour le nettoyage professionnel en hauteur.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="glass-card p-8 h-full hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="bg-drone-50 p-4 rounded-2xl">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">
              Prêt à découvrir la différence ?
            </h3>
            <a href="#contact" className="btn-primary mx-auto">
              Contactez-nous dès maintenant
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyChooseUs;
