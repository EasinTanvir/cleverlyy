"use client";
import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Tooltip as MuiTooltip } from "@mui/material"; // MUI Tooltip
import { FaSearchPlus, FaSearchMinus, FaUndo } from "react-icons/fa"; // React Icons

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

const BarChartComponent = ({ dataValues, labels, thickness = 13 }) => {
  const chartRef = useRef(null); // Reference to the chart instance

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
      title: {
        display: true,
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true, // Enable mouse wheel zoom
          },
          pinch: {
            enabled: true, // Enable pinch zoom on touch devices
          },
          mode: "x",
        },
        pan: {
          enabled: true,
          mode: "x",
          speed: 100,
        },
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

  // Zoom in function
  const zoomIn = () => {
    const chart = chartRef.current;
    if (chart) {
      chart.zoom(1.1); // Zoom in by 10%
    }
  };

  // Zoom out function
  const zoomOut = () => {
    const chart = chartRef.current;
    if (chart) {
      chart.zoom(0.9); // Zoom out by 10%
    }
  };

  // Reset zoom function
  const resetZoom = () => {
    const chart = chartRef.current;
    if (chart) {
      chart.resetZoom();
    }
  };

  return (
    <div style={{ position: "relative", height: "480px" }}>
      <div className="flex justify-center gap-5">
        <MuiTooltip title="Zoom In">
          <button
            onClick={zoomIn}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <FaSearchPlus size={24} color="#4caf50" />
          </button>
        </MuiTooltip>

        <MuiTooltip title="Zoom Out">
          <button
            onClick={zoomOut}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <FaSearchMinus size={24} color="#f44336" />
          </button>
        </MuiTooltip>

        {/* Reset Zoom */}
        <MuiTooltip title="Reset Zoom">
          <button
            onClick={resetZoom}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <FaUndo size={24} color="#2196f3" />
          </button>
        </MuiTooltip>
      </div>
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default BarChartComponent;
