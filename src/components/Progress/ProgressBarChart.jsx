import React from "react";
import BarChartComponent from "../BarChart";

const dummyData = [
  { revisionNotes: 12, chapterwiseQP: 8, yearwiseQP: 15 },
  { revisionNotes: 14, chapterwiseQP: 10, yearwiseQP: 20 },
  { revisionNotes: 9, chapterwiseQP: 6, yearwiseQP: 11 },
  { revisionNotes: 16, chapterwiseQP: 12, yearwiseQP: 18 },
  { revisionNotes: 10, chapterwiseQP: 7, yearwiseQP: 13 },
  { revisionNotes: 13, chapterwiseQP: 9, yearwiseQP: 17 },
];

const ProgressBarChart = () => {
  return <BarChartComponent dataValues={dummyData} thickness={32} />;
};

export default ProgressBarChart;
