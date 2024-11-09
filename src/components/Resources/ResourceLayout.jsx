"use client";
import { Divider } from "@mui/material";
import React, { useState } from "react";
import { FaRegFolderOpen } from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { MdFace } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

const boardsData = [
  {
    name: "Cambridge",
    exams: [
      {
        name: "IGCSE",
        subjects: ["Accounting", "Biology", "Chemistry", "Physics"],
      },
      {
        name: "O-Level",
        subjects: ["Mathematics", "Economics", "Literature", "Geography"],
      },
      {
        name: "A-Levels",
        subjects: ["Physics", "Chemistry", "Business", "Economics"],
      },
    ],
  },
  {
    name: "Edexcel",
    exams: [],
  },
];

const ResourceLayout = () => {
  const [selectedBoard, setSelectedBoard] = useState("Cambridge");
  const [selectedExam, setSelectedExam] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Find the selected board and exams based on `selectedBoard`
  const board = boardsData.find((board) => board.name === selectedBoard);
  const exams = board ? board.exams : [];

  return (
    <div className="p-6 ">
      <div className="flex md:flex-row flex-col md:gap-0 gap-8 md:justify-between md:items-end">
        <div className="flex-1 space-y-6">
          <h1 className="text-2xl font-bold">
            All the Resources You’ll ever Need
          </h1>
          <div className="flex items-center gap-4">
            <HiOutlineComputerDesktop size={70} />
            <p className="leading-8 text-sm">
              Explore a comprehensive collection of study materials designed to
              help you excel in every subject, from revision notes to past
              papers and more.
            </p>
          </div>
        </div>
        <div className="flex-1  flex items-end flex-col gap-2">
          <button className="bg-yearBg4 rounded-lg px-3.5 text-sm py-1 text-white w-fit">
            All Subjects
          </button>
          <button className="w-fit px-3.5 py-1  text-sm">Your Subject</button>
        </div>
      </div>

      <hr className="border-black mb-14 mt-7" />

      <div className="flex justify-around ">
        {boardsData.map((board) => (
          <button
            key={board.name}
            className={`py-2 px-4 ${
              selectedBoard === board.name
                ? "border-b-2 border-indigo-600 font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => {
              setSelectedBoard(board.name);
              setSelectedExam(null); // Reset exam and subject when board changes
              setSelectedSubject(null);
            }}
          >
            {board.name}
          </button>
        ))}
      </div>

      {/* Exam Tabs */}
      <div className="mt-8">
        {selectedBoard === "Edexcel" ? (
          <div className=" min-h-72 flex-center">Coming Soon</div>
        ) : (
          <div className="flex justify-around space-x-4 border-b border-black pb-10 pt-4 ">
            {exams.length > 0 ? (
              exams.map((exam) => (
                <button
                  key={exam.name}
                  className={`py-2 lg:px-16 px-5 rounded-xl ${
                    selectedExam === exam.name
                      ? " bg-selectExamBg"
                      : "bg-examBg"
                  }`}
                  onClick={() => {
                    setSelectedExam(exam.name);
                    setSelectedSubject(null); // Reset subject when exam changes
                  }}
                >
                  {exam.name}
                </button>
              ))
            ) : (
              <div className=" min-h-72 flex-center">Select an exam</div>
            )}
          </div>
        )}
      </div>

      {/* Subjects */}
      {selectedExam ? (
        <div className="flex flex-wrap gap-x-10 gap-y-14 border-b border-black py-12 ">
          {exams
            .find((exam) => exam.name === selectedExam)
            ?.subjects.map((subject) => (
              <button
                key={subject}
                className={`py-2 px-4 rounded-lg ${
                  selectedSubject === subject ? " bg-selectExamBg" : "bg-examBg"
                }`}
                onClick={() => setSelectedSubject(subject)}
              >
                {subject}
              </button>
            ))}
        </div>
      ) : selectedBoard === "Cambridge" ? (
        <div className=" min-h-72 flex-center">Select an exam</div>
      ) : null}

      {selectedExam && selectedSubject ? (
        <div className="mt-8">
          <div className="flex justify-between">
            <button className="bg-examBg px-3 py-1 text-sm">
              Syllabus - 5070
            </button>
            <h1 className="text-[22px] font-bold">
              {selectedSubject} {selectedExam}
            </h1>
            <div></div>
          </div>

          <React.Fragment>
            <div>
              <div className="flex-center mt-16">
                <div className="xl:w-[70%]  flex lg:flex-row flex-col gap-6">
                  <div className=" flex-1 space-y-6">
                    <div className="">
                      <ChapterWiseRevisioncard title="Chapterwise Question Paper" />
                    </div>
                    <div className="">
                      <ChapterWiseRevisioncard title="Revision Notes" />
                    </div>
                  </div>
                  <div className="flex-1 ">
                    <YearWisecard title="Revision Notes" />
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        </div>
      ) : (
        <>
          {!selectedSubject && selectedExam && (
            <div className=" min-h-72 flex-center">Select a subjects</div>
          )}
        </>
      )}
    </div>
  );
};

export default ResourceLayout;

const ChapterWiseRevisioncard = ({ title }) => {
  return (
    <div className="px-6 py-7 border border-borderColor2 rounded-2xl">
      <h1 className="title">{title}</h1>
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-[13px] mt-2">
          <div
            className="bg-purple-500 h-[13px] rounded-full relative"
            style={{ width: "50%" }}
          >
            <span className="text-white text-[10px] absolute right-2  top-0  ">
              50%
            </span>
          </div>
        </div>

        <div className="flex justify-between text-xs mt-1">
          <span>Start Now</span>
          <span>0/84</span>
        </div>
      </div>
    </div>
  );
};

const YearWisecard = ({ title }) => {
  return (
    <div className="p-6 border border-borderColor2 rounded-2xl min-h-full max-h-full ">
      <h1 className="title">{title}</h1>
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-[13px] mt-2">
          <div
            className="bg-purple-500 h-[13px] rounded-full relative"
            style={{ width: "50%" }}
          >
            <span className="text-white text-[10px] absolute right-2  top-0  ">
              50%
            </span>
          </div>
        </div>

        <div className="flex justify-between text-xs mt-1">
          <span>Start Now</span>
          <span>0/84</span>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <MdFace />
        <p className="text-[13px]">Digitally Solvable Pdf with AI Checking</p>
      </div>

      <Dropdown />
    </div>
  );
};

const Dropdown = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSession, setSelectedSession] = useState("");

  const years = ["2024", "2023", "2022", "2021", "2020"];
  const sessions = ["First", "Second", "Third"];

  return (
    <div className="flex  flex-col gap-4 mt-5">
      {/* Year Dropdown */}
      <div className="relative w-40">
        <select
          className="w-full px-4 py-1  bg-white border border-borderColor2 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="" disabled>
            Select Year
          </option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
      </div>

      {/* Session Dropdown */}
      <div className="relative w-40">
        <select
          className="w-full px-4 py-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={selectedSession}
          onChange={(e) => setSelectedSession(e.target.value)}
        >
          <option value="" disabled>
            Select Session
          </option>
          {sessions.map((session) => (
            <option key={session} value={session}>
              {session}
            </option>
          ))}
        </select>
        <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );
};
