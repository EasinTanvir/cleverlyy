import React from "react";
import { FaFlask, FaAtom, FaChartLine } from "react-icons/fa";

const SubjectCard = ({ color, icon: Icon, title, code, progress }) => {
  return (
    <div className={`bg-[${color}] p-4 w-96 rounded-2xl  border space-y-6`}>
      <div className="flex items-center gap-5">
        <div className="w-[125px] ">
          <FaFlask size={40} />
        </div>
        <div className="flex-1 ">
          <h1 className="text-[27px] font-bold">Chemistry</h1>
          <p className="text-[8px]">4CH1 | Science (Double Award) 4SD0 </p>
        </div>
      </div>

      <div className="space-y-4 ">
        <Profgress />
        <Profgress />
        <Profgress />
      </div>
    </div>
  );
};

export default SubjectCard;

const Profgress = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between items-center ">
        <h3 className="text-sm w-[125px]">Yearwise QP</h3>
        <div className="flex-1 bg-gray-200  rounded-full h-[18px]">
          <div
            className="bg-green-500 h-[18px] rounded-full relative"
            style={{ width: `50%` }}
          >
            <span className="text-white text-xs absolute right-2 pt-[1px] top-0 bottom-0 my-auto">
              {" "}
              80%
            </span>
          </div>
        </div>
        <span className="text-sm ps-2">8/14</span>
      </div>
    </React.Fragment>
  );
};
