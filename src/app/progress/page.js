import React from "react";
import Progress from "@/components/Progress/Progress";

const findBoardSubjects = (data, boardName) =>
  data.find((item) => item.board_name === boardName);

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
      <ProgressPageWrapper />
    </div>
  );
};

export default ProgressPage;
