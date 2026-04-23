"use client";

import { IoHome, IoHomeOutline, IoBusinessOutline, IoStorefrontOutline } from "react-icons/io5";
import { BsHouseHeartFill } from "react-icons/bs";

interface PropertyCategoriesProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string) => void;
}

const categories = [
  { id: "House", icon: IoHome, label: "House" },
  { id: "Villa", icon: BsHouseHeartFill, label: "Villa" },
  { id: "Apartment", icon: IoBusinessOutline, label: "Apartment" },
  { id: "Bungalow", icon: IoHomeOutline, label: "Bungalow" },
  { id: "Farmhouse", icon: IoStorefrontOutline, label: "Farmhouse" },
];

export default function PropertyCategories({ selectedCategory, onSelectCategory }: PropertyCategoriesProps) {
  return (
    <div className="px-4 py-4 max-w-8xl mx-auto">
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide justify-start lg:justify-center lg:space-x-12">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = selectedCategory === category.id;
          
          return (
            <div 
              key={category.id}
              className="flex flex-col items-center min-w-fit cursor-pointer"
              onClick={() => onSelectCategory(category.id)}
            >
              <div className={`p-3 rounded-full mb-2 transition-colors ${isActive ? "bg-blue-100" : "bg-gray-100"}`}>
                <Icon className={`${isActive ? "text-blue-600" : "text-gray-600"} text-2xl`} />
              </div>
              <span className={`text-xs ${isActive ? "text-blue-600 font-medium" : "text-gray-700"}`}>{category.label}</span>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
