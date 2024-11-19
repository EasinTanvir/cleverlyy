"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MdFace } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";

import { useContextProvider } from "../../../hooks/useContextProvider";
import { Dropdown } from "./DropDown";
import Skeleton from "../Skeleton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Resource = () => {
  const { selectedExam, setSelectedExam, selectedSubject, setSelectedSubject } =
    useContextProvider();

  const [subjectInfo, setSubjectInfo] = useState(null);
  const [loader, setLoader] = useState(false);

  console.log("subjectInfo", subjectInfo);

  if (!selectedExam || !selectedSubject) return;

  const fetchSubjectInfo = async (subject_id) => {
    try {
      setLoader(true); // Start loader before the fetch
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/subjects/7/${subject_id}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (!data) {
        throw new Error("Failed to fetch Subject info");
      }

      setSubjectInfo(data);
    } catch (error) {
      throw new Error("Error fetching subject info:", error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (selectedSubject?.subject_id) {
      fetchSubjectInfo(selectedSubject?.subject_id);
    }
  }, [selectedSubject]);

  if (loader)
    return (
      <div className="mt-10">
        <Skeleton />
      </div>
    );

  return (
    <div>
      <div className="mt-8  ">
        <React.Fragment>
          <div>
            <div className="flex-center mt-16">
              <div className="xl:w-[70%]  flex lg:flex-row flex-col gap-6">
                <div className=" flex-1 space-y-6">
                  <div className="">
                    <ChapterWiseRevisioncard
                      title="Chapterwise Question Paper"
                      link="/resources"
                      progress={subjectInfo?.chapterwise_progress}
                    />
                  </div>
                  <div className="">
                    <ChapterWiseRevisioncard
                      title="Chapterwise Revision Notes"
                      link="/subjects/chapterwise-revision-notes"
                      progress={subjectInfo?.revision_progress}
                    />
                  </div>
                </div>
                <div className="flex-1 ">
                  <YearWisecard
                    title="Yearwise Question Paper"
                    link="/subjects/yearwise-question-solve"
                    yearwise_progress={subjectInfo?.yearwise_progress}
                  />
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    </div>
  );
};

export default Resource;

const ChapterWiseRevisioncard = ({ title, link, progress }) => {
  const { selectedSubject } = useContextProvider();

  const router = useRouter();

  const onNavigateHandler = () => {
    const redirectUrl = `${link}/${selectedSubject?.subject_id}`;
    router.push(redirectUrl);
  };

  return (
    <div onClick={onNavigateHandler}>
      <div className="px-6 py-7 border border-borderColor2 rounded-2xl">
        <h1 className="title">{title}</h1>
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-[14px] mt-2">
            <div
              className="bg-purple-500 h-[14px] rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <span className="text-white text-[10px] absolute right-2  top-0  ">
                {progress}%
              </span>
            </div>
          </div>

          <div className="flex justify-between text-xs mt-2">
            <span>Start Now</span>
            <span>0/84</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const YearWisecard = ({ title, link, yearwise_progress }) => {
  const { dropDownSelectedYear, dropDownSelectedSession, selectedSubject } =
    useContextProvider();

  const router = useRouter();

  const onNavigateHandler = () => {
    if (!dropDownSelectedYear || !dropDownSelectedSession) {
      return alert("chosse");
    }

    const redirectUrl = `${link}/${selectedSubject?.subject_id}`;
    router.push(redirectUrl);
  };

  return (
    <div className="p-6 border border-borderColor2 rounded-2xl min-h-full max-h-full  relative">
      <h1 className="title">{title}</h1>
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-[14px] mt-2">
          <div
            className="bg-purple-500 h-[14px] rounded-full relative"
            style={{ width: `${yearwise_progress}%` }}
          >
            <span className="text-white text-[10px] absolute right-2  top-0  ">
              {yearwise_progress}%
            </span>
          </div>
        </div>

        <div className="flex justify-between text-xs mt-2">
          <span>Start Now</span>
          <span>0/84</span>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <MdFace />
        <p className="text-[15px]">Digitally Solvable Pdf with AI Checking</p>
      </div>

      <Dropdown />

      <button onClick={onNavigateHandler}>
        <span className="absolute right-3.5 bottom-3.5 w-6 h-6 rounded-full bg-black flex-center">
          <FiArrowRight size={16} className="text-white" />
        </span>
      </button>
    </div>
  );
};
