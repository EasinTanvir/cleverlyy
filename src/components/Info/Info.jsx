"use client";
import React, { useState } from "react";
import { Step, StepLabel, Stepper } from "@mui/material";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

import CountrySelection from "./CountrySelection";
import BoardAndExam from "./BoardAndExam";
import SchoolAndGrade from "./SchoolAndGrade";
import { useContextProvider } from "../../../hooks/useContextProvider";
import SubjectInfo from "./SubjectInfo";
import InfoPlan from "./InfoPlan";

const steps = [
  "Country",
  "School & Grade ",
  "Board & Exam",
  "Subjects ",
  "Plan",
];

const Info = () => {
  const {
    selectedCountry,
    selectedGrade,
    selectedSchool,
    selectedInfoExam,
    selectedInfoBoard,
    selectedPaper,
  } = useContextProvider();

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const disableNextButton =
    !selectedCountry ||
    (activeStep === 1 && (!selectedGrade || !selectedSchool)) ||
    (activeStep === 2 && (!selectedInfoExam || !selectedInfoBoard)) ||
    (activeStep === 3 && !selectedPaper);

  return (
    <div className="w-full min-h-screen  bg-custom-pastel-gradient py-10  px-10 relative">
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div className="mt-16">
        {activeStep === 0 && <CountrySelection />}
        {activeStep === 1 && <SchoolAndGrade />}
        {activeStep === 2 && <BoardAndExam />}
        {activeStep === 3 && <SubjectInfo />}
        {activeStep === 4 && <InfoPlan />}
      </div>

      <button
        variant="outlined"
        disabled={activeStep === 0}
        onClick={handleBack}
        className={`bg-textColor   w-14 h-14 flex-center rounded-full absolute lg:left-8 left-2 top-0 bottom-0 my-auto ${
          activeStep === 0 ? "opacity-45" : "opacity-100"
        }`}
      >
        <FaArrowLeft size={30} className="text-white" />
      </button>
      {activeStep !== steps.length - 1 && (
        <button
          disabled={disableNextButton}
          onClick={handleNext}
          className={` ${
            disableNextButton ? "opacity-45" : "opacity-100"
          } bg-textColor w-14 h-14 flex-center rounded-full absolute lg:right-8 right-2 top-0 bottom-0 my-auto`}
        >
          <FaArrowRight size={30} className="text-white" />
        </button>
      )}
    </div>
  );
};

export default Info;
