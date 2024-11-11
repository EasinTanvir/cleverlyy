import React from "react";
import { FiX, FiEdit2 } from "react-icons/fi";

const WeeklyGoal = () => {
  return (
    <div className="flex items-center border border-borderColor rounded-lg py-3 px-6 relative ">
      <button className="absolute -top-2 -left-2 bg-textColor4 text-white rounded-full p-1">
        <FiX size={19} />
      </button>

      {/* Content */}
      <div className="flex items-center space-x-4">
        <h3 className="title text-black">Weekly Goal</h3>
        <FiEdit2 className="text-black cursor-pointer" size={15} />

        {/* Progress */}
        <div className="ml-auto flex items-center text-textColor space-x-2">
          <span className="text-black text-sm w-10 h-10 rounded-full flex-center border border-borderColor">
            0/2
          </span>
          <span className="text-sm text-black">days</span>
        </div>
      </div>
    </div>
  );
};

export default WeeklyGoal;
