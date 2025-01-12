"use client ";
import { StarIcon } from "../icons";
import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AutomateTab from "./_local-components/automate";

const Tab = () => {
  return (
    <div className="w-full px-6 md:px-16 py-12 md:py-20 bg-[#F5F5F5] flex items-center flex-col">
      <div className="flex items-center border-l-[#E1E5E7] w-fit rounded-lg px-3 py-2 gap-2  bg-[#FFFFFF]">
        <StarIcon />
        <p className="text-[#4C5C75] text-sm font-medium">WHY CHOOSE US</p>
      </div>
      <div className="mt-6">
        <h2 className="text-5xl md:text-6xl font-medium text-[#000F1F] leading-tight text-center">
          Everything you need for <br /> success on a platform
        </h2>
      </div>
      <div className="items-center flex">
        <Tabs defaultValue="automate" className=" items-center flex flex-col  mt-10">
          <TabsList
            className=" p-2 bg-[#E3E7EA] rounded-[100px]  h-[70px]  text-[#000F1F] font-medium
text-lg"
          >
            <TabsTrigger
              className=" rounded-[100px] py-4 px-7"
              value="automate"
            >
              Automate Marketing
            </TabsTrigger>
            <TabsTrigger
              className=" rounded-[100px] py-4 px-7"
              value="conversions"
            >
              Increase Conversions
            </TabsTrigger>
            <TabsTrigger className=" rounded-[100px] py-4 px-7" value="manage">
              Manage Lead
            </TabsTrigger>
            <TabsTrigger className=" rounded-[100px] py-4 px-7" value="scale">
              Scale Your Business
            </TabsTrigger>
          </TabsList>
          <TabsContent className="mt-16" value="automate">
            <AutomateTab />
          </TabsContent>
          <TabsContent value="conversions">Benefits</TabsContent>
          <TabsContent value="manage">Testimonials</TabsContent>
          <TabsContent value="scale">Testimonials</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Tab;
