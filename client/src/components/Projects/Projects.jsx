import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import edit from "../../assets/icons/edit.png";
import "./Projects.scss";
import AddProject from "../AddProject/AddProject";
import ProjectForm from "../ProjectForm/ProjectForm";
import EditProject from "../EditProject/EditProject";

const Projects = ({
  base_url,
  currentUser,
  setCurrentProject,
  currentProject,
  theme,
  showform,
  handleshowform,

  setTheme,
}) => {
  const [projects, setprojects] = useState([]);
  const [editId, setEditId] = useState([]);

  console.log("userid: ", currentUser.id);
  const navigate = useNavigate();

  const selectTheme = (theme) => {
    console.log("theme", theme);
    if (theme == 1) {
      return "projects__theme-one";
    } else if (theme == 2) {
      return "projects__theme-two";
    } else if (theme == 3) {
      return "projects__theme-three";
    } else if (theme == 4) {
      return "projects__theme-four";
    } else if (theme == 5) {
      return "projects__theme-five";
    }
  };

  useEffect(() => {
    const getProjects = async () => {
      const result = await axios.get(`${base_url}/projects/${currentUser.id}`);
      console.log(result.data);
      setprojects(result.data);
    };

    getProjects();
  }, [currentUser.id]);

  const getDate = (date) => {
    const newdate = new Date(date);
    const day = newdate.getDate();
    const month = newdate.getMonth() + 1;
    const year = newdate.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const handleCardClick = (project) => {
    setCurrentProject(project);
    setTheme(project.theme);
    navigate("/taskboard");
  };

  const handleUpdate = (id) => {
    setEditId(id);
    handleshowform();
  };
  return (
    <div className="projects">
      {projects.length !== 0 && (
        <ul className="projects__list">
          {projects.map((project) => (
            <li
              className={selectTheme(project.theme)}
              onDoubleClick={() => {
                handleCardClick(project);
              }}
              key={project.project_id}
            >
              <section className="projects__header">
                <h2 className="projects__heading">
                  {project.project_title.toUpperCase()}
                </h2>
                <p className="projects__due">
                  Due: {getDate(project.due_date)}
                </p>
              </section>
              <section className="projects__footer">
                <p className="projects__status">{project.status}</p>
                <Link
                  to={`/${project.id}/edit`}
                  className="projects__edit-container"
                  // onClick={() => handleUpdate(project.id)}
                >
                  <img src={edit} alt="edit icon" className="projects__edit" />
                </Link>

                {/* <EditProject
                  base_url={base_url}
                  currentUser={currentUser}
                  showform={showform}
                  projectId={project.id}
                  handleshowform={handleshowform}
                /> */}
              </section>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Projects;
