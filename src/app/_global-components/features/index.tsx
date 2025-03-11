import React from "react";
import { StarIcon } from "../icons";
import { Component } from "./_local-components/line-chart";
import { Campaign } from "./_local-components/campaign";
import Connect from "./_local-components/connect";

const Features = () => {
  return (
    <section id="features" className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-32 bg-[#F4F4F4]">
      {/* Header Section */}
      <div className="flex items-center flex-col gap-4 sm:gap-6 text-center mb-8 sm:mb-12 lg:mb-16">
        <div className="flex items-center border border-l-[#E1E5E7] w-fit rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 gap-1.5 sm:gap-2 bg-[#FFFFFF]">
          <StarIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm font-medium">KEY FEATURES</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium px-4 sm:px-6">
          <span className="block">Powerful Features to Grow</span>
          <span className="block">Your Business</span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-6">
          We offer smart tools to capture leads, streamline marketing, and drive
          conversions effortlessly.
        </p>
      </div>


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div className="w-full h-full">
            <Component />
          </div>
          <div className="w-full h-full">
            <Campaign />
          </div>
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
          <Connect />
        </div>
      </div>
    </section>
  );
};

export default Features;