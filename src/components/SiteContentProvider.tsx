
import React from 'react';
import { useSiteContent } from "@/context/SiteContext";
import { useLocation } from 'react-router-dom';

interface SiteContentProviderProps {
  children: React.ReactNode;
}

const SiteContentProvider: React.FC<SiteContentProviderProps> = ({ children }) => {
  const { siteContent } = useSiteContent();
  const location = useLocation();
  
  // Mise à jour des métadonnées du site
  React.useEffect(() => {
    document.title = siteContent.settings.siteName;
    
    // Mise à jour des méta-descriptions
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', siteContent.settings.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = siteContent.settings.description;
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, [siteContent.settings]);

  // Mise à jour des titres spécifiques à la page
  React.useEffect(() => {
    // Set page-specific titles based on the current path
    const path = location.pathname;
    
    if (path === '/') {
      document.title = siteContent.home.title;
    } else if (path === '/a-propos') {
      document.title = siteContent.about.title;
    }
    // Add other page-specific title updates as needed
  }, [location.pathname, siteContent]);
  
  return <>{children}</>;
};

export default SiteContentProvider;
