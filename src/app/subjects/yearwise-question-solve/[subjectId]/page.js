import React, { Suspense } from "react";

import { PiBookOpenTextDuotone } from "react-icons/pi";
import Skeleton from "@/components/Skeleton";
import YearWiseQuestionSolve from "@/components/Subjects/YearWiseQuestionSolve/YearWiseQuestionSolve";
import { YearSelector } from "@/components/Subjects/YearWiseQuestionSolve/YearSelector";
import SubjectTitle from "@/components/Subjects/SubjectInfo/SubjectTitle";

const YearWiseQuestionSolvesWrapper = async ({ subjectId }) => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/papers/?subject_id=${subjectId}`,
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
    throw new Error("Failed to fetch chapterwise revision notes data");
  }

  const yearWisePapers = Object.keys(data).length === 0 ? false : data;

  return <YearWiseQuestionSolve yearWisePapers={yearWisePapers} />;
};

const YearWiseQuestionSolves = async ({ params }) => {
  const { subjectId } = await params;

  return (
    <div className="md:p-8 p-4">
      <>
        <SubjectTitle variant="inline" extra />
      </>

      <Suspense
        fallback={
          <div className="py-9">
            <Skeleton />
          </div>
        }
      >
        <YearWiseQuestionSolvesWrapper subjectId={subjectId} />
      </Suspense>
    </div>
  );
};

export default YearWiseQuestionSolves;
