export const dynamic = "force-dynamic";
import React, { Suspense } from "react";
import Dashboard from "@/components/Dashboard/Dashboard";
import Skeleton from "@/components/Skeleton";

// Component to fetch data
const DashboardWrapper = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/3", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  if (!data) {
    throw new Error("Failed to fetch data");
  }

  console.log(data.id);

  return <Dashboard data={data} />;
};

const Page = () => {
  return (
    <div className="md:p-8 p-3 bg-dashboardBd">
      <Suspense fallback={<Skeleton />}>
        <DashboardWrapper />
      </Suspense>
    </div>
  );
};

export default Page;
