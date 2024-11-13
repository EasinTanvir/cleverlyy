"use client";

// ExamBoardSelection.js
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

// data.js
export const exams = [
  { id: 1, name: "O-Levels" },
  { id: 2, name: "IGCSE" },
  { id: 3, name: "A-Levels" },
];

export const boards = [
  { id: 1, name: "Cambridge Assessment International Education" },
  { id: 2, name: "Pearson Edexcel" },
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
    <div className="p-6 ">
      <div>
        <h2 className="text-black text-3xl  font-bold  uppercase">
          SELECT YOUR <span className="text-textColor">Exam & Board : </span>
        </h2>

        <hr className="border border-black w-full my-6" />
      </div>

      <div className="flex justify-around items-start space-x-8">
        <div className="w-1/2">
          <h2 className="font-bold mb-4 text-lg">Exam</h2>
          <div className="space-y-4">
            {exams.map((exam) => (
              <button
                key={exam.id}
                onClick={() => handleSelectExam(exam.id)}
                className={`flex justify-between items-center w-full px-4 py-3 border rounded-md ${
                  selectedExam === exam.id
                    ? "border-green-500 text-green-700 bg-green-100"
                    : "border-gray-200 bg-gray-100"
                }`}
              >
                {exam.name}
                {selectedExam === exam.id && (
                  <FaCheckCircle className="text-green-500" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="w-1/2">
          <h2 className="font-bold mb-4 text-lg">Board</h2>
          <div className="space-y-4">
            {boards.map((board) => (
              <button
                key={board.id}
                onClick={() => handleSelectBoard(board.id)}
                className={`flex justify-between items-center w-full px-4 py-3 border rounded-md ${
                  selectedBoard === board.id
                    ? "border-green-500 text-green-700 bg-green-100"
                    : "border-gray-200 bg-gray-100"
                }`}
              >
                {board.name}
                {selectedBoard === board.id && (
                  <FaCheckCircle className="text-green-500" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardAndExam;
