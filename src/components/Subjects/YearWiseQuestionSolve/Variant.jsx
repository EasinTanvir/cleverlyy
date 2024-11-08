"use client";
const dummyData = {
  2014: {
    "Jan/Feb": {
      "Variant-1": [
        {
          paper_id: 1701,
          paper: "Paper 1",
          type: "Markscheme",
          name: "9701_w14_ms_11.pdf",
          file_url: "https://your-s3-url/path/to/paper1.pdf",
        },
        {
          paper_id: 1702,
          paper: "Paper 2",
          type: "Question Paper",
          name: "9701_w14_qp_12.pdf",
          file_url: "https://your-s3-url/path/to/paper2.pdf",
        },
      ],
      "Variant-2": [
        {
          paper_id: 1703,
          paper: "Paper 55",
          type: "Markscheme",
          name: "9701_w14_ms_21.pdf",
          file_url: "https://your-s3-url/path/to/paper3.pdf",
        },
        {
          paper_id: 1704,
          paper: "Paper 2",
          type: "Question Paper",
          name: "9701_w14_qp_22.pdf",
          file_url: "https://your-s3-url/path/to/paper4.pdf",
        },
      ],
    },
    "May/June": {
      "Variant-1": [
        {
          paper_id: 1707,
          paper: "Paper 1",
          type: "Markscheme",
          name: "9701_s14_ms_11.pdf",
          file_url: "https://your-s3-url/path/to/paper5.pdf",
        },
        {
          paper_id: 1710,
          paper: "Paper 2",
          type: "Question Paper",
          name: "9701_s14_qp_12.pdf",
          file_url: "https://your-s3-url/path/to/paper6.pdf",
        },
      ],
      "Variant-2": [
        {
          paper_id: 1711,
          paper: "Paper 1",
          type: "Markscheme",
          name: "9701_s14_ms_21.pdf",
          file_url: "https://your-s3-url/path/to/paper7.pdf",
        },
        {
          paper_id: 1712,
          paper: "Paper 2",
          type: "Question Paper",
          name: "9701_s14_qp_22.pdf",
          file_url: "https://your-s3-url/path/to/paper8.pdf",
        },
      ],
    },
    "Oct/Nov": {
      "Variant-1": [
        {
          paper_id: 1721,
          paper: "Paper 1",
          type: "Markscheme",
          name: "9701_f14_ms_11.pdf",
          file_url: "https://your-s3-url/path/to/paper9.pdf",
        },
        {
          paper_id: 1722,
          paper: "Paper 2",
          type: "Question Paper",
          name: "9701_f14_qp_12.pdf",
          file_url: "https://your-s3-url/path/to/paper10.pdf",
        },
      ],
      "Variant-2": [
        {
          paper_id: 1723,
          paper: "Paper 1",
          type: "Markscheme",
          name: "9701_f14_ms_21.pdf",
          file_url: "https://your-s3-url/path/to/paper11.pdf",
        },
        {
          paper_id: 1724,
          paper: "Paper 2",
          type: "Question Paper",
          name: "9701_f14_qp_22.pdf",
          file_url: "https://your-s3-url/path/to/paper12.pdf",
        },
      ],
    },
  },
  2015: {
    // Add similar data structure for each year/session/variant
  },
  // Add more years if needed
};

import React, { useState } from "react";

const PaperViewer = () => {
  const [selectedSession, setSelectedSession] = useState("Jan/Feb");
  const data = dummyData["2014"];

  const handleTabClick = (session) => {
    setSelectedSession(session);
  };

  return (
    <div className="p-5">
      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        {Object.keys(data).map((session) => (
          <button
            key={session}
            onClick={() => handleTabClick(session)}
            className={`px-4 py-2 rounded ${
              selectedSession === session
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {session}
          </button>
        ))}
      </div>

      {/* Variants Display */}
      <div className="flex space-x-6">
        {Object.entries(data[selectedSession]).map(([variant, papers]) => (
          <div key={variant} className="p-4 bg-gray-100 rounded shadow w-1/3">
            <h2 className="text-lg font-semibold mb-2">{variant}</h2>
            <ul>
              {papers.map((paper) => (
                <li
                  key={paper.paper_id}
                  className="flex items-center justify-between mb-2"
                >
                  <span>{paper.paper}</span>
                  <a
                    href={paper.file_url}
                    className="text-blue-500 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaperViewer;
