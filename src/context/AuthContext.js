"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import auth from "../lib/auth0";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleAuth = () => {
      auth.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken) {
          auth.client.userInfo(authResult.accessToken, (err, user) => {
            if (err) {
              console.error("Error fetching user info:", err);
            } else {
              setUser(user);
            }
          });
        } else if (err) {
          console.error("Auth0 Error:", err);
        }
      });
    };

    handleAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
