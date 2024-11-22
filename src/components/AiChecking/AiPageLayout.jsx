"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

import { useContextProvider } from "../../../hooks/useContextProvider";

const AiPageLayout = ({ subjectLists }) => {
  const {
    selectedExam,
    setSelectedExam,
    selectedSubject,
    setSelectedSubject,
    selectedBoard,
    setSelectedBoard,
    setUserSelectedSubject,
    setAiSelectedYear,
    setAiSelectedSession,
    setAiSelectedVariant,
    setAiSelectedPaper,
    resourceSelectUnit,
    setResourceSelectUnit,
  } = useContextProvider();
  // Find the selected board and exams based on `selectedBoard`
  const board = subjectLists.find(
    (board) => board.board_id === selectedBoard?.board_id
  );

  const exams = board ? board.exams : [];

  useEffect(() => {
    setAiSelectedYear("");
    setAiSelectedSession("");
    setAiSelectedVariant("");
    setAiSelectedPaper("");

    setSelectedExam(null);
    setSelectedSubject(null);
  }, []);

  return (
    <div className="py-6 md:p-8 p-4  bg-dashboardBd">
      <div className="f space-y-10">
        <h1 className="md:text-3xl text-textColor text-lg font-bold">
          AI Checking
        </h1>
        <div className="flex md:flex-row flex-col  gap-4">
          <FiCheckCircle className="text-textColor" size={40} />
          <p className="">
            <span className="font-bold">
              Don&apos;t waste time manually checking your papers.
            </span>{" "}
            Solve and then check using our AI, or directly upload solved papers
            and let our AI technology do the heavy lifting while you focus on
            solving more papers and improving your grade.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-around mt-20 ">
        <div className="flex flex-wrap    gap-4  w-full">
          {exams.length > 0 ? (
            exams.map((exam, index) => (
              <button
                key={index}
                className={`py-2 px-5 rounded-xl ${
                  selectedExam?.exam_id === exam.exam_id
                    ? " bg-textColor text-white"
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
            <div className="flex-center ">Select an exam</div>
          )}
        </div>

        <h3 className="w-full flex-center  font-semibold text-lg">
          Your Subjects
        </h3>
        <div className="w-full flex  gap-2 justify-end">
          {subjectLists?.map((board, index) => (
            <button
              key={index}
              className={`py-2 px-4 rounded-xl ${
                selectedBoard?.board_id === board.board_id
                  ? "bg-textColor text-white "
                  : " bg-examBg text-black "
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
      </div>

      {/* Subjects */}
      {selectedExam ? (
        <>
          <div className="flex flex-wrap gap-x-10 gap-y-14 border-b-[3px] border-borderColor2 py-12 ">
            {selectedExam?.subjects.map((subject) => (
              <button
                key={subject.subject_id}
                className={`py-2 px-4 rounded-lg ${
                  selectedSubject?.subject_id === subject.subject_id
                    ? "bg-textColor text-white "
                    : " bg-examBg text-black "
                }`}
                onClick={() => {
                  setResourceSelectUnit(null);
                  setSelectedSubject({
                    subject_id: subject.subject_id,
                    subject_name: subject.subject_name,
                    units: subject.units,
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

          <hr />
          <div>
            {selectedSubject?.units?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="mt-6 "
              >
                <div className="flex  flex-wrap gap-3 pb-6">
                  {selectedSubject.units.map((unit, index) => (
                    <button
                      key={index}
                      onClick={() => setResourceSelectUnit(unit)}
                      className={`px-6  w-fit py-2    rounded-xl ${
                        resourceSelectUnit?.unit_id === unit?.unit_id
                          ? "bg-textColor text-white"
                          : "bg-examBg"
                      }`}
                    >
                      {unit.unit_name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </>
      ) : selectedBoard ? (
        <div className=" min-h-72 flex-center">Select an exam</div>
      ) : null}

      {!selectedExam && !selectedSubject && (
        <>
          {!selectedSubject && selectedExam && (
            <div className=" min-h-40 flex-center">Select a subjects</div>
          )}
        </>
      )}
    </div>
  );
};

export default AiPageLayout;
