import React from "react";

const CircularProgressBar = ({ progress }) => {
  const circleRadius = 45;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const progressOffset =
    circleCircumference - (progress / 100) * circleCircumference;

  return (
    <div className="flex items-center justify-center relative">
      <svg width="100" height="100" className="rotate-[-90deg]">
        <circle
          cx="50"
          cy="50"
          r={circleRadius}
          stroke="#4780c3"
          strokeWidth="10"
          fill="transparent"
        />

        <circle
          cx="50"
          cy="50"
          r={circleRadius}
          stroke="#2244b4"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circleCircumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-in-out"
        />
      </svg>

      <div className="absolute text-center flex flex-col items-center">
        <span className="text-lg font-semibold text-[#2244b4]">
          {progress}%
        </span>{" "}
      </div>
    </div>
  );
};

export default CircularProgressBar;
