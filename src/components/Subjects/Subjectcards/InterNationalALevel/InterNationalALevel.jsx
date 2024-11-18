import React from "react";
import Image from "next/image";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import SubjectUnit from "./SubjectUnit";
import { mapSubjectDetails } from "@/utils/subject";

const InterNationalALevel = ({ subjectLists, board_name, title }) => {
  return (
    <>
      <div className="pt-10">
        <div className="flex sm:flex-row flex-col justify-between pb-10">
          <h1 className="text-xl">
            {board_name}: {title}
          </h1>
          <div className="flex items-center gap-2 font-semibold text-lg">
            <h1>Pearson</h1> | <h1>{board_name}</h1>
          </div>
        </div>

        <div className="space-y-5">
          {mapSubjectDetails(subjectLists.subjects).map((subject) => (
            <ALevelSubject key={subject.subject_id} {...subject} />
          ))}
        </div>
      </div>
    </>
  );
};

export default InterNationalALevel;

const ALevelSubject = ({
  subject_id,
  subject_name,
  start_year,
  has_units,
  units,
  revision_progress,
  chapterwise_progress,
  yearwise_progress,
  image,
  color,
}) => {
  return (
    <>
      <div className="flex md:flex-row flex-col gap-8 bg-white shadow-md sm:px-6 px-3 py-10 rounded-xl">
        <div className="w-80  flex flex-col items-center justify-center">
          <div className="w-[115px] ">
            <Image className="max-w-24" src={image} alt={subject_name} />
          </div>
          <h1 className="text-[27px] font-bold">{subject_name}</h1>
          <p className="text-[11px]">4CH1 | Science (Double Award) 4SD0 </p>
        </div>
        <div className="flex-1 ">
          {has_units && (
            <div className="flex flex-wrap gap-6">
              {units.map((unit, index) => (
                <SubjectUnit
                  key={index}
                  color={""}
                  icon={MdOutlineKeyboardDoubleArrowRight}
                  unit_name={unit.unit_name}
                  unit_number={unit.unit_number}
                  revision_progress={unit.revision_progress}
                  chapterwise_progress={unit.chapterwise_progress}
                  yearwise_progress={unit.yearwise_progress}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
