"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ChartPieIcon } from "@/components/ui/chart-pie";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  { name: "20", value: 50 },
  { name: "40", value: 55 },
  { name: "60", value: 25 },
  { name: "80", value: 15 },
  { name: "100", value: 35 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#02033B] text-white p-2 sm:p-3 rounded-lg shadow-lg">
        <p className="text-xs sm:text-sm">Sales</p>
        <p className="text-base sm:text-lg font-semibold">
          {payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export function Component() {
  return (
    <Card className="w-full h-full p-4 sm:p-5 lg:p-6 bg-white rounded-2xl sm:rounded-3xl shadow-sm">
      <CardHeader className="p-0 space-y-4 sm:space-y-5 lg:space-y-6">
        <div className="flex items-center gap-1.5 sm:gap-2 rounded-lg border border-[#E1E5E7] w-fit px-2.5 sm:px-3 py-1.5 sm:py-2">
          <ChartPieIcon  />
          <p className="text-[#4C5C75] text-xs sm:text-sm font-medium">
            ANALYSIS
          </p>
        </div>
        
        <div className="space-y-2 sm:space-y-3 lg:space-y-4">
          <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-medium">
            Real-Time Analytics
          </CardTitle>
          <CardDescription className="text-[#4C5C75] text-sm sm:text-base">
            Access live data on your website, campaigns, and traffic to better
            understand your audience.
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="p-0 mt-6 sm:mt-8">
        <h3 className="text-[#030229] text-base sm:text-lg font-semibold mb-4 sm:mb-6 lg:mb-8">
          Reports
        </h3>

        <div className="w-full h-[200px] sm:h-[250px] lg:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 20,
                right: 20,
                left: -20,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0EA5E9" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#22C55E" stopOpacity={0.8} />
                </linearGradient>
              </defs>
              <CartesianGrid
                stroke="#EEF0F3"
                vertical={false}
                strokeDasharray="3 3"
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ 
                  fill: "#64748B", 
                  // fontSize: window.innerWidth < 640 ? 10 : 12 
                }}
               
              />
              <Tooltip 
                content={<CustomTooltip />} 
                cursor={false}
                wrapperStyle={{ outline: 'none' }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="url(#colorGradient)"
                strokeWidth={2}
                dot={false}
                activeDot={{
                  r: window.innerWidth < 640 ? 4 : 6,
                  fill: "#fff",
                  stroke: "#0EA5E9",
                  strokeWidth: 2,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}