import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <>
      <div className="w-full bg-gray-200 rounded-full h-[13px] mt-1">
        <div
          className="bg-purple-500 h-[13px] rounded-full relative"
          style={{ width: `${progress}%` }}
        >
          <span className="text-white text-[9px] absolute right-2  top-0  ">
            {progress}%
          </span>
        </div>
      </div>

      <div className="flex justify-between text-xs mt-2">
        <span>In Progress</span>
        <span>0/84</span>
      </div>
    </>
  );
};

export default ProgressBar;