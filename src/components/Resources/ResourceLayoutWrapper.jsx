"use client";
import React from "react";
import { useContextProvider } from "../../../hooks/useContextProvider";

const ResourceLayoutWrapper = ({ children }) => {
  const { selectedExam, setSelectedExam, selectedSubject, setSelectedSubject } =
    useContextProvider();

  if (!selectedExam || !selectedSubject) return;

  return <>{children}</>;
};

export default ResourceLayoutWrapper;
