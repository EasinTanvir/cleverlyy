export const dynamic = "force-dynamic";

import React from "react";
import Subject from "@/components/Subjects/Subject";

const SubjectWrapper = async () => {
  const response = await fetch(`${process.env.BACKEND_URL}/users/7/subjects`, {
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
    throw new Error("Failed to fetch subject data");
  }

  const edexcelSubjectLists = data.find(
    (item) => item.board_name === "Edexcel"
  );

  const cambridgeSubjectLists = data.find(
    (item) => item.board_name === "Cambridge"
  );

  return (
    <Subject
      edexcelSubjectLists={edexcelSubjectLists}
      cambridgeSubjectLists={cambridgeSubjectLists}
    />
  );
};

const page = () => {
  return (
    <div className="bg-dashboardBd md:p-8 p-4">
      <SubjectWrapper />
    </div>
  );
};

export default page;
