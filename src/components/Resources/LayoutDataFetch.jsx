"use client";

import React, { useEffect, useState } from "react";

import { useContextProvider } from "../../../hooks/useContextProvider";
import { NotFound } from "../NotFound";
import ResourceLayout from "./ResourceLayout";
import { useSession } from "next-auth/react";

const LayoutDataFetch = () => {
  const { selectSubjectHandler } = useContextProvider();
  const { data: session, status } = useSession();

  const [subjectLists, setSubjectLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubjectLists = async (selectSubjectHandler) => {
      const headers = {
        Authorization:
          selectSubjectHandler === "users/subjects"
            ? `Bearer ${session.token}`
            : "",
        "Content-Type": "application/json",
      };

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/${selectSubjectHandler}`,
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

        setSubjectLists(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectSubjectHandler) {
      setLoading(true);
      setError("");
      fetchSubjectLists(selectSubjectHandler);
    }

    // eslint-disable-next-line
  }, [selectSubjectHandler]);

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
      <ResourceLayout subjectLists={subjectLists} loading={loading} />
    </>
  );
};

export default LayoutDataFetch;
