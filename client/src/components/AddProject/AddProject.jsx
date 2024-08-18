import React from "react";
import { useState } from "react";
import axios from "axios";
import { Theme } from "../Theme/Theme";
import { useNavigate } from "react-router-dom";
import ProjectForm from "../ProjectForm/ProjectForm";

const AddProject = ({
  base_url,
  currentUser,
  showform,
  setShowForm,
  handleshowform,
}) => {
  return (
    <div>
      <ProjectForm
        base_url={base_url}
        currentUser={currentUser}
        showform={showform}
        handleshowform={handleshowform}
        formtype="add"
        data=""
      />
    </div>
  );
};

export default AddProject;
