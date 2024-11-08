import React from "react";
import { FaFlask, FaAtom, FaChartLine } from "react-icons/fa";
import ProgressBar from "./ProgressBar";
import Link from "next/link";

const IntALevelSubjectCart = ({
  color,
  icon: Icon,
  title,
  code,
  progress,
  value,
  index,
}) => {
  return (
    <Link
      href="/subjects/info"
      className={`bg-[${color}] cursor-pointer p-5 md:w-[360px] rounded-2xl  border-[1px] shadow-md space-y-12`}
    >
      <div className="flex  gap-5">
        <div className="w-[125px]">
          <h1 className="text-[27px] font-bold">
            {title} {index + 1}{" "}
          </h1>
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
    </Link>
  );
};

export default IntALevelSubjectCart;
