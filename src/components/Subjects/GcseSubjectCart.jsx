import React from "react";
import { FaFlask, FaAtom, FaChartLine } from "react-icons/fa";
import ProgressBar from "./ProgressBar";

const GcseSubjectCart = ({
  color,
  icon: Icon,
  title,
  code,
  progress,
  value,
}) => {
  return (
    <div
      className={`bg-[${color}] p-5 md:w-[360px] rounded-2xl  border-[1px] shadow-md space-y-9`}
    >
      <div className="flex items-center gap-5">
        <div className="w-[125px] ">
          <Icon size={40} />
        </div>
        <div className="flex-1 ">
          <h1 className="text-[27px] font-bold">{title}</h1>
          <p className="text-[8px]">4CH1 | Science (Double Award) 4SD0 </p>
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

export default GcseSubjectCart;
