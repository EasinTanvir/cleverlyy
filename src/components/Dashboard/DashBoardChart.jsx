"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashBoardChart = ({ dataValues, labels, thickness = 13 }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Revision Progress",
        data: dataValues.map((item) => item.revision_progress),
        backgroundColor: "#cac2ff",
        barThickness: thickness,
      },
      {
        label: "Chapterwise Progress",
        data: dataValues.map((item) => item.chapterwise_progress),
        backgroundColor: "#8878f9",
        barThickness: thickness,
      },
      {
        label: "Yearwise Progress",
        data: dataValues.map((item) => item.yearwise_progress),
        backgroundColor: "#5449be",
        barThickness: thickness,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `${value}%`,
        },
        grid: {
          display: true,
          color: "#e0e0e0",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    barPercentage: 0.9,
    categoryPercentage: 0.8,
  };

  return <Bar data={data} options={options} />;
};

export default DashBoardChart;
