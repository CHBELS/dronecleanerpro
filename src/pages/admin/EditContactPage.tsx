
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from 'lucide-react';
import { useSiteContent } from "@/context/SiteContext";

const EditContactPage = () => {
  const navigate = useNavigate();
  const { siteContent, updateContactInfo } = useSiteContent();
  
  const [email, setEmail] = useState(siteContent.contact.email);
  const [phone, setPhone] = useState(siteContent.contact.phone);
  const [address, setAddress] = useState(siteContent.contact.address);
  const [hours, setHours] = useState(siteContent.contact.hours);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateContactInfo({ email, phone, address, hours });
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
          <CardTitle>Modifier les informations de contact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Adresse email</label>
              <Input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="contact@example.com" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Téléphone</label>
              <Input 
                type="tel" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                placeholder="+33 1 23 45 67 89" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Adresse</label>
              <Input 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                placeholder="Adresse postale" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Horaires d'ouverture</label>
              <Textarea 
                value={hours} 
                onChange={(e) => setHours(e.target.value)} 
                placeholder="Lundi - Vendredi: 9h-18h..." 
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

export default EditContactPage;
