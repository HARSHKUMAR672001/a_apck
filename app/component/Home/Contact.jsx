"use client";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaCommentDots,
} from "react-icons/fa";
import { toast } from "react-toastify";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newData = {
      name: formData.name,
      phone: formData.phone,
      date: new Date().toISOString(),
      destination: formData.location, // Fixed incorrect reference
      message: formData.message,
    };

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Added headers
        },
        body: JSON.stringify(newData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json(); // Parse JSON response
      toast.success(result.message || "Form submitted successfully");

      // Reset form after successful submission
      setFormData({
        name: "",
        phone: "",
        location: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
      <div className="max-w-7xl w-full mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Get in Touch
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Contact Details */}
          <div className="md:w-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6 md:mb-0">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text " >A Packers and Movers</h1>
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">
              Contact Information
            </h3>
            {[
              { label: "Toll Free", number: "8688815001" },
              { label: "Toll Free", number: "9318446470" },
              
            ].map((contact, index) => (
              <div key={index} className="flex items-start mb-4">
                <FaPhoneAlt className="text-blue-500 dark:text-blue-400 mr-2" />
                <p className="text-gray-600 dark:text-gray-300">
                  {contact.label}: <strong>{contact.number}</strong>
                </p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit}>
              {[
                { name: "name", type: "text", placeholder: "Your Name", icon: <FaUser /> },
                { name: "phone", type: "text", placeholder: "Your Phone", icon: <FaPhone /> },
                { name: "location", type: "text", placeholder: "Your Location", icon: <FaMapMarkerAlt /> },
              ].map((input, index) => (
                <div key={index} className="mb-4 flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                  <span className="text-blue-500 dark:text-blue-400 mx-2">{input.icon}</span>
                  <input
                    type={input.type}
                    name={input.name}
                    placeholder={input.placeholder}
                    value={formData[input.name]}
                    onChange={handleChange}
                    className="w-full h-12 px-4 border-0 bg-transparent text-gray-700 dark:text-white dark:bg-gray-800 focus:outline-none "
                    required
                  />
                </div>
              ))}
              <div className="mb-4 flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                <FaCommentDots className="text-blue-500 dark:text-blue-400 mx-2" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-24 px-4 border-0 bg-transparent text-gray-700 dark:text-white dark:bg-gray-800 focus:outline-none "
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full h-12 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
