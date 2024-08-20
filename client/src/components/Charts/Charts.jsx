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

export const Charts = ({ base_url, currentUser }) => {
  const [data, setData] = useState();

  useEffect(() => {
    try {
      const taskData = async () => {
        const result = await axios.get(
          `${base_url}/tasks/tasks/${currentUser.id}`
        );

        setData(result.data);
      };
      taskData();
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <div className="chart">
      {data && (
        <BarChart width={400} height={300} data={data}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="status" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#eb34e5" />
        </BarChart>
      )}
    </div>
  );
};
