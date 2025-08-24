import React from "react";
import userAvatar from "../assets/profile_pic.png"; 
import logo from "../assets/logo_qpay.png"; 

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
      {/* Left: Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Bharat Connect" className="h-10" />
      </div>

      {/* Right: User info */}
      <div className="flex items-center gap-3">
        <img
          src={userAvatar}
          alt="User Avatar"
          className="w-9 h-9 rounded-full"
        />
        <span className="text-gray-700 font-medium">Hello, Thomas Shelby</span>
        <svg
          className="w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
