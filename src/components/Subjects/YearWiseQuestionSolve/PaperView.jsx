"use client";
const dummyData = {
  2014: {
    "Jan/Feb": {
      "Variant-1": [
        {
          paper_id: 1701,
          paper: "Paper 1",
          type: "Markscheme",
          name: "9701_w14_ms_11.pdf",
          file_url: "https://your-s3-url/path/to/paper1.pdf",
        },
        {
          paper_id: 1702,
          paper: "Paper 2",
          type: "Question Paper",
          name: "9701_w14_qp_12.pdf",
          file_url: "https://your-s3-url/path/to/paper2.pdf",
        },
      ],
      "Variant-2": [
        {
          paper_id: 1703,
          paper: "Paper 55",
          type: "Markscheme",
          name: "9701_w14_ms_21.pdf",
          file_url: "https://your-s3-url/path/to/paper3.pdf",
        },
        {
          paper_id: 1704,
          paper: "Paper 2",
          type: "Question Paper",
          name: "9701_w14_qp_22.pdf",
          file_url: "https://your-s3-url/path/to/paper4.pdf",
        },
      ],
    },
    "May/June": {
      "Variant-1": [
        {
          paper_id: 1707,
          paper: "Paper 1",
          type: "Markscheme",
          name: "9701_s14_ms_11.pdf",
          file_url: "https://your-s3-url/path/to/paper5.pdf",
        },
        {
          paper_id: 1710,
          paper: "Paper 2",
          type: "Question Paper",
          name: "9701_s14_qp_12.pdf",
          file_url: "https://your-s3-url/path/to/paper6.pdf",
        },
      ],
    },
    "Oct/Nov": {
      "Variant-1": [
        {
          paper_id: 1721,
          paper: "Paper 1",
          type: "Markscheme",
          name: "9701_f14_ms_11.pdf",
          file_url: "https://your-s3-url/path/to/paper9.pdf",
        },
        {
          paper_id: 1722,
          paper: "Paper 2",
          type: "Question Paper",
          name: "9701_f14_qp_12.pdf",
          file_url: "https://your-s3-url/path/to/paper10.pdf",
        },
      ],
      "Variant-2": [
        {
          paper_id: 1723,
          paper: "Paper 1",
          type: "Markscheme",
          name: "9701_f14_ms_21.pdf",
          file_url: "https://your-s3-url/path/to/paper11.pdf",
        },
        {
          paper_id: 1724,
          paper: "Paper 2",
          type: "Question Paper",
          name: "9701_f14_qp_22.pdf",
          file_url: "https://your-s3-url/path/to/paper12.pdf",
        },
      ],
      "Variant-3": [
        {
          paper_id: 1733,
          paper: "Paper 1",
          type: "Markscheme",
          name: "9701_f14_ms_21.pdf",
          file_url: "https://your-s3-url/path/to/paper11.pdf",
        },
        {
          paper_id: 1734,
          paper: "Paper 2",
          type: "Question Paper",
          name: "9701_f14_qp_22.pdf",
          file_url: "https://your-s3-url/path/to/paper12.pdf",
        },
      ],
    },
  },
  2015: {
    // Add similar data structure for each year/session/variant
  },
  // Add more years if needed
};

import React, { useState } from "react";
import { FaFile, FaFileAlt, FaInfoCircle } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

const PaperView = () => {
  const [selectedSession, setSelectedSession] = useState("Jan/Feb");
  const [selectedPaper, setSelectedPaper] = useState(null);
  const data = dummyData["2014"];

  const handleTabClick = (session) => {
    setSelectedPaper(null);
    setSelectedSession(session);
  };

  return (
    <div className="">
      <div className="flex space-x-4">
        {Object.keys(data).map((session) => (
          <button
            key={session}
            onClick={() => handleTabClick(session)}
            className={`px-5  text-black rounded rounded-b-none text-xl py-3 ${
              selectedSession === session ? "bg-yearBg " : ""
            }`}
          >
            {session}
          </button>
        ))}
      </div>

      {/* Variants Display */}
      <div className="bg-yearBg rounded-2xl p-5 rounded-tl-none">
        {!selectedPaper ? (
          <h1 className="text-[16px] text-center py-8">Select a Paper</h1>
        ) : (
          <div className="flex lg:flex-row flex-col lg:items-start items-center justify-between mb-6">
            <div className="flex-1  pt-3">
              <span className="text-sm">Cambridge O Level: Chemistry</span>
              <h1 className="text-[26px] font-medium">
                2019: May/June Variant 1 Paper 1
              </h1>
              <button className=" mt-4 py-3 px-7 border">Solve</button>
            </div>
            <div className="flex-1 flex md:flex-row flex-col  justify-end  gap-7">
              <div>
                <div className="flex flex-col items-center space-y-3 ">
                  <button className="w-fit px-3.5 py-2 rounded-xl text-white bg-textColor4">
                    View Question paper
                  </button>
                  <button className="w-fit px-3.5 py-2 rounded-xl text-white bg-textColor4">
                    View Markschemes
                  </button>
                  <div className="flex items-center space-x-2 w-full justify-center">
                    <button className="w-fit px-3.5 py-2 rounded-xl text-black bg-white">
                      View Both
                    </button>
                    <FaFileAlt className="text-gray-800" size={24} />
                    <FaFileAlt
                      className="text-gray-800 transform -scale-x-100"
                      size={24}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col items-center w-52 ">
                  <div className="flex items-center space-x-2 mb-2 text-gray-800">
                    <span className="font-medium text-[16px] italic">
                      Previous Marks
                    </span>
                    <FaInfoCircle className="text-gray-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="  py-1.5 px-3 bg-yearBg2 text-black rounded-xl">
                      <span>73 (A)</span>
                    </div>
                    <div className="   py-1.5 px-3 bg-yearBg2 text-black rounded-xl">
                      <span>64 (B)</span>
                    </div>
                    <div className="  py-1.5 px-3 bg-yearBg2 text-black rounded-xl">
                      <span>59 (B)</span>
                    </div>
                    <div className="  py-1.5 px-3 bg-yearBg3 text-black rounded-xl">
                      <span>64 (B)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-wrap lg:justify-start justify-center gap-7  ">
          {Object.entries(data[selectedSession]).map(([variant, papers]) => (
            <div key={variant} className="p-4  rounded-xl bg-white  w-[330px]">
              <h2 className="text-[20px] font-medium mb-2">{variant}</h2>
              <div className="flex justify-end mb-2">
                <span className="text-sm">Last Solved</span>
              </div>
              <ul className="space-y-5">
                {papers.map((paper) => (
                  <li
                    onClick={() => setSelectedPaper(paper.paper_id)}
                    key={paper.paper_id}
                    className={`flex items-center justify-between cursor-pointer px-2 py-[6px]  ${
                      selectedPaper === paper.paper_id
                        ? "bg-yearBg  rounded-md"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full flex-center bg-checkColor text-white">
                        <IoMdCheckmark size={15} className="" />
                      </div>

                      <span className="text-[16px]">{paper.paper}</span>
                    </div>
                    {/* <a
                      href={paper.file_url}
                      className="text-blue-500 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a> */}

                    <span className="text-[16px]">76 (A)</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaperView;
