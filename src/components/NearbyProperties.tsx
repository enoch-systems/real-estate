"use client";

import PropertyCard from "./PropertyCard";

interface NearbyPropertiesProps {
  selectedCategory: string | null;
}

export default function NearbyProperties({ selectedCategory }: NearbyPropertiesProps) {
  const properties = [
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
      title: "Bessie Cooper Property",
      location: "8502 Preston Rd. Inglewood,",
      price: "₦1,000,000 /Month",
      imageHeight: "h-40 md:h-56 lg:h-64",
    },
    {
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop",
      title: "Darrell Steward Property",
      location: "Connecticut 35624",
      price: "₦1,000,000 /Month",
      imageHeight: "h-40 md:h-56 lg:h-64",
    },
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
      title: "Floyd Miles Property",
      location: "2118 Thornridge Cir. Syracuse,",
      price: "₦1,300,000 /Month",
      imageHeight: "h-40 md:h-56 lg:h-64",
    },
    {
      image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=400&fit=crop",
      title: "Ronald Richards Property",
      location: "2715 Ash Dr. San Jose,",
      price: "₦1,100,000 /Month",
      imageHeight: "h-40 md:h-56 lg:h-64",
    },
  ];

  // Show properties only when House is selected
  const filteredProperties = selectedCategory === "House" ? properties : [];

  return (
    <div className="px-4 py-4 max-w-8xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Nearby Property</h2>
        <span className="text-blue-600 text-sm">See all</span>
      </div>
      
      {filteredProperties.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p>No properties found for this category</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {filteredProperties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      )}
    </div>
  );
}
