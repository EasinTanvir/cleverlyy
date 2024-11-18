import React from "react";
import Subject from "@/components/Subjects/Subject";

const findBoardSubjects = (data, boardName) =>
  data.find((item) => item.board_name === boardName);

const SubjectWrapper = async () => {
  const response = await fetch(`${process.env.BACKEND_URL}/users/7/subjects`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  if (!data) {
    throw new Error("Failed to fetch subject data");
  }

  const edexcelSubjectLists = findBoardSubjects(data, "Edexcel");
  const cambridgeSubjectLists = findBoardSubjects(data, "Cambridge");

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
