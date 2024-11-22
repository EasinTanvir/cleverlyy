import React, { useState } from "react";
import { FaBusinessTime, FaChevronDown } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { useContextProvider } from "../../../hooks/useContextProvider";

import { toast } from "react-hot-toast"; // Import react-hot-toast

export default function SubjectInfo() {
  const {
    selectedChapters,
    setSelectedChapters,
    selectedPaper,
    setSelectedPaper,
    selectedInfoExam,
    selectedSubjects,
    setSelectedSubjects,
    currentExamIndex,
    setCurrentExamIndex,
    selectedInfoBoard,
    userAccessSubject,
    selectedUnits,
    setSelectedUnits,
  } = useContextProvider();

  const currentExam = selectedInfoExam[currentExamIndex];
  const currentSubjects = currentExam?.subjects || [];

  const handleSubjectToggle = (subject) => {
    const hasUnits = subject.units?.length > 0;

    if (selectedSubjects.some((s) => s.subject_id === subject.subject_id)) {
      // Deselect subject
      setSelectedSubjects((prev) =>
        prev.filter((s) => s.subject_id !== subject.subject_id)
      );
      setSelectedUnits((prev) =>
        prev.filter((unit) => unit.subject_id !== subject.subject_id)
      ); // Remove related units
    } else {
      // Check if the user needs to select a unit first
      if (
        selectedSubjects.some(
          (s) =>
            s.units?.length > 0 &&
            !selectedUnits.some((unit) => unit.subject_id === s.subject_id)
        )
      ) {
        toast.error(
          "Please select at least one unit for the selected subject.",
          { position: "top-center" }
        );
        return;
      }

      // Select subject
      setSelectedSubjects((prev) => [...prev, subject]);
    }
  };

  const handleUnitToggle = (unit, subject) => {
    setSelectedUnits((prev) => {
      if (prev.some((u) => u.unit_id === unit.unit_id)) {
        // Deselect unit
        return prev.filter((u) => u.unit_id !== unit.unit_id);
      } else {
        // Select unit
        return [...prev, { ...unit, subject_id: subject.subject_id }];
      }
    });
  };

  const handleRemoveChapter = (chapter) => {
    setSelectedChapters((prev) => prev.filter((c) => c !== chapter));
  };

  const exisitngSubject = userAccessSubject.flatMap((board) =>
    board.exams.flatMap((exam) =>
      exam.subjects.map((subject) => ({
        board_name: board.board_name,
        exam_name: exam.exam_name,
        subject_name: subject.subject_name,
      }))
    )
  );

  return (
    <div className="p-6 xl:w-[78%] md:w-[88%] w-full mx-auto">
      {/* Selected Chapters */}
      {selectedChapters.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-24">
          {selectedChapters.map((chapter, index) => (
            <div
              key={index}
              className="bg-white flex items-center gap-2 py-2 px-5 rounded-xl"
            >
              <span>{chapter}</span>
              <MdClose
                className="cursor-pointer"
                onClick={() => handleRemoveChapter(chapter)}
              />
            </div>
          ))}
        </div>
      )}

      {/* Subject Selector */}
      <div className="flex md:flex-row flex-col justify-between items-center">
        <h2 className="text-black md:text-3xl text-xl font-bold mb-4 uppercase">
          SELECT Your <span className="text-textColor">Subject</span>
        </h2>

        <div className="relative min-w-60">
          <div className="w-full flex gap-3 items-center py-2 px-3 text-xl border-t-2 border-black pt-3 text-black bg-transparent appearance-none focus:outline-none">
            <span>
              {selectedInfoBoard[currentExamIndex]} - {currentExam?.exam_name}
            </span>
            <FaChevronDown className="transform -translate-y-1/2 text-black pointer-events-none mt-5" />
          </div>
        </div>
      </div>

      <hr className="border border-black w-full my-2" />

      {/* Subjects */}
      <div className="grid lg:grid-cols-2 gap-4 mt-10 lg:w-[90%] mx-auto">
        {currentSubjects?.map((subject) => (
          <div key={subject.subject_id}>
            {/* Subject Card */}
            <div
              className={`flex items-center p-4 border-[3px] py-5 rounded-2xl bg-white cursor-pointer ${
                selectedSubjects.some(
                  (s) => s.subject_id === subject.subject_id
                )
                  ? selectedUnits.some(
                      (u) => u.subject_id === subject.subject_id
                    ) || !subject.units?.length
                    ? "border-green-600"
                    : "border-red-700"
                  : "border-transparent"
              }`}
              onClick={() => handleSubjectToggle(subject)}
            >
              <span className="text-xl mr-2">
                <FaBusinessTime />
              </span>
              <span className="flex-grow">{subject.subject_name}</span>
              <span
                className={`w-6 h-6 rounded-full ${
                  selectedSubjects.some(
                    (s) => s.subject_id === subject.subject_id
                  )
                    ? selectedUnits.some(
                        (u) => u.subject_id === subject.subject_id
                      ) || !subject.units?.length
                      ? "bg-green-600 text-white"
                      : "bg-red-700 text-white" // Change to red when border is red
                    : "bg-gray-200 text-white"
                } flex-center`}
              >
                <FiCheck className="p-0.5" size={24} />
              </span>
            </div>

            {/* Units for Selected Subject */}
            {subject?.units?.length > 0 &&
              selectedSubjects.some(
                (s) => s.subject_id === subject.subject_id
              ) && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="mt-4  flex"
                >
                  <div className="flex flex-wrap gap-3">
                    {subject.units.map((unit, index) => (
                      <button
                        key={index}
                        onClick={() => handleUnitToggle(unit, subject)}
                        className={`px-6 py-2 border-[3px]  bg-white rounded-xl ${
                          selectedUnits.some((u) => u.unit_id === unit.unit_id)
                            ? "border-green-600"
                            : "border-transparent"
                        }`}
                      >
                        {unit.unit_name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
          </div>
        ))}
      </div>

      <YourSubject yourSubjectLists={exisitngSubject} />
    </div>
  );
}

const YourSubject = ({ yourSubjectLists }) => {
  return (
    <div className="mt-24">
      <div className="">
        <h2 className="text-black md:text-3xl text-xl font-bold mb-4 uppercase">
          YOUR <span className="text-textColor">Subjects</span>
        </h2>
      </div>
      <hr className="border border-black w-full my-2" />
      {/* Subjects */}
      <div className="grid lg:grid-cols-2 gap-4 mt-10 lg:w-[90%] mx-auto">
        {yourSubjectLists?.map((subject, index) => (
          <div key={index}>
            {/* Subject Card */}
            <div
              className={`flex items-center p-4  py-5 rounded-2xl bg-white `}
            >
              <span className="text-xl mr-2">
                <FaBusinessTime />
              </span>
              <span className="flex-grow">
                {subject.board_name} ● {subject.exam_name} ●{" "}
                {subject.subject_name}
              </span>
              <span
                className={`w-6 h-6 rounded-full bg-green-600 text-white flex-center`}
              >
                <FiCheck className="p-0.5" size={24} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
