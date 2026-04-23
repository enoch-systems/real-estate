"use client";

import { MdLocationOn } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  tag?: string;
  imageHeight?: string;
}

export default function PropertyCard({ image, title, location, price, tag = "Home", imageHeight = "h-48 md:h-56 lg:h-64" }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className={`w-full ${imageHeight} object-cover rounded-t-xl`}
        />
        <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-full text-xs font-medium">
          {tag}
        </div>
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full">
          <IoHeartOutline className="text-gray-600 text-lg" />
        </button>
      </div>
      <div className="p-3 md:p-4">
        <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base truncate">{title}</h3>
        <div className="flex items-center text-gray-500 text-xs md:text-sm mb-2">
          <MdLocationOn className="text-xs mr-1 flex-shrink-0" />
          <span className="truncate">{location}</span>
        </div>
        <p className="text-blue-600 font-semibold text-sm md:text-base">{price}</p>
      </div>
    </div>
  );
}
