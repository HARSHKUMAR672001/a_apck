"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMdMenu, IoMdCloseCircle } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";
import one from '../../../public/hhh.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/who-we-are", label: "Who We Are" },
    { href: "/services", label: "Services" },
    { href: "/locations", label: "Locations" },
  ];

  return (
    <header className="bg-white shadow-md">
      <nav className="mx-auto flex w-full max-w-screen-2xl items-center justify-between p-4 lg:p-6">
        {/* Desktop & Tablet Menu (md & lg) */}
        <div className="hidden md:flex w-full items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <img src={one.src} alt="A Pack Packers and Movers" className="h-12" />
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg hover:font-semibold leading-6 flex items-center transition-all duration-300 ${
                  pathname === link.href ? "text-gray-900 font-semibold" : "text-black"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Call Button */}
          <div className="flex items-center rounded-md bg-gradient-to-b from-blue-400 to-blue-600 px-6 py-2 text-lg font-semibold text-white shadow-lg hover:bg-blue-500 hover:scale-105 transition-all duration-300">
            <FaPhoneAlt className="text-white mr-2" size={20} />
            <a href="tel:+91 8688815001" className="text-white">
              +91 8688815001
            </a>
          </div>
        </div>

        {/* Mobile Menu Button (Only Visible on Small Screens) */}
        <div className="flex items-center justify-between w-full md:hidden">
        <Link href="/">
            <img src={one.src} alt="A Pack Packers and Movers" className="h-12" />
          </Link>
          <button
            onClick={toggleMobileMenu}
            type="button"
            className={`-m-2 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 transition-transform duration-300 ${
              isMobileMenuOpen ? "rotate-90" : "rotate-0"
            }`}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <IoMdMenu className={`h-6 w-6 text-black ${isMobileMenuOpen ? "hidden" : "block"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-25">
          <div
            className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 shadow-lg transform transition-transform duration-300 ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between">
              {/* Mobile Logo */}
              <Link href="/">
                <img src={one.src} alt="A Pack Packers and Movers" className="h-12" />
              </Link>

              {/* Close Button */}
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-600 transition-transform duration-300"
              >
                <span className="sr-only">Close menu</span>
                <IoMdCloseCircle className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="mt-6 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={toggleMobileMenu}
                  className={`block px-3 py-2 rounded-lg text-base leading-6 transition-all duration-300 ${
                    pathname === link.href ? "text-blue-600" : "text-gray-900"
                  } hover:bg-gray-50`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Call Button in Mobile Menu */}
              <div className="flex items-center rounded-md bg-gradient-to-b from-blue-400 to-blue-600 px-6 py-2 text-lg font-semibold text-white shadow-lg hover:bg-blue-500 hover:scale-105 transition-all duration-300">
                <FaPhoneAlt className="text-white mr-2" size={20} />
                <a href="tel:+91 8688815001" className="text-white">
                  +91 8688815001
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
