import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

import ChapterProgressCart from "./ChapterProgressCart";
import Action from "../ResourceRevision/Action";
import { NotFound } from "@/components/NotFound";

const ResourceChapterWiseQp = ({ chapterWiseLists, subject_id }) => {
  return (
    <div className="relative">
      <div className="flex justify-end md:mb-0 mb-4">
        <Link href={`/subjects/chapterwise-qp/${subject_id}`}>
          <button className="flex items-center gap-2 px-4 py-1 border border-borderColor2 rounded-lg text-textColor2 ">
            View All
            <FaArrowRight className="text-gray-500 group-hover:text-blue-600" />
          </button>
        </Link>
      </div>
      {chapterWiseLists && chapterWiseLists.length && <Action />}

      {chapterWiseLists && chapterWiseLists.length > 0 ? (
        <div className="mt-12 grid  md:grid-cols-2  gap-5   2xl:w-[82%] md:w-[77%]  ">
          {chapterWiseLists.map((item, i) => (
            <ChapterProgressCart key={i} {...item} chapterIndex={i} isBlur />
          ))}
        </div>
      ) : (
        <div className="min-h-32 flex-center">
          <NotFound
            title="Chapter wise Data is not Avaiable"
            desc="Please try with different subject"
          />
        </div>
      )}
    </div>
  );
};

export default ResourceChapterWiseQp;
