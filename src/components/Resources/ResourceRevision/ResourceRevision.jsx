import React from "react";
import RevisionNotesChapter from "@/components/Subjects/ChapterWiseRevisionNotes/RevisionNotesChapter";
import { chapters } from "@/utils";

const ResourceRevision = () => {
  return (
    <div>
      <div className="mt-12 flex xl:flex-row flex-col  gap-9  ">
        {chapters.map((item, i) => (
          <RevisionNotesChapter key={i} chapterIndex={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ResourceRevision;
