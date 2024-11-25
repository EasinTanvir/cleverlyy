"use client";
import React, { useRef, useEffect } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import { useContextProvider } from "../../../../hooks/useContextProvider";

export const YearSelector = ({ yearWisePapers }) => {
  const scrollRef = useRef(null);

  const { selectedYear, setSelectedYear } = useContextProvider();

  // Extract years from the API data
  const years = Object.keys(yearWisePapers).map(Number);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (scrollRef.current && selectedYear) {
      const currentYearIndex = years.indexOf(selectedYear);
      const offset = (currentYearIndex - 2) * 80;
      scrollRef.current.scrollTo({
        left: Math.max(offset, 0),
        behavior: "smooth",
      });
    }
  }, [years, selectedYear]);

  return (
    <div className="flex items-center space-x-4">
      <button onClick={scrollLeft}>
        <MdKeyboardArrowLeft
          size={26}
          className="cursor-pointer text-4xl hover:text-gray-700"
        />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-hidden space-x-5 p-2 rounded-md"
        style={{ whiteSpace: "nowrap" }}
      >
        {years.map((year) => (
          <div
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`inline-block px-4 py-[6px] text-lg font-medium border rounded-lg cursor-pointer ${
              year == selectedYear ? "bg-textColor4 text-white" : "bg-white"
            }`}
          >
            {year}
          </div>
        ))}
      </div>

      <button onClick={scrollRight}>
        <MdKeyboardArrowRight
          size={26}
          className="cursor-pointer text-4xl hover:text-gray-700"
        />
      </button>
    </div>
  );
};
