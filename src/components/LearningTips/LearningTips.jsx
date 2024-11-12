import React from "react";
import NotificationBar from "./NotificationBar";
import VideoPlayer from "./VideoPlayer";
import Tabs from "./TestTabs";

const LearningTips = () => {
  return (
    <div>
      <NotificationBar />
      <div className="flex md:flex-row flex-col gap-5">
        <div className="flex-1 xl:pe-8 lg:pe-4 pe-2">
          <h1 className="md:text-[28px] text-xl">
            How to revise effectively for your physics exam: Exam Guides
          </h1>
          <span className="text-[18px] mt-2">10 min read | 13 August 2024</span>
        </div>

        <VideoPlayer
          main
          url="https://res.cloudinary.com/dmrbqkzbu/video/upload/v1731308262/2_fdcvrs.mp4"
        />
      </div>

      <div className="mt-16">
        <Tabs />
      </div>
    </div>
  );
};

export default LearningTips;
