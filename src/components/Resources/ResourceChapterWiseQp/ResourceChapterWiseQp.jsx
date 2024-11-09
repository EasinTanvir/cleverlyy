import React from "react";

import { chapters } from "@/utils";
import ChapterProgressCart from "./ChapterProgressCart";

const ResourceChapterWiseQp = () => {
  return (
    <div>
      <div className="mt-12 flex xl:flex-row flex-col  gap-9  ">
        {chapters.map((item, i) => (
          <ChapterProgressCart key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ResourceChapterWiseQp;
