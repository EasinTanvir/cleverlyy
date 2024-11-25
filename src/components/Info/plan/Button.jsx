"use client";
import React, { useState } from "react";
import { useContextProvider } from "../../../../hooks/useContextProvider";
import ModalView from "@/components/ModalView";

const Button = ({ className, children, plan, path }) => {
  const [openModal, setOpenModal] = useState(false);

  const { selectedCountry, selectedGrade, selectedSchool, selectedSubjects } =
    useContextProvider();

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
