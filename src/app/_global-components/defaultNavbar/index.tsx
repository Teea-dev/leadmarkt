"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

const Nav = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="w-full">
      {showBanner && (
        <div className="w-full bg-teal-700 text-white py-2 px-4 flex justify-center items-center relative">
          <span className="text-sm text-center">
            🎉 Save 20% on launch. Join the waitlist!
          </span>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 hover:opacity-80"
            aria-label="Close banner"
          >
            <X size={16} />
          </button>
        </div>
      )}

      <nav className="w-full px-4 md:px-20 py-4 flex flex-wrap justify-between items-center bg-white relative">
        <div className="flex items-center space-x-2">
          <div className="text-white px-3 py-1 rounded">
            <Image
              src="/images/logo.webp"
              alt="Leadmarkt logo"
              width={100}
              height={30}
              className="object-contain"
            />
          </div>
        </div>

        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {["Home", "Benefits", "Features", "About"].map((item) => (
              <Link
                key={item}
                href={`/`}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <Button className="hidden md:flex bg-teal-700 hover:bg-teal-800 text-white px-6">
          Join Waitlist
        </Button>

        {mobileMenuOpen && (
            <div className="md:hidden w-full mt-4 bg-white border-t">
            <div className="flex flex-col space-y-4 py-4">
              {["Home", "Benefits", "Features", "About"].map((item) => (
              <Link
                key={item}
                href={`/`}
                className="text-gray-600 hover:text-gray-900 transition-colors px-4 py-2 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
              ))}
              <div className="px-4">
              <Button className="bg-teal-700 hover:bg-teal-800 text-white w-auto">
                Join Waitlist
              </Button>
              </div>
            </div>
            </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
