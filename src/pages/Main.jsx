import React from 'react';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ChartComponent from '../component/ChartComponent';
import IncomeBarChart from '../component/IncomeBarChart';
import ExpensePieChart from '../component/ExpensePieChart';
import OrderTable from '../component/OrderTable';
import SalesReport from '../component/SalesReport';
import {Typewriter} from 'react-simple-typewriter'
import Footer from '../component/Footer';



function Main() {

  const data = [
    {
      id: 1,
      title: 'Total Page Views',
      totalCount: '423,363',
      growthPercentage: '100%',
      additionalInfo: 'You made an extra 35,000 this year',
    },
    {
      id: 2,
      title: 'Total Revenue',
      totalCount: '$12,345,678',
      growthPercentage: '15%',
      additionalInfo: 'You earned an additional $1,234,567 this quarter',
    },
    {
      id: 3,
      title: 'Total Users',
      totalCount: '1,234,567',
      growthPercentage: '10%',
      additionalInfo: 'You gained 120,000 new users this month',
    },
    {
      id: 4,
      title: 'Total Orders',
      totalCount: '543,210',
      growthPercentage: '5%',
      additionalInfo: 'You processed 25,000 new orders this week',
    },
    {
      id: 5,
      title: 'Total Active Subscriptions',
      totalCount: '123,456',
      growthPercentage: '8%',
      additionalInfo: 'You gained 10,000 new subscriptions last month',
    },
  ];

  return (
    <div className="relative mt-24 my-10 bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      
      <h3 className="text-2xl font-bold text-red-500 bg-gray-800 p-4 text-center capitalize shadow-md rounded-md mx-1">
      <Typewriter
        words={['Dashboard Overview']}
        loop={true} // This makes the typewriter effect repeat indefinitely
        cursor
        cursorStyle='|' // Custom cursor style
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </h3>

      {/* Cards Section */}
      <div className="bg-gray-100 dark:bg-gray-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 overflow-auto">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:scale-105 transform transition-transform duration-300 ease-in-out"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">
              {item.title}
            </h3>

            {/* Stats Section */}
            <div className="flex items-center justify-between mb-4">
              {/* Total Count */}
              <h1 className="text-3xl font-bold text-blue-500">{item.totalCount}</h1>

              {/* Growth Indicator */}
              <div className="flex items-center space-x-2 text-green-600 bg-green-100 p-2 rounded-full">
                <ArrowUpwardIcon fontSize="small" />
                <p className="font-semibold">{item.growthPercentage}</p>
              </div>
            </div>

            {/* Additional Info */}
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {item.additionalInfo}
            </p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <h3 className="text-2xl font-bold text-red-500 bg-gray-800 p-4 text-center capitalize shadow-md rounded-md mx-1">
      <Typewriter
        words={['Income Overview Bar Chart','Ev Performance Trends Line Chart','Expenses Breakdown Pie Chart']}
        loop={true} // This makes the typewriter effect repeat indefinitely
        cursor
        cursorStyle='|' // Custom cursor style
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </h3>
      <div className="bg-gray-100 dark:bg-gray-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 overflow-auto">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg h-fit">
          <IncomeBarChart />
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg h-fit">
          <ChartComponent />
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg h-fit">
          <ExpensePieChart />
        </div>
      </div>

      {/* Other Sections */}
      <h3 className="text-2xl font-bold text-red-500 bg-gray-800 p-4 text-center capitalize shadow-md rounded-md mx-1 my-2">
      <Typewriter
        words={['Product Status']}
        loop={true} // This makes the typewriter effect repeat indefinitely
        cursor
        cursorStyle='|' // Custom cursor style
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </h3>
      <div className="bg-gray-100 dark:bg-gray-900">
        <OrderTable />
      </div>

      <div>
      <h3 className="text-2xl font-bold text-red-500 bg-gray-800 p-4 text-center capitalize shadow-md rounded-md mx-1 my-2">
      <Typewriter
        words={['Sales Report ']}
        loop={true} // This makes the typewriter effect repeat indefinitely
        cursor
        cursorStyle='|' // Custom cursor style
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </h3>
        <SalesReport />
      </div>

      <div className="mx-20">
      <h3 className="text-2xl font-bold text-red-500 bg-gray-800 p-4 text-center capitalize shadow-md rounded-md mx-1 my-2">
      <Typewriter
        words={['Ev Performance Trends']}
        loop={true} // This makes the typewriter effect repeat indefinitely
        cursor
        cursorStyle='|' // Custom cursor style
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </h3>
        <ChartComponent />
      </div>
      <div className='m-2'>
        <Footer/>
      </div>
      
    </div>
  );
}

export default Main;
