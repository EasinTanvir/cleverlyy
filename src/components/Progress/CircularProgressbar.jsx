import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Importing an icon from React Icons

const CircularProgressBar = ({ progress }) => {
  const circleRadius = 45; // Reduced radius for a smaller circle
  const circleCircumference = 2 * Math.PI * circleRadius;
  const progressOffset =
    circleCircumference - (progress / 100) * circleCircumference;

  return (
    <div className="flex items-center justify-center relative">
      <svg
        width="100"
        height="100"
        className="rotate-[-90deg]" // Rotate to start from the top
      >
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r={circleRadius}
          stroke="#4780c3" // Entire circle border color
          strokeWidth="10"
          fill="transparent"
        />
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r={circleRadius}
          stroke="#2244b4" // Color for the completed part
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circleCircumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round" // Rounded line cap
          className="transition-all duration-300 ease-in-out"
        />
      </svg>
      {/* Center content */}
      <div className="absolute text-center flex flex-col items-center">
        <span className="text-lg font-semibold text-[#2244b4]">
          {progress}%
        </span>{" "}
        {/* Progress percentage */}
      </div>
    </div>
  );
};

export default CircularProgressBar;
