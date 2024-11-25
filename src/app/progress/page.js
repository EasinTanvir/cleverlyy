export const dynamic = "force-dynamic";

import React, { Suspense } from "react";
import Progress from "@/components/Progress/Progress";
import Skeleton from "@/components/Skeleton";

import { getServerCredentials } from "../../../session/sersverSession";

const ProgressPageWrapper = async () => {
  try {
    const session = await getServerCredentials();

    if (!session?.token) {
      throw new Error("Authentication token is missing.");
    }

    const headers = {
      Authorization: `Bearer ${session.token}`,
      "Content-Type": "application/json",
    };

    const response = await fetch(
      `${process.env.BACKEND_URL}/users/7/subjects`,
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
      throw new Error("Failed to fetch subject data");
    }

    return <Progress barchartData={data} />;
  } catch (error) {
    throw new Error(
      error?.message || "Something went wrong in the progress page."
    );
  }
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
