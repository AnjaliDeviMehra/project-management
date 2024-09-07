import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Charts.scss";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

export const Charts = ({ base_url }) => {
  const [data, setData] = useState();

  useEffect(() => {
    try {
      const taskData = async () => {
        const result = await axios.get(`${base_url}/tasks/`);
        console.log(result.data);
        setData(result.data);
      };
      taskData();
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <div className="chart">
      <h3>Activity</h3>
      {data && (
        <BarChart width={400} height={300} data={data}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="status" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      )}
    </div>
  );
};
