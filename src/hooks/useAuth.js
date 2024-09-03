import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode"; // Importe a biblioteca jwt-decode
import auth from "@/lib/auth0"; // Atualize o caminho conforme necessário

export function useAuth() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      try {
        // Decodifique o token usando jwt-decode
        const decodedToken = jwtDecode(accessToken);
        setUser(decodedToken);
      } catch (error) {
        console.error("Token decoding error:", error);
      }
      setIsLoading(false);
    } else {
      auth.parseHash((err, authResult) => {
        if (err) {
          console.error("Auth0 Error:", err);
          setIsLoading(false);
          return;
        }

        if (authResult && authResult.accessToken) {
          localStorage.setItem("accessToken", authResult.accessToken);
          try {
            const decodedToken = jwtDecode(authResult.accessToken);
            setUser(decodedToken);
          } catch (error) {
            console.error("Token decoding error:", error);
          }
        }

        setIsLoading(false);
      });
    }
  }, []);

  return { user, isLoading };
}
