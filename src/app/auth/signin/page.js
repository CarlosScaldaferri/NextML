"use client";

import { useEffect, useState } from "react";

const SignInPage = () => {
  const [providers, setProviders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const res = await fetch("/api/auth/providers");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        if (!data) {
          throw new Error("No data found");
        }

        setProviders(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProviders();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Sign In</h1>
      {providers.length > 0 ? (
        <ul>
          {providers.map((provider) => (
            <li key={provider.id}>{provider.name}</li>
          ))}
        </ul>
      ) : (
        <p>No providers found</p>
      )}
    </div>
  );
};

export default SignInPage;
