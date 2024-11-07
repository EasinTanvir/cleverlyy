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

const BarChartComponent = ({ dataValues }) => {
  // Define labels and data structure for the chart
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
        barThickness: 13,
      },
      {
        label: "Chapterwise QP",
        data: dataValues.map((item) => item.chapterwiseQP),
        backgroundColor: "#8878f9",
        barThickness: 13,
      },
      {
        label: "Yearwise QP",
        data: dataValues.map((item) => item.yearwiseQP),
        backgroundColor: "#5449be",
        barThickness: 13,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChartComponent;
