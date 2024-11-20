import React, { Suspense } from "react";
import ResourceLayout from "@/components/Resources/ResourceLayout";
import ResourceLayoutWrapper from "@/components/Resources/ResourceLayoutWrapper";
import Skeleton from "@/components/Skeleton";

const ResourceLayoutHelper = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/subjects/all`,
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

  return <ResourceLayout subjectLists={data} />;
};

const layout = async ({ children }) => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="m-4">
            <Skeleton />
          </div>
        }
      >
        <ResourceLayoutHelper />
      </Suspense>

      <div className="mt-4">
        <ResourceLayoutWrapper>{children}</ResourceLayoutWrapper>
      </div>
    </div>
  );
};

export default layout;
