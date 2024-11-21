import React, { useState } from "react";
import { FaBusinessTime, FaChevronDown } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { useContextProvider } from "../../../hooks/useContextProvider";

export default function SubjectInfo() {
  const {
    selectedChapters,
    setSelectedChapters,
    selectedPaper,
    setSelectedPaper,
    selectedInfoExam,
    selectedSubjects,
    setSelectedSubjects,
  } = useContextProvider();

  const allSubjects = selectedInfoExam.flatMap((item) => item.subjects);

  const handleSubjectToggle = (subject) => {
    if (selectedSubjects.some((s) => s.subject_id === subject.subject_id)) {
      // Deselect subject
      setSelectedSubjects((prev) =>
        prev.filter((s) => s.subject_id !== subject.subject_id)
      );
    } else {
      // Select subject
      setSelectedSubjects((prev) => [...prev, subject]);
    }
  };

  const handleRemoveChapter = (chapter) => {
    setSelectedChapters((prev) => prev.filter((c) => c !== chapter));
  };

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
          SELECT YOUR <span className="text-textColor">Subjects</span>
        </h2>

        <div className="relative w-60">
          <select className="w-full py-2 px-3 text-xl border-t-2 border-black pt-3 text-black bg-transparent appearance-none focus:outline-none">
            <option>Edexcel O-Levels</option>
          </select>
          <FaChevronDown className="absolute right-3 top-7 transform -translate-y-1/2 text-black pointer-events-none" />
        </div>
      </div>

      <hr className="border border-black w-full my-2" />

      {/* Subjects */}
      <div className="grid lg:grid-cols-2 gap-4 mt-10 lg:w-[90%] mx-auto">
        {allSubjects?.map((subject) => (
          <div key={subject.subject_id}>
            {/* Subject Card */}
            <div
              className={`flex items-center p-4 border-[3px] py-5 rounded-2xl bg-white cursor-pointer ${
                selectedSubjects.some(
                  (s) => s.subject_id === subject.subject_id
                )
                  ? "border-green-600"
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
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-white"
                } flex-center`}
              >
                <FiCheck className="p-0.5" size={24} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
