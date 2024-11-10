import React from "react";
import { FaHandPointer, FaBrain, FaChartLine } from "react-icons/fa"; // Import icons
import { AiOutlineInfoCircle } from "react-icons/ai"; // Info icon
import { chemistry } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const YearWiseQuestion = ({ title }) => {
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
        <div className="flex items-start space-x-5">
          <FaHandPointer className="text-black mt-1" size={40} />
          <p>
            <span className="text-textColor ">Interactive</span> paper solving -
            timed practice & solved paper{" "}
            <span className="text-textColor">retrieval</span>
          </p>
        </div>
        <div className="flex items-start space-x-5">
          <FaBrain className="mt-1" size={40} />
          <p>
            <span className="text-textColor">AI Checking</span> along with
            suggestions in seconds for Solved paper
          </p>
        </div>
        <div className="flex items-start space-x-5">
          <FaChartLine className=" mt-1" size={40} />
          <p>
            <span className="text-textColor ">Tracking</span>,{" "}
            <span className="underline">Markschemes</span>,{" "}
            <span className="underline">note taking</span>,{" "}
            <span className="underline">Grade boundaries</span> with yearly
            coverage
          </p>
        </div>
      </div>

      {/* Solve Button */}
      <div className="mt-6 mb-3 text-center ">
        <Link href="/subjects/yearwise-question-solve">
          <button className="w-40 bg-textColor4 font-bold text-white text-sm py-2.5 rounded-full hover:bg-texttext-textColor">
            Solve
          </button>
        </Link>
      </div>

      {/* Info Icon */}
      <div className="absolute bottom-2 right-2 ">
        <AiOutlineInfoCircle className="text-black" size={24} />
      </div>
    </div>
  );
};

export default YearWiseQuestion;