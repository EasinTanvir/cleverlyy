"use client";
import React, { useState } from "react";
import dayjs from "dayjs";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const today = dayjs();

  const handleNextWeek = () => {
    setCurrentDate(currentDate.add(7, "day"));
  };

  const handlePreviousWeek = () => {
    setCurrentDate(currentDate.subtract(7, "day"));
  };

  const getWeekDates = () => {
    let week = [];
    for (let i = 0; i < 7; i++) {
      week.push(currentDate.add(i, "day"));
    }
    return week;
  };

  const weekDates = getWeekDates();

  const currentMonthYear = currentDate.format("MMMM YYYY");

  return (
    <div className="pt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-black font-metropolis">
          {currentMonthYear}
        </h2>
        <div className="space-x-3">
          <button onClick={handlePreviousWeek}>
            <RiArrowLeftLine className="text-textColor2" />
          </button>
          <button onClick={handleNextWeek}>
            <RiArrowRightLine className="text-textColor2" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4">
        {weekDates.map((date, index) => (
          <div key={index} className="text-center">
            <span className="uppercase text-xs font-semibold text-textColor2 font-metropolis">
              {date.format("ddd")}
            </span>
          </div>
        ))}
      </div>

      {/* Display Corresponding Dates */}
      <div className="grid grid-cols-7 gap-4 mt-2 pb-5 ">
        {weekDates.map((date, index) => (
          <div
            key={index}
            className={`text-center text-xs w-7 ml-5 h-7  flex-center ${
              date.isSame(today, "day")
                ? "bg-textColor3 rounded-full text-white"
                : "text-black font-semibold"
            }`}
          >
            {date.format("DD")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
