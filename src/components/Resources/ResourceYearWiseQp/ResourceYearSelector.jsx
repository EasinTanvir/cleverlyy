"use client";

import React, { useRef, useState, useEffect } from "react";
import dayjs from "dayjs";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export const ResourceYearSelector = () => {
  const scrollRef = useRef(null);
  const [selectedYear, setSelectedYear] = useState(dayjs().year());

  // Function to scroll up
  const scrollUp = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: -100, behavior: "smooth" });
    }
  };

  // Function to scroll down
  const scrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: 100, behavior: "smooth" });
    }
  };

  // Generate a range of years from 1990 to 2090
  const years = Array.from({ length: 101 }, (_, index) => 1990 + index);
  const currentYear = dayjs().year();

  // Automatically scroll to the selected year on initial render
  useEffect(() => {
    const selectedYearElement = document.getElementById(`year-${selectedYear}`);
    if (selectedYearElement) {
      selectedYearElement.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  }, [selectedYear]);

  return (
    <div className="flex flex-col items-center space-y-2 h-[340px]">
      {/* Up Arrow Icon */}
      <button onClick={scrollUp}>
        <MdKeyboardArrowUp
          size={26}
          className="cursor-pointer text-4xl hover:text-gray-700"
        />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex flex-col max-h-[340px] overflow-y-hidden space-y-2 p-2 rounded-md"
      >
        {years.map((year) => (
          <div
            key={year}
            id={`year-${year}`}
            onClick={() => setSelectedYear(year)}
            className={`px-4 py-2 text-lg   rounded-lg cursor-pointer ${
              year === selectedYear ? "bg-textColor4 text-white" : "bg-white"
            }`}
          >
            {year}
          </div>
        ))}
      </div>

      {/* Down Arrow Icon */}
      <button onClick={scrollDown}>
        <MdKeyboardArrowDown
          size={26}
          className="cursor-pointer text-4xl hover:text-gray-700"
        />
      </button>
    </div>
  );
};
