"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import ResourceYearWiseQp from "@/components/Resources/ResourceYearWiseQp/ResourceYearWiseQp";
import { NotFound } from "@/components/NotFound";
import Skeleton from "@/components/Skeleton";
import { useContextProvider } from "../../../../hooks/useContextProvider";

const ResourceYearWiseQuestionSolvePage = () => {
  const { selectedSubject, resourceSelectUnit } = useContextProvider();
  const [yearWiseQpLists, setYearWiseQpLists] = useState([]);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { data: session } = useSession();

  const fetchYearWiseQp = async (subjectId) => {
    const headers = {
      Authorization: `Bearer ${session.token}`,
      "Content-Type": "application/json",
    };
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/papers/user/?user_id=7&subject_id=${subjectId}`,
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
    if (selectedSubject && selectedSubject?.units?.length > 0) {
      if (selectedSubject.subject_id && resourceSelectUnit?.unit_id) {
        setLoading(true);
        setError(null);
        fetchYearWiseQp(selectedSubject.subject_id);
      }
    } else {
      if (selectedSubject && selectedSubject?.subject_id) {
        setLoading(true);
        setError(null);
        fetchYearWiseQp(selectedSubject.subject_id);
      }
    }
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
