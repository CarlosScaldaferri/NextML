"use client";
import React, { createContext, useState } from "react";

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [standBy, setStandBy] = useState(false);

  return (
    <HeaderContext.Provider value={{ standBy, setStandBy }}>
      {children}
    </HeaderContext.Provider>
  );
};
