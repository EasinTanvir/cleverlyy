export const dynamic = "force-dynamic";
import React from "react";
import Dashboard from "@/components/Dashboard/Dashboard";

const DashboardPage = () => {
  return (
    <div className="md:p-8 p-3 bg-dashboardBd">
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
