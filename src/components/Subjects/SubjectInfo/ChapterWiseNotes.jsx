"use client";
import React from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaHandPointer, FaBrain, FaChartLine } from "react-icons/fa";

import ProgressBar from "./ProgressBar";
import { useContextProvider } from "../../../../hooks/useContextProvider";

const ChapterWiseNotes = () => {
  const { userSelectedSubject } = useContextProvider();
  const router = useRouter();

  const onNavigateHandler = () => {
    if (!userSelectedSubject?.subject_id) {
      toast.error("SubjectId is require");
      return router.push(`/subjects`);
    }
    router.push(
      `/subjects/chapterwise-revision-notes/${userSelectedSubject?.subject_id}`
    );
  };

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
        Chapterwise Revision Notes
      </h1>

      {/* Progress Bar */}
      <div className="mt-4">
        <ProgressBar progress={userSelectedSubject?.chapterwise_progress} />
      </div>

      <div className="mt-6 space-y-7 text-sm text-black font-medium">
        <div className="flex items-start space-x-5">
          <FaHandPointer className="text-black mt-1" size={40} />
          <p>
            <span className="text-textColor font-bold ">Condensed </span> Study
            Notes - Bite-sized summaries for
            <span className="text-textColor font-bold">
              quick, effective revision.
            </span>
          </p>
        </div>
        <div className="flex items-start space-x-5">
          <FaBrain className="mt-1" size={40} />
          <p>
            Thorough topic{" "}
            <span className="text-textColor font-bold">breakdowns </span> -
            Detailed explanations for every{" "}
            <span className="text-textColor font-bold">key concept</span>.
          </p>
        </div>
        <div className="flex items-start space-x-5">
          <FaChartLine className=" mt-1" size={40} />
          <p>
            Progress <span className="text-textColor font-bold">tracking </span>{" "}
            to <span className="text-textColor font-bold">Monitor </span> your
            <span className="text-textColor font-bold">
              {" "}
              learning journey
            </span>{" "}
            & growth.
          </p>
        </div>
      </div>

      <div className="mt-6 mb-3 text-center ">
        <div>
          <button
            onClick={onNavigateHandler}
            className="w-40 bg-textColor4  text-white text-sm py-2.5 rounded-full hover:bg-texttext-textColor font-bold"
          >
            Revise
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChapterWiseNotes;
