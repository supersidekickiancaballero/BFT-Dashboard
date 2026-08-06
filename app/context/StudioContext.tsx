"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Studio = "docklands" | "wangaratta";

interface StudioContextType {
  selectedStudio: Studio;
  setSelectedStudio: (studio: Studio) => void;
}

const StudioContext = createContext<StudioContextType | undefined>(undefined);

export function StudioProvider({ children }: { children: ReactNode }) {
  const [selectedStudio, setSelectedStudio] = useState<Studio>("docklands");

  return (
    <StudioContext.Provider value={{ selectedStudio, setSelectedStudio }}>
      {children}
    </StudioContext.Provider>
  );
}

export function useStudio() {
  const context = useContext(StudioContext);
  if (!context) {
    throw new Error("useStudio must be used within a StudioProvider");
  }
  return context;
}