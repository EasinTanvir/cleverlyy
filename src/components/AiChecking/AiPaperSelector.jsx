"use client";

import React, { useState, useEffect } from "react";
import { FaChevronDown, FaFilePdf, FaInfoCircle } from "react-icons/fa";
import Link from "next/link";

import Skeleton from "../Skeleton";
import { NotFound } from "../NotFound";
import { useContextProvider } from "../../../hooks/useContextProvider";

const AiPaperSelector = () => {
  const { selectedSubject } = useContextProvider();

  const [yearWiseQpLists, setYearWiseQpLists] = useState({});
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [finalPaper, setFinalPaper] = useState(null);

  // Dropdown states
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const [selectedVariant, setSelectedVariant] = useState("");
  const [selectedPaper, setSelectedPaper] = useState("");

  const [paperRetrieve, setPaperRetrieve] = useState("");

  const fetchYearWiseQp = async (subjectId) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/papers/user/?user_id=7&subject_id=${subjectId}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`
        );
      }

      const data = await response.json();

      if (!data) {
        throw new Error("Failed to fetch year-wise question papers");
      }

      if (data && Object.keys(data).length === 1 && data.message) {
        setMessage(data.message);
      } else {
        setYearWiseQpLists(data);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedSubject.subject_id) {
      setLoading(true);
      setError(null);
      setMessage(null);
      fetchYearWiseQp(selectedSubject.subject_id);
    }
  }, [selectedSubject]);

  const getSessionOptions = () => {
    return selectedYear ? Object.keys(yearWiseQpLists[selectedYear] || {}) : [];
  };

  const getVariantOptions = () => {
    return selectedSession
      ? Object.keys(yearWiseQpLists[selectedYear]?.[selectedSession] || {})
      : [];
  };

  const getPaperOptions = () => {
    return selectedVariant
      ? yearWiseQpLists[selectedYear]?.[selectedSession]?.[selectedVariant] ||
          []
      : [];
  };

  useEffect(() => {
    if (
      !selectedYear ||
      !selectedSession ||
      !selectedVariant ||
      !selectedPaper
    ) {
      setPaperRetrieve(false);
    }
  }, [selectedYear, selectedSession, selectedVariant, selectedPaper]);

  if (loading) {
    return (
      <div className="m-8">
        <Skeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <NotFound
          title="Internal Server Error"
          desc={error || "Failed to fetch year-wise question papers"}
        />
      </div>
    );
  }

  return (
    <div className="pt-4 pb-10">
      {message ? (
        <h1>{message}</h1>
      ) : (
        <React.Fragment>
          {Object.keys(yearWiseQpLists).length > 0 && (
            <>
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
                    {Object.keys(yearWiseQpLists).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-300" />
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
                      <option key={session} value={session}>
                        {session}
                      </option>
                    ))}
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-300" />
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
                      <option key={variant} value={variant}>
                        {variant}
                      </option>
                    ))}
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-300" />
                </div>
                <span>→</span>

                <div className="relative w-60">
                  <select
                    className="w-full py-2 px-3 text-sm bg-white border border-black text-black rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={selectedPaper}
                    onChange={(e) => {
                      const selectedPaperName = e.target.value;
                      setSelectedPaper(selectedPaperName);

                      // Find the full paper object based on the selected name
                      const fullPaperObject = getPaperOptions().find(
                        (paper) => paper.paper === selectedPaperName
                      );
                      setFinalPaper(fullPaperObject || null); // Store the full object in finalPaper
                    }}
                    disabled={!selectedVariant}
                  >
                    <option value="">Select Paper</option>
                    {getPaperOptions().map((paper, index) => (
                      <option key={index} value={paper.paper}>
                        {paper.paper}
                      </option>
                    ))}
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-300" />
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

              {paperRetrieve && (
                <>
                  <div className="flex md:flex-row flex-col-reverse gap-3 justify-between items-center">
                    <div className="space-y-5  md:text-lg text-sm">
                      <div className="flex items-center ">
                        <FaFilePdf size={22} className="mr-2 text-textColor" />
                        {selectedSubject?.subject_name}_{selectedYear}_
                        {selectedSession}_{selectedVariant}_{selectedPaper}
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
                          Only{" "}
                          <span className="font-semibold underline">PDF</span>{" "}
                          is accepted.
                        </li>
                        <li>
                          Make sure the{" "}
                          <span className="font-semibold underline">
                            full document
                          </span>{" "}
                          is uploaded.
                        </li>
                        <li>
                          Make sure the writings are visible & clear as our AI
                          relies on OCR technology.
                        </li>
                      </ul>
                    </div>

                    <button className="bg-textColor text-white px-4 py-2.5 rounded-md text-sm w-60">
                      Upload Solved Paper
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default AiPaperSelector;
