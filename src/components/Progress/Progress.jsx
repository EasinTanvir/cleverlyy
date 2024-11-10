"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProgressBarChart from "./ProgressBarChart";
import SubjectCard from "./ProgressSubject";
import { MdKeyboardArrowDown } from "react-icons/md";

const Progress = () => {
  const { scrollY } = useScroll();

  // Set up transforms for the first div (scrolling up and fading out)
  const yPosition = useTransform(scrollY, [0, 200], [0, -200]);
  const opacityTopDiv = useTransform(scrollY, [0, 200], [1, 0]);

  // Use state to manually control the blur effect, starting with maximum blur
  const [blur, setBlur] = useState(2);

  useEffect(() => {
    // Update blur state as scrollY changes, reducing blur as you scroll
    return scrollY.onChange((latest) => {
      const blurValue = Math.max(8 - latest / 25, 0); // Start at 8px and reduce to 0
      setBlur(blurValue);
    });
  }, [scrollY]);

  return (
    <div className="min-h-screen">
      <motion.div
        className="min-h-[40vh]"
        style={{ y: yPosition, opacity: opacityTopDiv }}
      >
        <h1 className="text-[26px] font-bold mb-3">Easin Progress</h1>
        <div className="min-h-[40vh]">
          <ProgressBarChart />
        </div>
      </motion.div>

      <div className="flex-center gap-4 mt-7 mb-5">
        <button className="bg-btnColor6 px-3 py-1 rounded-md">
          Scroll to See Individual Subject Progress
        </button>
        <MdKeyboardArrowDown
          size={30}
          className="text-iconColor4 transform rotate-180"
        />
      </div>

      <hr className="border-[1px] border-black mb-8" />

      <div
        className="min-h-[60vh]  bg-gray-100"
        style={{ filter: `blur(${blur}px)` }}
      >
        <div className="space-y-12 min-h-screen">
          <SubjectCard />
        </div>
      </div>
    </div>
  );
};

export default Progress;
