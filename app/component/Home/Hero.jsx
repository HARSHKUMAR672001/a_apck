import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-8 pt-16 dark:bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.specificrelocations.com/wp-content/uploads/2024/01/packers-movers-bangalore.jpg')",
        }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl py-28 sm:py-40 lg:py-48 text-center text-white">
        <h1 className="text-4xl font-extrabold sm:text-6xl animate-fadeIn">
          A Pack Movers
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-200 animate-opacity">
          Click to Get Free Quotes for Relocation Services
        </p>
        <div className="mt-10">
          <Link
            href="/services"
            className="rounded-md bg-gradient-to-b from-blue-400 to-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-500 hover:scale-105 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Our Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
