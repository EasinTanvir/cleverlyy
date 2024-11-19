"use client";

import React, { useEffect, useState } from "react";
import ResourceRevision from "@/components/Resources/ResourceRevision/ResourceRevision";
import { useContextProvider } from "../../../../hooks/useContextProvider";

const RevisionNotePage = () => {
  const { selectedSubject } = useContextProvider();

  const [revisionNoteLists, setRevisionNoteLists] = useState([]);

  const fetchChapterWiseRevisionNotes = async (subjectId) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/revision-notes/7/${subjectId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`
      );
    }

    const data = await response.json();

    if (!data) {
      throw new Error("Failed to fetch revision notes data");
    }

    setRevisionNoteLists(data);
  };

  useEffect(() => {
    if (selectedSubject.subject_id) {
      fetchChapterWiseRevisionNotes(selectedSubject.subject_id);
    }
  }, []);

  return (
    <>
      <ResourceRevision revisionNoteLists={revisionNoteLists} />
    </>
  );
};

export default RevisionNotePage;
