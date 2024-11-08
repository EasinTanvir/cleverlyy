import React from "react";
import { FaHandPointer, FaBrain, FaChartLine } from "react-icons/fa"; // Import icons
import { AiOutlineInfoCircle } from "react-icons/ai"; // Info icon
import { chemistry } from "@/constant";
import Image from "next/image";

const ChapterWiseQuestion = () => {
  return (
    <div className="relative min-w-80 max-w-80 mx-auto  p-6 border border-black rounded-3xl">
      {/* <div className="absolute -top-20 -left-10   w-40">
        <Image
          src={chemistry}
          alt="Top Illustration"
          className="max-w-full z-50"
        />
      </div> */}

      {/* Title */}
      <h1 className="text-center text-2xl font-bold mt-6">
        Chapterwise Question Paper
      </h1>

      {/* Progress Bar */}
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-[13px] mt-1">
          <div
            className="bg-purple-500 h-[13px] rounded-full relative"
            style={{ width: "50%" }}
          >
            <span className="text-white text-[10px] absolute right-2  top-0  ">
              50%
            </span>
          </div>
        </div>

        <div className="flex justify-between text-xs mt-1">
          <span>Start Now</span>
          <span>0/84</span>
        </div>
      </div>

      <div className="mt-6 space-y-7 text-sm text-black font-medium">
        <div className="flex items-start space-x-4">
          <p className="text-right">
            <span className="text-textColor font-bold  ">Focused Practice</span>{" "}
            - Tackle questions
            <span className="text-textColor font-bold">topic </span> by topic
            chapter by
            <span className="text-textColor font-bold">chapter </span>
          </p>
          <FaHandPointer className="text-black mt-1" size={40} />
        </div>
        <div className="flex items-start space-x-5">
          <p className="text-right">
            <span className="text-textColor font-bold">Real Exam</span>Questions
            - Practice with authentic
            <span className="text-textColor font-bold">chapter-based</span>
            questions.
          </p>{" "}
          <FaBrain className="mt-1" size={40} />
        </div>
        <div className="flex items-start space-x-5">
          <p className="text-right">
            Instant <span className="text-textColor font-bold">Feedback</span>-
            Get immediate
            <span className="text-textColor font-bold">results </span>
            to track
            <span className="text-textColor font-bold">progress </span>
          </p>{" "}
          <FaChartLine className=" mt-1" size={40} />
        </div>
      </div>

      {/* Solve Button */}
      <div className="mt-6 mb-3 text-center ">
        <button className="w-40 bg-textColor4 font-bold text-white text-sm py-2.5 rounded-full hover:bg-texttext-textColor ">
          Study
        </button>
      </div>

      {/* Info Icon */}
      <div className="absolute bottom-2 right-2 ">
        <AiOutlineInfoCircle className="text-black" size={24} />
      </div>
    </div>
  );
};

export default ChapterWiseQuestion;
