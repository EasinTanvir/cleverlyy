import React from "react";

import { CircularProgress } from "@mui/material";
import { IoMdCheckmark } from "react-icons/io";

const ChapterProgressCart = ({
  chapter_name,
  chapter_id,
  chapter_progress,
  chapterIndex,
  topics,
  isBlur = false,
}) => {
  return (
    <div
      style={{
        filter: isBlur
          ? `blur(${chapterIndex === 0 ? 0.6 : chapterIndex + 0.2}px)`
          : null,
      }}
      className="md:p-4  space-y-4 "
    >
      <div className="border-2 border-borderColor2  p-[18px] rounded-xl ">
        <div className="flex justify-between items-center mb-2 pb-3 border-b-[1px] border-borderColor2">
          <h2 className="text-lg font-bold ">{chapter_name}</h2>
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
              value={chapter_progress}
              size={30}
              thickness={10}
              sx={{ color: "#746cca" }}
            />
          </div>
        </div>

        <div className="">
          {topics.map((topic, topicIndex) => (
            <div key={topicIndex} className="py-5">
              <React.Fragment>
                <div className="flex items-center  space-x-2">
                  <div>
                    {topic.is_complete ? (
                      <div className="w-5 h-5 rounded-full flex-center bg-checkColor text-white">
                        <IoMdCheckmark size={14} className="" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full flex-center border border-textColor2 text-textColor2">
                        <IoMdCheckmark className="text-textColor2" size={14} />
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold">{topic.topic_name}</h3>
                </div>
              </React.Fragment>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterProgressCart;
