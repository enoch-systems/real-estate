"use client";

import PropertyCard from "./PropertyCard";

interface RecommendedPropertiesProps {
  selectedCategory: string | null;
}

export default function RecommendedProperties({ selectedCategory }: RecommendedPropertiesProps) {
  const properties = [
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
      title: "Mark Willson Property",
      location: "Dr. San Jose, South Dakota 83475",
      price: "₦1,900,000 /Month",
    },
    {
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600&h=400&fit=crop",
      title: "Eleanor Pena Property",
      location: "1901 Thornridge Cir. Shilo 810",
      price: "₦1,200,000 /Month",
    },
    {
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop",
      title: "Jerome Bell Property",
      location: "2464 Royal Ln. Mesa, New Jersey",
      price: "₦1,500,000 /Month",
    },
    {
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop",
      title: "Kristin Watson Property",
      location: "3890 Ranchview Dr. Richardson,",
      price: "₦1,800,000 /Month",
    },
  ];

  // Show properties only when House is selected
  const filteredProperties = selectedCategory === "House" ? properties : [];

  return (
    <div className="px-4 py-4 max-w-8xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Recommended Property</h2>
        <span className="text-blue-600 text-sm">See all</span>
      </div>
      
      {filteredProperties.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p>No properties found for this category</p>
        </div>
      ) : (
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4">
          {filteredProperties.map((property, index) => (
            <div key={index} className="min-w-[280px] md:min-w-[320px]">
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
