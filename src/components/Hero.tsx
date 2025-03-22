
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
            Nettoyage Professionnel par Drone en Haute-Savoie
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in animate-delay-200">
            Une solution innovante, écologique et sécurisée pour nettoyer vos toitures, 
            façades, vitres et panneaux solaires grâce à notre technologie Karcher embarquée sur drone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-300">
            <a 
              href="#contact" 
              className="btn-primary flex items-center justify-center gap-2 group"
            >
              Demandez un devis gratuit
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#technology" 
              className="btn-secondary flex items-center justify-center"
            >
              Découvrir notre technologie
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
