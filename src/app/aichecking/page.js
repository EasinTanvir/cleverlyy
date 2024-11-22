export const dynamic = "force-dynamic";

import React, { Suspense } from "react";
import AiChecking from "@/components/AiChecking/AiChecking";
import Skeleton from "@/components/Skeleton";
import { NotFound } from "@/components/NotFound";

const fetchSubjects = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/7/subjects`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData?.message);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

const AiCheckingHelper = async () => {
  try {
    const data = await fetchSubjects();
    return <AiChecking subjectLists={data} />;
  } catch (error) {
    return (
      <div className="mt-40">
        <NotFound
          title="Something Went Wrong"
          desc={error.message || "An unexpected error occurred"}
        />
      </div>
    );
  }
};

const AiCheckings = () => {
  return (
    <div className="bg-dashboardBd">
      <Suspense
        fallback={
          <div className="p-10">
            <Skeleton />
          </div>
        }
      >
        <AiCheckingHelper />
      </Suspense>
    </div>
  );
};

export default AiCheckings;
