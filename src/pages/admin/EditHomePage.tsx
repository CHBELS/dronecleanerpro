
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import { useSiteContent } from "@/context/SiteContext";
import { toast } from "sonner";

const EditHomePage = () => {
  const navigate = useNavigate();
  const { siteContent, updateHomeContent } = useSiteContent();
  
  const [title, setTitle] = useState(siteContent.home.title);
  const [subtitle, setSubtitle] = useState(siteContent.home.subtitle);
  const [content, setContent] = useState(siteContent.home.content);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateHomeContent({ title, subtitle, content });
    toast.success("Page d'accueil mise à jour avec succès");
  };
  
  return (
    <div className="container mx-auto p-6">
      <div className="mb-4">
        <Button 
          variant="outline" 
          onClick={() => navigate('/admin')}
          className="flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour au tableau de bord
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Éditer la page d'accueil</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Titre principal</label>
              <Input 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Titre de la page d'accueil" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Sous-titre</label>
              <Input 
                value={subtitle} 
                onChange={(e) => setSubtitle(e.target.value)} 
                placeholder="Sous-titre de la page d'accueil" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Contenu principal</label>
              <Textarea 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                placeholder="Contenu de la page d'accueil" 
                rows={6} 
              />
            </div>
            <Button type="submit" className="w-full">Sauvegarder les modifications</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditHomePage;
