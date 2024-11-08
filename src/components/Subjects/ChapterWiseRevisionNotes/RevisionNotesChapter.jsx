"use client";
import React, { useState } from "react";
import { Collapse } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";

const RevisionNotesChapter = ({
  name,
  progress,
  isExpanded,

  chapterIndex,
  topics,
}) => {
  const [expandedTopic, setExpandedTopic] = useState(null);

  const handleToggle = (chapterIndex, topicIndex) => {
    const topicId = `${chapterIndex}-${topicIndex}`;
    setExpandedTopic(expandedTopic === topicId ? null : topicId);
  };

  return (
    <div className="p-4 space-y-4 xl:w-[550px]">
      <div className="border-2 border-borderColor2  p-[18px] rounded-xl ">
        <div className="flex justify-between items-center mb-2 pb-3 border-b-[1px] border-borderColor2">
          <h2 className="text-lg font-bold ">{name}</h2>
          <div className="relative">
            <CircularProgress
              variant="determinate"
              value={100}
              size={30}
              thickness={10}
              className="absolute text-purple-200"
            />

            <CircularProgress
              variant="determinate"
              value={progress}
              size={30}
              thickness={10}
              className="text-purple-500"
            />
          </div>
        </div>

        {topics.map((topic, topicIndex) => (
          <div key={topicIndex} className="py-3">
            <div
              className="relative cursor-pointer border py-[14px] px-3 rounded-lg "
              onClick={() => handleToggle(chapterIndex, topicIndex)}
            >
              {/* Progress Bar */}
              <div
                style={{ width: `${topic.progress}%` }}
                className="absolute top-0 left-0 h-full bg-progressbg rounded-lg"
              ></div>

              {/* Content over the progress bar */}
              <div className="relative flex justify-between items-center">
                <h3 className="text-md font-semibold">{topic.name}</h3>
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
                    <span>
                      {subtopic.isSolved ? (
                        <div className="w-5 h-5 rounded-full flex-center bg-checkColor text-white">
                          <IoMdCheckmark size={12} />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full flex-center border border-textColor2 text-textColor2">
                          <IoMdCheckmark size={12} />
                        </div>
                      )}
                    </span>
                    <p className="text-sm">{subtopic.name}</p>
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
