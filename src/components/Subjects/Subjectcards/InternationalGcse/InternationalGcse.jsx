import React from "react";
import GcseSubjectCart from "./GcseSubjectCart";
import { mapSubjectDetails } from "@/utils/subject";

const InternationalGcse = ({ board_name, subjectLists }) => {
  return (
    <div className="pt-4">
      <div className="flex sm:flex-row flex-col justify-between pb-10">
        <h1 className="text-xl">{board_name}: International GCSE</h1>
        <div className="flex items-center gap-2 font-semibold text-lg">
          <h1>Pearson</h1> | <h1>{board_name}</h1>
        </div>
      </div>
      <div className=" bg-white md:p-8 p-0.5 rounded-3xl flex flex-wrap gap-10">
        {subjectLists &&
          mapSubjectDetails(subjectLists.subjects).map((subject, index) => (
            <GcseSubjectCart
              key={index}
              color={subject.color}
              image={subject.image}
              subject_name={subject.subject_name}
              revision_progress={subject.revision_progress}
              chapterwise_progress={subject.chapterwise_progress}
              yearwise_progress={subject.yearwise_progress}
              board_name={board_name}
              subject_id={subject.subject_id}
            />
          ))}
      </div>
    </div>
  );
};

export default InternationalGcse;
