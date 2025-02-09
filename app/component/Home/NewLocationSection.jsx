import React from "react";
import Link from "next/link";
const CityListSection = ({ cityData, title }) => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
      <div className="container mx-auto px-6">
        <h4 className="text-3xl font-bold text-center text-gray-900 mb-8 relative">
          {title}
          <span className="block w-20 h-1 bg-blue-600 mt-3 mx-auto"></span>
        </h4>
        
        <div className="bg-white shadow-xl rounded-xl p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cityData.map((city, index) => (
              <Link
                key={index}
                href={`/${city.toLowerCase().replace(/\s+/g, '-')}`}
                as={`/${city.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center justify-center bg-blue-500 text-white text-lg font-semibold p-4 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityListSection;
