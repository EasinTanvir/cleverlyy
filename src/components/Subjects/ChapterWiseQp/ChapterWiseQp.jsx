import React from "react";

import { NotFound } from "@/components/NotFound";
import ChapterProgressCart from "@/components/Resources/ResourceChapterWiseQp/ChapterProgressCart";

const ChapterWiseQp = ({ chapterWiseQpLists }) => {
  return (
    <div className="">
      {chapterWiseQpLists && chapterWiseQpLists.length > 0 ? (
        <div className="mt-12 grid 2xl:grid-cols-3  md:grid-cols-2  gap-5  ">
          {chapterWiseQpLists.map((item, i) => (
            <ChapterProgressCart key={i} chapterIndex={i} {...item} />
          ))}
        </div>
      ) : (
        <div className="min-h-96 flex-center">
          <NotFound
            title="Chaptwer Wise QP Data is not Avaiable"
            desc="Please try with different subject"
          />
        </div>
      )}
    </div>
  );
};

export default ChapterWiseQp;
