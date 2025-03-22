
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Upload, 
  Settings, 
  FileText, 
  ImageIcon, 
  Home, 
  Phone, 
  Info, 
  ClipboardList,
  MapPin
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

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
    <div className="min-h-screen bg-gray-50 p-6">
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

        <Alert className="mb-8 border-blue-200 bg-blue-50">
          <AlertTitle className="text-blue-700">Bienvenue dans l'interface d'administration</AlertTitle>
          <AlertDescription>
            Vous pouvez gérer le contenu du site, les images et les paramètres généraux depuis cette interface.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="content" className="space-y-4">
          <TabsList className="mb-6 bg-white p-1 shadow-sm border">
            <TabsTrigger value="content" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <FileText className="mr-2 h-4 w-4" />
              Contenu
            </TabsTrigger>
            <TabsTrigger value="images" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <ImageIcon className="mr-2 h-4 w-4" />
              Images
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <Settings className="mr-2 h-4 w-4" />
              Paramètres
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="content" className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Gestion du contenu</h2>
            <p className="text-muted-foreground mb-6">
              Modifiez le contenu des différentes pages du site. Les modifications seront immédiatement visibles sur le site.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-2">
                    <Home className="mr-2 h-5 w-5 text-primary" />
                    <CardTitle>Page d'accueil</CardTitle>
                  </div>
                  <CardDescription>Modifier le contenu de la page d'accueil</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">Titre principal, textes et éléments de la page d'accueil</p>
                  <Button size="sm" className="w-full">Éditer la page</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-2">
                    <ClipboardList className="mr-2 h-5 w-5 text-primary" />
                    <CardTitle>Services</CardTitle>
                  </div>
                  <CardDescription>Gérer les services proposés</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">Modifier, ajouter ou supprimer des services</p>
                  <Button size="sm" className="w-full">Éditer les services</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-2">
                    <Info className="mr-2 h-5 w-5 text-primary" />
                    <CardTitle>À propos</CardTitle>
                  </div>
                  <CardDescription>Informations sur l'entreprise</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">Présentation, histoire et mission de l'entreprise</p>
                  <Button size="sm" className="w-full">Éditer la page</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-2">
                    <Phone className="mr-2 h-5 w-5 text-primary" />
                    <CardTitle>Contact</CardTitle>
                  </div>
                  <CardDescription>Informations de contact</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">Coordonnées, formulaire et horaires</p>
                  <Button size="sm" className="w-full">Éditer les contacts</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-2">
                    <MapPin className="mr-2 h-5 w-5 text-primary" />
                    <CardTitle>Zone d'intervention</CardTitle>
                  </div>
                  <CardDescription>Gérer les zones d'intervention</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">Régions et villes desservies</p>
                  <Button size="sm" className="w-full">Éditer les zones</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="images" className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Gestion des images</h2>
            <p className="text-muted-foreground mb-6">
              Téléchargez et gérez les images utilisées sur le site.
            </p>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Télécharger une nouvelle image</CardTitle>
                <CardDescription>Les formats acceptés sont JPG, PNG et SVG. Taille maximum : 5 Mo.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 p-8 text-center rounded-md hover:bg-gray-50 transition cursor-pointer">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Glissez et déposez des images ou</p>
                  <Button>Parcourir</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Bibliothèque d'images</CardTitle>
                <CardDescription>Gérez les images déjà téléchargées.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="relative group">
                      <div className="aspect-square bg-gray-100 rounded-md overflow-hidden">
                        <div className="h-full w-full flex items-center justify-center text-gray-300">
                          <ImageIcon className="h-10 w-10" />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/60 rounded-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                          <ImageIcon className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="destructive" className="h-8 w-8 p-0">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                          </svg>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Paramètres du site</h2>
            <p className="text-muted-foreground mb-6">
              Configurez les paramètres généraux du site.
            </p>
            
            <Card>
              <CardHeader>
                <CardTitle>Informations générales</CardTitle>
                <CardDescription>Configurez les informations de base du site.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Titre du site</label>
                      <Input defaultValue="DroneCleanerPro" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Slogan</label>
                      <Input defaultValue="Nettoyage professionnel par drone" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email de contact</label>
                      <Input defaultValue="contact@dronecleanerpro.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Téléphone</label>
                      <Input defaultValue="+33 1 23 45 67 89" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Adresse</label>
                      <Input defaultValue="Annecy, Haute-Savoie" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Zone d'intervention principale</label>
                      <Input defaultValue="Haute-Savoie" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Description du site</label>
                    <Textarea 
                      rows={4}
                      defaultValue="DroneCleanerPro propose des services de nettoyage professionnel par drone pour les toitures, façades et panneaux solaires en Haute-Savoie."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Horaires d'ouverture</label>
                    <Textarea 
                      rows={3}
                      defaultValue="Lundi - Vendredi: 8h - 18h&#10;Samedi: 9h - 14h&#10;Dimanche: Fermé"
                    />
                  </div>
                  
                  <Button className="mt-4">Enregistrer les modifications</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;
