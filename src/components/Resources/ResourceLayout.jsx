"use client";
import React, { useEffect } from "react";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

import { useContextProvider } from "../../../hooks/useContextProvider";

const ResourceLayout = ({ subjectLists }) => {
  const {
    selectedExam,
    setSelectedExam,
    selectedSubject,
    setSelectedSubject,
    selectedBoard,
    setSelectedBoard,
    setUserSelectedSubject,
  } = useContextProvider();
  // Find the selected board and exams based on `selectedBoard`
  const board = subjectLists.find(
    (board) => board.board_id === selectedBoard?.board_id
  );

  const exams = board ? board.exams : [];

  useEffect(() => {
    setSelectedExam(null);
    setSelectedSubject(null);
  }, []);

  return (
    <div className="py-6 md:p-8 p-4  bg-dashboardBd">
      <div className="flex md:flex-row flex-col md:gap-0 gap-8 md:justify-between md:items-end">
        <div className="flex-1 space-y-6">
          <h1 className="md:text-[28px] text-lg font-bold">
            All the Resources You’ll ever Need
          </h1>
          <div className="flex md:flex-row flex-col items-center gap-4">
            <HiOutlineComputerDesktop className="text-textColor" size={70} />
            <p className="leading-8 text-sm">
              Explore a comprehensive collection of study materials designed to
              help you excel in every subject, from revision notes to past
              papers and more.
            </p>
          </div>
        </div>
        <div className="flex-1  flex items-center justify-end  gap-2">
          <button className="bg-yearBg4 rounded-lg px-3.5 text-sm py-1.5 text-white w-fit">
            All Subjects
          </button>
          <button className="w-fit px-3.5 py-1.5  text-sm">Your Subject</button>
        </div>
      </div>

      <hr className="border-black mb-14 mt-7" />

      <div className="flex justify-around ">
        {subjectLists?.map((board, index) => (
          <button
            key={index}
            className={`py-2 px-4 ${
              selectedBoard?.board_id === board.board_id
                ? "border-b-2 border-indigo-600 font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => {
              setSelectedBoard(board);
              setSelectedExam(null);
              setSelectedSubject(null);
            }}
          >
            {board.board_name}
          </button>
        ))}
      </div>

      {/* Exam Tabs */}
      <div className="mt-8">
        <div className="flex flex-wrap gap-4 justify-around space-x-4 border-b border-black pb-10 pt-4 ">
          {exams.length > 0 ? (
            exams.map((exam, index) => (
              <button
                key={index}
                className={`py-2 lg:px-16 px-5 rounded-xl ${
                  selectedExam?.exam_id === exam.exam_id
                    ? " bg-selectExamBg"
                    : "bg-examBg"
                }`}
                onClick={() => {
                  setSelectedExam(exam);
                  setSelectedSubject(null);
                }}
              >
                {exam.exam_name}
              </button>
            ))
          ) : (
            <div className=" min-h-72 flex-center">Select an exam</div>
          )}
        </div>
      </div>

      {/* Subjects */}
      {selectedExam ? (
        <div className="flex flex-wrap gap-x-10 gap-y-14 border-b border-black py-12 ">
          {selectedExam?.subjects.map((subject) => (
            <button
              key={subject.subject_id}
              className={`py-2 px-4 rounded-lg ${
                selectedSubject?.subject_id === subject.subject_id
                  ? " bg-selectExamBg"
                  : "bg-examBg"
              }`}
              onClick={() => {
                setSelectedSubject({
                  subject_id: subject.subject_id,
                  subject_name: subject.subject_name,
                });

                setUserSelectedSubject({
                  subject_name: subject.subject_name,
                  board_name: selectedBoard.board_name || "Cambridge",
                });
              }}
            >
              {subject.subject_name}
            </button>
          ))}
        </div>
      ) : selectedBoard ? (
        <div className=" min-h-72 flex-center">Select an exam</div>
      ) : null}

      {selectedExam && selectedSubject ? (
        <div className="mt-8">
          <div className="flex md:flex-row flex-col md:justify-between gap-5  items-center">
            <button className="bg-examBg px-3 py-1.5 text-sm rounded-lg max-w-56">
              Syllabus - 5070
            </button>
            <h1 className="text-[22px] font-bold">
              {selectedSubject?.subject_name} - {selectedExam?.exam_name}
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
