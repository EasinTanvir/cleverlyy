import React from "react";

import ProgressBar from "./ProgressBar";

const ALevelSubjectCart = ({
  color,
  icon: Icon,
  title,
  code,
  progress,
  value,
}) => {
  return (
    <div
      className={`bg-[${color}] p-5 w-full rounded-2xl  border-[1px] shadow-md space-y-12`}
    >
      <div className="flex gap-5">
        <div className="flex-1">
          <h1 className="md:text-[25px] text-lg font-bold">{title}</h1>
          <p className="text-[8px]">4CH1 | Science (Double Award) 4SD0 </p>
        </div>

        <div className="flex-1  flex justify-end">
          <Icon size={34} />
        </div>
      </div>

      <div className="space-y-4 ">
        <ProgressBar value={value} title="Yearwise QP" />
        <ProgressBar value={value} title="Chapterwise QP" />
        <ProgressBar value={value} title="Revision Notes" />
      </div>
    </div>
  );
};

export default ALevelSubjectCart;
