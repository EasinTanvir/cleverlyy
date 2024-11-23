"use client";
import React from "react";
import { BsDownload } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";

import { Worker } from "@react-pdf-viewer/core";

import { Viewer } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const ResponseDisplay = ({ finalPaper }) => {
  return (
    <div className="pt-10  flex flex-col items-center ">
      {/* Messages Display */}
      <div className="flex flex-col lg:flex-row gap-10 w-full ">
        {/* User Response Box */}
        <div className="flex-1 ">
          <div className="flex justify-between items-center mb-5">
            <h2 className="">Your Solved Paper</h2>
            <span className="text-textColor  italic  underline">
              Mark Schem
            </span>
          </div>

          <div className="space-y-4 border border-borderColor2  min-h-[500px] max-h-[500px] overflow-auto p-4 rounded-xl">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer fileUrl={finalPaper?.file_url} />
            </Worker>
          </div>
        </div>

        {/* AI Response Box */}
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
              <div className=" rounded-lg  text-sm max-w-[90%] pt-2">test</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponseDisplay;
