"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Nav = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="w-full">
      {showBanner && (
        <div className="w-full bg-teal-700 text-white py-2 px-4 flex justify-center items-center relative">
          <span className="text-sm">
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

      <nav className="w-full px-6 py-4 flex justify-between items-center border-b bg-white">
        <div className="flex items-center space-x-2">
          <div className=" text-white px-3 py-1 rounded">
            <Image
              src="/images/logo.webp"
              alt="Leadmarkt logo"
              width={100}
              height={30}
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {["Home", "Benefits", "Features", "About"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <Button className="bg-teal-700 hover:bg-teal-800 text-white px-6">
          Join Waitlist
        </Button>
      </nav>
    </div>
  );
};

export default Nav;
