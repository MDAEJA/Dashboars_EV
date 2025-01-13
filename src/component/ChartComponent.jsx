import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const ChartComponent = () => {
  // Example data: Months and metrics
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Months
    datasets: [
      {
        label: 'Battery Range (Miles)',
        data: [250, 260, 270, 290, 310, 320], // Range data over time
        borderColor: 'rgba(54, 162, 235, 1)', // Line color
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Fill color
        tension: 0.3, // Smoothness
        pointRadius: 3, // Point size
        pointBackgroundColor: 'rgba(54, 162, 235, 1)', // Point color
      },
      {
        label: 'Charging Speed (kW)',
        data: [120, 140, 160, 180, 200, 220], // Charging speed over time
        borderColor: 'rgba(255, 99, 132, 1)', // Line color
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Fill color
        tension: 0.3, // Smoothness
        pointRadius: 3, // Point size
        pointBackgroundColor: 'rgba(255, 99, 132, 1)', // Point color
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months', // X-axis title
        },
      },
      y: {
        title: {
          display: true,
          text: 'Metrics', // Y-axis title
        },
      },
    },
  };

  return (
    <div className="p-6  bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
        EV Performance Trends
      </h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
