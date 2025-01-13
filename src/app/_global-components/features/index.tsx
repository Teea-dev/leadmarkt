import React from "react";
import { StarIcon } from "../icons";
import { Component } from "./_local-components/line-chart";
import { Campaign } from "./_local-components/campaign";
import Connect from "./_local-components/connect";

const Features = () => {
  return (
    <section className="w-full py-16 px-32 bg-[#F4F4F4]">
    
      <div className=" flex items-center flex-col gap-6 text-center mb-16">
      <div className="flex items-center border border-l-[#E1E5E7] w-fit rounded-lg px-3 py-2 gap-2  bg-[#FFFFFF]">
          <StarIcon className="w-5 h-5" />
          <span className="text-sm font-medium">KEY FEATURES</span>
        </div>
        <h2 className="text-5xl font-medium">
          Powerful Features to Grow <br/>Your Business
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We offer smart tools to capture leads, streamline marketing, and drive
          conversions effortlessly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-6">
        <div>
          <Component />
        </div>

        <div>
          <Campaign />
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm max-w-6xl mx-auto">
        <Connect />
      </div>
    </section>
  );
};

export default Features;
