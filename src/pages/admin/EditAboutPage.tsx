
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from 'lucide-react';
import { useSiteContent } from "@/context/SiteContext";

const EditAboutPage = () => {
  const navigate = useNavigate();
  const { siteContent, updateAboutContent } = useSiteContent();
  
  const [title, setTitle] = useState(siteContent.about.title);
  const [content, setContent] = useState(siteContent.about.content);
  const [mission, setMission] = useState(siteContent.about.mission);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateAboutContent({ title, content, mission });
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
          <CardTitle>Éditer la page À propos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Titre de la page</label>
              <Input 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="À propos de DroneCleanerPro" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Contenu principal</label>
              <Textarea 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                placeholder="Histoire de l'entreprise, expertise..."
                rows={6} 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Notre mission</label>
              <Textarea 
                value={mission} 
                onChange={(e) => setMission(e.target.value)} 
                placeholder="Mission et vision de l'entreprise"
                rows={4} 
              />
            </div>
            <Button type="submit" className="w-full">Sauvegarder les modifications</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditAboutPage;
