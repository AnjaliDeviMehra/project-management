import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardForm } from "../CardForm/CardForm";

export const EditTask = ({
  base_url,
  currentUser,
  handleshowform,
  currentProject,
  showform,
}) => {
  const { taskId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      try {
        const response = await axios.get(`${base_url}/tasks/${taskId}`);
        setData(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    getTask();
  }, []);
  return (
    <div>
      {data.length !== 0 && (
        <CardForm
          base_url={base_url}
          currentUser={currentUser}
          currentProject={currentProject}
          showform={showform}
          handleshowform={handleshowform}
          formtype="update"
          data={data[0]}
        />
      )}
    </div>
  );
};
