"use client";

import React, { useEffect } from "react";
import auth from "../../../../lib/auth0";
import { useRouter } from "next/navigation";

const Callback = () => {
  const router = useRouter();

  useEffect(() => {
    auth.parseHash((err, authResult) => {
      if (err) {
        console.error("Auth0 Error:", err);
        return;
      }

      if (authResult && authResult.accessToken) {
        // Armazene o token em um local seguro, como localStorage ou cookies
        localStorage.setItem("accessToken", authResult.accessToken);
        router.push("/"); // Redireciona para a página inicial ou qualquer outra página
      }
    });
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <p>Redirecionando...</p>
    </div>
  );
};

export default Callback;
