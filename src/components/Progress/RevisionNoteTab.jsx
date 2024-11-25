"use client";

import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

const RevisionNoteTab = ({ tabData }) => {
  const [activeTab, setActiveTab] = useState(tabData[0].name);

  return (
    <div className="p-4">
      <div className="flex justify-between ">
        {tabData.map((tab) => (
          <button
            key={tab.name}
            className={`px-3 py-1.5 rounded-md ${
              activeTab === tab.name
                ? "bg-sideBarColor text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="mt-6 text-sm">
        <h1 className="">Currently Studying:</h1>
        <ul className="list-disc ps-8 mt-4">
          <li>
            Principles of Chemistry &gt; Formulae &gt;{" "}
            <span className="text-textBlue">Calculate Percentage Yield</span>
          </li>
        </ul>

        <div className="flex items-center gap-2 mt-5">
          <p>
            Recently studied: The periodic{" "}
            <span className="text-textBlue">table</span>
          </p>{" "}
          <FaInfoCircle size={18} className="text-gray-600 " />
        </div>
      </div>
    </div>
  );
};

export default RevisionNoteTab;
