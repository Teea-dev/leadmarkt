"use client";
import { useState, useEffect } from "react";
import { MoreVertical } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MegaPhoneIcon } from "@/app/_global-components/icons";

const data = [
  { name: "Jan", value: 65 },
  { name: "Feb", value: 85, active: true },
  { name: "Mar", value: 45 },
  { name: "Apr", value: 55 },
  { name: "May", value: 65 },
  { name: "Jun", value: 75 },
  { name: "Jul", value: 60 },
  { name: "Aug", value: 70 },
  { name: "Sep", value: 55 },
  { name: "Oct", value: 45 },
  { name: "Nov", value: 50 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#FF8C82] text-white px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm">
        {payload[0].value}K
      </div>
    );
  }
  return null;
};

export function Campaign() {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  return (
    <Card className="w-full h-full p-4 sm:p-5 lg:p-6 bg-white rounded-2xl sm:rounded-3xl shadow-sm">
      <CardHeader className="p-0 space-y-4 sm:space-y-5 lg:space-y-6">
        <div className="flex items-center gap-1.5 sm:gap-2 rounded-lg border border-[#E1E5E7] w-fit px-2.5 sm:px-3 py-1.5 sm:py-2">
          <MegaPhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#4C5C75]" />
          <p className="text-[#4C5C75] text-xs sm:text-sm font-medium">
            CAMPAIGNS
          </p>
        </div>

        <div className="space-y-2 sm:space-y-3 lg:space-y-4">
          <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-medium">
            Smart Email Campaigns
          </CardTitle>
          <CardDescription className="text-[#4C5C75] text-sm sm:text-base">
            Easily create, schedule, and track personalized email campaigns NS
            Automate follow-ups to nurture leads.
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="p-0 mt-6 sm:mt-8">
        <div className="flex justify-between items-center mb-4 sm:mb-6 lg:mb-8">
          <h3 className="text-[#030229] text-base sm:text-lg font-semibold">
            Audience
          </h3>
          <button className="text-gray-600 hover:bg-gray-100 p-1.5 sm:p-2 rounded-full transition-colors">
            <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        <div className="w-full h-[200px] sm:h-[250px] lg:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 20,
                left: -20,
                bottom: 20,
              }}
              barSize={windowWidth < 640 ? 20 : 30}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#F5F5F5"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#64748B",
                  fontSize: windowWidth < 640 ? 10 : 12,
                }}
                padding={{ left: 10, right: 10 }}
                interval={windowWidth < 640 ? 1 : 0}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "transparent" }}
                wrapperStyle={{ outline: "none" }}
              />
              <Bar
                dataKey="value"
                fill="#FFE7E5"
                radius={[4, 4, 4, 4]}
                shape={(props: any) => {
                  const fill = props.payload.active ? "#FF8C82" : "#FFE7E5";
                  return <rect {...props} fill={fill} />;
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
