
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';
import { useAuth } from '@/context/AuthContext';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    document.title = "Connexion Admin - DroneCleanerPro";
  }, []);

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-20"> {/* Padding to account for fixed navbar */}
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
