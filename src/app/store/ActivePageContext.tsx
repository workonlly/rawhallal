import React, { createContext, useContext, useState, ReactNode } from 'react';

type ActivePageContextType = {
  activePage: string;
  setActivePage: (page: string) => void;
};

const ActivePageContext = createContext<ActivePageContextType | undefined>(undefined);

export const useActivePage = () => {
  const context = useContext(ActivePageContext);
  if (!context) throw new Error('useActivePage must be used within ActivePageProvider');
  return context;
};

export const ActivePageProvider = ({ children }: { children: ReactNode }) => {
  const [activePage, setActivePage] = useState('home');
  return (
    <ActivePageContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </ActivePageContext.Provider>
  );
}; 