import React from "react";
import { useState, useEffect } from "react";
import ProjectForm from "../ProjectForm/ProjectForm";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditProject = ({ base_url, currentUser, handleshowform, showform }) => {
  const [data, setData] = useState();
  const { projectId } = useParams();
  const { userId } = useParams();

  useEffect(() => {
    try {
      const getData = async () => {
        const result = await axios.get(
          `${base_url}/projects/project/${projectId}`
        );
        setData(result.data);
        handleshowform();
      };
      getData();
    } catch (e) {
      console.log(e);
    }
  }, [projectId]);

  if (!data) {
    return <div> Loading...</div>;
  }

  return (
    <div>
      <ProjectForm
        base_url={base_url}
        showform={showform}
        handleshowform={handleshowform}
        formtype="update"
        data={data}
        userId={userId}
      />
    </div>
  );
};

export default EditProject;
