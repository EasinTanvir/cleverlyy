"use client";
import React, { useState } from "react";
import { Collapse } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";

const RevisionNotesChapter = ({
  chapter_name,
  chapter_id,
  chapter_progress,
  chapterIndex,
  topics,
  isBlur = false,
}) => {
  const [expandedTopic, setExpandedTopic] = useState(null);

  const handleToggle = (chapterIndex, topicIndex) => {
    const topicId = `${chapterIndex}-${topicIndex}`;

    if (!isBlur) {
      setExpandedTopic(expandedTopic === topicId ? null : topicId);
    }
  };

  return (
    <div
      className={`md:p-4 space-y-4  `}
      style={{
        filter: isBlur
          ? `blur(${chapterIndex === 0 ? 0.6 : chapterIndex + 0.2}px)`
          : null,
      }}
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

        {topics &&
          topics.length > 0 &&
          topics.map((topic, topicIndex) => (
            <div key={topicIndex} className="py-3">
              <div
                className={`relative  border py-[14px] px-3 rounded-lg  ${
                  isBlur ? "" : "cursor-pointer"
                }`}
                onClick={() => handleToggle(chapterIndex, topicIndex)}
              >
                {/* Progress Bar */}
                <div
                  style={{ width: `${topic.topic_progress}%` }}
                  className="absolute top-0 left-0 h-full bg-progressbg rounded-lg"
                ></div>

                {/* Content over the progress bar */}
                <div className="relative flex justify-between items-center">
                  <h3 className="text-md font-semibold">{topic.topic_name}</h3>
                  {expandedTopic === `${chapterIndex}-${topicIndex}` ? (
                    <div className="w-8 h-8 bg-white flex-center rounded-full">
                      <FiChevronUp className="text-xl" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-white flex-center rounded-full">
                      <FiChevronDown className="text-xl" />
                    </div>
                  )}
                </div>
              </div>
              <Collapse in={expandedTopic === `${chapterIndex}-${topicIndex}`}>
                <div className="ml-4 mt-6 space-y-7">
                  {topic.subtopics.map((subtopic, subtopicIndex) => (
                    <div
                      key={subtopicIndex}
                      className="flex items-center space-x-2"
                    >
                      <div>
                        {subtopic.is_read ? (
                          <div className="w-5 h-5 rounded-full flex-center bg-checkColor text-white">
                            <IoMdCheckmark size={14} className="" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full flex-center border border-textColor2 text-textColor2">
                            <IoMdCheckmark
                              className="text-textColor2"
                              size={14}
                            />
                          </div>
                        )}
                      </div>
                      <p className="text-sm">{subtopic.subtopic_name}</p>
                    </div>
                  ))}
                </div>
              </Collapse>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RevisionNotesChapter;
