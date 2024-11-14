import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import RevisionNotesChapter from "@/components/Subjects/ChapterWiseRevisionNotes/RevisionNotesChapter";
import { chapters } from "@/utils";
import Action from "./Action";

const ResourceRevision = () => {
  return (
    <div className="relative">
      <div className="flex justify-end md:mb-0 mb-4">
        <Link href="/subjects/chapterwise-revision-notes">
          <button className="flex items-center gap-2 px-4 py-1 border border-borderColor2 rounded-lg text-textColor2 ">
            View All{" "}
            <FaArrowRight className="text-gray-500 group-hover:text-blue-600" />
          </button>
        </Link>
      </div>
      <Action />
      <div className="mt-12 flex flex-wrap  gap-9 ">
        {chapters.map((item, i) => (
          <RevisionNotesChapter key={i} chapterIndex={i} {...item} isBlur />
        ))}
      </div>
    </div>
  );
};

export default ResourceRevision;
