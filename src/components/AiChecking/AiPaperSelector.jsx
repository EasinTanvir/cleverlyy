"use client";

import React, { useState } from "react";
import { FaChevronDown, FaFilePdf, FaInfoCircle } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
import Link from "next/link";

const data = [
  {
    year: "2021",
    sessions: [
      {
        name: "Jan/Feb",
        variants: [
          { name: "Variant 1", papers: ["Paper 1", "Paper 2"] },
          { name: "Variant 2", papers: ["Paper 1", "Paper 2"] },
        ],
      },
      {
        name: "May/Jun",
        variants: [
          { name: "Variant 1", papers: ["Paper 1", "Paper 2"] },
          { name: "Variant 3", papers: ["Paper 1", "Paper 3"] },
        ],
      },
    ],
  },
  {
    year: "2022",
    sessions: [
      {
        name: "May/Jun",
        variants: [
          { name: "Variant 1", papers: ["Paper 1", "Paper 2"] },
          { name: "Variant 2", papers: ["Paper 2", "Paper 3"] },
        ],
      },
    ],
  },
  {
    year: "2023",
    sessions: [
      {
        name: "Oct/Nov",
        variants: [
          { name: "Variant 1", papers: ["Paper 1"] },
          { name: "Variant 3", papers: ["Paper 3"] },
        ],
      },
    ],
  },
];

const AiPaperSelector = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const [selectedVariant, setSelectedVariant] = useState("");
  const [selectedPaper, setSelectedPaper] = useState("");
  const [paperRetreive, setPaperRetrieve] = useState(false);

  const getSessionOptions = () => {
    return data.find((item) => item.year === selectedYear)?.sessions || [];
  };

  const getVariantOptions = () => {
    return (
      getSessionOptions().find((session) => session.name === selectedSession)
        ?.variants || []
    );
  };

  const getPaperOptions = () => {
    return (
      getVariantOptions().find((variant) => variant.name === selectedVariant)
        ?.papers || []
    );
  };

  return (
    <div className="pt-4 pb-10">
      <div className="text-center text-lg mb-7">
        Which Paper are you Solving
      </div>

      {/* Dropdown Section */}
      <div className="flex md:flex-row flex-col gap-2 justify-between items-center mb-4">
        <div className="relative w-60">
          <select
            className="w-full py-2 px-3 text-sm bg-white border border-black text-black rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={selectedYear}
            onChange={(e) => {
              setSelectedYear(e.target.value);
              setSelectedSession("");
              setSelectedVariant("");
              setSelectedPaper("");
            }}
          >
            <option value="">Select Year</option>
            {data.map((item) => (
              <option key={item.year} value={item.year}>
                {item.year}
              </option>
            ))}
          </select>
          <FaChevronDown
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
              selectedYear ? "text-textColor" : "text-gray-300"
            } pointer-events-none`}
          />
        </div>
        <span>→</span>
        <div className="relative w-60">
          <select
            className="w-full py-2 px-3 text-sm bg-white border border-black text-black rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={selectedSession}
            onChange={(e) => {
              setSelectedSession(e.target.value);
              setSelectedVariant("");
              setSelectedPaper("");
            }}
            disabled={!selectedYear}
          >
            <option value="">Select Session</option>
            {getSessionOptions().map((session) => (
              <option key={session.name} value={session.name}>
                {session.name}
              </option>
            ))}
          </select>
          <FaChevronDown
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
              selectedSession ? "text-textColor" : "text-gray-300"
            } pointer-events-none`}
          />
        </div>
        <span>→</span>
        <div className="relative w-60">
          <select
            className="w-full py-2 px-3 text-sm bg-white border border-black text-black rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={selectedVariant}
            onChange={(e) => {
              setSelectedVariant(e.target.value);
              setSelectedPaper("");
            }}
            disabled={!selectedSession}
          >
            <option value="">Select Variant</option>
            {getVariantOptions().map((variant) => (
              <option key={variant.name} value={variant.name}>
                {variant.name}
              </option>
            ))}
          </select>
          <FaChevronDown
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
              selectedVariant ? "text-textColor" : "text-gray-300"
            } pointer-events-none`}
          />
        </div>
        <span>→</span>
        <div className="relative w-60">
          <select
            className="w-full py-2 px-3 text-sm bg-white border border-black text-black rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={selectedPaper}
            onChange={(e) => setSelectedPaper(e.target.value)}
            disabled={!selectedVariant}
          >
            <option value="">Select Paper</option>
            {getPaperOptions().map((paper, index) => (
              <option key={index} value={paper}>
                {paper}
              </option>
            ))}
          </select>
          <FaChevronDown
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
              selectedPaper ? "text-textColor" : "text-gray-300"
            } pointer-events-none`}
          />
        </div>
        <button
          onClick={() => setPaperRetrieve(true)}
          className={`bg-textColor text-white px-4 py-2.5 rounded-md text-sm w-60 ${
            selectedPaper ? "opacity-100" : "opacity-45"
          }`}
          disabled={!selectedPaper}
        >
          Paper Retrieved
        </button>
      </div>

      <hr className="border my-11" />
      {/* Document Links */}

      {paperRetreive && (
        <>
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
                  <span className="font-semibold underline">full document</span>{" "}
                  is uploaded.
                </li>
                <li>
                  Make sure the writings are visible & clear as our AI relies on
                  OCR technology.
                </li>
              </ul>
            </div>

            <button className="bg-textColor text-white px-4 py-2.5 rounded-md text-sm w-60">
              Upload Solved Paper
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AiPaperSelector;
