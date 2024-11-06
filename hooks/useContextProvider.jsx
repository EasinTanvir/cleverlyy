import React, { useContext, useState } from "react";

const CartContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [sideBarOpen, setSidebarOpen] = useState(false);

  const sendData = {
    sideBarOpen,
    setSidebarOpen,
  };

  return (
    <CartContext.Provider value={sendData}>{children}</CartContext.Provider>
  );
};

export const useContextProvider = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be sed under a wrapped component");
  }

  return context;
};
