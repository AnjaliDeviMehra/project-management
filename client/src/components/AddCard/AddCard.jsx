import React from "react";
import "./AddCard.scss";
import { CardForm } from "../../components/CardForm/CardForm";

export const AddCard = ({
  base_url,
  currentUser,
  showform,
  currentProject,
  handleshowform,
}) => {
  return (
    <div>
      <CardForm
        base_url={base_url}
        currentUser={currentUser}
        currentProject={currentProject}
        showform={showform}
        handleshowform={handleshowform}
        formtype="add"
        data=""
      />
    </div>
  );
};
