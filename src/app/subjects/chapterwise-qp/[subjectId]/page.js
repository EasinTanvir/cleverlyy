import React, { Suspense } from "react";
import { Divider } from "@mui/material";

import WeeklyGoal from "@/components/Subjects/ChapterWiseRevisionNotes/WeeklyGoal";
import { PiBookOpenTextDuotone } from "react-icons/pi";
import Skeleton from "@/components/Skeleton";
import SubjectTitle from "@/components/Subjects/SubjectInfo/SubjectTitle";
import ChapterWiseQp from "@/components/Subjects/ChapterWiseQp/ChapterWiseQp";

const ChapterWiseRevisionNotesWrapper = async ({ subjectId }) => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/chapterwise-questions/7/${subjectId}`,
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
    throw new Error("Failed to fetch yearwise notes data");
  }

  return <ChapterWiseQp chapterWiseQpLists={data} />;
};

const ChapterWiseRevisionNote = async ({ params }) => {
  const { subjectId } = await params;
  return (
    <div className="md:p-8 p-4">
      <>
        <div className="flex items-center gap-2 ">
          <PiBookOpenTextDuotone size={25} /> <span className="-me-1">/</span>
          <SubjectTitle variant="inline" />
        </div>

        <div className="flex lg:flex-row flex-col items-center lg:gap-0 gap-7">
          <div className="flex-1  space-y-6">
            <SubjectTitle variant="heading" />
            <p>
              Expertly curated notes simplify complex topics, highlighting key
              concepts for exam success.
            </p>
            <div className="flex sm:flex-row flex-col gap-2 items-center text-lg text-textColor">
              <span className="underline">See Full Syllabus </span> |
              <span className="underline">Recommended Books</span>
            </div>
          </div>

          <div className="w-96 flex flex-col items-center   justify-center space-y-6">
            <WeeklyGoal />
            <button className="border bg-textColor px-3.5 rounded-lg text-white py-1.5 ">
              Upgrade
            </button>
          </div>
        </div>

        <Divider className="text-black mt-12" />
      </>

      <Suspense
        fallback={
          <div className="py-9">
            <Skeleton />
          </div>
        }
      >
        <ChapterWiseRevisionNotesWrapper subjectId={subjectId} />
      </Suspense>
    </div>
  );
};

export default ChapterWiseRevisionNote;
