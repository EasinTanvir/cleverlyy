import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import RevisionNotesChapter from "@/components/Subjects/ChapterWiseRevisionNotes/RevisionNotesChapter";
import Action from "./Action";
import { NotFound } from "@/components/NotFound";

const ResourceRevision = ({ revisionNoteLists, subject_id }) => {
  return (
    <div className="relative">
      <div className="flex justify-end md:mb-0 mb-4">
        <Link href={`/subjects/chapterwise-revision-notes/${subject_id}`}>
          <button className="flex items-center gap-2 px-4 py-1 border border-borderColor2 rounded-lg text-textColor2 ">
            View All{" "}
            <FaArrowRight className="text-gray-500 group-hover:text-blue-600" />
          </button>
        </Link>
      </div>
      <Action />
      {revisionNoteLists && revisionNoteLists.length > 0 ? (
        <div className="mt-12 grid  md:grid-cols-2  gap-5   2xl:w-[82%] md:w-[80%]  ">
          {revisionNoteLists.map((item, i) => (
            <RevisionNotesChapter key={i} chapterIndex={i} {...item} isBlur />
          ))}
        </div>
      ) : (
        <div className="min-h-32 flex-center">
          <NotFound
            title="Revision Note Progress Data is not Avaiable"
            desc="Please try with different subject"
          />
        </div>
      )}
    </div>
  );
};

export default ResourceRevision;
