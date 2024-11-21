"use client";
import React, { useState } from "react";
import { useContextProvider } from "../../../../hooks/useContextProvider";
import ModalView from "@/components/ModalView";

const Button = ({ className, children, plan, path }) => {
  const [openModal, setOpenModal] = useState(false);

  const { selectedCountry, selectedGrade, selectedSchool, selectedSubjects } =
    useContextProvider();

  console.log("selectedCountry", selectedCountry);
  console.log("selectedGrade", selectedGrade);
  console.log("selectedSchool", selectedSchool);
  console.log("selectedSubjects", selectedSubjects);

  const onPlanHandler = () => {
    setOpenModal(true);
  };

  return (
    <>
      <button onClick={onPlanHandler} className={className}>
        {children}
      </button>
      <ModalView
        path={path}
        plan={plan}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default Button;
