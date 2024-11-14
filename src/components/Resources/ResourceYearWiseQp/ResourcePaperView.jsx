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
          paper: "Paper 450",
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

import Link from "next/link";
import React, { useState } from "react";
import { FaFile, FaFileAlt, FaInfoCircle } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { IoScan } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const ResourcePaperView = ({ selectedPaper, setSelectedPaper }) => {
  const [selectedSession, setSelectedSession] = useState("Jan/Feb");

  const data = dummyData["2014"];

  const handleTabClick = (session) => {
    setSelectedPaper(null);
    setSelectedSession(session);
  };

  return (
    <div>
      <div className=" flex flex-row min-h-80">
        <div className="flex flex-col  ">
          {Object.keys(data).map((session) => (
            <div
              className={`  h-full flex-center rounded-md rounded-tr-none rounded-br-none  ${
                selectedSession === session ? "bg-yearBg " : " "
              }`}
              key={session}
            >
              <button
                onClick={() => handleTabClick(session)}
                className={` transform rotate-90  `}
              >
                {session}
              </button>
            </div>
          ))}
        </div>

        {/* Variants Display */}
        <div className="bg-yearBg rounded-2xl p-5 rounded-l-none rounded-br-none min-h-80  xl:max-w-[600px] xl:min-w-[600px] md:max-w-[400px] md:min-w-[400px] max-w-[350px] ">
          <div className="flex flex-col gap-7  ">
            {Object.entries(data[selectedSession]).map(([variant, papers]) => (
              <div
                key={variant}
                className="px-4 py-5 flex flex-row items-center gap-8  rounded-xl bg-white   w-full "
              >
                <h2 className="text-[18px] font-medium min-w-fit ">
                  {variant}
                </h2>

                <ul className="flex  items-center gap-4 overflow-x-auto overflow-y-hidden custom-scrollbar">
                  {papers.map((paper) => (
                    <li
                      onClick={() => setSelectedPaper(paper.paper_id)}
                      key={paper.paper_id}
                      className={`cursor-pointer min-w-fit px-4 py-1 rounded-lg ${
                        selectedPaper === paper.paper_id
                          ? "bg-selectExamBg  "
                          : ""
                      } `}
                    >
                      {paper.paper}

                      {/* <a
                      href={paper.file_url}
                      className="text-blue-500 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a> */}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-yearBg ml-[77px] rounded-b-xl flex justify-between items-center xl:max-w-[600px] xl:min-w-[600px] md:max-w-[400px] md:min-w-[400px] max-w-[350px] p-5">
        <IoScan size={28} />
        <Link href="/subjects/yearwise-question-solve">
          <button className="bg-boxColor px-3 text-sm py-1.5 rounded-md">
            View All
          </button>
        </Link>
        <MdOutlineKeyboardArrowDown size={28} className="text-iconColor" />
      </div>
    </div>
  );
};

export default ResourcePaperView;
