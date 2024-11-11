"use client";
import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { IoGrid } from "react-icons/io5";
import VideoPlayer from "./VideoPlayer";

const Tabs = () => {
  // Dummy data for subjects and their related information
  const subjects = [
    {
      id: 1,
      title: "Physics",
      subjects: [
        {
          title: "Physics",
          url: "https://example.com/physics",
          duration: "2 hours",
          date: "2024-11-11",
          tags: ["science", "physics", "education"],
        },
        {
          title: "Physics",
          url: "https://example.com/physics",
          duration: "2 hours",
          date: "2024-11-11",
          tags: ["science", "physics", "education"],
        },
        {
          title: "Physics",
          url: "https://example.com/physics",
          duration: "2 hours",
          date: "2024-11-11",
          tags: ["science", "physics", "education"],
        },
        {
          title: "Physics",
          url: "https://example.com/physics",
          duration: "2 hours",
          date: "2024-11-11",
          tags: ["science", "physics", "education"],
        },
        {
          title: "Physics",
          url: "https://example.com/physics",
          duration: "2 hours",
          date: "2024-11-11",
          tags: ["science", "physics", "education"],
        },
      ],
    },
    {
      id: 2,
      title: "Chemistry",
      subjects: [
        {
          title: "Chemistry",
          url: "https://example.com/physics",
          duration: "2 hours",
          date: "2024-11-11",
          tags: ["science", "physics", "education"],
        },
      ],
    },
  ];

  // Define the state for selected tab
  const [selectedTab, setSelectedTab] = useState(1);

  // Filter subjects based on the selected tab
  const filteredSubjects = subjects.filter(
    (subject) => subject.id === selectedTab
  );

  return (
    <div className="">
      {/* Tabs */}
      <div className="flex  border-b-2 pb-5 gap-10">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            className={`px-6 py-2 text-lg font-medium ${
              selectedTab === subject.id
                ? "bg-yearBg4 text-white px-3 py-1 rounded-3xl"
                : ""
            }`}
            onClick={() => setSelectedTab(subject.id)}
          >
            {subject.title}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <h1 className="text-[18px] mb-2">Most Recent</h1>
          <div className="flex items-center gap-3.5 bg-btnColor6 px-2.5 py-1.5 rounded-md">
            <button>
              <AiOutlineBars size={22} />
            </button>
            <button className="bg-boxColor p-1 rounded-md">
              <IoGrid size={22} />
            </button>
          </div>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-10 mt-4">
          {filteredSubjects.map((data) =>
            data.subjects.map((subject, i) => (
              <div key={i} className="bg-white ">
                <p className="text-[11px]">
                  {subject.duration} | {subject.date}
                </p>

                <div className="max-w-full rounded-lg mt-2">
                  <VideoPlayer
                    url="https://res.cloudinary.com/dmrbqkzbu/video/upload/v1731308262/2_fdcvrs.mp4"
                    size={25}
                  />
                </div>

                <h1 className="mt-2.5 text-[20px]">{subject.title}</h1>
                <p className="mt-3 text-[11px] text-end">
                  {subject.tags.join(", ")}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
