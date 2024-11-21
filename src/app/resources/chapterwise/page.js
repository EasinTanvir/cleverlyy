"use client";

import React, { useEffect, useState } from "react";
import ResourceChapterWiseQp from "@/components/Resources/ResourceChapterWiseQp/ResourceChapterWiseQp";
import { useContextProvider } from "../../../../hooks/useContextProvider";
import Skeleton from "@/components/Skeleton";
import { NotFound } from "@/components/NotFound";

const ChapterWisepage = () => {
  const { selectedSubject } = useContextProvider();
  const [chapterWiseLists, setChapterWiseLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchChapterWiseLists = async (subjectId) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/revision-notes/7/${subjectId}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.json();

      setChapterWiseLists(data);
    } catch (error) {
      console.log(error);
      setError(error.message || "Internal Server Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedSubject.subject_id) {
      setLoading(true);
      setError(null);
      fetchChapterWiseLists(selectedSubject.subject_id);
    }
  }, [selectedSubject]);

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
    <>
      <ResourceChapterWiseQp
        chapterWiseLists={chapterWiseLists}
        subject_id={selectedSubject?.subject_id}
      />
    </>
  );
};

export default ChapterWisepage;
