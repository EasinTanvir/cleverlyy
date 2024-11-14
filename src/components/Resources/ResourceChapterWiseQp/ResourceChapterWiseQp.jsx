import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

import { chapters } from "@/utils";
import ChapterProgressCart from "./ChapterProgressCart";
import Action from "../ResourceRevision/Action";

const ResourceChapterWiseQp = () => {
  return (
    <div className="relative">
      <div className="flex justify-end md:mb-0 mb-4">
        <Link href="/resources">
          <button className="flex items-center gap-2 px-4 py-1 border border-borderColor2 rounded-lg text-textColor2 ">
            View All{" "}
            <FaArrowRight className="text-gray-500 group-hover:text-blue-600" />
          </button>
        </Link>
      </div>
      <Action />
      <div className="mt-12 flex flex-wrap  gap-9  sm:max-w-[80%]  ">
        {chapters.map((item, i) => (
          <ChapterProgressCart key={i} {...item} chapterIndex={i} />
        ))}
      </div>
    </div>
  );
};

export default ResourceChapterWiseQp;
