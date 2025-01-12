"use client";

import { MoreVertical } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
  Tooltip
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
  { name: "Nov", value: 50 }
];

// Custom Tooltip Component
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#FF8C82] text-white px-3 py-1 rounded-md text-sm">
        {payload[0].value}K
      </div>
    );
  }
  return null;
};

export function Campaign() {
  return (
    <Card className="w-full max-w-3xl p-6 bg-white rounded-3xl shadow-sm">
      <CardHeader className="px-0">
        <div className="mb-6 flex items-center gap-2 rounded-lg border border-[#E1E5E7] w-fit px-3 py-2">
          <MegaPhoneIcon className="text-[#4C5C75]" />
          <p className="text-[#4C5C75] text-sm font-medium">CAMPAIGNS</p>
        </div>
        <CardTitle className="text-4xl font-medium mb-4">
          Smart Email Campaigns
        </CardTitle>
        <CardDescription className="text-[#4C5C75] text-md">
          Easily create, schedule, and track personalized email campaigns NS
          Automate follow-ups to nurture leads.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-[#030229] text-lg font-semibold">Audience</h3>
          <button className="text-gray-600 hover:bg-gray-100 p-2 rounded-full">
            <MoreVertical size={20} />
          </button>
        </div>
        
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 0,
                bottom: 20
              }}
              barSize={30}
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
                tick={{ fill: '#64748B', fontSize: 12 }}
                padding={{ left: 10, right: 10 }}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: 'transparent' }}
              />
              <Bar
                dataKey="value"
                fill="#FFE7E5"
                radius={[4, 4, 4, 4]}
                shape={(props: any) => {
                  const fill = props.payload.active ? '#FF8C82' : '#FFE7E5';
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