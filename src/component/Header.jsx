import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`flex justify-between items-center ${
        darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
      } p-4 shadow-md transition duration-300 fixed top-0 left-0 w-full z-50`}
    >
      {/* Logo and Menu Icon */}
      <div className="flex items-center space-x-2">
        <MenuIcon fontSize="large" className="cursor-pointer lg:hidden" />
        <h1 className="text-xl font-bold">MyApp</h1>
      </div>

      {/* Search Bar - Hidden on small screens */}
      <div className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2 w-full max-w-md lg:max-w-lg lg:block">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none flex-1 text-gray-800 dark:text-gray-200"
        />
        {/* <SearchIcon className="cursor-pointer text-gray-500 dark:text-gray-300" /> */}
      </div>

      {/* Action Icons */}
      <div className="flex items-center space-x-4">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1077/1077012.png"
          alt="Profile"
          className="w-10 h-10 p-1 rounded-full border border-gray-300"
        />
        <NotificationsIcon className="cursor-pointer hover:text-gray-400" />
        <AccountCircleIcon className="cursor-pointer hover:text-gray-400" />
        <div
          className="cursor-pointer hover:text-gray-400"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <Brightness7Icon titleAccess="Light Mode" />
          ) : (
            <Brightness4Icon titleAccess="Dark Mode" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
