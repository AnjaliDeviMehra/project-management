import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Projects.scss";

const Projects = ({
  base_url,
  currentUser,
  setCurrentProject,
  currentProject,
}) => {
  const [projects, setprojects] = useState([]);
  console.log("userid: ", currentUser.id);
  const navigate = useNavigate();

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
    navigate("/taskboard");
  };
  return (
    <div className="projects">
      {projects.length !== 0 && (
        <ul className="projects__list">
          {projects.map((project) => (
            <li
              onClick={() => {
                handleCardClick(project);
              }}
              key={project.project_id}
              className="project-card"
            >
              <p className="project-card__title">
                Title : {project.project_title.toUpperCase()}
              </p>
              <p className="project-card__status">Status: {project.status}</p>
              <p className="project-card__date">
                Start Date: {getDate(project.start_date)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Projects;
