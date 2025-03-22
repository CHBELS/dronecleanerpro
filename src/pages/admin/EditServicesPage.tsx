
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Plus, X } from 'lucide-react';
import { useSiteContent, ServiceType } from "@/context/SiteContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

const EditServicesPage = () => {
  const navigate = useNavigate();
  const { siteContent, updateService, deleteService, addService } = useSiteContent();
  
  const [editedServices, setEditedServices] = useState<ServiceType[]>(siteContent.services);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newService, setNewService] = useState({ title: '', description: '' });
  
  const handleServiceChange = (id: string, field: keyof Omit<ServiceType, 'id'>, value: string) => {
    setEditedServices(prev => 
      prev.map(service => 
        service.id === id ? { ...service, [field]: value } : service
      )
    );
  };
  
  const handleUpdateService = (id: string) => {
    const serviceToUpdate = editedServices.find(s => s.id === id);
    if (serviceToUpdate) {
      updateService(id, {
        title: serviceToUpdate.title,
        description: serviceToUpdate.description
      });
    }
  };
  
  const handleAddService = () => {
    if (newService.title.trim() && newService.description.trim()) {
      addService(newService);
      setNewService({ title: '', description: '' });
      setIsDialogOpen(false);
    }
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
          <CardTitle>Gérer les services</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            {editedServices.map(service => (
              <div key={service.id} className="border p-4 rounded-lg">
                <Input 
                  className="mb-2" 
                  value={service.title}
                  onChange={(e) => handleServiceChange(service.id, 'title', e.target.value)}
                />
                <Textarea 
                  className="mb-2" 
                  value={service.description}
                  onChange={(e) => handleServiceChange(service.id, 'description', e.target.value)} 
                />
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => handleUpdateService(service.id)}
                  >
                    Modifier
                  </Button>
                  <Button 
                    variant="destructive" 
                    className="flex-1"
                    onClick={() => deleteService(service.id)}
                  >
                    Supprimer
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <Button 
            onClick={() => setIsDialogOpen(true)} 
            className="w-full"
          >
            <Plus className="mr-2 h-4 w-4" />
            Ajouter un nouveau service
          </Button>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Ajouter un nouveau service</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Titre du service</label>
                  <Input 
                    value={newService.title}
                    onChange={(e) => setNewService(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Titre du service" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Description</label>
                  <Textarea 
                    value={newService.description}
                    onChange={(e) => setNewService(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Description du service" 
                    rows={4} 
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Annuler</Button>
                <Button onClick={handleAddService}>Ajouter</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditServicesPage;
