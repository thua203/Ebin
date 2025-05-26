import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart
} from "recharts";

export default function HistoryCard({areaData, dailyData, monthlyData}) {
  const [activeLink, setActiveLink] = useState("monthly");

  const handleClick = (link) => {
    setActiveLink(link);
  };


  const currentData =
    activeLink === "area" ? areaData : activeLink === "daily" ? dailyData : monthlyData;

  return (
    <div className="w-[96%] h-full flex flex-col bg-white rounded-xl !p-6  font-dmsans">
      <div className="text-primaryButton w-full h-[50px] flex justify-between items-center">
        <span className="font-bold text-[1.2rem]">Classification History</span>
        <div className="flex !mr-4">
          <ul className="flex gap-4 text-sm font-medium">
            {["area", "daily", "monthly"].map((item) => (
              <li
                key={item}
                className={`cursor-pointer !px-4 !py-2 border-b-2 transition-all ${
                  activeLink === item
                    ? "activeHeader"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => handleClick(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={currentData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366F1" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#6366F1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value1"
              stroke="#6366F1"
              fill="#e8e9fe"
              strokeWidth={3}
              dot={{ stroke: "#000", strokeWidth: 2, r: 4, fill: "white" }}
            />
            <Area
              type="monotone"
              dataKey="value2"
              stroke="#3B82F6"
              fill="#cee2fd"
              strokeWidth={3}
              dot={{ stroke: "#000", strokeWidth: 2, r: 4, fill: "white" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}