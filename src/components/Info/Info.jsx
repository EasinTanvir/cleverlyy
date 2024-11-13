"use client";
import React, { useState } from "react";
import CountrySelection from "./CountrySelection";
import { Button, Step, StepLabel, Stepper } from "@mui/material";
import BoardAndExam from "./BoardAndExam";
import SchoolAndGrade from "./SchoolAndGrade";
import { useContextProvider } from "../../../hooks/useContextProvider";

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
    setSelectedCountry,
    selectedGrade,
    setSelectedGrade,
    selectedSchool,
    setSelectedSchool,
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
    (activeStep === 1 && (!selectedGrade || !selectedSchool));

  return (
    <div className="w-full min-h-screen  bg-custom-pastel-gradient py-10  px-10">
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
      </div>

      <div
        className="flex justify-between items-center px-4 fixed z-50 h-24 bottom-0 bg-custom-pastel-gradient left-0 w-full py-4 border border-slate-200"
        style={{ boxShadow: "0 -2px 4px rgba(100, 100, 100, 0.15)" }}
      >
        <Button
          variant="outlined"
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Back
        </Button>
        {activeStep !== steps.length - 1 && (
          <button
            disabled={disableNextButton}
            onClick={handleNext}
            className={` ${
              disableNextButton ? "opacity-45" : "opacity-100"
            } text-white rounded-lg px-4 py-2 bg-textColor`}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Info;
