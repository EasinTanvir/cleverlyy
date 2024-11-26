"use client";

import React, { useEffect, useState } from "react";

import ResourceRevision from "@/components/Resources/ResourceRevision/ResourceRevision";
import { useContextProvider } from "../../../../hooks/useContextProvider";
import Skeleton from "@/components/Skeleton";
import { NotFound } from "@/components/NotFound";

const RevisionNotePage = () => {
  const { selectedSubject, resourceSelectUnit } = useContextProvider();

  const [revisionNoteLists, setRevisionNoteLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChapterWiseRevisionNotes = async (subjectId) => {
      const headers = {
        //Authorization: `Bearer ${session.token}`,
        "Content-Type": "application/json",
      };

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/revision-notes/7/${subjectId}`,
          {
            method: "GET",
            headers,
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
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedSubject && selectedSubject?.units?.length > 0) {
      if (selectedSubject.subject_id && resourceSelectUnit?.unit_id) {
        setLoading(true);
        setError(null);
        fetchChapterWiseRevisionNotes(selectedSubject.subject_id);
      }
    } else {
      if (selectedSubject && selectedSubject?.subject_id) {
        setLoading(true);
        setError(null);
        fetchChapterWiseRevisionNotes(selectedSubject.subject_id);
      }
    }
    // eslint-disable-next-line
  }, [selectedSubject, resourceSelectUnit]);

  if (loading) {
    return (
      <div className="m-8">
        <Skeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <NotFound
          title="Something Went Wrong"
          desc={error || "Failed to fetch data for revision notes"}
        />
      </div>
    );
  }

  return (
    <ResourceRevision
      revisionNoteLists={revisionNoteLists}
      subject_id={selectedSubject?.subject_id}
    />
  );
};

export default RevisionNotePage;
