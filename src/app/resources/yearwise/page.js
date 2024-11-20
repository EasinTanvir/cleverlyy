"use client";

import React, { useEffect, useState } from "react";
import ResourceYearWiseQp from "@/components/Resources/ResourceYearWiseQp/ResourceYearWiseQp";
import { NotFound } from "@/components/NotFound";
import Skeleton from "@/components/Skeleton";
import { useContextProvider } from "../../../../hooks/useContextProvider";

const ResourceYearWiseQuestionSolvePage = () => {
  const { selectedSubject } = useContextProvider();
  const [yearWiseQpLists, setYearWiseQpLists] = useState([]);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchYearWiseQp = async (subjectId) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/papers/user/?user_id=7&subject_id=${subjectId}`,
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

      if (data && Object.keys(data).length === 1 && data.message) {
        setMessage(data.message);
      } else {
        setYearWiseQpLists(data);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedSubject.subject_id) {
      setLoading(true);
      setError(null);
      setMessage(null);
      fetchYearWiseQp(selectedSubject.subject_id);
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
          title="Internal Server Error"
          desc={error || "Failed to fetch data for revision notes"}
        />
      </div>
    );
  }

  return (
    <>
      <ResourceYearWiseQp yearWiseQpLists={yearWiseQpLists} message={message} />
    </>
  );
};

export default ResourceYearWiseQuestionSolvePage;
