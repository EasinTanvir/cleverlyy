import React from "react";

import RevisionNotesChapter from "./RevisionNotesChapter";
import { NotFound } from "@/components/NotFound";

const ChapterWiseRevisionNotes = ({ revisionNoteLists }) => {
  return (
    <div className="">
      {revisionNoteLists && revisionNoteLists.length > 0 ? (
        <div className="mt-12 flex xl:flex-row flex-col  gap-9  ">
          {revisionNoteLists.map((item, i) => (
            <RevisionNotesChapter key={i} chapterIndex={i} {...item} />
          ))}
        </div>
      ) : (
        <div className="min-h-96 flex-center">
          <NotFound
            title="Revision Note Progress Data is not Avaiable"
            desc="Please try with different subject"
          />
        </div>
      )}
    </div>
  );
};

export default ChapterWiseRevisionNotes;
