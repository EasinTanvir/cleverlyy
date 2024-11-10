import { useState } from "react";

const { FaChevronDown } = require("react-icons/fa");

export const Dropdown = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSession, setSelectedSession] = useState("");

  const years = ["2024", "2023", "2022", "2021", "2020"];
  const sessions = ["Jan/Feb", "May/June", "Oct/Nov"];

  return (
    <div className="flex  flex-col gap-4 mt-5">
      {/* Year Dropdown */}
      <div className="relative w-40">
        <select
          className="w-full px-4 py-1  bg-white border border-borderColor2 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="" disabled>
            Select Year
          </option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
      </div>

      {/* Session Dropdown */}
      <div className="relative w-40">
        <select
          className="w-full px-4 py-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={selectedSession}
          onChange={(e) => setSelectedSession(e.target.value)}
        >
          <option value="" disabled>
            Select Session
          </option>
          {sessions.map((session) => (
            <option key={session} value={session}>
              {session}
            </option>
          ))}
        </select>
        <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );
};
