"use client";

import React from "react";
import { FaHandPointer, FaBrain, FaChartLine } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Link from "next/link";

import ProgressBar from "./ProgressBar";
import { useContextProvider } from "../../../../hooks/useContextProvider";

const YearWiseQuestion = () => {
  const { userSelectedSubject } = useContextProvider();
  return (
    <div className="relative w-80 mx-auto  p-6 border border-black rounded-3xl">
      {/* <div className="absolute -top-20 -left-10   w-40">
        <Image
          src={chemistry}
          alt="Top Illustration"
          className="max-w-full z-50"
        />
      </div> */}

      {/* Title */}
      <h1 className="text-center text-2xl font-bold mt-6">
        Yearwise Question Paper
      </h1>

      {/* Progress Bar */}
      <div className="mt-4">
        <ProgressBar progress={userSelectedSubject?.yearwise_progress} />
      </div>

      <div className="mt-6 space-y-7 text-sm text-black font-medium">
        <div className="flex items-start space-x-5">
          <FaHandPointer className="text-black mt-1" size={40} />
          <p>
            <span className="text-textColor font-bold ">Interactive</span> paper
            solving - timed practice & solved paper{" "}
            <span className="text-textColor font-bold">retrieval</span>
          </p>
        </div>
        <div className="flex items-start space-x-5">
          <FaBrain className="mt-1" size={40} />
          <p>
            <span className="text-textColor font-bold">AI Checking</span> along
            with suggestions in seconds for Solved paper
          </p>
        </div>
        <div className="flex items-start space-x-5">
          <FaChartLine className=" mt-1" size={40} />
          <p>
            <span className="text-textColor font-bold ">Tracking</span>,{" "}
            <span className="underline">Markschemes</span>,{" "}
            <span className="underline">note taking</span>,{" "}
            <span className="underline">Grade boundaries</span> with{" "}
            <span className="text-textColor font-bold ">yearly</span> coverage
          </p>
        </div>
      </div>

      {/* Solve Button */}
      <div className="mt-6 mb-3 text-center ">
        <Link
          href={`/subjects/yearwise-question-solve/${userSelectedSubject?.subject_id}`}
          //href={`/subjects/yearwise-question-solve/17`}
        >
          <button className="w-40 bg-textColor4  text-white text-sm py-2.5 rounded-full hover:bg-texttext-textColor font-bold">
            Solve
          </button>
        </Link>
      </div>

      {/* Info Icon */}
      <div className="absolute bottom-3 right-3 ">
        <AiOutlineInfoCircle className="text-black" size={24} />
      </div>
    </div>
  );
};

export default YearWiseQuestion;
