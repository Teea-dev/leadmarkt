"use client";
import React from "react";
import Image from "next/image";
import { RouteIcon } from "@/app/_global-components/icons";
import { Button } from "@/components/ui/button";

const AutomateTab = () => {
  return (
    <div className="w-full px-6 md:px-16 py-12 md:py-10 bg-[#FFFFFF] rounded-[24px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col space-y-6 gap-6 max-w-xl">
          <RouteIcon />
          <h1 className="text-xl md:text-4xl md:font-medium text-[#1A1A1A] leading-tight">
            Automate Task, Save Time.
          </h1>

          <p className="text-[#4C5C75] text-sm  font-medium">
            Simplify workflows with automated emails, follow-ups, and campaign
            triggers—so you can focus on growth while we handle the rest.
          </p>

          <div className="space-y-4">
            <Button className="bg-[#F0F0F0] hover:bg-[#006E75] hover:text-[#F0F0F0] text-[#006E75] px-8 py-6 rounded-md text-base">
              Notify Me →
            </Button>
          </div>
        </div>

        <div className="w-full md:w-[90%] ">
          <Image
            src="/images/automate.webp"
            alt="automateion Image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default AutomateTab;