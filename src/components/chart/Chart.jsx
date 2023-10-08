import React from "react";
import "../chart/chart.css";

import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function Chart({ title, data, datakey, grid }) {
  // function Chart() {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={datakey} stroke="#5550bd" />{" "}
          {/* the active user and name is from data above */}
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
          {/* Cartesian is for grid  and stokedash helps to make dashed*/}
          <legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
// export default Chart;
