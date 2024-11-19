import React, { Suspense } from "react";

import Skeleton from "@/components/Skeleton";
import YearWiseQuestionSolve from "@/components/Subjects/YearWiseQuestionSolve/YearWiseQuestionSolve";
import SubjectTitle from "@/components/Subjects/SubjectInfo/SubjectTitle";

const YearWiseQuestionSolvesWrapper = async ({ subjectId }) => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/papers/user/?user_id=7&subject_id=${subjectId}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
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
    throw new Error("Failed to fetch chapterwise revision notes data");
  }

  let yearWisePapers,
    message,
    isPapaperExist = false;

  if (data && Object.keys(data).length === 1 && data.message) {
    console.log("Message:", data.message);
    isPapaperExist = false;
    message = data.message;
  } else {
    isPapaperExist = true;
    yearWisePapers = Object.keys(data).length === 0 ? false : data;
  }

  return (
    <YearWiseQuestionSolve
      yearWisePapers={yearWisePapers}
      subjectId={subjectId}
      isPapaperExist
      message={message}
    />
  );
};

const YearWiseQuestionSolvePage = async ({ params }) => {
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

export default YearWiseQuestionSolvePage;
