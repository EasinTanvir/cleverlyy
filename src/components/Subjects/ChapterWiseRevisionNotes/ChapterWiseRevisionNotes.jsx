import React from "react";
import RevisionNotesChapter from "./RevisionNotesChapter";
import { PiBookOpenTextDuotone } from "react-icons/pi";
import WeeklyGoal from "./WeeklyGoal";
import { chapters } from "@/utils";
import { Divider } from "@mui/material";

const ChapterWiseRevisionNotes = () => {
  return (
    <div className="">
      <div className="flex items-center gap-2 ">
        <PiBookOpenTextDuotone size={25} /> <span className="-me-1">/</span>
        <span className="text-sm underline ">
          Cambridge Chemistry : O-level / Revision Notes
        </span>
      </div>

      <div className="flex lg:flex-row flex-col items-center lg:gap-0 gap-7">
        <div className="flex-1  space-y-6">
          <h1 className="text-[28px] font-bold mt-5">
            Cambridge Chemistry : O level -{" "}
            <span className="text-textColor">Revision Notes</span>
          </h1>
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
          <button className="border">Upgrade</button>
        </div>
      </div>

      <Divider className="text-black mt-12" />

      <div className="mt-12 flex xl:flex-row flex-col  gap-9  ">
        {chapters.map((item, i) => (
          <RevisionNotesChapter key={i} chapterIndex={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ChapterWiseRevisionNotes;
