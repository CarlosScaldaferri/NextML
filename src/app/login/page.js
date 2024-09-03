"use client";

import auth from "@/lib/auth0";
import React from "react";

const LoginPage = () => {
  const handleLogin = () => {
    auth.authorize(); // Redireciona para a página de login do Auth0
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <p className="mb-4">
          Clique no botão abaixo para fazer login com Auth0.
        </p>
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          Login com Auth0
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
