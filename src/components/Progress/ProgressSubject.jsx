"use client";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { MdSuperscript } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import ProgressBar from "./ProgressBar";
import ProgressPieChart from "./ProgressPieChart";
import RevisionNoteTab from "./RevisionNoteTab";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import CircularProgressBar from "./CircularProgressbar";

const tabData = [
  {
    name: "Chapters",
    content: {
      title: "Currently Studying:",
      items: [
        { text: "Calculate Percentage Yield", link: "#" },
        { text: "Recently studied: The periodic table", link: "#" },
      ],
    },
  },
  {
    name: "Topics",
    content: {
      title: "List of Topics:",
      items: [
        { text: "Atomic Structure", link: "#" },
        { text: "Chemical Bonding", link: "#" },
      ],
    },
  },
  {
    name: "SubTopics",
    content: {
      title: "List of Sub-Topics:",
      items: [
        { text: "Molecular Geometry", link: "#" },
        { text: "Hybridization", link: "#" },
      ],
    },
  },
];

const chartData = { complete: 2, incomplete: 6, notStarted: 2 };

const SubjectCard = ({ subject }) => {
  return (
    <div className="py-10 px-4 bg-progressbg rounded-lg">
      <div className="grid xl:grid-cols-4 md:grid-cols-2  gap-y-16 ">
        <div className="  border-black md:border-r-2 pe-8">
          <MdSuperscript size={35} />
          <h1 className="text-[24px]">Physics</h1>
          <div>
            <p className="underline text-sm pb-1">Exam Date:</p>
            <span>4/6/2025 - 7 months remaining</span>
          </div>

          <div className="flex gap-5 justify-between items-center mt-2 ">
            <div className="border-4 rounded-full px-3 py-1 w-full text-[#00a350] border-[#00a350]">
              Good Condition
            </div>
            <FaInfoCircle size={25} className="text-gray-600 " />
          </div>

          <div>
            <div className="bg-boxColor2 p-3.5 rounded-xl mt-3 h-56 ">
              <h3 className="underline text-[16px] ">Suggestions</h3>
              <ul className="list-disc ps-4 space-y-4 mt-4 text-sm">
                <li>Should Start studying Revision Notes</li>
                <li>
                  Then solve chapterwise question paper for each of the studied
                  chapter.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <React.Fragment>
          <div className=" space-y-4 ps-8 border-black md:border-r-2 pe-8 relative">
            <div className="flex justify-between items-center">
              <h1 className="text-[22px]">Revision Notes</h1>
              <MdKeyboardDoubleArrowRight size={25} />
            </div>
            <ProgressBar progress={70} />
            <h1 className="text-lg">Chapter 1: Principles of Chemistry</h1>

            <div className=" w-[35%] mx-auto pt-4">
              <button className="absolute left-6 -top-5 bottom-0 my-auto">
                <MdKeyboardArrowLeft size={38} className="text-iconColor4" />
              </button>

              <ProgressPieChart chartData={chartData} />

              <button className="absolute right-6 -top-5 bottom-0 my-auto">
                <MdKeyboardArrowRight className="text-iconColor4" size={38} />
              </button>
            </div>

            <div className=" text-sm">
              <h1 className="pt-5">Currently Studying:</h1>
              <ul className="list-disc ps-8 mt-1">
                <li className="leading-6">
                  Principles of Chemistry &gt; Formulae &gt;{" "}
                  <span className="text-textBlue">
                    Calculate Percentage Yield
                  </span>
                </li>
              </ul>
              <div className="flex items-center gap-2 mt-5">
                <p>
                  Recently Studied:{" "}
                  <span className="text-textBlue underline italic">
                    The periodic table
                  </span>
                </p>{" "}
                <FaInfoCircle size={18} className="text-gray-600 " />
              </div>
            </div>
          </div>
        </React.Fragment>
        <React.Fragment>
          <div className=" space-y-4 ps-8 border-black md:border-r-2 pe-8 relative">
            <div className="flex justify-between items-center">
              <h1 className="text-[22px]">Revision Notes</h1>
              <MdKeyboardDoubleArrowRight size={25} />
            </div>
            <ProgressBar progress={70} />
            <h1 className="text-lg">Chapter 1: Principles of Chemistry</h1>

            <div className=" w-[70%] mx-auto mt-2 pt-5">
              <button className="absolute left-6 -top-4 bottom-0 my-auto">
                <MdKeyboardArrowLeft size={38} className="text-iconColor4" />
              </button>

              <button className="absolute right-6 -top-4 bottom-0 my-auto">
                <MdKeyboardArrowRight className="text-iconColor4" size={38} />
              </button>
              <CircularProgressBar progress={70} />
            </div>

            <div className=" text-sm">
              <h1 className="pt-6">Currently Studying:</h1>
              <ul className="list-disc ps-8 mt-1">
                <li className="leading-6">
                  Principles of Chemistry &gt; Formulae &gt;{" "}
                  <span className="text-textBlue">
                    Calculate Percentage Yield
                  </span>
                </li>
              </ul>

              <div className="flex items-center gap-2 mt-5">
                <p>
                  Last solved:{" "}
                  <span className="text-textBlue underline italic">
                    The periodic table
                  </span>
                </p>{" "}
                <FaInfoCircle size={18} className="text-gray-600 " />
              </div>
            </div>
          </div>
        </React.Fragment>
        <React.Fragment>
          <div className=" space-y-4 ps-8 relative">
            <div className="flex justify-between items-center">
              <h1 className="text-[22px]">Revision Notes</h1>
              <MdKeyboardDoubleArrowRight size={25} />
            </div>
            <ProgressBar progress={70} />

            <div className="flex items-center gap-3 flex-wrap pt-1">
              <button
                className={`px-6 py-0.5 rounded-md bg-sideBarColor text-white`}
              >
                Total
              </button>
              <button className={`px-3 py-0.5 rounded-md bg-white `}>
                Paper 1
              </button>
              <button className={`px-3 py-0.5 rounded-md bg-white `}>
                Paper 2
              </button>
            </div>

            <div className=" w-[70%] mx-auto pt-4 ">
              <button className="absolute left-6 -top-4 bottom-0 my-auto">
                <MdKeyboardArrowLeft size={38} className="text-iconColor4" />
              </button>

              <button className="absolute right-0 -top-4 bottom-0 my-auto">
                <MdKeyboardArrowRight className="text-iconColor4" size={38} />
              </button>
              <CircularProgressBar progress={70} />
            </div>

            <div className=" text-sm">
              <h1 className="text-center">
                Target set: 2024 - 2014{" "}
                <span className="text-textBlue">(edit)</span>
              </h1>

              <div className="bg-white rounded-2xl p-3 mt-1 ">
                <h3>Highest Marks:</h3>
                <h3>Average Marks:</h3>
                <h3>Lowest Marks:</h3>
              </div>

              <h3 className="mt-2.5">
                Last solved:{" "}
                <span className="text-textBlue">
                  2016 May Variant 2 Paper 2
                </span>
              </h3>
            </div>
          </div>
        </React.Fragment>
      </div>
    </div>
  );
};

export default SubjectCard;
