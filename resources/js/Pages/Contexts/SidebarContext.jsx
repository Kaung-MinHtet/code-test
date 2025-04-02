import { createContext, useContext, useEffect, useState } from "react";

// Create Context
const SidebarContext = createContext();

// Custom Hook for using the context
export const useSidebar = () => useContext(SidebarContext);

// Provider Component
export const SidebarProvider = ({ children }) => {
  const [isSidebarOn, setisSidebarOn] = useState(false);

  useEffect(() => {
    isSidebarOn ? document.body.style.overflow = "hidden" : document.body.style.overflow = "scroll";
  }, [isSidebarOn]);

  const toggleSidebar = () => {
    setisSidebarOn(!isSidebarOn);
  }

  return (
    <SidebarContext.Provider value={{ isSidebarOn, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
