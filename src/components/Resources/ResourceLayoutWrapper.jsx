"use client";
import React from "react";
import { useContextProvider } from "../../../hooks/useContextProvider";

const ResourceLayoutWrapper = ({ children }) => {
  const { selectedExam, setSelectedExam, selectedSubject, setSelectedSubject } =
    useContextProvider();

  if (!selectedExam || !selectedSubject) return;

  return <div className="px-4 pb-8">{children}</div>;
};

export default ResourceLayoutWrapper;
