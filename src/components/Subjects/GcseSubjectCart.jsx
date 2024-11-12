import React from "react";
import Image from "next/image";
import ProgressBar from "./ProgressBar";
import Link from "next/link";

const GcseSubjectCart = ({ color, image, value, title }) => {
  return (
    <Link
      href="/subjects/info"
      style={{ backgroundColor: color }}
      className={` cursor-pointer md:px-5 px-2.5 pb-5 pt-3 md:w-[375px] w-full rounded-2xl  border-[1px] shadow-md space-y-9`}
    >
      <div className="flex items-center gap-5">
        <div className="w-[115px] ">
          <Image className="max-w-24" src={image} alt={title} />
        </div>
        <div className="flex-1 text-end">
          <h1 className="md:text-[25px] text-lg font-bold">{title}</h1>
          <p className="text-[8px]">4CH1 | Science (Double Award) 4SD0 </p>
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

export default GcseSubjectCart;
