export const dynamic = "force-dynamic";
import React, { Suspense } from "react";
import AiChecking from "@/components/AiChecking/AiChecking";
import Skeleton from "@/components/Skeleton";

const AiCheckingHelper = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/7/subjects`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  if (!data) {
    throw new Error("Failed to fetch available subjects");
  }

  return <AiChecking subjectLists={data} />;
};

const AiCheckings = () => {
  return (
    <div className=" bg-dashboardBd">
      <Suspense fallback={<Skeleton />}>
        <AiCheckingHelper />
      </Suspense>
    </div>
  );
};

export default AiCheckings;
