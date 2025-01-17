"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BoltIcon } from "../icons";
import AvatarCircles from "@/components/ui/avatar-circles";
import { TextAnimate } from "@/components/ui/text-animate";

const Hero = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-32 py-8 sm:py-12 lg:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
        <div className="flex flex-col space-y-4 sm:space-y-6 w-full lg:w-[55%] max-w-xl">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 gap-2 rounded-md bg-[#C3EEE499] w-fit">
            <BoltIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            <p className="text-[#4C5C75] text-xs sm:text-sm font-medium">
              <TextAnimate animation="blurInUp" by="character">
                For businesses ready to scale faster
              </TextAnimate>
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#1A1A1A] leading-tight">
            <TextAnimate animation="slideUp" by="word">
              Reliable Marketing Tool for Conversion
            </TextAnimate>
          </h1>

          <p className="text-[#4C5C75] text-base sm:text-lg font-medium">
            <TextAnimate animation="fadeIn" by="line" as="p">
              Automated marketing solutions to capture leads and drive growth.
            </TextAnimate>
          </p>

          <div className="flex flex-col space-y-4 sm:space-y-5 pt-2">
            <Button className="bg-teal-700 hover:bg-teal-800 text-white px-6 sm:px-8 py-5 sm:py-6 rounded-md text-sm sm:text-base w-fit transition-colors duration-200">
              Join the waitlist
              <svg
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>

            <div className="flex items-center gap-2 sm:gap-3">
              <AvatarCircles
                avatarUrls={[
                  {
                    imageUrl: "/images/avatar1.webp",
                    profileUrl: "#",
                  },
                  {
                    imageUrl: "/images/avatar2.webp",
                    profileUrl: "#",
                  },
                  {
                    imageUrl: "/images/avatar3.webp",
                    profileUrl: "#",
                  },
                  {
                    imageUrl: "/images/avatar4.webp",
                    profileUrl: "#",
                  },
                ]}
                numPeople={4}
              />
              <p className="text-sm sm:text-base text-[#4C5C75]">
                Join 1,500+ team on the waitlist
              </p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-4/5 lg:w-[45%] mt-8 lg:mt-0">
          <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square">
            <Image
              src="/images/heroImg.webp"
              alt="Dashboard"
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

export default Hero;