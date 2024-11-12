import React from "react";
import ResponseDisplay from "./Response";
import { Divider } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import { TbAlertTriangle } from "react-icons/tb";

const AiCheckingProgress = () => {
  return (
    <div>
      <div>
        <h1 className="md:text-xl text-[18px]">
          Cambridge Chemistry O-Level-2015. May/June Variant-1, Paper-1
        </h1>
        <div className="mt-5 flex md:flex-row flex-col gap-4 justify-between items-start">
          <div className="flex md:flex-row flex-col items-center gap-3  ps-6">
            <button className="flex items-center px-4 py-2 bg-textColor4 text-white rounded-xl">
              Save to Progress
            </button>

            {/* Vertical Divider */}
            <Divider
              sx={{ borderRightWidth: 2 }}
              orientation="vertical"
              flexItem
              className="text-black "
            />

            <button className="flex items-center px-4 py-2 bg-textColor4 text-white rounded-xl">
              See Grade Boundary
            </button>
          </div>
          <div className="space-y-3">
            <button className="flex  w-60 px-2 justify-between items-center py-2 bg-textColor4 text-white rounded-xl">
              <span>
                <AiOutlineClose />
              </span>
              <span>Solve Paper 2?</span>
              <span className=" w-6 h-6 rounded-full bg-white flex-center">
                <FiArrowRight size={16} className="text-black" />
              </span>
            </button>

            <button className="flex  w-60 px-2 justify-between items-center py-2 bg-textColor4 text-white rounded-xl">
              <span>
                <AiOutlineClose />
              </span>
              <span> Study Related Topics</span>
              <span className=" w-6 h-6 rounded-full bg-white flex-center">
                <FiArrowRight size={16} className="text-black" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <ResponseDisplay />
      </div>

      <div className="flex justify-between mt-10">
        <div></div>
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 bg-black rounded-full flex-center">
            <TbAlertTriangle size={15} className="text-white" />
          </span>
          <span className="text-sm">
            Ai checking may not always be accurate
          </span>
        </div>
        <h3 className="italic text-textColor text-sm">Give Feedback</h3>
      </div>
    </div>
  );
};

export default AiCheckingProgress;
