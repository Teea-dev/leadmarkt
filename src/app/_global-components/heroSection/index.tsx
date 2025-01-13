"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BoltIcon } from "../icons";
import AvatarCircles from "@/components/ui/avatar-circles";

const Hero = () => {
  return (
    <div className="w-full px-6 md:px-16 py-12 md:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col space-y-6 max-w-xl gap-2">
          <div className="inline-flex items-center px-4 py-2 gap-2 rounded-md bg-[#C3EEE499] w-fit">
            <BoltIcon width={20} height={20} />
            <p className="text-[#4C5C75] text-sm font-medium">
              For businesses ready to scale faster
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl font-medium text-[#1A1A1A] leading-tight">
            Reliable Marketing
            <br />
            Tool for Conversion
          </h1>

          <p className="text-[#4C5C75] text-lg font-medium">
            Automated marketing solutions to capture leads
            <br />
            and drive growth.
          </p>

          <div className="space-y-4 gap-5 flex flex-col ">
            <Button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-6 rounded-md text-base w-fit">
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

            <div className="flex items-center gap-3">
              {/* <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"
                  >
                  </div>
                ))}
              </div> */}
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
              <p className="text-base text-[#4C5C75]">
                Join 1,500+ team on the waitlist
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[45%] ">
          <Image
            src="/images/heroImg.webp"
            alt="Dashboard"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
