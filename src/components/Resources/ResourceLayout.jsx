"use client";
import React from "react";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

import { useContextProvider } from "../../../hooks/useContextProvider";

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
  const {
    selectedExam,
    setSelectedExam,
    selectedSubject,
    setSelectedSubject,
    selectedBoard,
    setSelectedBoard,
  } = useContextProvider();
  // Find the selected board and exams based on `selectedBoard`
  const board = boardsData.find((board) => board.name === selectedBoard);
  const exams = board ? board.exams : [];

  return (
    <div className="py-6 p-8  bg-dashboardBd">
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
          <div className="flex md:flex-row flex-col md:justify-between gap-5  items-center">
            <button className="bg-examBg px-3 py-1.5 text-sm rounded-lg max-w-56">
              Syllabus - 5070
            </button>
            <h1 className="text-[22px] font-bold">
              {selectedSubject} {selectedExam}
            </h1>
            <div>
              <button className="px-3 py-2 text-sm rounded-lg  bg-examBg max-w-56">
                Days left till exam: 7 months{" "}
              </button>
            </div>
          </div>
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
