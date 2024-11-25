"use client";
import React, { useState } from "react";
import { FaFileAlt, FaInfoCircle } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

import SubjectTitle from "../SubjectInfo/SubjectTitle";
import { useContextProvider } from "../../../../hooks/useContextProvider";

const PaperView = ({ yearWisePapers, subjectId }) => {
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [selectedPaperView, setSelectedPaperView] = useState(null);
  const [selectedPaperVariant, setSelectedPaperVariant] = useState(null);

  const { selectedYear, selectedSession, setSelectedSession } =
    useContextProvider();

  const data = yearWisePapers[Number(selectedYear)];

  const handleTabClick = (session) => {
    setSelectedPaper(null);
    setSelectedSession(session);
  };

  if (!data || !selectedYear) return;

  return (
    <div className="">
      <div className="flex sm:flex-row flex-col sm:space-x-4">
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
          <h1 className="text-[18px] text-center py-8">Select a Paper</h1>
        ) : (
          <div className="flex lg:flex-row flex-col lg:items-start items-center justify-between mb-6">
            <div className="flex-1  pt-3">
              <SubjectTitle variant="inline" />
              <h1 className="text-[26px] font-medium">
                {selectedYear}: {selectedSession} {selectedPaperVariant}{" "}
                {selectedPaperView?.paper}
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
                    <span className="font-medium text-[18px] italic">
                      Previous Marks
                    </span>
                    <FaInfoCircle className="text-gray-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[18px]">
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

        {selectedSession && data && (
          <div className="flex flex-wrap lg:justify-start justify-center gap-7  ">
            {Object.entries(data[selectedSession]).map(([variant, papers]) => (
              <div
                key={variant}
                className="p-4  rounded-xl bg-white  w-[330px]"
              >
                <h2 className="text-[22px] font-medium mb-2">{variant}</h2>
                <div className="flex justify-end mb-2">
                  <span className="text-lg">Last Solved</span>
                </div>
                <ul className="space-y-5">
                  {papers.map((paper) => (
                    <li
                      onClick={() => {
                        setSelectedPaper(paper.paper_id);
                        setSelectedPaperView(paper);
                        setSelectedPaperVariant(variant);
                      }}
                      key={paper.paper_id}
                      className={`flex items-center justify-between cursor-pointer px-2 py-[6px]  ${
                        selectedPaper === paper.paper_id
                          ? "bg-yearBg  rounded-md"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div>
                          {paper.solved ? (
                            <div className="w-5 h-5 rounded-full flex-center bg-checkColor text-white">
                              <IoMdCheckmark size={14} className="" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full flex-center border border-textColor2 text-textColor2">
                              <IoMdCheckmark
                                className="text-textColor2"
                                size={14}
                              />
                            </div>
                          )}
                        </div>
                        <span className="text-[18px]">{paper.paper}</span>
                      </div>
                      {/* <a
                      href={paper.file_url}
                      className="text-blue-500 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a> */}

                      <span className="text-[18px]">{paper.score} (A)</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaperView;
