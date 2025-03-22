
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "sonner";

// Types pour les différentes sections du site
export type ServiceType = {
  id: string;
  title: string;
  description: string;
};

export type ZoneType = {
  id: string;
  name: string;
  isMainArea: boolean;
};

export type SiteContentType = {
  home: {
    title: string;
    subtitle: string;
    content: string;
  };
  about: {
    title: string;
    content: string;
    mission: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
    hours: string;
  };
  services: ServiceType[];
  zones: ZoneType[];
  settings: {
    siteName: string;
    slogan: string;
    email: string;
    phone: string;
    address: string;
    mainArea: string;
    description: string;
    hours: string;
  };
};

// Valeurs par défaut pour le contenu du site
const defaultSiteContent: SiteContentType = {
  home: {
    title: "DroneCleanerPro - Nettoyage professionnel par drone",
    subtitle: "La technologie au service de la propreté",
    content: "Notre solution innovante utilise des drones équipés de systèmes haute pression pour nettoyer vos surfaces difficiles d'accès en toute sécurité.",
  },
  about: {
    title: "À propos de DroneCleanerPro",
    content: "Fondée en 2020, notre entreprise est pionnière dans l'utilisation de drones pour le nettoyage professionnel. Basés en Haute-Savoie, nous intervenons dans toute la région.",
    mission: "Notre mission est de révolutionner le secteur du nettoyage en hauteur en proposant des solutions plus sûres, plus écologiques et plus efficaces.",
  },
  contact: {
    email: "contact@dronecleanerpro.com",
    phone: "+33 1 23 45 67 89",
    address: "123 Rue des Alpes, 74000 Annecy, Haute-Savoie",
    hours: "Lundi - Vendredi: 8h - 18h\nSamedi: 9h - 14h\nDimanche: Fermé",
  },
  services: [
    {
      id: "1",
      title: "Nettoyage de toitures",
      description: "Élimination des mousses, lichens et saletés sur tous types de toitures sans endommager les matériaux."
    },
    {
      id: "2",
      title: "Nettoyage de façades",
      description: "Traitement efficace des façades et bardages pour retrouver leur aspect d'origine, sans échafaudage."
    },
    {
      id: "3",
      title: "Entretien de panneaux solaires",
      description: "Optimisation du rendement de vos installations photovoltaïques grâce à un nettoyage régulier et précis."
    }
  ],
  zones: [
    { id: "1", name: "Annecy", isMainArea: true },
    { id: "2", name: "Thonon-les-Bains", isMainArea: true },
    { id: "3", name: "Chamonix", isMainArea: true },
    { id: "4", name: "Savoie", isMainArea: false },
    { id: "5", name: "Genève (CH)", isMainArea: false }
  ],
  settings: {
    siteName: "DroneCleanerPro",
    slogan: "Nettoyage professionnel par drone",
    email: "contact@dronecleanerpro.com",
    phone: "+33 1 23 45 67 89",
    address: "Annecy, Haute-Savoie",
    mainArea: "Haute-Savoie",
    description: "DroneCleanerPro propose des services de nettoyage professionnel par drone pour les toitures, façades et panneaux solaires en Haute-Savoie.",
    hours: "Lundi - Vendredi: 8h - 18h\nSamedi: 9h - 14h\nDimanche: Fermé"
  }
};

// Type pour le contexte
type SiteContextType = {
  siteContent: SiteContentType;
  updateHomeContent: (homeData: Partial<SiteContentType['home']>) => void;
  updateAboutContent: (aboutData: Partial<SiteContentType['about']>) => void;
  updateContactInfo: (contactData: Partial<SiteContentType['contact']>) => void;
  updateSiteSettings: (settingsData: Partial<SiteContentType['settings']>) => void;
  addService: (service: Omit<ServiceType, 'id'>) => void;
  updateService: (id: string, service: Partial<Omit<ServiceType, 'id'>>) => void;
  deleteService: (id: string) => void;
  addZone: (zone: Omit<ZoneType, 'id'>) => void;
  updateZone: (id: string, zone: Partial<Omit<ZoneType, 'id'>>) => void;
  deleteZone: (id: string) => void;
};

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // Récupérer le contenu du site depuis le localStorage ou utiliser les valeurs par défaut
  const [siteContent, setSiteContent] = useState<SiteContentType>(() => {
    const savedContent = localStorage.getItem('siteContent');
    return savedContent ? JSON.parse(savedContent) : defaultSiteContent;
  });

  // Enregistrer les changements dans le localStorage
  useEffect(() => {
    localStorage.setItem('siteContent', JSON.stringify(siteContent));
  }, [siteContent]);

  // Fonctions pour mettre à jour le contenu
  const updateHomeContent = (homeData: Partial<SiteContentType['home']>) => {
    setSiteContent(prev => ({
      ...prev,
      home: { ...prev.home, ...homeData }
    }));
    toast.success("Contenu de la page d'accueil mis à jour");
  };

  const updateAboutContent = (aboutData: Partial<SiteContentType['about']>) => {
    setSiteContent(prev => ({
      ...prev,
      about: { ...prev.about, ...aboutData }
    }));
    toast.success("Contenu de la page À propos mis à jour");
  };

  const updateContactInfo = (contactData: Partial<SiteContentType['contact']>) => {
    setSiteContent(prev => ({
      ...prev,
      contact: { ...prev.contact, ...contactData }
    }));
    toast.success("Informations de contact mises à jour");
  };

  const updateSiteSettings = (settingsData: Partial<SiteContentType['settings']>) => {
    setSiteContent(prev => ({
      ...prev,
      settings: { ...prev.settings, ...settingsData }
    }));
    toast.success("Paramètres du site mis à jour");
  };

  // Gestion des services
  const addService = (service: Omit<ServiceType, 'id'>) => {
    const newService = {
      ...service,
      id: Math.random().toString(36).substr(2, 9)
    };
    
    setSiteContent(prev => ({
      ...prev,
      services: [...prev.services, newService]
    }));
    toast.success("Service ajouté avec succès");
  };

  const updateService = (id: string, serviceData: Partial<Omit<ServiceType, 'id'>>) => {
    setSiteContent(prev => ({
      ...prev,
      services: prev.services.map(service => 
        service.id === id ? { ...service, ...serviceData } : service
      )
    }));
    toast.success("Service mis à jour");
  };

  const deleteService = (id: string) => {
    setSiteContent(prev => ({
      ...prev,
      services: prev.services.filter(service => service.id !== id)
    }));
    toast.success("Service supprimé");
  };

  // Gestion des zones d'intervention
  const addZone = (zone: Omit<ZoneType, 'id'>) => {
    const newZone = {
      ...zone,
      id: Math.random().toString(36).substr(2, 9)
    };
    
    setSiteContent(prev => ({
      ...prev,
      zones: [...prev.zones, newZone]
    }));
    toast.success("Zone d'intervention ajoutée");
  };

  const updateZone = (id: string, zoneData: Partial<Omit<ZoneType, 'id'>>) => {
    setSiteContent(prev => ({
      ...prev,
      zones: prev.zones.map(zone => 
        zone.id === id ? { ...zone, ...zoneData } : zone
      )
    }));
    toast.success("Zone d'intervention mise à jour");
  };

  const deleteZone = (id: string) => {
    setSiteContent(prev => ({
      ...prev,
      zones: prev.zones.filter(zone => zone.id !== id)
    }));
    toast.success("Zone d'intervention supprimée");
  };

  return (
    <SiteContext.Provider value={{
      siteContent,
      updateHomeContent,
      updateAboutContent,
      updateContactInfo,
      updateSiteSettings,
      addService,
      updateService,
      deleteService,
      addZone,
      updateZone,
      deleteZone
    }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSiteContent = () => {
  const context = useContext(SiteContext);
  if (context === undefined) {
    throw new Error('useSiteContent doit être utilisé à l\'intérieur d\'un SiteProvider');
  }
  return context;
};
