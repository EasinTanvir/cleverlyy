import React from "react";
import Link from "next/link";

import ProgressBar from "../../ProgressBar";

const SubjectUnit = ({
  icon: Icon,
  unit_name,
  revision_progress,
  chapterwise_progress,
  yearwise_progress,
}) => {
  return (
    <Link
      href="/subjects/info"
      className={`bg-[#f9fde7] cursor-pointer p-5 md:w-[360px] w-full rounded-2xl  border-[1px] shadow-md space-y-12 `}
    >
      <div className="flex  gap-5">
        <div className="flex-1">
          <h1 className="md:text-[25px]  text-lg font-bold">{unit_name}</h1>
          <p className="text-[8px]">4CH1 | Science (Double Award) 4SD0 </p>
        </div>

        <div className="w-[32px]   flex justify-end">
          <Icon size={34} />
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
