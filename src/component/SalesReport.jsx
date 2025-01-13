import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components of chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesReport = () => {
  // Sales data for the report (Income, Cost of Sales, Net Profit)
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // Months
    datasets: [
      {
        label: 'Income ($)',
        data: [5000, 6000, 7000, 8000, 10000, 12000, 14000, 16000, 18000, 20000, 22000, 25000], // Income data
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue color for Income
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Cost of Sales ($)',
        data: [3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500], // Cost of Sales data
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Red color for Cost of Sales
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Net Profit ($)',
        data: [2000, 2500, 3000, 3500, 5000, 6500, 8000, 9500, 11000, 12500, 14000, 16500], // Net Profit data
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Green color for Net Profit
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Sales Report (Income, Cost of Sales, and Net Profit)', // Title of the chart
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `$${tooltipItem.raw.toLocaleString()}`; // Formatting sales amount
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Start y-axis from zero
      },
    },
  };

  return (
    <div className="p-6 m-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Sales Report</h2>
      <Bar data={salesData} options={options} />
    </div>
  );
};

export default SalesReport;
