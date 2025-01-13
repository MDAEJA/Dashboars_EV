import React from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Main from "./Main";


function Dashboard() {
  return (
    <>
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 dark:bg-gray-900">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div>
          <Header />
        </div>

        {/* Content Area */}
        <div className="bg-gray-100 dark:bg-gray-900">
            <Main/>
           
        </div>
       
        
      </div>
     
    </div>
   {/* <Footer/> */}
   
    </>
  );
}

export default Dashboard;
