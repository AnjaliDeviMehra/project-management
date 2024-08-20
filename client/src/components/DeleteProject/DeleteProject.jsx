import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export const DeleteProject = ({ base_url }) => {
  const { projectId } = useParams();
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteProject = async () => {
      try {
        const response = await axios.delete(
          `${base_url}/projects/project/${projectId}`
        );
        navigate(`/projects/${userId}`);
      } catch (e) {
        console.log(e);
      }
    };

    deleteProject();
  }, []);

  return <div>Deleating....</div>;
};
