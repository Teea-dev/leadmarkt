"use client";
import { StarIcon } from "../icons";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AutomateTab from "./_local-components/automate";
import ConvertionsTab from "./_local-components/conversions";
import ManageTab from "./_local-components/manage";
import ToolsTab from "./_local-components/tools";
import { TextAnimate } from "@/components/ui/text-animate";

const Tab = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-32 py-8 sm:py-12 lg:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex items-center border border-l-[#E1E5E7] w-fit rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 gap-1.5 sm:gap-2 bg-[#FFFFFF]">
          <StarIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          <p className="text-[#4C5C75] text-xs sm:text-sm font-medium">
            WHY CHOOSE US
          </p>
        </div>

        <div className="mt-4 sm:mt-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#000F1F] leading-tight text-center max-w-4xl">
            <TextAnimate animation="slideUp" by="word">
              Everything you need for success on a platform
            </TextAnimate>
          </h2>
        </div>

        <div className="w-full mt-6 sm:mt-10 justify-center flex ">
          <Tabs defaultValue="automate" className="flex flex-col items-center">
            <div className="w-full overflow-x-auto px-4 sm:px-0">
              <TabsList className="p-1.5 sm:p-2 bg-[#E3E7EA] rounded-full min-h-[50px] sm:h-[60px] lg:h-[70px] text-[#000F1F] font-medium whitespace-nowrap mb-2 sm:mb-0">
                <TabsTrigger
                  className="rounded-full py-2 sm:py-3 lg:py-4 px-4 sm:px-5 lg:px-7 text-sm sm:text-base lg:text-lg transition-all duration-200"
                  value="automate"
                >
                  Automate Marketing
                </TabsTrigger>
                <TabsTrigger
                  className="rounded-full py-2 sm:py-3 lg:py-4 px-4 sm:px-5 lg:px-7 text-sm sm:text-base lg:text-lg transition-all duration-200"
                  value="conversions"
                >
                  Increase Conversions
                </TabsTrigger>
                <TabsTrigger
                  className="rounded-full py-2 sm:py-3 lg:py-4 px-4 sm:px-5 lg:px-7 text-sm sm:text-base lg:text-lg transition-all duration-200"
                  value="manage"
                >
                  Manage Lead
                </TabsTrigger>
                <TabsTrigger
                  className="rounded-full py-2 sm:py-3 lg:py-4 px-4 sm:px-5 lg:px-7 text-sm sm:text-base lg:text-lg transition-all duration-200"
                  value="scale"
                >
                  Scale Your Business
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="w-full mt-8 sm:mt-12 lg:mt-16 px-4 sm:px-0">
              <TabsContent value="automate">
                <AutomateTab />
              </TabsContent>
              <TabsContent value="conversions">
                <ConvertionsTab />
              </TabsContent>
              <TabsContent value="manage">
                <ManageTab />
              </TabsContent>
              <TabsContent value="scale">
                <ToolsTab />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Tab;
