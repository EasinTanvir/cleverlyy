"use client";
import React from "react";
import { useContextProvider } from "../../../hooks/useContextProvider";

const ResourceLayoutWrapper = ({ children }) => {
  const {
    selectedExam,
    setSelectedExam,
    selectedSubject,
    setSelectedSubject,
    resourceSelectUnit,
  } = useContextProvider();

  if (selectedSubject && selectedSubject?.units?.length > 0) {
    if (selectedSubject.subject_id && resourceSelectUnit?.unit_id) {
      return <div className="px-4 pb-8">{children}</div>;
    }
  } else {
    if (selectedSubject && selectedSubject?.subject_id) {
      return <div className="px-4 pb-8">{children}</div>;
    }
  }

  return;
};

export default ResourceLayoutWrapper;
