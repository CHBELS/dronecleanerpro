
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Plus } from 'lucide-react';
import { useSiteContent, ZoneType } from "@/context/SiteContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

const EditZonesPage = () => {
  const navigate = useNavigate();
  const { siteContent, addZone, updateZone, deleteZone } = useSiteContent();
  
  const [zones, setZones] = useState<ZoneType[]>(siteContent.zones);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newZone, setNewZone] = useState({ name: '', isMainArea: true });
  
  const handleZoneChange = (id: string, field: keyof Omit<ZoneType, 'id'>, value: any) => {
    setZones(prev => 
      prev.map(zone => 
        zone.id === id ? { ...zone, [field]: value } : zone
      )
    );
  };
  
  const handleUpdateZone = (id: string) => {
    const zoneToUpdate = zones.find(z => z.id === id);
    if (zoneToUpdate) {
      updateZone(id, {
        name: zoneToUpdate.name,
        isMainArea: zoneToUpdate.isMainArea
      });
    }
  };
  
  const handleAddZone = () => {
    if (newZone.name.trim()) {
      addZone(newZone);
      setNewZone({ name: '', isMainArea: true });
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
          <CardTitle>Gérer les zones d'intervention</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            {zones.map(zone => (
              <div key={zone.id} className="border p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <Input 
                    className="w-2/3" 
                    value={zone.name}
                    onChange={(e) => handleZoneChange(zone.id, 'name', e.target.value)}
                  />
                  <div className="flex items-center space-x-2">
                    <Switch 
                      checked={zone.isMainArea} 
                      onCheckedChange={(checked) => handleZoneChange(zone.id, 'isMainArea', checked)}
                    />
                    <span className="text-sm">Zone principale</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => handleUpdateZone(zone.id)}
                  >
                    Modifier
                  </Button>
                  <Button 
                    variant="destructive" 
                    className="flex-1"
                    onClick={() => deleteZone(zone.id)}
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
            Ajouter une nouvelle zone
          </Button>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Ajouter une nouvelle zone</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nom de la zone</label>
                  <Input 
                    value={newZone.name}
                    onChange={(e) => setNewZone(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Ville ou région" 
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch 
                    checked={newZone.isMainArea} 
                    onCheckedChange={(checked) => setNewZone(prev => ({ ...prev, isMainArea: checked }))}
                  />
                  <label className="text-sm font-medium">Zone principale</label>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Annuler</Button>
                <Button onClick={handleAddZone}>Ajouter</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditZonesPage;
