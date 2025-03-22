
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { SiteProvider } from "./context/SiteContext";
import ProtectedRoute from "./components/ProtectedRoute";

import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceAreaPage from "./pages/ServiceAreaPage";
import WhyChooseUsPage from "./pages/WhyChooseUsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import NotFound from "./pages/NotFound";
import EditHomePage from "./pages/admin/EditHomePage";
import EditServicesPage from "./pages/admin/EditServicesPage";
import EditContactPage from "./pages/admin/EditContactPage";
import EditAboutPage from "./pages/admin/EditAboutPage";
import EditZonesPage from "./pages/admin/EditZonesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <SiteProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/technologie" element={<TechnologyPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/zone-intervention" element={<ServiceAreaPage />} />
              <Route path="/pourquoi-nous" element={<WhyChooseUsPage />} />
              <Route path="/a-propos" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              } />
              <Route path="/admin/edit-home" element={
                <ProtectedRoute>
                  <EditHomePage />
                </ProtectedRoute>
              } />
              <Route path="/admin/edit-services" element={
                <ProtectedRoute>
                  <EditServicesPage />
                </ProtectedRoute>
              } />
              <Route path="/admin/edit-contact" element={
                <ProtectedRoute>
                  <EditContactPage />
                </ProtectedRoute>
              } />
              <Route path="/admin/edit-about" element={
                <ProtectedRoute>
                  <EditAboutPage />
                </ProtectedRoute>
              } />
              <Route path="/admin/edit-zones" element={
                <ProtectedRoute>
                  <EditZonesPage />
                </ProtectedRoute>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </SiteProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
