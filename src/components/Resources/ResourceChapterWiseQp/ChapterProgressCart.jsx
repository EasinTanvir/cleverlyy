import React from "react";

import { CircularProgress } from "@mui/material";

const ChapterProgressCart = ({ name, progress, topics, chapterIndex }) => {
  return (
    <div
      style={{
        filter: `blur(${chapterIndex === 0 ? 0.6 : chapterIndex + 0.2}px)`,
      }}
      className="md:p-4  space-y-4 xl:w-[550px] "
    >
      <div className="border-2 border-borderColor2  p-[18px] rounded-xl ">
        <div className="flex justify-between items-center mb-2 pb-3 border-b-[1px] border-borderColor2">
          <h2 className="text-lg font-bold ">{name}</h2>
          <div className="relative">
            <CircularProgress
              variant="determinate"
              value={100}
              size={30}
              thickness={10}
              sx={{ color: "#e4e0ff" }}
              className="absolute "
            />

            <CircularProgress
              variant="determinate"
              value={progress}
              size={30}
              thickness={10}
              sx={{ color: "#746cca" }}
            />
          </div>
        </div>

        <div className="space-y-6">
          {topics.map((topic, topicIndex) => (
            <div key={topicIndex} className="py-3">
              <h3 className="text-md font-semibold pb-3.5">{topic.name}</h3>
              <div
                style={{ width: `${topic.progress}%` }}
                className="h-1 bg-circle"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterProgressCart;
