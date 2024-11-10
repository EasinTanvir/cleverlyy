"use client";

const tabs = ["Exam Guides", "Revision", "Physics"];
const blogs = [
  // Dummy data for demonstration
  {
    id: 1,
    title: "Blog 1",
    category: "Exam Guides",
    type: "10 min read",
    date: "13 August 2024",
    tags: ["Exam Guides", "Revision", "Physics"],
    videoUrl: "https://path-to-your-video.mp4",
  },
  // Add more blog data
];

import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FaThList, FaThLarge, FaPlay, FaPause } from "react-icons/fa";
//import { Tooltip } from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import NotificationBar from "./NotificationBar";

const LearningTips = () => {
  const [selectedTab, setSelectedTab] = useState("Exam Guides");
  const [isGridView, setIsGridView] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [played, setPlayed] = useState(0);
  const playerRef = useRef(null);

  const filteredBlogs = blogs.filter((blog) => blog.category === selectedTab);

  // Handles play/pause toggle
  const togglePlayPause = () => setPlaying((prev) => !prev);

  // Handles slider change to seek video
  const handleSeekChange = (value) => {
    setPlayed(value / 100);
    playerRef.current.seekTo(value / 100);
  };

  // Handles playback progress
  const handleProgress = (progress) => setPlayed(progress.played * 100);

  // Formats time in seconds to mm:ss
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="smooth-scrollbar">
      <NotificationBar />
      <div className="flex">
        <div className="flex-1 xl:pe-8 lg:pe-4 pe-2">
          <h1 className="text-[28px]">
            How to revise effectively for your physics exam: Exam Guides
          </h1>
          <span className="text-[18px] mt-2">10 min read | 13 August 2024</span>
        </div>
        <div className="flex-1 relative border-4 border-red-600">
          <ReactPlayer
            url="https://res.cloudinary.com/dmrbqkzbu/video/upload/v1731251054/AI_Checking_pjzfxs.mp4" // Replace with actual video URL
            playing={playing}
            controls={true}
            width="100%"
            height="100%"
          />
          <button
            onClick={togglePlayPause}
            className="absolute inset-0 flex items-center justify-center opacity-70 text-white"
          >
            {playing ? <FaPause size={60} /> : <FaPlay size={60} />}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap space-x-14 overflow-x-auto mt-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded-full ${
              selectedTab === tab ? "bg-yearBg4 text-white" : "bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <hr className="border my-5 border-borderColor2" />

      {/* View Toggle */}
      <div className="flex justify-between items-center mb-7">
        <h1 className="text-black">Most Recent</h1>
        <div>
          <button
            onClick={() => setIsGridView(false)}
            className={`p-2 ${!isGridView && "bg-gray-300"}`}
          >
            <FaThList />
          </button>
          <button
            onClick={() => setIsGridView(true)}
            className={`p-2 ${isGridView && "bg-gray-300"}`}
          >
            <FaThLarge />
          </button>
        </div>
      </div>

      {/* Blog List */}
      <div
        className={
          isGridView ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "space-y-4"
        }
      >
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden relative"
          >
            <ReactPlayer
              url={blog.video} // Replace with actual video URL
              playing={false}
              controls={false}
              width="100%"
              height="200px"
            />
            <button
              onClick={togglePlayPause}
              className="absolute inset-0 flex items-center justify-center opacity-70 text-white"
            >
              <FaPlay size={40} />
            </button>
            <div className="p-4">
              <p className="text-gray-600 text-sm">
                {blog.type} | {blog.date}
              </p>
              <h2 className="font-semibold text-lg">{blog.title}</h2>
              <div className="text-gray-500 text-sm">
                Tags: {blog.tags.join(", ")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningTips;
