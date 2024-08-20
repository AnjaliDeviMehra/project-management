import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import edit from "../../assets/icons/edit.png";
import deleteicon from "../../assets/icons/delete.png";

import "./Projects.scss";

const Projects = ({
  base_url,
  currentUser,
  setCurrentProject,
  currentProject,

  setTheme,
}) => {
  const [projects, setprojects] = useState([]);
  const [editId, setEditId] = useState([]);
  const { userId } = useParams();

  const navigate = useNavigate();

  const selectTheme = (theme) => {
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
      const result = await axios.get(`${base_url}/projects/${userId}`);

      setprojects(result.data);
    };

    getProjects();
  }, [userId]);

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
    navigate(`/${userId}/${project.id}/tasks`);
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
                <Link to={`/edit/${userId}/${project.id}`}>
                  <img src={edit} alt="edit icon" className="projects__icon" />
                </Link>
                <Link to={`/delete/${userId}/${project.id}`}>
                  <img
                    src={deleteicon}
                    alt="edit icon"
                    className="projects__icon"
                  />
                </Link>
              </section>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Projects;
