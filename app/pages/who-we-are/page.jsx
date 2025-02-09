import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Page Header */}
      <section className="bg-blue-600 text-white text-center py-12">
        <h1 className="text-4xl font-bold">About A-pack Package and Movers</h1>
        <p className="mt-4 text-xl">Your trusted portal for relocation services</p>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* About Section */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold text-blue-600">About Us</h2>
              <p className="mt-4 text-lg text-gray-700">
                A-pack Package and Movers is a <strong>packers and movers reference portal</strong> delivered by CREATISOUL, designed to help you find the right relocation service provider for all your needs – home, office, commercial, and industrial relocations.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                We connect customers with verified and affordable service providers, ensuring a hassle-free relocation experience.
              </p>
            </div>
          </div>

          {/* Vision & Mission Section */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold text-blue-600">Our Vision and Mission</h2>
              <p className="mt-4 text-lg text-gray-700">
                With India growing rapidly, people and companies are constantly shifting. Our goal is to help you find the most reliable, affordable, and trustworthy packing and moving companies with ease.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                We are committed to providing a seamless experience and making your relocation process smoother by offering the best providers in minimal time.
              </p>
            </div>
          </div>

        </div>

        <div className="grid gap-12 lg:grid-cols-2 mt-12">

          {/* Why Choose Us Section */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold text-blue-600">Why Choose Us</h2>
              <p className="mt-4 text-lg text-gray-700">
                We ensure that your relocation is both pleasant and affordable. By connecting you with professional and high-quality relocation companies, we help you find the best service without compromising on value.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                Our platform gives you access to verified feedback and reviews, ensuring that you make the right choice every time.
              </p>
            </div>
          </div>

          {/* How to Save Time and Money Section */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold text-blue-600">How to Save Time and Money</h2>
              <p className="mt-4 text-lg text-gray-700">
                Hiring the right professional may seem expensive, but finding the cheapest option may cost you more in the long run. We simplify the process, ensuring you get the best value for your money.
              </p>
            </div>
          </div>

        </div>

        <div className="grid gap-12 mt-12">

          {/* Two Most Effective Ways to Get the Best Deal */}
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-blue-600">Two Most Effective Ways to Get the Best Deal</h2>
            <ol className="list-decimal pl-6 mt-4 text-lg text-gray-700">
              <li className="mt-4">
                <strong>Shortlist Companies</strong> → <strong>Request Quote</strong> → <strong>Compare Charges</strong> → <strong>Hire Professionals</strong>
                <p className="mt-2">
                  Browse company profiles, services, and customer reviews. Get quotes within 24 hours, compare charges, and hire the professional that suits you best.
                </p>
              </li>
              <li className="mt-4">
                <strong>Request Quote</strong> → <strong>Compare Charges</strong> → <strong>Hire Professionals</strong>
                <p className="mt-2">
                  If you're unsure, let us do the work for you. We'll find the best match, send your requirements, and help you compare quotes to make the best decision.
                </p>
              </li>
            </ol>
          </div>
        </div>

      </div>
    </div>
  );
}
