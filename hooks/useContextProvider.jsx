import React, { useContext, useEffect, useState } from "react";

const CartContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [sideBarOpen, setSidebarOpen] = useState(true);
  const [selectedBoard, setSelectedBoard] = useState("Cambridge");
  const [selectedExam, setSelectedExam] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sendData = {
    sideBarOpen,
    setSidebarOpen,
    selectedExam,
    setSelectedExam,
    selectedSubject,
    setSelectedSubject,
    selectedBoard,
    setSelectedBoard,
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
