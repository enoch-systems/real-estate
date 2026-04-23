"use client";

import { useState } from "react";
import Header from "@/components/Header";
import PropertyCategories from "@/components/PropertyCategories";
import RecommendedProperties from "@/components/RecommendedProperties";
import NearbyProperties from "@/components/NearbyProperties";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("House");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PropertyCategories 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <RecommendedProperties selectedCategory={selectedCategory} />
      <NearbyProperties selectedCategory={selectedCategory} />
    </div>
  );
}
