import React from "react";
import "../chart/chart.css";

import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  {
    name: "JAN",
    activeUser: 4000,
  },
  {
    name: "JAN",
    activeUser: 4000,
  },
  {
    name: "JAN",
    activeUser: 4000,
  },
  {
    name: "JAN",
    activeUser: 4000,
  },
  {
    name: "JAN",
    activeUser: 3000,
  },
  {
    name: "FEB",
    activeUser: 4100,
  },
  {
    name: "MAR",
    activeUser: 4000,
  },
  {
    name: "APR",
    activeUser: 4000,
  },
  {
    name: "MAY",
    activeUser: 4000,
  },
  {
    name: "JUN",
    activeUser: 3300,
  },
  {
    name: "JUL",
    activeUser: 2200,
  },
  {
    name: "AUG",
    activeUser: 1100,
  },
  {
    name: "SEP",
    activeUser: 1000,
  },
  {
    name: "OCT",
    activeUser: 1300,
  },
  {
    name: "NOV",
    activeUser: 2800,
  },
  {
    name: "DEC",
    activeUser: 2000,
  },
];

function Chart() {
  return (
    <div className="chart">
      <h3 className="chartTitle">Sales Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="activeUser" stroke="#5550bd" />{" "}
          {/* the active user and name is from data above */}
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
