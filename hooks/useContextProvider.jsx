import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";

const CartContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [sideBarOpen, setSidebarOpen] = useState(true);
  const [selectedBoard, setSelectedBoard] = useState("Cambridge");
  const [selectedExam, setSelectedExam] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSchool, setSelectedSchool] = useState(null);

  const [selectedInfoExam, setSelectedInfoExam] = useState(null);
  const [selectedInfoBoard, setSelectedInfoBoard] = useState(null);

  const [selectedChapters, setSelectedChapters] = useState([]);
  const [selectedPaper, setSelectedPaper] = useState(null);

  //selected Subject
  const [userSelectedSubject, setUserSelectedSubject] = useState(null);

  //yearwise qps

  const currentYear = dayjs().year();
  const [selectedYear, setSelectedYear] = useState(currentYear - 1);

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
    selectedCountry,
    setSelectedCountry,
    selectedGrade,
    setSelectedGrade,
    selectedSchool,
    setSelectedSchool,
    selectedInfoExam,
    setSelectedInfoExam,
    selectedInfoBoard,
    setSelectedInfoBoard,
    selectedChapters,
    setSelectedChapters,
    selectedPaper,
    setSelectedPaper,
    userSelectedSubject,
    setUserSelectedSubject,
    selectedYear,
    setSelectedYear,
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
