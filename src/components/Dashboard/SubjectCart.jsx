import React from "react";
import { dashboardImg } from "@/constant";
import Image from "next/image";

const SubjectCart = ({ title }) => {
  return (
    <div className="w-40">
      <div className="w-20 mx-auto relative">
        <Image className="max-w-full" alt="physics" src={dashboardImg} />
      </div>
      <h1 className="title text-center">{title}</h1>
      <div className="text-textColor2 text-xs flex flex-col items-center mt-4">
        <span>Days till exam:</span>{" "}
        <span className="underline">7 months (14/6/2025)</span>
      </div>
    </div>
  );
};

export default SubjectCart;