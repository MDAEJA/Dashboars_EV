import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6  w-full z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          {/* Left side */}
          <div>
            <h4 className="text-xl font-semibold">My App</h4>
            <p className="text-sm text-gray-400">© 2025 My App. All rights reserved.</p>
          </div>

          {/* Center */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-sm hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-gray-300">Terms of Service</a>
            <a href="#" className="text-sm hover:text-gray-300">Support</a>
            <a href="#" className="text-sm hover:text-gray-300">Contact Us</a>
          </div>

          {/* Right side (social media links or other elements) */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i> {/* Font Awesome icon */}
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i> {/* Font Awesome icon */}
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin-in"></i> {/* Font Awesome icon */}
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i> {/* Font Awesome icon */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
