"use client";
import React from "react";
import Image from "next/image";
import { RouteIcon } from "@/app/_global-components/icons";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";

const AutomateTab = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-16 py-8 sm:py-10 lg:py-12 bg-[#FFFFFF] rounded-2xl">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-10">
        <div className="flex flex-col space-y-4 sm:space-y-5 lg:space-y-6 w-full lg:w-[45%] max-w-xl">
          <div className="w-12 sm:w-14 lg:w-16">
            <RouteIcon className="w-full h-auto" />
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#1A1A1A] leading-tight">
            <TextAnimate animation="slideUp" by="word">
              Automate Task, Save Time.
            </TextAnimate>
          </h1>

          <p className="text-[#4C5C75] text-sm sm:text-base lg:text-lg font-medium">
            <TextAnimate animation="fadeIn" by="line" delay={2}>
              {`Simplify workflows with automated emails, follow-ups, and campaign \n\n triggers—so you can focus on growth while we handle the rest.`}
            </TextAnimate>
          </p>

          <div className="pt-2 sm:pt-3 lg:pt-4">
            <Button className="bg-[#F0F0F0] hover:bg-[#006E75] hover:text-[#F0F0F0] text-[#006E75] px-6 sm:px-7 lg:px-8 py-5 sm:py-6 rounded-md text-sm sm:text-base transition-colors duration-200 flex items-center gap-2">
              Notify Me
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>

        <div className="w-full sm:w-4/5 lg:w-[55%] mt-6 lg:mt-0">
          <div className="relative w-full sm:w-[50%] aspect-square sm:aspect-[4/3] lg:aspect-square">
            <Image
              src="/images/automate.webp"
              alt="automation Image"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomateTab;
