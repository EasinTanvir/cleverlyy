"use client";

import React, { useState, useEffect } from "react";
import { FaChevronDown, FaFilePdf, FaInfoCircle } from "react-icons/fa";
import Link from "next/link";

import Skeleton from "../Skeleton";
import { NotFound } from "../NotFound";
import { useContextProvider } from "../../../hooks/useContextProvider";

const AiPaperSelector = () => {
  const {
    selectedSubject,
    aiSelectedYear,
    setAiSelectedYear,
    aiSelectedSession,
    setAiSelectedSession,
    aiSelectedVariant,
    setAiSelectedVariant,
    aiSelectedPaper,
    setAiSelectedPaper,
  } = useContextProvider();

  const [yearWiseQpLists, setYearWiseQpLists] = useState({});
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [finalPaper, setFinalPaper] = useState(null);

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
    return aiSelectedYear
      ? Object.keys(yearWiseQpLists[aiSelectedYear] || {})
      : [];
  };

  const getVariantOptions = () => {
    return aiSelectedSession
      ? Object.keys(yearWiseQpLists[aiSelectedYear]?.[aiSelectedSession] || {})
      : [];
  };

  const getPaperOptions = () => {
    return aiSelectedVariant
      ? yearWiseQpLists[aiSelectedYear]?.[aiSelectedSession]?.[
          aiSelectedVariant
        ] || []
      : [];
  };

  useEffect(() => {
    if (
      !aiSelectedYear ||
      !aiSelectedSession ||
      !aiSelectedVariant ||
      !aiSelectedPaper
    ) {
      setPaperRetrieve(false);
    }
  }, [aiSelectedYear, aiSelectedSession, aiSelectedVariant, aiSelectedPaper]);

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
    <div className="pb-10">
      {message ? (
        <NotFound title={message} desc="Please try with another subject" />
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
                    value={aiSelectedYear}
                    onChange={(e) => {
                      setAiSelectedYear(e.target.value);
                      setAiSelectedSession("");
                      setAiSelectedVariant("");
                      setAiSelectedPaper("");
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
                    value={aiSelectedSession}
                    onChange={(e) => {
                      setAiSelectedSession(e.target.value);
                      setAiSelectedVariant("");
                      setAiSelectedPaper("");
                    }}
                    disabled={!aiSelectedYear}
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
                    value={aiSelectedVariant}
                    onChange={(e) => {
                      setAiSelectedVariant(e.target.value);
                      setAiSelectedPaper("");
                    }}
                    disabled={!aiSelectedSession}
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
                    value={aiSelectedPaper}
                    onChange={(e) => {
                      const selectedPaperName = e.target.value;
                      setAiSelectedPaper(selectedPaperName);

                      // Find the full paper object based on the selected name
                      const fullPaperObject = getPaperOptions().find(
                        (paper) => paper.paper === selectedPaperName
                      );
                      setFinalPaper(fullPaperObject || null); // Store the full object in finalPaper
                    }}
                    disabled={!aiSelectedVariant}
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
                    aiSelectedPaper ? "opacity-100" : "opacity-45"
                  }`}
                  disabled={!aiSelectedPaper}
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
                        {selectedSubject?.subject_name}_{aiSelectedYear}_
                        {aiSelectedSession}_{aiSelectedVariant}_
                        {aiSelectedPaper}
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
                  <hr className="border my-11" />
                  <div className="flex gap-4 items-start">
                    <FaInfoCircle size={20} />
                    <p className="text-sm">{/* Insert your message here */}</p>
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
