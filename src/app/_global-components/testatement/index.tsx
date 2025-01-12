"use client";
import React from "react";
import Image from "next/image";

import { MegaPhoneIcon } from "@/app/_global-components/icons";
const Testatement = () => {
  return (
    <div className="w-full px-6 md:px-16  md:py-20 bg-[#F5F5F5] ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="w-full md:w-[90%] ">
          <Image
            src="/images/CEO.webp"
            alt="automation Image"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col space-y-6 gap-4 max-w-xl">
          <div className="mb-6 flex items-center gap-2 rounded-lg border border-[#E1E5E7] w-fit px-3 py-2">
            <MegaPhoneIcon className="text-[#4C5C75] " />
            <p className="text-[#4C5C75] text-sm font-medium">FOUNDER WORDS</p>
          </div>
          <h1 className="text-xl md:text-4xl md:font-normal text-[#1A1A1A] leading-tight">
            “ I can’t express how excited I am to share Leadmarkt with you. We
            built it to make marketing simple, effective, and scalable—so
            businesses can focus on what they do best. It’s been a game-changer
            for us, and I believe it can be for you too.
          </h1>
<hr />
          <div className="space-y-4">
            <h2>Darrell Steward</h2>
            <p className="text-[#4C5C75] text-sm  font-medium">
              Founder & CEO , Leadmarkt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testatement;
