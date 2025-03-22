
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EditContactPage = () => {
  return (
    <div className="container mx-auto p-6">
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
