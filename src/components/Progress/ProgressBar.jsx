import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="mt-4">
      <div className="w-full bg-transparent border border-progressBorder rounded-full h-[14px] mt-1">
        <div
          className="bg-progress2 h-[13px] rounded-full relative"
          style={{ width: `${progress}%` }}
        >
          <span className="text-white text-[8px] absolute right-2  top-0  ">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
