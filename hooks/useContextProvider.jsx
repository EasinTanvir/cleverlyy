import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";

const CartContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [sideBarOpen, setSidebarOpen] = useState(true);
  const [selectedBoard, setSelectedBoard] = useState({ board_id: 2 });
  const [selectedExam, setSelectedExam] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedInfoExam, setSelectedInfoExam] = useState([]);
  const [selectedInfoBoard, setSelectedInfoBoard] = useState([]);
  const [userAccessSubject, setUserAccessSubject] = useState([]);
  const [selectedUnits, setSelectedUnits] = useState([]);

  const [selectedChapters, setSelectedChapters] = useState([]);
  const [selectedPaper, setSelectedPaper] = useState(null);

  //selected Subject
  const [userSelectedSubject, setUserSelectedSubject] = useState(null);

  //yearwise qps

  const currentYear = dayjs().year();
  const [selectedYear, setSelectedYear] = useState(currentYear - 1);
  const [selectedSession, setSelectedSession] = useState("May/June");

  //dropdown
  const [dropDownSelectedYear, setDropDownSelectedYear] = useState("");
  const [dropDownSelectedSession, setdropDownSelectedSession] = useState("");

  const [infoData, setInfoData] = useState([]);

  const [currentExamIndex, setCurrentExamIndex] = useState(0);

  //ai page state
  const [aiSelectedYear, setAiSelectedYear] = useState("");
  const [aiSelectedSession, setAiSelectedSession] = useState("");
  const [aiSelectedVariant, setAiSelectedVariant] = useState("");
  const [aiSelectedPaper, setAiSelectedPaper] = useState("");

  const [resourceSelectUnit, setResourceSelectUnit] = useState(null);

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
    selectedSession,
    setSelectedSession,
    dropDownSelectedYear,
    setDropDownSelectedYear,
    dropDownSelectedSession,
    setdropDownSelectedSession,
    infoData,
    setInfoData,
    selectedSubjects,
    setSelectedSubjects,
    currentExamIndex,
    setCurrentExamIndex,
    userAccessSubject,
    setUserAccessSubject,
    selectedUnits,
    setSelectedUnits,
    aiSelectedYear,
    setAiSelectedYear,
    aiSelectedSession,
    setAiSelectedSession,
    aiSelectedVariant,
    setAiSelectedVariant,
    aiSelectedPaper,
    setAiSelectedPaper,
    resourceSelectUnit,
    setResourceSelectUnit,
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
