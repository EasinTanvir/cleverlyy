"use client";

// ExamBoardSelection.js
import React, { useState } from "react";
import { FaCheckCircle, FaUniversity } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";

// data.js
export const exams = [
  { id: 1, name: "O-Levels" },
  { id: 2, name: "IGCSE" },
  { id: 3, name: "A-Levels" },
];

export const boards = [
  { id: 1, name: "IGCSE" },
  { id: 2, name: "International A-Levels (IAL)" },
];

const BoardAndExam = () => {
  const [selectedExam, setSelectedExam] = useState(null);
  const [selectedBoard, setSelectedBoard] = useState(null);

  const handleSelectExam = (examId) => {
    setSelectedExam(examId);
  };

  const handleSelectBoard = (boardId) => {
    setSelectedBoard(boardId);
  };

  return (
    <div className="p-6 w-1/2 mx-auto ">
      <div>
        <h2 className="text-black text-3xl  font-bold  uppercase">
          SELECT YOUR <span className="text-textColor">Exam & Board : </span>
        </h2>

        <hr className="border border-black w-full my-6" />
      </div>

      <div className="flex justify-around items-start space-x-8">
        <div className="w-1/2">
          <div className="flex items-center gap-2">
            <FaUniversity size={30} />
            <div>
              <h2 className="font-bold text-xl">Cambridge Assesment</h2>
              <span>International Education</span>
            </div>
          </div>
          <div className="space-y-4 mt-5">
            {exams.map((exam) => (
              <button
                key={exam.id}
                onClick={() => handleSelectExam(exam.id)}
                className={`flex justify-between border-2 bg-white items-center w-full px-4 py-5  rounded-2xl ${
                  selectedExam === exam?.id
                    ? "border-green-500 "
                    : "border-transparent"
                }`}
              >
                {exam.name}

                <span
                  className={`w-6 h-6 rounded-full ${
                    selectedExam === exam?.id
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 text-white"
                  }   flex-center`}
                >
                  <FiCheck className=" p-0.5" size={24} />
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="w-1/2">
          <h2 className="font-bold mb-4 text-lg">Board</h2>
          <div className="space-y-4 mt-11">
            {boards.map((board) => (
              <button
                key={board.id}
                onClick={() => handleSelectBoard(board.id)}
                className={`flex justify-between items-center w-full px-4  border-2 py-5  rounded-2xl bg-white ${
                  selectedBoard === board?.id
                    ? "border-green-500 "
                    : "border-transparent"
                }`}
              >
                {board.name}

                <span
                  className={`w-6 h-6 rounded-full ${
                    selectedBoard === board?.id
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 text-white"
                  }   flex-center`}
                >
                  <FiCheck className=" p-0.5" size={24} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardAndExam;
