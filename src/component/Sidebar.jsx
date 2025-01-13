import React from "react";
import {
  FaTachometerAlt,
  FaSignInAlt,
  FaUserPlus,
  FaPalette,
  FaFont,
  FaFileAlt,
  FaQuestionCircle,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="hidden sm:block lg:fixed top-0 left-0 h-full my-16 bg-gray-800 text-gray-300 w-64 shadow-lg z-40">
      {/* Logo Section */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
        <div className="flex items-center">
          <div className="text-blue-500 text-3xl font-bold">Mantis</div>
          <span className="ml-2 text-gray-400 text-sm">v1.3.0</span>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="p-4">
        {/* Navigation */}
        <div className="mb-4">
          <h3 className="text-gray-400 uppercase text-sm font-bold mb-2">
            Navigation
          </h3>
          <ul>
            <li className="flex items-center text-blue-500 bg-blue-100 rounded-md px-3 py-2 cursor-pointer">
              <FaTachometerAlt className="mr-2" />
              Dashboard
            </li>
          </ul>
        </div>

        {/* Authentication */}
        <div className="mb-4">
          <h3 className="text-gray-400 uppercase text-sm font-bold mb-2">
            Authentication
          </h3>
          <ul>
            <li className="flex items-center hover:text-white px-3 py-2 cursor-pointer">
              <FaSignInAlt className="mr-2" />
              Login
            </li>
            <li className="flex items-center hover:text-white px-3 py-2 cursor-pointer">
              <FaUserPlus className="mr-2" />
              Register
            </li>
          </ul>
        </div>

        {/* Utilities */}
        <div className="mb-4">
          <h3 className="text-gray-400 uppercase text-sm font-bold mb-2">
            Utilities
          </h3>
          <ul>
            <li className="flex items-center hover:text-white px-3 py-2 cursor-pointer">
              <FaFont className="mr-2" />
              Typography
            </li>
            <li className="flex items-center text-blue-500 bg-blue-100 rounded-md px-3 py-2 cursor-pointer">
              <FaPalette className="mr-2" />
              Color
            </li>
            <li className="flex items-center hover:text-white px-3 py-2 cursor-pointer">
              <FaFileAlt className="mr-2" />
              Shadow
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="mb-4">
          <h3 className="text-gray-400 uppercase text-sm font-bold mb-2">
            Support
          </h3>
          <ul>
            <li className="flex items-center hover:text-white px-3 py-2 cursor-pointer">
              <FaFileAlt className="mr-2" />
              Sample Page
            </li>
            <li className="flex items-center hover:text-white px-3 py-2 cursor-pointer">
              <FaQuestionCircle className="mr-2" />
              Documentation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
