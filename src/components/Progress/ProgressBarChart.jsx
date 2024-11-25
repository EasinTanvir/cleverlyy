import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the BarChartComponent with SSR disabled
const BarChartComponent = dynamic(() => import("../BarChart"), { ssr: false });

const ProgressBarChart = ({
  barchartData,
  selectedBoard,
  setSelectedBoard,
}) => {
  const filterDataByBoard = (boardName) => {
    const filteredBoard = barchartData.find(
      (board) => board.board_name === boardName
    );

    const labels = [];
    const chartData = [];

    if (filteredBoard) {
      filteredBoard.exams.forEach((exam) => {
        exam.subjects.forEach((subject, i) => {
          labels.push(`${subject.subject_name}`);
          chartData.push({
            revision_progress: subject.revision_progress || 0,
            chapterwise_progress: subject.chapterwise_progress || 0,
            yearwise_progress: subject.yearwise_progress || 0,
          });
        });
      });
    }

    return { labels, chartData };
  };

  const { labels, chartData } = filterDataByBoard(selectedBoard);

  return (
    <BarChartComponent dataValues={chartData} labels={labels} thickness={25} />
  );
};

export default ProgressBarChart;
