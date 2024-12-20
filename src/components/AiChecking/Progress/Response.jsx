"use client";
import React from "react";
import { BsDownload } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";

const ResponseDisplay = ({ finalPaper }) => {
  return (
    <div className="pt-10  flex flex-col items-center ">
      <div className="flex flex-col lg:flex-row gap-10 w-full ">
        <div className="flex-1 ">
          <div className="flex justify-between items-center mb-5">
            <h2 className="">Your Solved Paper</h2>
            <span className="text-textColor  italic  underline">
              Mark Schem
            </span>
          </div>

          <div className="space-y-4 border border-borderColor2  min-h-[500px] max-h-[500px] overflow-auto p-4 rounded-xl">
            <div className="flex items-start space-x-3">
              <div className=" rounded-lg  text-sm max-w-[90%] pt-2"></div>
            </div>
          </div>
        </div>

        <div className="flex-1   ">
          <div className="flex justify-between items-center mb-3">
            <h2 className="">AI Response</h2>
            <div className="flex items-center gap-4">
              <BsDownload size={20} />
              <div className="bg-textColor4 px-2.5 py-1 rounded-md flex items-center gap-3">
                <span>Marks : 77/80</span>
                <HiOutlinePencil />
              </div>
            </div>
          </div>

          <div className="space-y-4 border border-blue-300 min-h-[500px] max-h-[500px] overflow-auto p-4 rounded-xl">
            <div className="flex items-start space-x-3">
              <div className=" rounded-lg  text-sm max-w-[90%] pt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponseDisplay;
