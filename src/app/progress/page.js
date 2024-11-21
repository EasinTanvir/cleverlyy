export const dynamic = "force-dynamic";

import React, { Suspense } from "react";
import Progress from "@/components/Progress/Progress";
import Skeleton from "@/components/Skeleton";

const ProgressPageWrapper = async () => {
  const response = await fetch(`${process.env.BACKEND_URL}/users/7/subjects`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.message || `HTTP error! status: ${response.status}`
    );
  }
  const data = await response.json();
  if (!data) {
    throw new Error("Failed to fetch subject data");
  }

  return <Progress barchartData={data} />;
};

const ProgressPage = () => {
  return (
    <div className="p-8">
      <Suspense fallback={<Skeleton />}>
        <ProgressPageWrapper />
      </Suspense>
    </div>
  );
};

export default ProgressPage;
