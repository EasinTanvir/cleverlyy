import React, { useState } from "react";
import { FaBusinessTime, FaDatabase, FaChevronDown } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { useContextProvider } from "../../../hooks/useContextProvider";

const subjectsData = [
  {
    id: 1,
    name: "Commerce",
    icon: <FaBusinessTime />,
    papers: [
      { name: "Paper 1", chapters: ["Chapter 1", "Chapter 2", "Chapter 3"] },
      { name: "Paper 2", chapters: ["Chapter A", "Chapter B"] },
    ],
  },
  {
    id: 2,
    name: "Computer Science",
    icon: <FaDatabase />,
    papers: [
      { name: "Paper A", chapters: ["Module 1", "Module 2", "Module 3"] },
      { name: "Paper B", chapters: ["Module X", "Module Y"] },
    ],
  },
  // Add more subjects as necessary
];

export default function SubjectInfo() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const {
    selectedChapters,
    setSelectedChapters,
    selectedPaper,
    setSelectedPaper,
    selectedInfoExam,
  } = useContextProvider();

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setSelectedPaper(null); // Reset paper selection when a new subject is chosen
    setSelectedChapters([]); // Clear chapters on new subject selection
  };

  const handlePaperSelect = (paper) => {
    setSelectedPaper(paper);
    setSelectedChapters(paper.chapters); // Display chapters of selected paper
  };

  const handleRemoveChapter = (chapter) => {
    setSelectedChapters((prev) => prev.filter((c) => c !== chapter));
  };

  return (
    <div className="p-6 xl:w-[78%] md:w-[88%] w-full  mx-auto">
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
        {selectedInfoExam?.subjects.map((subject) => (
          <div key={subject.subject_id}>
            {/* Subject Card */}
            <div
              className={`flex items-center p-4 border-[3px] py-5 rounded-2xl bg-white cursor-pointer ${
                selectedSubject?.subject_id === subject.subject_id
                  ? "border-green-600"
                  : "border-transparent"
              }`}
              onClick={() => handleSubjectSelect(subject)}
            >
              <span className="text-xl mr-2">
                <FaBusinessTime />
              </span>
              <span className="flex-grow">{subject.subject_name}</span>
              <span
                className={`w-6 h-6 rounded-full ${
                  selectedSubject?.subject_id === subject.subject_id
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-white"
                } flex-center`}
              >
                <FiCheck className="p-0.5" size={24} />
              </span>
            </div>

            {/* Papers for Selected Subject */}
            {/* {selectedSubject?.id === subject.id && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="mt-4"
              >
                <h3 className="text-lg font-semibold mb-2">
                  Choose your papers
                </h3>
                <div className="flex gap-3">
                  {subject.papers.map((paper, index) => (
                    <button
                      key={index}
                      className={`px-6 py-2 border rounded-xl ${
                        selectedPaper === paper
                          ? "bg-green-500 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                      onClick={() => handlePaperSelect(paper)}
                    >
                      {paper.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
}
