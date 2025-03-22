
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EditServicesPage = () => {
  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Gérer les services</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            {/* Service existant exemple */}
            <div className="border p-4 rounded-lg">
              <Input className="mb-2" defaultValue="Nettoyage de panneaux solaires" />
              <Textarea className="mb-2" defaultValue="Description du service..." />
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">Modifier</Button>
                <Button variant="destructive" className="flex-1">Supprimer</Button>
              </div>
            </div>
          </div>
          <Button className="w-full">Ajouter un nouveau service</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditServicesPage;
