"use client";

import React, { useRef, useState, useEffect } from "react";
import dayjs from "dayjs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
export const YearSelector = () => {
  const scrollRef = useRef(null);
  const [selectedYear, setSelectedYear] = useState(dayjs().year());

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  // Generate a range of years from 1990 to 2090
  const years = Array.from({ length: 101 }, (_, index) => 1990 + index);
  const currentYear = dayjs().year();

  // Automatically scroll to the current year on initial render
  useEffect(() => {
    if (scrollRef.current && selectedYear === currentYear) {
      const currentYearIndex = years.indexOf(currentYear);
      const offset = (currentYearIndex - 5) * 80;
      scrollRef.current.scrollTo({
        left: Math.max(offset, 0),
        behavior: "smooth",
      });
    }
  }, [years, currentYear]);

  return (
    <div className="flex items-center space-x-4">
      {/* Left Arrow Icon */}
      <button onClick={scrollLeft}>
        <MdKeyboardArrowLeft
          size={26}
          className="cursor-pointer text-4xl hover:text-gray-700"
        />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden space-x-5 p-2  rounded-md"
        style={{ whiteSpace: "nowrap" }}
      >
        {years.map((year) => (
          <div
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`inline-block px-4 py-[6px] text-lg font-medium border rounded-lg cursor-pointer ${
              year === selectedYear ? "bg-textColor4 text-white" : "bg-white"
            }`}
          >
            {year}
          </div>
        ))}
      </div>

      {/* Right Arrow Icon */}
      <button onClick={scrollRight}>
        {" "}
        <MdKeyboardArrowRight
          size={26}
          className="cursor-pointer text-4xl hover:text-gray-700"
        />
      </button>
    </div>
  );
};
