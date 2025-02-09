import React from "react";

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl w-full px-6 py-16 sm:py-24 lg:py-32">
        <div className="relative isolate overflow-hidden bg-blue-500 dark:bg-gray-800 px-6 pt-12 sm:pt-16 shadow-xl rounded-2xl sm:px-16 md:pt-20 lg:flex lg:gap-x-16 lg:px-20 lg:pt-0 transition-transform duration-500 hover:scale-105">
          
          {/* Background Gradient */}
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[60rem] w-[80rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx="512" cy="512" r="512" fill="url(#white-gradient)" fillOpacity="0.5"></circle>
            <defs>
              <radialGradient id="white-gradient">
                <stop stopColor="#FFFFFF"></stop>
                <stop offset="1" stopColor="#1E40AF"></stop>
              </radialGradient>
            </defs>
          </svg>

          {/* Text Section */}
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight text-white dark:text-gray-200 sm:text-4xl">
              Stress-Free & Secure Moving Solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-100 dark:text-gray-300">
              We make moving effortless! From packing to delivery, our expert team ensures a smooth and secure transition for your belongings.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-100 dark:text-gray-300">
              Whether relocating nearby or across the country, we provide custom solutions tailored to your needs.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-lg hover:bg-blue-700 hover:text-white hover:scale-105 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get a Free Quote
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2 lg:flex lg:items-center lg:justify-center animate-zoom-in">
            <img
              className="mx-auto lg:max-w-none lg:mx-0 w-full lg:w-[34rem] max-w-[90%] rounded-lg bg-white/5 ring-1 ring-white/10 object-cover"
              src="https://www.newwesterncarrier.in/wp-content/uploads/2023/06/truck.jpeg"
              alt="Moving Services"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
