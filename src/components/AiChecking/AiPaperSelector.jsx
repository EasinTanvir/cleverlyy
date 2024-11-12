import React from "react";
import { FaChevronDown, FaFilePdf, FaInfoCircle } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
import Link from "next/link";

const AiPaperSelector = () => {
  return (
    <div className="pt-4 pb-10">
      <div className="text-center text-lg  mb-7">
        Which Paper are you Solving
      </div>

      {/* Dropdown Section */}
      <div className="flex md:flex-row flex-col gap-2 justify-between items-center mb-4">
        <div className="relative w-60">
          <select className="w-full  py-2  px-3 text-sm  bg-white border  border-black text-black rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="">2021</option>
          </select>
          <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-textColor pointer-events-none" />
        </div>
        <span>→</span>
        <div className="relative w-60">
          <select className="w-full  py-2  px-3 text-sm  bg-white border  border-black text-black rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="">May/Jun</option>
          </select>
          <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-textColor pointer-events-none" />
        </div>
        <span>→</span>
        <div className="relative w-60">
          <select className="w-full  py-2  px-3 text-sm  bg-white border  border-black text-black rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="">Variant 1</option>
          </select>
          <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-textColor pointer-events-none" />
        </div>
        <span>→</span>
        <div className="relative w-60">
          <select className="w-full  py-2  px-3 text-sm  bg-white border  border-black text-black rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="">Paper 1</option>
          </select>
          <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-textColor pointer-events-none" />
        </div>
        <button className="bg-textColor text-white px-4 py-2.5 rounded-md text-sm w-60">
          Paper Retrieved
        </button>
      </div>

      <hr className="border my-11" />
      {/* Document Links */}

      <div className="flex md:flex-row flex-col-reverse gap-3 justify-between items-center">
        <div className="space-y-5  md:text-lg text-sm">
          <div className="flex items-center ">
            <FaFilePdf size={22} className="mr-2 text-textColor" />
            Chemistry 2015_may/june_Variant 1_paper 1_QP
          </div>
          <div className="flex items-center ">
            <FaFilePdf size={22} className="mr-2 text-textColor" />
            Chemistry_2015_may/june_Variant 1_paper 1_MS
          </div>
          <div className="flex items-center ">
            <FaFilePdf size={22} className="mr-2 text-textColor" />
            Chemistry_2015_may/june_Variant 1_Grade Boundary
          </div>
        </div>
        <div className="space-y-3">
          <Link href="/aichecking/progress">
            <button className="bg-textColor text-white px-6 py-2 rounded-md cursor-pointer">
              Select Paper to Check
            </button>
          </Link>

          <div className="text-center">
            <p>and</p>
            <p>
              then check using{" "}
              <span className="text-textColor font-bold">ai</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between my-10">
        <hr className="w-full border" />
        <span className="px-4">Or</span>
        <hr className="w-full border" />
      </div>
      {/* Information Section */}
      <div className="flex md:flex-row flex-col-reverse items-center justify-between md:text-lg text-sm gap-3 space-x-2">
        <div className="space-y-2">
          <FaInfoCircle size={20} className="" />
          <ul className="space-y-1 list-disc ps-5 ">
            <li>
              Only <span className="font-semibold underline">PDF</span> is
              accepted.
            </li>
            <li>
              Make sure the{" "}
              <span className="font-semibold underline">full document</span> is
              uploaded.
            </li>
            <li>
              Make sure the writings are visible & clear as our AI relies on OCR
              technology.
            </li>
          </ul>
        </div>

        <button className="bg-textColor text-white px-4 py-2.5 rounded-md text-sm w-60">
          Upload Solved Paper
        </button>
      </div>
    </div>
  );
};

export default AiPaperSelector;
