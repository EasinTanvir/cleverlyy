"use client";
import React from "react";
import Link from "next/link";

import ProgressBar from "../../ProgressBar";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useContextProvider } from "../../../../../hooks/useContextProvider";

const SubjectUnit = ({
  unit_name,
  revision_progress,
  chapterwise_progress,
  yearwise_progress,
  subject_name,
  board_name,
  subject_id,
}) => {
  const { setUserSelectedSubject } = useContextProvider();

  return (
    <Link
      onClick={() =>
        setUserSelectedSubject({
          yearwise_progress,
          revision_progress,
          chapterwise_progress,
          subject_name,
          board_name,
          subject_id,
        })
      }
      href="/subjects/info"
      className={` bg-white cursor-pointer p-5 md:max-w-[340px] md:min-w-[340px] w-full rounded-2xl  border-[1px] shadow-md space-y-12 `}
    >
      <div className="flex  gap-5">
        <div className="flex-1">
          <h1 className="md:text-[25px]  text-lg font-bold">{unit_name}</h1>
          <p className="text-[8px]">4CH1 | Science (Double Award) 4SD0 </p>
        </div>

        <div className="w-[32px]   flex justify-end">
          <MdOutlineKeyboardDoubleArrowRight size={34} />
        </div>
      </div>

      <div className="space-y-4 ">
        <ProgressBar value={yearwise_progress} title="Yearwise QP" />
        <ProgressBar value={chapterwise_progress} title="Chapterwise QP" />
        <ProgressBar value={revision_progress} title="Revision Notes" />
      </div>
    </Link>
  );
};

export default SubjectUnit;
