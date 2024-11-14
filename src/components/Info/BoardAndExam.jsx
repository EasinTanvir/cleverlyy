import React from "react";
import { FaUniversity } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";

import { useContextProvider } from "../../../hooks/useContextProvider";

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
  const {
    selectedInfoExam,
    setSelectedInfoExam,
    selectedInfoBoard,
    setSelectedInfoBoard,
  } = useContextProvider();

  const handleSelectExam = (examId) => {
    setSelectedInfoExam(examId);
  };

  const handleSelectBoard = (boardId) => {
    setSelectedInfoBoard(boardId);
  };

  return (
    <div className="p-6 xl:w-[78%] md:w-[88%] w-full  mx-auto">
      <div>
        <h2 className="text-black text-3xl  font-bold  uppercase">
          SELECT YOUR <span className="text-textColor">Exam & Board : </span>
        </h2>

        <hr className="border border-black w-full my-6" />
      </div>

      <div className="flex justify-around items-start gap-20 lg:w-[80%] w-full mx-auto  pt-6">
        <div className="w-1/2">
          <div className="flex items-center gap-2">
            <FaUniversity size={30} />
            <div>
              <h2 className="font-bold text-2xl">Cambridge Assesment</h2>
              <span>International Education</span>
            </div>
          </div>
          <div className="space-y-4 mt-5">
            {exams.map((exam) => (
              <button
                key={exam.id}
                onClick={() => handleSelectExam(exam.id)}
                className={`flex justify-between border-[3px] bg-white items-center w-full px-4 py-5  rounded-2xl ${
                  selectedInfoExam === exam?.id
                    ? "border-green-600 "
                    : "border-transparent"
                }`}
              >
                {exam.name}

                <span
                  className={`w-6 h-6 rounded-full ${
                    selectedInfoExam === exam?.id
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
          <h2 className="font-bold mb-4 text-2xl text-center">
            Pearson | Edexcel
          </h2>
          <div className="space-y-4 mt-11">
            {boards.map((board) => (
              <button
                key={board.id}
                onClick={() => handleSelectBoard(board.id)}
                className={`flex justify-between items-center w-full px-4  border-[3px] py-5  rounded-2xl bg-white ${
                  selectedInfoBoard === board?.id
                    ? "border-green-600 "
                    : "border-transparent"
                }`}
              >
                {board.name}

                <span
                  className={`w-6 h-6 rounded-full ${
                    selectedInfoBoard === board?.id
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
