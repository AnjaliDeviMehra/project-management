import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export const DeleteCard = ({ base_url }) => {
  const { taskId } = useParams();
  const { userId } = useParams();
  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteCard = async () => {
      try {
        const response = await axios.delete(`${base_url}/tasks/${taskId}`);
        navigate(`/${userId}/${projectId}/tasks`);
        window.location.reload();
      } catch (e) {
        console.log(e);
      }
    };

    deleteCard();
  }, []);

  return <div>Deleating....</div>;
};
