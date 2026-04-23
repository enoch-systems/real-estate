"use client";

import { IoMdNotifications } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { SlEqualizer } from "react-icons/sl";

export default function Header() {
  return (
    <div className="px-4 pt-4 pb-2 max-w-8xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="flex flex-col">
            <img src="/logo.png" alt="Logo" className="h-12 w-12 mb-0" />
            <span className="text-sm font-semibold -mt-1">
              <span className="text-yellow-500">Rex</span>
              <span className="bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">Gold Listings</span>
            </span>
          </div>
        </div>
        <div className="relative">
          <IoMdNotifications className="text-gray-700 text-2xl" />
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </div>
      </div>
      
      {/* Search Bar */}
      <div className="flex items-center space-x-2 max-w-2xl mx-auto">
        <div className="flex-1 relative">
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none"
          />
        </div>
        <button className="p-3 bg-gray-100 rounded-full">
          <SlEqualizer className="text-gray-700 text-xl" />
        </button>
      </div>
    </div>
  );
}
