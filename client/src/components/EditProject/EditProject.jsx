import React from "react";
import { useState, useEffect } from "react";
import ProjectForm from "../ProjectForm/ProjectForm";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditProject = ({ base_url, currentUser, handleshowform, showform }) => {
  const [data, setData] = useState();
  const { projectId } = useParams();

  console.log(projectId);
  console.log(`${base_url}/projects/project/${projectId}`);

  useEffect(() => {
    try {
      const getData = async () => {
        const result = await axios.get(
          `${base_url}/projects/project/${projectId}`
        );
        setData(result.data);
        handleshowform();
        console.log(result);
      };
      getData();
    } catch (e) {
      console.log(e);
    }
  }, [projectId]);

  if (!data) {
    return <div>{console.log("loading")} Loading...</div>;
  }

  return (
    <div>
      <ProjectForm
        base_url={base_url}
        currentUser={currentUser}
        showform={showform}
        handleshowform={handleshowform}
        formtype="update"
        data={data}
      />
    </div>
  );
};

export default EditProject;
