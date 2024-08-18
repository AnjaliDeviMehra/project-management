import React from "react";
import { useEffect } from "react";
import axios from "axios";

const OverView = ({ base_url, currentUser }) => {
  useEffect(() => {
    try {
      const getOverview = async () => {
        const response = await axios.get(`${base_url}/users/${currentUser.id}`);
        console.log(response);
      };
    } catch (e) {}
  });
  return <div>OverView</div>;
};

export default OverView;
