
import React from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EditHomePage = () => {
  return (
    <div className="container mx-auto p-6">
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
