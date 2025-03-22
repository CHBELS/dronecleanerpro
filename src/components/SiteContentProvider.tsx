
import React from 'react';
import { useSiteContent } from "@/context/SiteContext";

interface SiteContentProviderProps {
  children: React.ReactNode;
}

const SiteContentProvider: React.FC<SiteContentProviderProps> = ({ children }) => {
  const { siteContent } = useSiteContent();
  
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
  
  return <>{children}</>;
};

export default SiteContentProvider;
