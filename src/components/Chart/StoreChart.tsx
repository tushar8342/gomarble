import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { data } from "../../context/index";
import { ChartTooltip } from "../DashboardDetail/ChartTooltip";
import { CustomYAxisTick } from "../DashboardDetail/CustomYAxisTick";
import { CustomLegend } from "../DashboardDetail/CutstomLegend";
import CustomDatePicker from "../DashboardDetail/CustomDatePicker";
import { DataItem } from "../../interfaces";

const StoreChart: React.FC = () => {
  const initialData: DataItem[] = [...data].sort((a: DataItem, b: DataItem) => {
    const [aMonth, aYear] = a.date.split(" ");
    const [bMonth, bYear] = b.date.split(" ");
    // console.log("amo")
    const aDate = new Date(`${aYear} ${aMonth}`);
    const bDate = new Date(`${bYear} ${bMonth}`);
    return aDate.getTime() - bDate.getTime();
  });
  const [selectedData, setSelectedData] = useState<DataItem[]>(initialData);

  const handleDateRangeChange = (startDate: string, endDate: string) => {
    // console.log("startDate+++++++++++++", startDate);
    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0);
    const end = new Date(endDate);
    end.setHours(23, 59, 59, 999);
    const filteredData = initialData.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= start && itemDate <= end;
    });
    // console.log("filteredData", filteredData);
    setSelectedData(filteredData);
  };

  const defaultStartDate = initialData[0]?.date;
  const defaultEndDate = initialData[initialData.length - 1]?.date;

  return (
    <div>
      <ResponsiveContainer height={400}>
        <LineChart
          height={400}
          data={selectedData}
          margin={{
            top: 20,
            right: 40,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 0" vertical={false} />
          <XAxis
            dataKey="date"
            tickCount={selectedData?.length ?? 0}
            tick={{
              stroke: "#676767",
              strokeWidth: 0.4,
              fontSize: ".9rem",
            }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tick={<CustomYAxisTick />}
            interval="preserveStartEnd"
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            content={
              <ChartTooltip
                data={selectedData}
                colors={{
                  stroke: "rgb(54, 162, 235)",
                  fill: "rgba(54, 162, 235, 0.2)",
                }}
              />
            }
            wrapperStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              border: "0 solid #000",
              borderRadius: "10px",
            }}
          />
          <Legend content={<CustomLegend data={selectedData} />} />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#489AD2"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#6FC2F3"
            strokeDasharray="3 4 5 2"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
      <CustomDatePicker
        onDateRangeChange={handleDateRangeChange}
        defaultStartDate={defaultStartDate}
        defaultEndDate={defaultEndDate}
      />
    </div>
  );
};

export default StoreChart;
