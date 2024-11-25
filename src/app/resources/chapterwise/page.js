"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import ResourceChapterWiseQp from "@/components/Resources/ResourceChapterWiseQp/ResourceChapterWiseQp";
import { useContextProvider } from "../../../../hooks/useContextProvider";
import Skeleton from "@/components/Skeleton";
import { NotFound } from "@/components/NotFound";

const ChapterWisepage = () => {
  const { data: session } = useSession();

  const { selectedSubject, resourceSelectUnit } = useContextProvider();
  const [chapterWiseLists, setChapterWiseLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChapterWiseLists = async (subjectId) => {
      const headers = {
        Authorization: `Bearer ${session.token}`,
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

        const data = await response.json();

        setChapterWiseLists(data);
      } catch (error) {
        console.log(error);
        setError(error.message || "Internal Server Error");
      } finally {
        setLoading(false);
      }
    };

    if (selectedSubject && selectedSubject?.units?.length > 0) {
      if (selectedSubject?.subject_id && resourceSelectUnit?.unit_id) {
        setLoading(true);
        setError(null);
        fetchChapterWiseLists(selectedSubject.subject_id);
      }
    } else {
      if (selectedSubject && selectedSubject.subject_id) {
        setLoading(true);
        setError(null);
        fetchChapterWiseLists(selectedSubject.subject_id);
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
    <>
      <ResourceChapterWiseQp
        chapterWiseLists={chapterWiseLists}
        subject_id={selectedSubject?.subject_id}
      />
    </>
  );
};

export default ChapterWisepage;
