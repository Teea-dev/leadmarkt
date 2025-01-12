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
      <div className="bg-[#02033B] text-white p-3 rounded-lg shadow-lg">
        <p className="text-sm">Sales</p>
        <p className="text-lg font-semibold">
          {payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export function Component() {
  return (
    <Card className="w-full max-w-3xl p-6 bg-white rounded-3xl shadow-sm">
      <CardHeader className="px-0">
      <div className="mb-6 flex items-center gap-2 rounded-lg border border-[#E1E5E7] w-fit px-3 py-2">
      <ChartPieIcon />
          <p className="text-[#4C5C75] text-sm font-medium">ANALYSIS</p>
        </div>
        <CardTitle className="text-4xl font-medium mb-4">
          Real-Time Analytics
        </CardTitle>
        <CardDescription className="text-[#4C5C75] text-md">
          Access live data on your website, campaigns, and traffic to better
          understand your audience.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <h3 className="text-[#030229] text-lg font-semibold mb-8">Reports</h3>

        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 0,
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
                tick={{ fill: "#64748B", fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} cursor={false} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="url(#colorGradient)"
                strokeWidth={3}
                dot={false}
                activeDot={{
                  r: 6,
                  fill: "#fff",
                  stroke: "#0EA5E9",
                  strokeWidth: 3,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
