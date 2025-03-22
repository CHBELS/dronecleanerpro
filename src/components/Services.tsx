import { Home, Building, Sun, CheckCircle, Maximize2, Factory, Snowflake } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Services = () => {
  const serviceItems = [
    {
      icon: <Home className="h-8 w-8 text-drone-600" />,
      title: "Nettoyage de toitures",
      description: "Élimination des mousses, lichens et saletés sur tous types de toitures sans endommager les matériaux.",
    },
    {
      icon: <Building className="h-8 w-8 text-drone-600" />,
      title: "Nettoyage de façades et bardages",
      description: "Traitement efficace des façades et bardages pour retrouver leur aspect d'origine, sans échafaudage.",
    },
    {
      icon: <Sun className="h-8 w-8 text-drone-600" />,
      title: "Entretien de panneaux solaires",
      description: "Optimisation du rendement de vos installations photovoltaïques grâce à un nettoyage régulier et précis.",
    },
    {
      icon: <Maximize2 className="h-8 w-8 text-drone-600" />,
      title: "Lavage de vitres en hauteur",
      description: "Solution idéale pour les vitres difficiles d'accès, pour une transparence parfaite sans prise de risque.",
    },
    {
      icon: <Factory className="h-8 w-8 text-drone-600" />,
      title: "Nettoyage de surfaces industrielles",
      description: "Entretien de grandes surfaces industrielles, entrepôts et structures agricoles avec rapidité et efficacité.",
    },
    {
      icon: <Snowflake className="h-8 w-8 text-drone-600" />,
      title: "Déneigement et démoussage",
      description: "Élimination de la neige et de la mousse sur vos toitures pour prévenir les infiltrations et détériorations.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos <span className="text-gradient">Services</span> de Nettoyage
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à tous vos besoins de nettoyage extérieur,
              avec une expertise reconnue et des résultats garantis.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="glass-card p-8 h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                <div className="bg-drone-50 p-3 rounded-lg w-fit mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 grow">{service.description}</p>
                <div className="mt-6 flex items-center text-drone-600">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Devis gratuit</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={300}>
          <div className="mt-12 text-center">
            <a href="#contact" className="btn-primary">
              Demander un devis pour ces services
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
