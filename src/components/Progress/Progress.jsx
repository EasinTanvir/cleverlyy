"use client";
import { useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";

import SubjectCard from "./ProgressSubject";
import ProgressBarChart from "./ProgressBarChart";

const Progress = ({ barchartData, session }) => {
  const [selectedBoard, setSelectedBoard] = useState("Edexcel");

  const { scrollY } = useScroll();

  const yPosition = useTransform(scrollY, [0, 200], [0, -200]);
  const opacityTopDiv = useTransform(scrollY, [0, 200], [1, 0]);

  const [blur, setBlur] = useState(2);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      const blurValue = Math.max(8 - latest / 25, 0);
      setBlur(blurValue);
    });
  }, [scrollY]);

  return (
    <div className="min-h-screen">
      <h1 className="md:text-[27px] text-lg font-bold mb-3">
        {session?.first_name}, Progress
      </h1>
      <div className="flex space-x-4 mb-4">
        {barchartData.map((board) => (
          <button
            key={board.board_id}
            onClick={() => setSelectedBoard(board.board_name)}
            className={`px-4 text-sm py-1 rounded ${
              selectedBoard === board.board_name
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            {board.board_name}
          </button>
        ))}
      </div>

      <motion.div
        className="min-h-[40vh]"
        style={{ y: yPosition, opacity: opacityTopDiv }}
      >
        <div className="min-h-[40vh]">
          <ProgressBarChart
            barchartData={barchartData}
            selectedBoard={selectedBoard}
            setSelectedBoard={setSelectedBoard}
          />
        </div>
      </motion.div>

      <div className="flex-center gap-4 mt-14 mb-5">
        <button className="bg-btnColor6 px-3 py-1 rounded-md">
          Scroll to See Individual Subject Progress
        </button>
        <MdKeyboardArrowDown
          size={30}
          className="text-iconColor4 transform rotate-180"
        />
      </div>

      <hr className="border-[1px] border-black mb-8" />

      <div
        className="min-h-[60vh]  bg-gray-100"
        style={{ filter: `blur(${blur}px)` }}
      >
        <div className="space-y-12 min-h-screen">
          <SubjectCard />
        </div>
      </div>
    </div>
  );
};

export default Progress;
