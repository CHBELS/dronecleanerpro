
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from 'lucide-react';

const EditContactPage = () => {
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
          <CardTitle>Modifier les informations de contact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Adresse email</label>
            <Input type="email" placeholder="contact@example.com" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Téléphone</label>
            <Input type="tel" placeholder="+33 1 23 45 67 89" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Adresse</label>
            <Input placeholder="Adresse postale" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Horaires d'ouverture</label>
            <Textarea placeholder="Lundi - Vendredi: 9h-18h..." rows={4} />
          </div>
          <Button className="w-full">Sauvegarder les modifications</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditContactPage;
