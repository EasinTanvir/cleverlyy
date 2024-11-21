import React from "react";

const ProgressBar = ({ title, value }) => {
  return (
    <React.Fragment>
      <div className="flex justify-between items-center ">
        <h3 className="text-sm w-[145px]">{title}</h3>
        <div className="flex-1 bg-gray-200  rounded-full h-[18px]">
          <div
            className="bg-green-500 h-[18px]  rounded-full relative"
            style={{ width: value || 0 }}
          >
            <span className="text-white text-xs absolute  right-1 pt-[1px] top-0 bottom-0 my-auto">
              {Math.round(value || 0)}
            </span>
          </div>
        </div>
        <span className="text-xs ps-2">8/14</span>
      </div>
    </React.Fragment>
  );
};

export default ProgressBar;
