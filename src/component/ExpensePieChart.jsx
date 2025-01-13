import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensePieChart = () => {
  // Data for the pie chart
  const data = {
    labels: ['Rent', 'Food', 'Transportation', 'Entertainment', 'Utilities'], // Expense categories
    datasets: [
      {
        label: 'Expenses (in $)',
        data: [1200, 800, 300, 400, 200], // Expense amounts
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // Red
          'rgba(54, 162, 235, 0.6)', // Blue
          'rgba(255, 206, 86, 0.6)', // Yellow
          'rgba(75, 192, 192, 0.6)', // Green
          'rgba(153, 102, 255, 0.6)', // Purple
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom', // Legend at the bottom
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.raw;
            const total = data.datasets[0].data.reduce((sum, val) => sum + val, 0);
            const percentage = ((value / total) * 100).toFixed(2);
            return `${tooltipItem.label}: $${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Expense Breakdown
      </h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default ExpensePieChart;
