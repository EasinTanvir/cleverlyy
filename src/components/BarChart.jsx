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

const BarChartComponent = ({ dataValues, thickness = 13 }) => {
  const data = {
    labels: [
      "Mathematics",
      "English",
      "Physics",
      "Chemistry",
      "Biology",
      "History",
    ],
    datasets: [
      {
        label: "Revision Notes",
        data: dataValues.map((item) => item.revisionNotes),
        backgroundColor: "#cac2ff",
        barThickness: thickness,
      },
      {
        label: "Chapterwise QP",
        data: dataValues.map((item) => item.chapterwiseQP),
        backgroundColor: "#8878f9",
        barThickness: thickness,
      },
      {
        label: "Yearwise QP",
        data: dataValues.map((item) => item.yearwiseQP),
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

export default BarChartComponent;
