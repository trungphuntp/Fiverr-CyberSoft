import { Tooltip } from "antd";
import React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
const dataChart = [
  { name: "January", uv: 900 },
  { name: "February", uv: 500 },
  { name: "March", uv: 400 },
  { name: "April", uv: 500 },
  { name: "May", uv: 600 },
  { name: "June", uv: 200 },
  { name: "July", uv: 400 },
  { name: "August", uv: 200 },
  { name: "September", uv: 500 },
  { name: "October", uv: 600 },
  { name: "November", uv: 1000 },
  { name: "December", uv: 1200 },
];
const LineChartComponent = ({ ...rest }) => {
  return (
    <LineChart
      width={800}
      height={500}
      data={dataChart}
      style={{ width: "100%" }}
      {...rest}
    >
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="uv"
        stroke="#F7B924"
        strokeWidth={3}
        dot={{ r: 4, stroke: "#ff7300", strokeWidth: 2, fill: "#fff" }}
        activeDot={{ r: 6 }}
      />
    </LineChart>
  );
};

export default LineChartComponent;
