
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

const AdminPage = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Administration - DroneCleanerPro";
    
    // Rediriger si non authentifié
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!isAuthenticated) {
    return null; // Ne rien afficher pendant la redirection
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Administration DroneCleanerPro</h1>
          <div className="space-x-4">
            <Button onClick={() => navigate('/')} variant="outline">
              Voir le site
            </Button>
            <Button onClick={handleLogout} variant="destructive">
              Déconnexion
            </Button>
          </div>
        </div>

        <Tabs defaultValue="content">
          <TabsList className="mb-8">
            <TabsTrigger value="content">Contenu</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="settings">Paramètres</TabsTrigger>
          </TabsList>
          
          <TabsContent value="content" className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Gestion du contenu</h2>
            <p className="text-muted-foreground mb-4">
              Ici vous pourrez modifier les textes des différentes pages du site.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border p-4 rounded-md">
                <h3 className="font-medium mb-2">Page d'accueil</h3>
                <p className="text-sm text-muted-foreground mb-2">Modifier le contenu de la page d'accueil</p>
                <Button size="sm">Éditer</Button>
              </div>
              <div className="border p-4 rounded-md">
                <h3 className="font-medium mb-2">Services</h3>
                <p className="text-sm text-muted-foreground mb-2">Modifier les services proposés</p>
                <Button size="sm">Éditer</Button>
              </div>
              <div className="border p-4 rounded-md">
                <h3 className="font-medium mb-2">À propos</h3>
                <p className="text-sm text-muted-foreground mb-2">Modifier la page à propos</p>
                <Button size="sm">Éditer</Button>
              </div>
              <div className="border p-4 rounded-md">
                <h3 className="font-medium mb-2">Contact</h3>
                <p className="text-sm text-muted-foreground mb-2">Modifier les informations de contact</p>
                <Button size="sm">Éditer</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="images" className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Gestion des images</h2>
            <p className="text-muted-foreground mb-4">
              Ici vous pourrez télécharger et gérer les images du site.
            </p>
            <div className="border-2 border-dashed border-gray-300 p-8 text-center rounded-md">
              <p className="mb-2">Glissez et déposez des images ou</p>
              <Button>Parcourir</Button>
            </div>
            <div className="mt-6">
              <h3 className="font-medium mb-3">Images récentes</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="aspect-square bg-gray-100 rounded-md"></div>
                <div className="aspect-square bg-gray-100 rounded-md"></div>
                <div className="aspect-square bg-gray-100 rounded-md"></div>
                <div className="aspect-square bg-gray-100 rounded-md"></div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Paramètres du site</h2>
            <p className="text-muted-foreground mb-4">
              Configurez les paramètres généraux du site.
            </p>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Titre du site</label>
                  <Input defaultValue="DroneCleanerPro" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email de contact</label>
                  <Input defaultValue="contact@dronecleanerpro.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Téléphone</label>
                  <Input defaultValue="+33 1 23 45 67 89" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Zone d'intervention</label>
                  <Input defaultValue="Haute-Savoie" />
                </div>
              </div>
              <Button className="mt-4">Enregistrer les modifications</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;
