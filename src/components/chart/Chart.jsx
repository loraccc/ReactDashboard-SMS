import React from "react";
import "../chart/chart.css";

import { LineChart, Line, XAxis, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    activeUser: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    activeUser: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    activeUser: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    activeUser: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    activeUser: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    activeUser: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    activeUser: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Chart() {
  return (
    <div className="chart">
      <h3 className="chartTitle">Sales Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="activeUser" stroke="#5550bd" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
