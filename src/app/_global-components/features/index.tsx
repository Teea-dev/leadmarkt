"use client ";
import { StarIcon } from "../icons";
import React from "react";
import { Component } from "./_local-components/line-chart";
import { Campaign } from "./_local-components/campaign";

const Features = () => {
  return (
    <div className="w-full px-6 md:px-16 py-12 md:py-20 bg-[#F5F5F5] flex items-center flex-col">
      <div className="flex items-center border-l-[#E1E5E7] w-fit rounded-lg px-3 py-2 gap-2  bg-[#FFFFFF]">
        <StarIcon />
        <p className="text-[#4C5C75] text-sm font-medium">KEY FEATURES</p>
      </div>
      <div className="mt-6 flex flex-col items-center gap-6">
        <h2 className="text-5xl md:text-5xl font-medium text-[#000F1F] leading-tight text-center">
          Powerful Features to Grow <br /> Your Business.
        </h2>
        <p className="text-[#4C5C75] text-lg  font-[400]">
          We offers smart tools to capture leads, streamline marketing, and
          drive conversions effortlessly.
        </p>
      </div>
      <div className="items-center flex gap-10 mt-20">
        <Component />
        <Campaign />
      </div>
    </div>
  );
};

export default Features;
