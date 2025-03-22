
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';

const EditHomePage = () => {
  const navigate = useNavigate();
  
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
          <div className="space-y-2">
            <label className="text-sm font-medium">Titre principal</label>
            <Input placeholder="Titre de la page d'accueil" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Sous-titre</label>
            <Input placeholder="Sous-titre de la page d'accueil" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Contenu principal</label>
            <Textarea placeholder="Contenu de la page d'accueil" rows={6} />
          </div>
          <Button className="w-full">Sauvegarder les modifications</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditHomePage;
