import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProgressPieChart = ({ chartData }) => {
  const data = {
    labels: ["Complete", "Incomplete", "Not Started"],
    datasets: [
      {
        data: [chartData.complete, chartData.incomplete, chartData.notStarted],
        backgroundColor: ["#2244b4", "#4780c3", "#203a72"],
        hoverBackgroundColor: ["#1e3c91", "#3c6ea6", "#1b335e"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: false,
    },
  };

  return <Pie data={data} options={options} />;
};

export default ProgressPieChart;
