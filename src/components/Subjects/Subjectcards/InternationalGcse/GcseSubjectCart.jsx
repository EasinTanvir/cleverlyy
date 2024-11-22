"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import ProgressBar from "../../ProgressBar";
import { useContextProvider } from "../../../../../hooks/useContextProvider";

const GcseSubjectCart = ({
  color,
  image,
  yearwise_progress,
  revision_progress,
  chapterwise_progress,
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
      style={{ backgroundColor: color }}
      className={` cursor-pointer md:px-5 px-2.5 pb-5 pt-3 md:min-w-[325px] md:max-w-[325px] w-full rounded-2xl  border-[1px] shadow-md space-y-9`}
    >
      <div className="flex items-center gap-5">
        <div className="w-[115px] ">
          <Image className="max-w-24" src={image} alt={subject_name} />
        </div>
        <div className="flex-1 text-end">
          <h1 className="md:text-[25px] text-lg font-bold">{subject_name}</h1>
          <p className="text-[8px]">4CH1 | Science (Double Award) 4SD0 </p>
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

export default GcseSubjectCart;
