"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth"; // Atualize o caminho conforme necessário
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuth(); // Obtenha o usuário e o estado de carregamento
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        router.push("/login"); // Redireciona para a página de login se o usuário não estiver autenticado
      }
    }
  }, [user, isLoading, router]);

  if (isLoading || isAuthenticated === null) {
    return <p>Loading...</p>; // Exibe uma mensagem de carregamento enquanto verifica o estado de autenticação
  }

  return <>{children}</>;
};

export default ProtectedRoute;
