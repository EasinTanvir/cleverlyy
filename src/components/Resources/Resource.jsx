"use client";
import React from "react";
import Link from "next/link";
import { MdFace } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";

import { useContextProvider } from "../../../hooks/useContextProvider";
import { Dropdown } from "./DropDown";

const Resource = () => {
  const { selectedExam, setSelectedExam, selectedSubject, setSelectedSubject } =
    useContextProvider();

  if (!selectedExam || !selectedSubject) return;

  return (
    <div>
      <div className="mt-8  ">
        <React.Fragment>
          <div>
            <div className="flex-center mt-16">
              <div className="xl:w-[70%]  flex lg:flex-row flex-col gap-6">
                <div className=" flex-1 space-y-6">
                  <div className="">
                    <ChapterWiseRevisioncard
                      title="Chapterwise Question Paper"
                      link="/resources"
                    />
                  </div>
                  <div className="">
                    <ChapterWiseRevisioncard
                      title="Chapterwise Revision Notes"
                      link="/subjects/chapterwise-revision-notes"
                    />
                  </div>
                </div>
                <div className="flex-1 ">
                  <YearWisecard
                    title="Yearwise Question Paper"
                    link="/subjects/yearwise-question-solve"
                  />
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    </div>
  );
};

export default Resource;

const ChapterWiseRevisioncard = ({ title, link }) => {
  return (
    <Link href={link}>
      <div className="px-6 py-7 border border-borderColor2 rounded-2xl">
        <h1 className="title">{title}</h1>
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-[14px] mt-2">
            <div
              className="bg-purple-500 h-[14px] rounded-full relative"
              style={{ width: "50%" }}
            >
              <span className="text-white text-[10px] absolute right-2  top-0  ">
                50%
              </span>
            </div>
          </div>

          <div className="flex justify-between text-xs mt-2">
            <span>Start Now</span>
            <span>0/84</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const YearWisecard = ({ title, link }) => {
  return (
    <div className="p-6 border border-borderColor2 rounded-2xl min-h-full max-h-full  relative">
      <h1 className="title">{title}</h1>
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-[14px] mt-2">
          <div
            className="bg-purple-500 h-[14px] rounded-full relative"
            style={{ width: "50%" }}
          >
            <span className="text-white text-[10px] absolute right-2  top-0  ">
              50%
            </span>
          </div>
        </div>

        <div className="flex justify-between text-xs mt-2">
          <span>Start Now</span>
          <span>0/84</span>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <MdFace />
        <p className="text-[15px]">Digitally Solvable Pdf with AI Checking</p>
      </div>

      <Dropdown />

      <Link href={link}>
        <button className="absolute right-3.5 bottom-3.5 w-6 h-6 rounded-full bg-black flex-center">
          <FiArrowRight size={16} className="text-white" />
        </button>
      </Link>
    </div>
  );
};
